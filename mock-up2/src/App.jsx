import React from 'react';
import { motion } from 'framer-motion';

// Mock Data for our Content Hub
const hubCards = [
  { id: 1, title: 'Career Guide 101', icon: '📈', desc: 'Mastering the modern interview landscape.' },
  { id: 2, title: 'Resume Workshop', icon: '📝', desc: 'Crafting portfolios that capture attention.' },
  { id: 3, title: 'Regional Insights', icon: '🌍', desc: 'Deep dives into East & West African tech.' },
  { id: 4, title: 'Tech Talent Trends', icon: '🗺️', desc: 'In-demand skillsets across remote markets.' },
  { id: 5, title: 'Networking Frameworks', icon: '🤝', desc: 'Building genuine human relationships.' },
  { id: 6, title: 'Mentorship Circles', icon: '✨', desc: 'Connecting pioneers with future stars.' },
];

// Mock Data for the Timeline
const steps = [
  { id: 1, title: 'Recruitment Sourcing', desc: 'Unearthing specialized profiles globally.', icon: '🔍' },
  { id: 2, title: 'Technical Evaluation', desc: 'In-depth rigorous code & stack screening.', icon: '📋' },
  { id: 3, title: 'Cultural Alignment', desc: 'Ensuring values and workflows match.', icon: '⚙️' },
  { id: 4, title: 'Ecosystem Placement', desc: 'Onboarding into local operational loops.', icon: '🚀' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#1E293B] font-sans antialiased">
      
      {/* 1. NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-4 bg-white border-b border-[#E2E8F0] flex justify-between items-center rounded-b-xl shadow-xs">
        <div className="font-black text-xl text-[#0F172A]">
          Insp<span className="text-teal-600">Hired</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-[#475569]">
          <a href="#" className="hover:text-teal-600 transition">Ecosystem</a>
          <a href="#" className="hover:text-teal-600 transition">Resource Center</a>
          <a href="#" className="hover:text-teal-600 transition">For Partners</a>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
          Join Network
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full">
            Ecosystem Resource Hub
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
            Connecting great talent <br />
            <span className="text-teal-600">with great companies</span>
          </h1>
          <p className="mt-4 text-base text-[#475569] max-w-xl leading-relaxed">
            We bridge the gap between brilliant professional minds and foundational businesses across Africa. Explore our comprehensive career tools, market blueprints, and dynamic pathways.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-xs">
              Explore Openings
            </button>
            <button className="bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-[#E2E8F0] font-bold text-sm px-6 py-3 rounded-xl transition">
              Partner Matrix
            </button>
          </div>
        </div>

        {/* Africa Theme Illustrated Container Placeholder */}
        <div className="lg:col-span-6 bg-gradient-to-tr from-amber-50 to-teal-50/50 rounded-2xl border border-dashed border-teal-200 p-8 h-80 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-teal-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm animate-pulse">
            Active Nodes
          </div>
          <span className="text-5xl mb-3">🌍</span>
          <h3 className="font-bold text-slate-800 text-sm">Interactive Talent Network Map</h3>
          <p className="text-xs text-slate-500 max-w-xs mt-1">
            Dynamic digital visual routing matching live placements in Lagos, Nairobi, and Cape Town.
          </p>
        </div>
      </header>

      {/* 3. MAIN DASHBOARD CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Recruitment Timeline */}
          <section className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-xs border border-[#E2E8F0]">
            <h2 className="text-base font-black text-[#0F172A] mb-1 uppercase tracking-wide">
              Placement Lifecycles
            </h2>
            <p className="text-xs text-slate-400 mb-6">Our systemic validation architecture.</p>
            
            <div className="relative border-l border-teal-100 ml-3 space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="relative pl-6 group">
                  <div className="absolute -left-[9px] top-0.5 bg-teal-50 text-teal-600 border border-teal-200 rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">
                    {step.id}
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span>{step.icon}</span> {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MIDDLE: Content Hub */}
          <section className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-xs border border-[#E2E8F0]">
            <h2 className="text-base font-black text-[#0F172A] mb-1 uppercase tracking-wide">
              Informative Content Hub
            </h2>
            <p className="text-xs text-slate-400 mb-6">Actionable strategies deployed daily.</p>
            
            <div className="grid grid-cols-2 gap-3">
              {hubCards.map((card) => (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -3, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
                  className="p-3 rounded-xl border border-slate-100 bg-gradient-to-b from-white to-[#FAFDFD] cursor-pointer"
                >
                  <span className="text-xl">{card.icon}</span>
                  <h4 className="text-xs font-bold text-slate-800 mt-1">{card.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* RIGHT: Skill Development Paths */}
          <section className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-xs border border-[#E2E8F0] flex flex-col justify-between">
            <div>
              <h2 className="text-base font-black text-[#0F172A] mb-1 uppercase tracking-wide">
                Skill Vectors
              </h2>
              <p className="text-xs text-slate-400 mb-4">Targeted technical refinement.</p>
              
              <div className="space-y-2">
                <div className="p-2 text-xs font-semibold text-amber-800 bg-amber-50 rounded-lg border border-amber-100">
                  ⚡ Engineering Deep Dives
                </div>
                <div className="p-2 text-xs font-semibold text-teal-800 bg-teal-50 rounded-lg border border-teal-100">
                  📐 Architecture Blueprints
                </div>
                <div className="p-2 text-xs font-semibold text-slate-800 bg-slate-50 rounded-lg border border-slate-100">
                  📊 Operational Strategy
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-orange-50/70 border border-orange-100 rounded-xl text-[11px] text-orange-950 flex items-start gap-2.5">
              <span className="text-lg">💡</span>
              <p className="leading-tight font-medium">
                Want custom data reporting models? Access our complete backend profile matrix.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}