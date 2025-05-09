import React, { useState } from 'react';
import { FileText, GraduationCap } from 'lucide-react';

const theses = [
  {
    title: 'Reinforcement Learning for Market Making',
    author: 'Willam De Vena',
    level: 'UCL MSc Thesis',
    href: '/docs/Reinforcement%20learning%20for%20market%20making%20in%20algorithmic%20sports%20trading%20MSc%20Thesis%20Willam%20De%20Vena.pdf',
  },
  {
    title: 'Predictive Modelling for Football Betting Strategies',
    author: 'Charaka Abeywickrama',
    level: 'UCL MSc Thesis',
    href: '/docs/Predictive%20Modelling%20for%20Football%20Betting%20Strategies%20MSc%20Thesis%20Charaka%20Abeywickrama.pdf',
  },
  {
    title: 'Algorithmic Sports Arbitrage Using Statistical ML',
    author: 'Matyas Huba',
    level: 'UCL BSc Thesis',
    href: '/docs/Algorithmic%20Sports%20Arbitrage%20Using%20Statistical%20Machine%20Learning%20BSc%20Thesis%20Matyas%20Huba.pdf',
  },
  {
    title: 'Deep Learning for Algorithmic Sports Betting',
    author: 'Ben Schlagman',
    level: 'UCL MSc Thesis',
    href: '/docs/Deep%20Learning%20for%20Algorithmic%20Sports%20Betting%20MSc%20Thesis%20Ben%20Schlagman.pdf',
  },
  {
    title: 'In-play tennis market making using transfer learning-based LSTM and enhanced Markov models',
    author: 'K. Chan and O. Ajomale',
    level: 'UCL 4th Year Project',
    href: '/docs/In%20Play%20Tennis%20Market%20Making%20Using%20Transfer%20Learning%20Based%20LSTM%20And%20Enhanced%20Markov%20Models%20Thesis%20K%20Chan%20And%20O%20Ajomale.pdf',
  },
];

const academicPapers = [
  {
    title: 'Algo-Trading of Sports Exchanges',
    description: 'Research paper on algorithmic trading strategy',
    href: '/docs/Algo-Trading-of-Sports-Exchanges.pdf',
  },
  {
    title: 'Algorithmic Trading in Financial and Sports Exchanges',
    description: 'Elliott (2024) — Statistical models applied across asset classes',
    href: '/docs/Algorithmic%20Trading%20In%20Financial%20And%20Sports%20Exchanges.pdf',
  },
];

export default function ResearchPage() {
  const [query, setQuery] = useState('');

  const filteredTheses = theses.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q) ||
      item.level.toLowerCase().includes(q)
    );
  });

  const filteredAcademicPapers = academicPapers.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">Research Repository</h1>

      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search all documents..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* === UCL Student Theses === */}
        <div id="student-theses">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            UCL Student Theses
          </h2>

          <div className="space-y-6">
            {filteredTheses.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {item.level}, {item.author}
                    </p>
                  </div>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* === Academic Papers === */}
        <div id="academic-papers">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Academic Papers
          </h2>

          <div className="space-y-6">
            {filteredAcademicPapers.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
