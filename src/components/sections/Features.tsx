"use client";

import { motion } from "framer-motion";
import { HiBolt, HiShieldCheck, HiRocketLaunch, HiEnvelope } from "react-icons/hi2";
import { siteContent } from "@/data/content";

const iconMap = {
  speed: HiBolt,
  shield: HiShieldCheck,
  rocket: HiRocketLaunch,
  mail: HiEnvelope,
};

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full animate-pulse"
                 style={{ backgroundColor: '#BF0303' }}></div>
            <span className="text-sm font-mono text-red-400 tracking-wider uppercase">
              Özellikler
            </span>
            <div className="w-2 h-2 rounded-full animate-pulse"
                 style={{ backgroundColor: '#BF0303' }}></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Neden </span>
            <span className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #BF0303 0%, #FF4444 50%, #BF0303 100%)',
                    backgroundSize: '200% auto',
                    animation: 'shine 3s linear infinite'
                  }}>
              Demir6
            </span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-lg text-gray-400">
            Demir & Çelik sektöründe bulunanlar Demir6'yı tercih ediyor. İşte nedenleri:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {siteContent.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'linear-gradient(135deg, #BF0303, #FF4444)',
                       filter: 'blur(10px)'
                     }}>
                </div>

                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 h-full">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg"
                         style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/0 group-hover:via-red-500 to-transparent transition-all duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow Background */}
          <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
               style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
          </div>

          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-12 border border-gray-700/50 overflow-hidden">
            {/* Title */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {siteContent.timeline.title}
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {siteContent.timeline.description}
              </p>
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-500 opacity-30"></div>

              {siteContent.timeline.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Number Circle */}
                  <div className="relative inline-block mb-4">
                    <div className="absolute -inset-2 rounded-full opacity-75"
                         style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)', filter: 'blur(8px)' }}>
                    </div>
                    <div className="relative w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg z-10"
                         style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                      {step.step}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default Features;
