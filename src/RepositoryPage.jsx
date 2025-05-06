import React from 'react';
import { FileText, FileBarChart2 } from 'lucide-react';

export default function RepositoryPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      {/* Header with aligned buttons and heading */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <a
            href="/research#student-theses"
            className="bg-yellow-700 hover:bg-yellow-800 text-white px-4 py-2 rounded-md text-sm shadow"
          >
            Go to Student Theses
          </a>

          <h1 className="text-3xl font-bold text-center">Investor Info</h1>

          <a
            href="/research#academic-papers"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm shadow"
          >
            Go to Academic Papers
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Investor Presentation */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <FileBarChart2 className="w-8 h-8 text-green-400" />
            <div>
              <h2 className="text-xl font-semibold">Investor Presentation</h2>
              <p className="text-gray-400 text-sm">
                Overview of strategy, structure, and performance.
              </p>
            </div>
          </div>
          <a
            href="/docs/qst-investor-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Download PDF
          </a>
        </div>

        {/* Research Paper */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <FileText className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-xl font-semibold">Algo-Trading of Sports Exchanges</h2>
              <p className="text-gray-400 text-sm">
                Detailed research paper on algorithmic strategy.
              </p>
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
      </div>
    </div>
  );
}










