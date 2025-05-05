import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-br from-gray-800 to-black">
      <h1 className="text-3xl font-bold mb-4">Systematic Alpha in Sports Markets</h1>
      <p className="text-xl mb-6">
        The application of institutional-grade algorithmic trading to global sports betting markets.
      </p>
      <div className="flex justify-center gap-4 flex-wrap mt-20">
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-200"
        >
          Contact Us
        </Link>
        <Link
          to="/repository"
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-200"
        >
          Investor Info
        </Link>
      </div>
    </section>
  );
}



