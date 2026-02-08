"use client";

import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { siteContent } from "@/data/content";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">

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
              Hizmetlerimiz
            </span>
            <div className="w-2 h-2 rounded-full animate-pulse"
                 style={{ backgroundColor: '#BF0303' }}></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Demir6 </span>
            <span className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #BF0303 0%, #FF4444 50%, #BF0303 100%)',
                    backgroundSize: '200% auto',
                    animation: 'shine 3s linear infinite'
                  }}>
              Çözümleri
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Demir & Çelik sektörüne özel modüller ile işletmenizi dijitalleştirin.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteContent.services.map((service, index) => (
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

              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500 h-full">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-red-500/0 group-hover:border-red-500 transition-colors duration-500"></div>

                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-400">
                      <HiCheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/0 group-hover:via-red-500 to-transparent transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow Background */}
          <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
               style={{ background: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
          </div>

          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-12 border border-gray-700/50">
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl">🏢</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
              <span className="text-white">Bir </span>
              <span className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                Mentalsoft
              </span>
              <span className="text-white"> İştiraki</span>
              <span className="text-white">dir</span>
            </h3>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              2014 yılından itibaren Demir6 Modülünü geliştirmeye başladık ve devam ediyoruz. Sektöre özel çözümlerimiz ile 35+ firmaya hizmet vermekteyiz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "2014", label: "Kuruluş Yılı" },
                { value: "100+", label: "Tamamlanan Proje" },
                { value: "50+", label: "Özel Rapor" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text mb-2"
                       style={{ backgroundImage: 'linear-gradient(135deg, #BF0303, #FF4444)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
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

export default Services;
