"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sayfa tamamen yüklendiğinde loading ekranını kapat
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 500ms bekle, sonra fade-out başlasın
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#BF0303 1px, transparent 1px), linear-gradient(90deg, #BF0303 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}></div>
          </div>

          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
               style={{ background: 'radial-gradient(circle, #BF0303, transparent)' }}>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Rotating Border */}
              <div className="absolute -inset-4 rounded-3xl opacity-50"
                   style={{
                     background: 'linear-gradient(135deg, #BF0303, #FF4444, #BF0303)',
                     backgroundSize: '200% 200%',
                     animation: 'gradient-rotate 3s ease infinite',
                     filter: 'blur(20px)'
                   }}>
              </div>

              {/* Logo */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
                <div className="relative w-40 h-20" style={{ aspectRatio: '2 / 1' }}>
                  <Image
                    src="/images/11.png"
                    alt="Demir6"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Spinner */}
            <div className="relative w-16 h-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: '#BF0303',
                  borderRightColor: '#FF4444',
                }}
              >
              </motion.div>

              <div className="absolute inset-0 rounded-full opacity-30 blur-xl"
                   style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
              </div>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center space-y-3"
            >
              <p className="text-white text-xl font-semibold tracking-wider">
                Yükleniyor
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </p>

              {/* Progress Bar */}
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, #BF0303, #FF4444, transparent)' }}
                >
                </motion.div>
              </div>
            </motion.div>

            {/* Version Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-8 text-center"
            >
              <p className="text-gray-600 text-xs font-mono">
                Demir6 Web Platform v1.0
              </p>
              <p className="text-gray-700 text-xs mt-1">
                © 2026 Mentalsoft
              </p>
            </motion.div>
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes grid-move {
              0% { transform: translate(0, 0); }
              100% { transform: translate(50px, 50px); }
            }
            @keyframes gradient-rotate {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
