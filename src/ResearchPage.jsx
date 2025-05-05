import React from 'react';
import { FileText, FileBarChart2 } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Research & Presentations</h1>
      
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Research Paper */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <FileText className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-xl font-semibold">Algo-Trading of Sports Exchanges</h2>
              <p className="text-gray-400 text-sm">PDF research paper</p>
            </div>
          </div>
          <a
            href="/docs/Algo-Trading-of-Sports-Exchanges.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Download PDF
          </a>
        </div>

        {/* Company Presentation */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <FileBarChart2 className="w-8 h-8 text-green-400" />
            <div>
              <h2 className="text-xl font-semibold">QST Company Presentation</h2>
              <p className="text-gray-400 text-sm">PowerPoint file</p>
            </div>
          </div>
          <a
            href="/docs/qst-company-presentation.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Download PPTX
          </a>
        </div>
      </div>
    </div>
  );
}

