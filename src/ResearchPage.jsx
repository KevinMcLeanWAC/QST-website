import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function ResearchPage() {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">Research</h2>

      <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl shadow hover:bg-gray-700 transition">
        <FileText className="w-8 h-8 text-blue-400 mt-1" />
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">Algorithmic Trading of Sports Exchanges</h3>
          <p className="text-gray-400 text-sm mb-2">
            A technical white paper on applying financial algorithmic trading principles to in-play sports betting markets.
          </p>
          <a
            href="/docs/Algo-Trading-of-Sports-Exchanges.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-white text-sm font-medium"
          >
            <Download className="w-4 h-4 mr-1" /> Download PDF
          </a>
        </div>
      </div>
    </motion.div>
  );
}
