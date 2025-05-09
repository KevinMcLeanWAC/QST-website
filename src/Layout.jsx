import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      <header className="bg-black py-4 px-6 flex items-center justify-between shadow-md">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Quant Sports Logo"
            className="h-16 w-auto bg-white/10 rounded shadow-md"
          />
          <span className="text-xl font-bold text-white">Quant Sports Trading Ltd</span>
        </Link>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About Us</Link>
          <Link to="/research" className="hover:text-blue-400">Research</Link>
          <Link to="/repository" className="hover:text-blue-400">Investor Info</Link>
          <Link to="/weblog" className="hover:text-blue-400">WebLog</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black px-6 py-4 space-y-2 shadow-md">
          <Link to="/" className="block hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/research" className="block hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
          <Link to="/repository" className="block hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Investor Info</Link>
          <Link to="/weblog" className="block hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>WebLog</Link>
          <Link to="/contact" className="block hover:text-blue-400" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </nav>
      )}

      <main className="flex-grow p-6">
        <Outlet />
      </main>

      <footer className="py-6 bg-black text-center text-sm text-gray-500">
        © 2025 Quant Sports Trading Ltd ·
        <a href="/privacy" className="hover:text-white transition-colors duration-200 px-2">
          Privacy Policy
        </a>
        ·
        <a href="/terms" className="hover:text-white transition-colors duration-200 px-2">
          Terms
        </a>
        <div className="mt-2 text-xs text-gray-600">Version 3.3.2</div>
      </footer>
    </div>
  );
};

export default Layout;

