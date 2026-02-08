"use client";

import { motion } from "framer-motion";

export const LogoSkeleton = () => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg">
      <div className="relative aspect-square p-6">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      </div>
      <div className="h-1 bg-gray-200"></div>
    </div>
  );
};

export const ClientGridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 mb-24">
      {Array.from({ length: 14 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          <LogoSkeleton />
          <div className="mt-3 h-4 bg-gray-200 rounded mx-auto w-20 animate-pulse"></div>
        </motion.div>
      ))}
    </div>
  );
};
