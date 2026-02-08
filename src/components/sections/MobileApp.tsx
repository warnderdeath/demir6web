"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { siteContent } from "@/data/content";

const MobileApp = () => {
  return (
    <section id="mobile-app" className="py-20 md:py-32 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pr-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2"
            >
              <div className="w-2 h-2 rounded-full animate-pulse"
                   style={{ backgroundColor: '#BF0303' }}></div>
              <span className="text-sm font-mono text-red-400 tracking-wider uppercase">
                {siteContent.mobileApp.title}
              </span>
              <div className="w-2 h-2 rounded-full animate-pulse"
                   style={{ backgroundColor: '#BF0303' }}></div>
            </motion.div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">{siteContent.mobileApp.subtitle}</span>
              <br />
              <span className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #BF0303 0%, #FF4444 50%, #BF0303 100%)',
                      backgroundSize: '200% auto',
                      animation: 'shine 3s linear infinite'
                    }}>
                Demir6 Mobil
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              {siteContent.mobileApp.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {siteContent.mobileApp.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: 'linear-gradient(135deg, #BF0303, #FF4444)',
                         filter: 'blur(8px)'
                       }}>
                  </div>

                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 h-full">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold text-xs mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-400 leading-tight">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={siteContent.mobileApp.downloadLinks.ios}
                className="group relative px-6 py-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-700/50 hover:border-red-500/50 flex items-center justify-center space-x-3"
              >
                <FaApple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Şimdi İndirin</div>
                  <div className="text-sm">App Store</div>
                </div>
              </Link>

              <Link
                href={siteContent.mobileApp.downloadLinks.android}
                className="group relative px-6 py-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-700/50 hover:border-red-500/50 flex items-center justify-center space-x-3"
              >
                <FaGooglePlay className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Şimdi İndirin</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Multiple Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 flex items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full opacity-50"
                   style={{
                     background: 'linear-gradient(45deg, #BF0303, #FF4444, #BF0303)',
                     backgroundSize: '200% 200%',
                     animation: 'gradient-shift 3s ease infinite',
                     filter: 'blur(60px)'
                   }}>
              </div>

              {/* Phone Containers - Stacked Layout */}
              <div className="relative flex items-center justify-center gap-4">
                {/* Left Phone - m2.png */}
                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 0.85 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  animate={{ y: [0, -15, 0] }}
                  style={{ animationDuration: '4.5s', animationIterationCount: 'infinite' }}
                  className="relative hidden md:block -mr-8 z-0"
                >
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden border-6 border-gray-700 shadow-2xl w-[240px]">
                    <div className="aspect-[9/19] bg-gray-900 relative overflow-hidden">
                      <Image
                        src="/images/mobile-app/m2.png"
                        alt="Demir6 Mobile App Screen 2"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                  </div>
                </motion.div>

                {/* Center Phone (Main) - m1.png */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20"
                >
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] overflow-hidden border-8 border-gray-700 shadow-2xl w-[280px]">
                    <div className="aspect-[9/19] bg-gray-900 relative overflow-hidden">
                      <Image
                        src="/images/mobile-app/m1.png"
                        alt="Demir6 Mobile App"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-scan"></div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  </div>
                </motion.div>

                {/* Right Phone - m3.png */}
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 0.85 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  animate={{ y: [0, -15, 0] }}
                  style={{ animationDuration: '4.2s', animationIterationCount: 'infinite' }}
                  className="relative hidden md:block -ml-8 z-0"
                >
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden border-6 border-gray-700 shadow-2xl w-[240px]">
                    <div className="aspect-[9/19] bg-gray-900 relative overflow-hidden">
                      <Image
                        src="/images/mobile-app/m3.png"
                        alt="Demir6 Mobile App Screen 3"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                  </div>
                </motion.div>
              </div>

              {/* Additional Floating Phones - m4, m5, m6 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                style={{ animationDuration: '3.5s', animationIterationCount: 'infinite' }}
                className="absolute -right-12 top-8 hidden xl:block z-10"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl opacity-75"
                       style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)', filter: 'blur(12px)' }}>
                  </div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl w-[140px]">
                    <div className="aspect-[9/19] bg-gray-900 relative overflow-hidden">
                      <Image
                        src="/images/mobile-app/m4.png"
                        alt="Demir6 Mobile App Screen 4"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                style={{ animationDuration: '3.8s', animationIterationCount: 'infinite' }}
                className="absolute -left-12 bottom-8 hidden xl:block z-10"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl opacity-75"
                       style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)', filter: 'blur(12px)' }}>
                  </div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl w-[140px]">
                    <div className="aspect-[9/19] bg-gray-900 relative overflow-hidden">
                      <Image
                        src="/images/mobile-app/m5.png"
                        alt="Demir6 Mobile App Screen 5"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                style={{ animationDuration: '4.2s', animationIterationCount: 'infinite' }}
                className="absolute right-8 bottom-4 hidden xl:block z-5"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl opacity-75"
                       style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)', filter: 'blur(12px)' }}>
                  </div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl w-[130px]">
                    <div className="aspect-[9/19] bg-gray-900 relative overflow-hidden">
                      <Image
                        src="/images/mobile-app/m6.png"
                        alt="Demir6 Mobile App Screen 6"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

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
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MobileApp;
