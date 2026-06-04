import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50 py-4 px-6 flex justify-between items-center max-w-7xl mx-auto rounded-b-xl shadow-sm">
      <div className="font-black text-xl text-[#0F172A]">
        Insp<span className="text-teal-600">Hired</span>
      </div>
      <div className="hidden md:flex space-x-6 text-sm font-medium text-[#475569]">
        <a href="#" className="hover:text-teal-600">Home</a>
        <a href="#" className="hover:text-teal-600">Find Work</a>
        <a href="#" className="hover:text-teal-600">Career Lab</a>
        <a href="#" className="hover:text-teal-600">For Employers</a>
      </div>
      <button className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition">
        Book Consultation
      </button>
    </nav>
  );
}