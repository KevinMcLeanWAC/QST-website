import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg text-gray-300">
        Quant Sports Trading Ltd is pioneering the intersection of sports betting and algorithmic finance. 
        Our mission is to deliver consistent, data-driven returns through cutting-edge models and disciplined execution.
      </p>
    </motion.div>
  );
}
