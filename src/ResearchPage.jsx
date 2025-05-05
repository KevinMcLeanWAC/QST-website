import React from 'react';
import { FileText, GraduationCap } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Research</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* === UCL Student Theses === */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            UCL Student Theses
          </h2>

          <div className="space-y-6">
            {/* Thesis 1 */}
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Predictive Models for Sports Market Pricing
                  </h3>
                  <p className="text-gray-400 text-sm">UCL MSc Thesis, 2024</p>
                </div>
              </div>
              <a
                href="/docs/ucl-thesis-sports-pricing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>

            {/* Thesis 2 */}
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Algorithmic Sports Arbitrage Using Statistical ML
                  </h3>
                  <p className="text-gray-400 text-sm">UCL BSc Thesis, Matyas Huber</p>
                </div>
              </div>
              <a
                href="/docs/Algorithmic-Sports-Arbitrage-Matyas-Huber.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>

            {/* Thesis 3 */}
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Deep Learning for Algorithmic Sports Betting
                  </h3>
                  <p className="text-gray-400 text-sm">UCL MSc Thesis, Ben Schlagman</p>
                </div>
              </div>
              <a
                href="/docs/Deep-Learning-for-Algorithmic-Sports-Betting-MSc-Thesis-Ben-Schlagman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* === Papers === */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Papers
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <FileText className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Algo-Trading of Sports Exchanges
                  </h3>
                  <p className="text-gray-400 text-sm">Research paper on algorithmic trading strategy</p>
                </div>
              </div>
              <a
                href="/docs/Algo-Trading-of-Sports-Exchanges.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


