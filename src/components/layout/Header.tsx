"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { siteContent } from "@/data/content";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Özellikler", href: "#features" },
    { name: "Referanslar", href: "#clients" },
    { name: "Hizmetler", href: "#services" },
    { name: "Mobil Uygulama", href: "#mobile-app" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-red-500/10 border-gray-800"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-40 h-12">
              <Image
                src="/images/10.png"
                alt={siteContent.companyName}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  isScrolled ? "text-gray-300" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsWhatsappOpen(!isWhatsappOpen)}
                className="px-6 py-2.5 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-0.5 border border-red-500/50 flex items-center space-x-2"
                style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>

              {isWhatsappOpen && (
                <div className="absolute top-full mt-2 right-0 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden z-50 min-w-[200px]">
                  {siteContent.contact.whatsapp.map((contact, index) => (
                    <a
                      key={index}
                      href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}?text=Merhaba, Demir6 hakkında bilgi almak istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsWhatsappOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-red-500/20 transition-colors border-b border-gray-700/50 last:border-b-0"
                    >
                      <FaWhatsapp className="w-4 h-4 text-green-500" />
                      <div className="text-left">
                        <div className="text-sm font-medium text-white">{contact.name}</div>
                        <div className="text-xs text-gray-400">{contact.number}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-300" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800/80 border-t border-gray-700"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-red-600 font-medium transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={() => setIsWhatsappOpen(!isWhatsappOpen)}
                  className="px-6 py-3 text-white rounded-full font-medium text-center transition-all border border-red-500/50 flex items-center justify-center space-x-2 w-full"
                  style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>

                {isWhatsappOpen && (
                  <div className="mt-2 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
                    {siteContent.contact.whatsapp.map((contact, index) => (
                      <a
                        key={index}
                        href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}?text=Merhaba, Demir6 hakkında bilgi almak istiyorum.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setIsWhatsappOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-red-500/20 transition-colors border-b border-gray-700/50 last:border-b-0"
                      >
                        <FaWhatsapp className="w-4 h-4 text-green-500" />
                        <div className="text-left">
                          <div className="text-sm font-medium text-white">{contact.name}</div>
                          <div className="text-xs text-gray-400">{contact.number}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
