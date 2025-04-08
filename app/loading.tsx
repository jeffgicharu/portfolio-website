'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-blue-600 rounded-full"
            animate={{
              y: ['0%', '-50%', '0%'],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
} 