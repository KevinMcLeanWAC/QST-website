import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-black py-4 px-6 flex items-center justify-between shadow-md">
        <div className="text-xl font-bold text-white">Quant Sports Trading Ltd</div>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-400">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-400">About Us</Link>
          <Link to="/research" className="text-white hover:text-blue-400">Research</Link>
          <Link to="/repository" className="text-white hover:text-blue-400">Investor Info</Link>
          <Link to="/contact" className="text-white hover:text-blue-400">Contact Us</Link>
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="py-6 bg-black text-center text-sm text-gray-500">
        © 2025 Quant Sports Trading Ltd · Privacy Policy · Terms
      </footer>
    </div>
  );
};

export default Layout;