import React from 'react';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfbfa] text-[#0f2d37]">
      {/* Global Navigation Bar */}
      <header className="w-full bg-white px-6 md:px-16 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-[#0f2d37]">
            Insp<span className="text-[#009b9e]">Hired</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#556970]">
          <a href="#ecosystem" className="hover:text-[#009b9e] transition-colors">Ecosystem</a>
          <a href="#resources" className="hover:text-[#009b9e] transition-colors">Resource Center</a>
          <a href="#partners" className="hover:text-[#009b9e] transition-colors">For Partners</a>
        </nav>
        
        <button className="bg-[#009b9e] hover:bg-[#007f82] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all">
          Join Network
        </button>
      </header>

      {/* Dynamic Main Content Wrap */}
      <main className="w-full">
        {/* Rendered updated Layout 2 Hero Section */}
        <Hero />

        {/* Bottom Metrics/Dashboard Grid Container from Mockup 2.0 */}
        <section className="px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          
          {/* Card 1: Placement Lifecycles */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">
              Placement Lifecycles
            </h3>
            <p className="text-xs text-gray-500 mb-4">Our systemic validation architecture.</p>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-[10px] font-bold text-[#009b9e] bg-[#009b9e]/10 rounded-full mt-0.5">1</span>
                <div>
                  <h4 className="text-xs font-bold text-[#0f2d37]">🔍 Recruitment Sourcing</h4>
                  <p className="text-[11px] text-gray-400">Unearthing specialized profiles globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Informative Content Hub */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">
              Informative Content Hub
            </h3>
            <p className="text-xs text-gray-500 mb-4">Actionable strategies deployed daily.</p>
            <div className="w-full h-24 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center text-xs text-gray-400">
              Content Feed Component
            </div>
          </div>

          {/* Card 3: Skill Vectors */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">
              Skill Vectors
            </h3>
            <p className="text-xs text-gray-500 mb-4">Targeted technical refinement.</p>
            <div className="bg-[#fffbeb] border border-[#fef3c7] p-3 rounded-xl mt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-[#92400e]">⚡ Engineering Deep Dives</span>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}