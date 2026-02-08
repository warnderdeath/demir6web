"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { siteContent } from "@/data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative w-40 h-12">
              <Image
                src="/images/11.png"
                alt={siteContent.companyName}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteContent.footer.description}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center cursor-default">
                <FaFacebookF className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center cursor-default">
                <FaTwitter className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center cursor-default">
                <FaLinkedinIn className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center cursor-default">
                <FaInstagram className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {["Ana Sayfa", "Özellikler", "Referanslar", "Hizmetler", "Mobil Uygulama", "İletişim"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-400 hover:text-text-red-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Demir6 Modülü</li>
              <li className="text-gray-400 text-sm">Web Platformu</li>
              <li className="text-gray-400 text-sm">Mail Hizmeti</li>
              <li className="text-gray-400 text-sm">Özel Raporlar</li>
              <li className="text-gray-400 text-sm">Teknik Destek</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteContent.companyName}. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm cursor-default">
                Gizlilik Politikası
              </span>
              <span className="text-gray-400 text-sm cursor-default">
                Kullanım Koşulları
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
