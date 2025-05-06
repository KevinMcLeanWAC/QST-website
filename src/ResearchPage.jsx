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
            {/* William De Vena Thesis */}
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Reinforcement Learning for Market Making
                  </h3>
                  <p className="text-gray-400 text-sm">UCL MSc Thesis, Willam De Vena</p>
                </div>
              </div>
              <a
                href="/docs/Reinforcement%20learning%20for%20market%20making%20in%20algorithmic%20sports%20trading%20MSc%20Thesis%20Willam%20De%20Vena.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>

            {/* Charaka Abeywickrama Thesis */}
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Predictive Modelling for Football Betting Strategies
                  </h3>
                  <p className="text-gray-400 text-sm">UCL MSc Thesis, Charaka Abeywickrama</p>
                </div>
              </div>
              <a
                href="/docs/Predictive%20Modelling%20for%20Football%20Betting%20Strategies%20MSc%20Thesis%20Charaka%20Abeywickrama.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>

            {/* Matyas Huba Thesis */}
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    Algorithmic Sports Arbitrage Using Statistical ML
                  </h3>
                  <p className="text-gray-400 text-sm">UCL BSc Thesis, Matyas Huba</p>
                </div>
              </div>
              <a
                href="/docs/Algorithmic%20Sports%20Arbitrage%20Using%20Statistical%20Machine%20Learning%20BSc%20Thesis%20Matyas%20Huba.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>

            {/* Ben Schlagman Thesis */}
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
                href="/docs/Deep%20Learning%20for%20Algorithmic%20Sports%20Betting%20MSc%20Thesis%20Ben%20Schlagman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Download PDF
              </a>
            </div>

            {/* Chan & Ajomale Thesis */}
            <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    In-play tennis market making using transfer learning-based LSTM and enhanced Markov models
                  </h3>
                  <p className="text-gray-400 text-sm">UCL 4th Year Project, K. Chan and O. Ajomale</p>
                </div>
              </div>
              <a
                href="/docs/In%20Play%20Tennis%20Market%20Making%20Using%20Transfer%20Learning%20Based%20LSTM%20And%20Enhanced%20Markov%20Models%20Thesis%20K%20Chan%20And%20O%20Ajomale.pdf"
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






