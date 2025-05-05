import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      <header className="bg-black px-6 py-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">Quant Sports Trading Ltd</div>

          {/* Hamburger icon for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white text-2xl focus:outline-none"
          >
            ☰
          </button>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex space-x-4">
            <Link to="/" className="text-white hover:text-blue-400">Home</Link>
            <Link to="/about" className="text-white hover:text-blue-400">About Us</Link>
            <Link to="/research" className="text-white hover:text-blue-400">Research</Link>
            <Link to="/repository" className="text-white hover:text-blue-400">Investor Info</Link>
            <Link to="/contact" className="text-white hover:text-blue-400">Contact Us</Link>
          </nav>
        </div>

        {/* Mobile navigation dropdown */}
        {menuOpen && (
          <nav className="sm:hidden mt-4 space-y-2 text-center">
            <Link to="/" className="block text-white hover:text-blue-400">Home</Link>
            <Link to="/about" className="block text-white hover:text-blue-400">About Us</Link>
            <Link to="/research" className="block text-white hover:text-blue-400">Research</Link>
            <Link to="/repository" className="block text-white hover:text-blue-400">Investor Info</Link>
            <Link to="/contact" className="block text-white hover:text-blue-400">Contact Us</Link>
          </nav>
        )}
      </header>

      <main className="flex-grow p-6">
        <Outlet />
      </main>

      <footer className="py-6 bg-black text-center text-sm text-gray-500">
        © 2025 Quant Sports Trading Ltd ·
        <a
          href="/privacy"
          className="hover:text-white transition-colors duration-200 px-2"
        >
          Privacy Policy
        </a>
        ·
        <a
          href="/terms"
          className="hover:text-white transition-colors duration-200 px-2"
        >
          Terms
        </a>
      </footer>
    </div>
  );
};

export default Layout;
