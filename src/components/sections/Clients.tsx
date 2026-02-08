"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { siteContent } from "@/data/content";

const Clients = () => {
  return (
    <section id="clients" className="py-20 md:py-32 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* Futuristic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full animate-pulse"
                 style={{ backgroundColor: '#BF0303' }}></div>
            <span className="text-sm font-mono text-red-400 tracking-wider uppercase">
              Referanslarımız
            </span>
            <div className="w-2 h-2 rounded-full animate-pulse"
                 style={{ backgroundColor: '#BF0303' }}></div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Bize Güvenen </span>
            <span className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #BF0303 0%, #FF4444 50%, #BF0303 100%)',
                    backgroundSize: '200% auto',
                    animation: 'shine 3s linear infinite'
                  }}>
              Firmalar
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Demir & Çelik sektöründe lider firmalar Demir6 modülünü tercih ediyor.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-500"></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#BF0303' }}></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
        </motion.div>

        {/* Clients Grid - Futuristic Design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 mb-24">
          {siteContent.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
            >
              <Link
                href={client.url}
                target={client.url !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group block relative"
              >
                {/* Holographic Border Effect */}
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'linear-gradient(45deg, #BF0303, #FF4444, #BF0303)',
                       backgroundSize: '200% 200%',
                       animation: 'gradient-shift 3s ease infinite',
                       filter: 'blur(8px)'
                     }}>
                </div>

                {/* Logo Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 shadow-lg">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>

                  {/* Logo Container */}
                  <div className="relative aspect-square p-6">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 14vw"
                        className="object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-scan"></div>
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-red-500/0 group-hover:via-red-500 to-transparent transition-all duration-500"></div>
                </div>

                {/* Company Name */}
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-semibold text-gray-400 group-hover:text-red-400 transition-colors duration-300 truncate">
                    {client.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Futuristic Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { number: "35+", label: "Aktif Müşteri", icon: "🏢" },
            { number: "100%", label: "Müşteri Memnuniyeti", icon: "⭐" },
            { number: "7/24", label: "Teknik Destek", icon: "💬" },
            { number: "12+", label: "Yıllık Deneyim", icon: "🎯" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'linear-gradient(135deg, #BF0303, #FF4444)',
                     filter: 'blur(10px)'
                   }}>
              </div>

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text"
                     style={{ backgroundImage: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Futuristic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                 style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-12 border border-gray-700/50">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Siz de <span className="text-transparent bg-clip-text"
                             style={{ backgroundImage: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                  Demir6
                </span> ailesine katılın!
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Demir & Çelik sektöründe işlerinizi hızlandırmak ve güvenilir bir çözüm için bizimle iletişime geçin.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all transform hover:-translate-y-1 relative overflow-hidden group"
                style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}
              >
                <span className="relative z-10 text-white">Hemen İletişime Geçin</span>
                <HiExternalLink className="w-5 h-5 relative z-10 text-white" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                       animation: 'shine-move 1.5s infinite'
                     }}>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
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

export default Clients;
