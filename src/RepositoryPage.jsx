import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function RepositoryPage() {
  const documents = [
    {
      title: "Investor Presentation",
      file: "/docs/investor-deck.pdf",
      description: "Overview of strategy, structure, and performance.",
    },
    {
      title: "Executive Summary",
      file: "/docs/executive-summary.pdf",
      description: "Concise breakdown of investment thesis and edge.",
    },
  ];

  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">Investor Info</h2>
      <div className="space-y-6">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl shadow hover:bg-gray-700 transition"
          >
            <FileText className="w-8 h-8 text-blue-400 mt-1" />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{doc.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{doc.description}</p>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-white text-sm font-medium"
              >
                <Download className="w-4 h-4 mr-1" /> Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
