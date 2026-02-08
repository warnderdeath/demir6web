"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import { siteContent } from "@/data/content";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#BF0303 1px, transparent 1px), linear-gradient(90deg, #BF0303 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            background: 'linear-gradient(135deg, #BF0303, #FF4444)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-40 h-40 rounded-full opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            background: 'radial-gradient(circle, #FF4444, #BF0303)'
          }}
        />

        <motion.div
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/4 w-24 h-24 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            background: 'linear-gradient(135deg, #BF0303, #FF4444)',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />

        {/* Gradient Orbs with Parallax */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
             style={{
               transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)`,
               background: 'radial-gradient(circle, #BF0303, transparent)'
             }}>
        </div>

        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
             style={{
               transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.1}px)`,
               background: 'radial-gradient(circle, #FF4444, transparent)'
             }}>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Futuristic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3"
            >
              <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
                <div className="w-2 h-2 rounded-full animate-pulse"
                     style={{ backgroundColor: '#00FF00' }}></div>
                <span className="text-sm font-mono text-gray-300 tracking-wider">
                  ONLINE
                </span>
              </div>
              <div className="h-px w-8 bg-gradient-to-r from-red-500 to-transparent"></div>
              <span className="text-sm text-gray-400">2014'ten beri</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Demir </span>
                <span className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #BF0303 0%, #FF4444 50%, #BF0303 100%)',
                        backgroundSize: '200% auto',
                        animation: 'shine 3s linear infinite'
                      }}>
                  &amp; Çelik
                </span>
                <br />
                <span className="text-white">için </span>
                <span className="relative">
                  <span className="text-white">doğru seçim</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-transparent"></div>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 leading-relaxed"
              >
                {siteContent.hero.subtitle}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-500 leading-relaxed max-w-xl"
            >
              {siteContent.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group relative px-8 py-4 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}
              >
                <span className="relative z-10">{siteContent.hero.cta.primary}</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{
                       background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                       animation: 'shine-move 1.5s infinite'
                     }}>
                </div>
              </Link>

              <Link
                href="#features"
                className="group px-8 py-4 bg-gray-800/60 backdrop-blur-sm text-gray-300 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all border border-gray-700/50 hover:border-red-500/50 flex items-center justify-center space-x-2"
              >
                <HiPlay className="w-5 h-5" />
                <span>{siteContent.hero.cta.secondary}</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "35+", label: "Aktif Müşteri" },
                { value: "12+", label: "Yıllık Tecrübe" },
                { value: "7", label: "İş Günü Kurulum" }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                       style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)', filter: 'blur(8px)' }}>
                  </div>
                  <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text"
                         style={{ backgroundImage: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Futuristic Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Holographic Frame */}
              <div className="absolute -inset-4 rounded-2xl opacity-50"
                   style={{
                     background: 'linear-gradient(45deg, #BF0303, #FF4444, #BF0303)',
                     backgroundSize: '200% 200%',
                     animation: 'gradient-shift 3s ease infinite',
                     filter: 'blur(20px)'
                   }}>
              </div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 p-2"
                style={{ willChange: 'transform' }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-red-500"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-red-500"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-red-500"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-red-500"></div>

                <div style={{ aspectRatio: '4 / 3' }}>
                  <Image
                    src="/images/pnl.png"
                    alt="Demir6 Platform"
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                </div>

                {/* Scan Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scan"></div>
              </motion.div>

              {/* Floating Info Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 top-1/4 hidden lg:block"
                style={{ willChange: 'transform' }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl opacity-75"
                       style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)', filter: 'blur(8px)' }}>
                  </div>
                  <div className="relative bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl p-4 max-w-xs border border-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                           style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                        <span className="text-xl">✓</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Hızlı İşlem</div>
                        <div className="text-xs text-gray-400">%99 Doğruluk oranı</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-1/4 hidden lg:block"
                style={{ willChange: 'transform' }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl opacity-75"
                       style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)', filter: 'blur(8px)' }}>
                  </div>
                  <div className="relative bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl p-4 max-w-xs border border-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                           style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                        <span className="text-xl">🚀</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">7 Gün Kurulum</div>
                        <div className="text-xs text-gray-400">Hızlı başlangıç</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full"
               style={{ backgroundColor: '#BF0303' }}></div>
        </motion.div>
      </motion.div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes shine-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
