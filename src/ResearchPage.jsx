import React from 'react';

export default function ResearchPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      <p className="text-lg leading-relaxed mb-6">
        Our research covers predictive modelling, real-time in-play price dynamics, market microstructure,
        and the design of robust algorithmic strategies. We aim to bring academic rigour and practical 
        execution efficiency to sports market trading.
      </p>

      <ul className="space-y-4">
        <li>
          <a
            href="/docs/Algo-trading-of-sports-exchanges.pdf"
            download
            className="text-blue-400 underline"
          >
            Download Algo-Trading of Sports Exchanges (PDF)
          </a>
        </li>
      </ul>
    </>
  );
}