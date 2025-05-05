import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg text-gray-300 mb-6">
        For all investor enquiries or partnership opportunities, please contact us at:
      </p>
      <p className="text-lg">
        <a
          href="mailto:john.goodacre@quantsportstrading.net"
          className="text-blue-400 hover:underline"
        >
          john.goodacre@quantsportstrading.net
        </a>
      </p>
    </motion.div>
  );
}
