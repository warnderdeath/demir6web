"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiHome, HiArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#BF0303 1px, transparent 1px), linear-gradient(90deg, #BF0303 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 opacity-5"
          style={{
            background: 'linear-gradient(135deg, #BF0303, #FF4444)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
        />

        <motion.div
          animate={{ rotate: -360, y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #FF4444, #BF0303)' }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
             style={{ background: 'radial-gradient(circle, #BF0303, transparent)' }}>
        </div>

        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
             style={{ background: 'radial-gradient(circle, #FF4444, transparent)' }}>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-16 mx-auto">
                <Image
                  src="/images/11.png"
                  alt="Demir6"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl"
                   style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
              </div>

              <h1 className="relative text-[150px] md:text-[200px] font-bold leading-none text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #BF0303 0%, #FF4444 50%, #BF0303 100%)',
                    backgroundSize: '200% auto',
                    WebkitTextStroke: '2px rgba(191, 3, 3, 0.3)'
                  }}>
                404
              </h1>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Sayfa Bulunamadı
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
              Ana sayfaya dönerek devam edebilirsiniz.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Home Button */}
            <Link
              href="/"
              className="group relative px-8 py-4 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all transform hover:-translate-y-1 flex items-center space-x-2 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}
            >
              <HiHome className="w-5 h-5" />
              <span className="relative z-10">Ana Sayfaya Dön</span>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                     animation: 'shine-move 1.5s infinite'
                   }}>
              </div>
            </Link>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 bg-gray-800/60 backdrop-blur-sm text-gray-300 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all border border-gray-700/50 hover:border-red-500/50 flex items-center space-x-2"
            >
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Geri Dön</span>
            </button>
          </motion.div>

          {/* Error Code Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="inline-flex items-center space-x-3 bg-gray-800/40 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
              <div className="w-2 h-2 rounded-full animate-pulse"
                   style={{ backgroundColor: '#BF0303' }}>
              </div>
              <span className="text-sm text-gray-400 font-mono">
                ERROR CODE: 404 - Page Not Found
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <p className="text-gray-500 text-sm mb-4">Hızlı Erişim</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Ana Sayfa", href: "/#home" },
                { name: "Özellikler", href: "/#features" },
                { name: "Referanslar", href: "/#clients" },
                { name: "İletişim", href: "/#contact" }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-4 py-2 bg-gray-800/40 backdrop-blur-sm text-gray-400 rounded-lg text-sm hover:bg-gray-700/40 hover:text-red-400 transition-all border border-gray-700/30 hover:border-red-500/30"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shine-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
