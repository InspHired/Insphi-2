import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- PLATFORMS & VALUES DATA MATRICES ---
const ecosystemPlatforms = [
  {
    id: 'verifyme',
    title: 'VerifyMe Technologies',
    badge: 'Security & Integrity',
    icon: '🔍',
    desc: 'Trusted background verification and professional screening services for cautious employers.',
    actionText: 'Learn More',
    features: ['Criminal background checks', 'Academic verification', 'Employment history screening', 'Digital identity verification'],
    extendedDetails: 'VerifyMe operates as your defensive screening guardrail. It plugs directly into regional records networks to mitigate legal, systemic, and operational recruitment risks before onboarding agreements are drafted.',
    pipeline: [
      { avatar: "🏢", label: "Request", desc: "Company files screening request" },
      { avatar: "🤖", label: "Scan", desc: "Automated registry check" },
      { avatar: "🛡️", label: "Verify", desc: "Tamper-proof clearance badge" }
    ]
  },
  {
    id: 'worx',
    title: 'InspHired Worx',
    badge: 'On-Demand Velocity',
    icon: '⚡',
    desc: 'Flexible, on-demand temporary staffing solutions built for fast-paced operational ecosystems.',
    actionText: 'Learn More',
    features: ['Mobile-first staffing solutions', 'Contingent project workforces', 'Hourly & shift-based placements', 'Rapid seasonal deployment'],
    extendedDetails: 'Built to manage volatile project timelines. InspHired Worx serves as a dynamic workforce faucet, letting operations managers scale field, contingent, or technical shifts up or down immediately.',
    pipeline: [
      { avatar: "📅", label: "Roster", desc: "Define shifts & operational criteria" },
      { avatar: "⚡", label: "Dispatch", desc: "Instant geo-located push alerts" },
      { avatar: "🏃‍♂️", label: "Deploy", desc: "Talent arrives on active site" }
    ]
  },
  {
    id: 'connect',
    title: 'InspHired Connect',
    badge: 'Open Access Hub',
    icon: '🚀',
    desc: 'Free centralized talent hub directly matching qualified applicants to open corporate positions.',
    actionText: 'Join Free',
    features: ['Instant parsing CV upload', 'Direct applications portal', 'Smart algorithm talent matching', 'Managed career pathways'],
    extendedDetails: 'Democratizing workforce access. InspHired Connect runs programmatic parsing code that strips away formatting bias, instantly evaluating matching variables between open requisitions and active job applicants.',
    pipeline: [
      { avatar: "📄", label: "Drop CV", desc: "Upload unformatted profile" },
      { avatar: "🧠", label: "Parse", desc: "Data parameters mapped out" },
      { avatar: "🚀", label: "Match", desc: "Instant systemic alignment" }
    ]
  }
];

const valuePillars = [
  {
    id: 'culture',
    title: 'Culture-first matching',
    icon: '🧠',
    desc: 'Beyond skills — every candidate is assessed for cultural alignment with your organisation\'s values.',
    details: 'Our rigorous behavioural matching frameworks evaluate environmental compatibility and communication tendencies.'
  },
  {
    id: 'networks',
    title: 'Deep African networks',
    icon: '🌍',
    desc: 'A decade of relationships across industries means faster, higher-quality access to the right talent.',
    details: 'Leveraging active placement nodes across key continental economic hubs.'
  },
  {
    id: 'verification',
    title: 'End-to-end verification',
    icon: '🛡️',
    desc: 'From criminal checks to credentials — every candidate is fully verified.',
    details: 'Direct institutional lookups and quick-turnaround background reporting checks.'
  },
  {
    id: 'support',
    title: 'Post-placement support',
    icon: '🤝',
    desc: 'We stay involved after placement, checking in regularly to ensure smooth onboarding.',
    details: 'Structured 30, 60, and 90-day trajectory checkpoints with employers.'
  }
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1E293B] font-sans antialiased relative overflow-x-hidden">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="max-w-7xl mx-auto px-6 py-4 bg-white/90 backdrop-blur-md border-b border-[#EBE5D8] flex justify-between items-center sticky top-0 z-50 shadow-xs">
        <div className="font-black text-xl text-[#0F172A] tracking-tight">
          Insp<span className="text-[#5FA19C]">Hired</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-[#475569]">
          <a href="#purpose" className="hover:text-[#5FA19C] transition">Our Purpose</a>
          <a href="#solutions" className="hover:text-[#5FA19C] transition">Services Ecosystem</a>
          <a href="#why-us" className="hover:text-[#5FA19C] transition">Why InspHired</a>
        </div>
        <button className="bg-[#5FA19C] hover:bg-[#4E8E89] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-xs flex items-center gap-2">
          <span>💼</span> Book Consultation
        </button>
      </nav>

      {/* 2. FULL-WIDTH ILLUSTRATED HERO CANVAS */}
      <header className="relative w-full bg-[#FAF6EE] pt-12 pb-16 lg:pb-24 border-b border-[#EBE5D8] overflow-hidden">
        
        {/* Vector Canvas Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M-20,60 Q80,20 200,100 T500,40 T800,90" 
              stroke="#2E6F6B" 
              strokeWidth="2.5" 
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ ease: "linear", duration: 4, repeat: Infinity }}
              className="opacity-40" 
            />
            <motion.path 
              d="M-10,90 Q120,130 260,60 T620,120" 
              stroke="#E07A5F" 
              strokeWidth="2" 
              strokeDasharray="8 4"
              animate={{ strokeDashoffset: [0, 24] }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
              className="opacity-30" 
            />
            
            <path d="M920,400 C1050,380 1120,120 1240,200 C1340,270 1360,60 1460,40" stroke="#F4A261" strokeWidth="42" strokeLinecap="round" className="opacity-20" />
            <path d="M980,420 C1080,390 1160,180 1260,220 C1360,250 1390,100 1490,70" stroke="#E07A5F" strokeWidth="24" strokeLinecap="round" className="opacity-25" />
            <path d="M1010,440 C1110,410 1190,210 1280,240 C1370,260 1410,130 1510,90" stroke="#2E6F6B" strokeWidth="12" strokeLinecap="round" className="opacity-30" />
            
            <g className="opacity-40" transform="translate(1280, 240)">
              <rect x="0" y="60" width="10" height="90" rx="4" fill="#E07A5F" />
              <rect x="16" y="20" width="10" height="130" rx="4" fill="#2E6F6B" />
              <rect x="32" y="45" width="10" height="105" rx="4" fill="#F4A261" />
              <rect x="48" y="0" width="10" height="150" rx="4" fill="#2E6F6B" />
            </g>
            <circle cx="1220" cy="340" r="28" fill="#E07A5F" className="opacity-20" />
            <path d="M1220,340 L1248,340 A28,28 0 0,1 1220,368 Z" fill="#2E6F6B" className="opacity-50" />
          </svg>
        </div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 z-10">
            <h1 className="text-4xl sm:text-[46px] font-black tracking-tight text-[#0F172A] leading-[1.12]">
              Connecting great talent <br />
              <span className="text-[#0F172A]">with great companies</span>
            </h1>
            <p className="mt-5 text-sm text-[#475569] max-w-lg leading-relaxed font-medium">
              We don't just fill jobs — we build careers, relationships, and futures. 
              InspHired has been solving Africa's employment challenges through 
              innovative technology and people who care.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#5FA19C] hover:bg-[#4E8E89] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-xs flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                Find talent
              </button>
              <button className="bg-white hover:bg-slate-50 text-[#0F172A] border border-[#CFC7B9] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-xs flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                Available jobs
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[380px] w-full flex items-center justify-center">
            
            <div className="absolute inset-0 z-10 pointer-events-auto">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none">
                <motion.path 
                  d="M 40,120 Q 90,80 140,140 T 260,110 T 360,150" 
                  stroke="#2E6F6B" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                  animate={{ strokeDashoffset: [0, -24] }}
                  transition={{ ease: "linear", duration: 2.5, repeat: Infinity }}
                />
                <motion.path 
                  d="M 140,140 Q 180,240 230,220" 
                  stroke="#F4A261" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeDasharray="8 4"
                  animate={{ strokeDashoffset: [0, 24] }}
                  transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                />
                <motion.path 
                  d="M 260,110 L 290,210" 
                  stroke="#2E6F6B" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                />
              </svg>

              <div className="absolute left-[5%] top-[22%] group flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-4 border-[#FAF6EE] bg-[#D1E7E5] shadow-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                  <span className="text-2xl select-none">👩🏾‍💻</span>
                </div>
              </div>

              <div className="absolute left-[24%] top-[12%] w-7 h-7 rounded-full bg-[#F4A261] border-2 border-white shadow-xs flex items-center justify-center text-xs">💼</div>

              <div className="absolute left-[26%] top-[48%] group flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-4 border-[#FAF6EE] bg-[#FAD9C1] shadow-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                  <span className="text-2xl select-none">👨🏽‍💼</span>
                </div>
              </div>

              <div className="absolute left-[46%] top-[14%] group flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-4 border-[#FAF6EE] bg-[#E2E8F0] shadow-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                  <span className="text-2xl select-none">👩🏼‍💼</span>
                </div>
              </div>

              <div className="absolute left-[66%] top-[20%] group flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-4 border-[#FAF6EE] bg-[#CFE2FE] shadow-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                  <span className="text-2xl select-none">👨🏾‍💼</span>
                </div>
              </div>

              <div className="absolute left-[76%] top-[50%] w-7 h-7 rounded-full bg-[#2E6F6B] border-2 border-white shadow-xs flex items-center justify-center text-xs">💡</div>

              <div className="absolute left-[48%] top-[56%] group flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-4 border-[#FAF6EE] bg-[#FCE7F3] shadow-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
                  <span className="text-2xl select-none">👷‍♂️</span>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-6 w-[280px] h-[320px] z-20">
              <svg viewBox="0 0 400 400" className="w-full h-full text-[#EFE7DA] fill-current drop-shadow-xs">
                <path d="M190,45 C230,40 280,55 300,95 C320,135 290,185 280,215 C270,245 250,285 230,325 C210,355 195,385 180,395 C170,400 160,375 155,345 C150,315 130,295 110,275 C90,255 75,225 80,185 C85,145 110,115 130,100 C150,85 160,50 190,45 Z" />
              </svg>

              <div className="absolute left-[48%] top-[58%] group cursor-pointer z-30" onMouseEnter={() => setHoveredCity('Kinshasa')} onMouseLeave={() => setHoveredCity(null)}>
                <div className="w-3.5 h-3.5 rounded-full bg-[#5FA19C] border-2 border-white animate-pulse" />
                <span className={`absolute -top-6 -left-6 bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-md whitespace-nowrap transition-opacity duration-200 ${hoveredCity === 'Kinshasa' ? 'opacity-100' : 'opacity-85'}`}>Kinshasa</span>
              </div>

              <div className="absolute left-[60%] top-[76%] group cursor-pointer z-30" onMouseEnter={() => setHoveredCity('SouthAfrica')} onMouseLeave={() => setHoveredCity(null)}>
                <div className="w-3.5 h-3.5 rounded-full bg-[#E07A5F] border-2 border-white animate-pulse" />
                <span className={`absolute -top-6 -left-10 bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-md whitespace-nowrap transition-opacity duration-200 ${hoveredCity === 'SouthAfrica' ? 'opacity-100' : 'opacity-85'}`}>South Africa</span>
              </div>

              <div className="absolute left-[52%] top-[86%] group cursor-pointer z-30" onMouseEnter={() => setHoveredCity('CapeTown')} onMouseLeave={() => setHoveredCity(null)}>
                <div className="w-3.5 h-3.5 rounded-full bg-[#2E6F6B] border-2 border-white animate-pulse" />
                <span className={`absolute -top-6 -left-8 bg-slate-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-md whitespace-nowrap transition-opacity duration-200 ${hoveredCity === 'CapeTown' ? 'opacity-100' : 'opacity-85'}`}>Cape Town</span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. PURPOSE & DIRECTION SECTION */}
      <section id="purpose" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-20">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 shadow-xs relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#5FA19C] bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
              Our Purpose & Direction
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight">
              Reshaping Africa's Workforce Ecosystem
            </h2>
            <p className="mt-2 text-sm text-slate-400 font-medium leading-relaxed">
              Driven by impact, guided by innovation — we connect enterprise needs with exceptional individual execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border-t border-slate-800 pt-6">
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60">
              <div className="flex items-center gap-2 text-[#F4A261] font-black text-xs uppercase tracking-wider">
                <span>🎯</span> Our Mission
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Innovative recruitment through technology and people — custom-built for Africa's unique employment landscape.
              </p>
            </div>
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60">
              <div className="flex items-center gap-2 text-[#5FA19C] font-black text-xs uppercase tracking-wider">
                <span>👁️</span> Our Vision
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                To be the premier solution to Africa's enterprise staffing challenges, from entry-level positions to executive searches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP PLATFORMS WITH MOVING AVATAR PIPELINES */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-8 scroll-mt-20">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-[#E1EFEF] px-3 py-1 rounded-full">
            Our Solutions
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-[#0F172A]">
            Platforms Tailored For Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ecosystemPlatforms.map((platform) => (
            <motion.div
              key={platform.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedItem({ ...platform, type: 'platform' })}
              className="bg-white rounded-3xl p-6 border border-[#EBE5D8] cursor-pointer transition-all flex flex-col justify-between group hover:border-[#5FA19C] shadow-2xs overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#FAF6EE] rounded-xl flex items-center justify-center text-2xl border border-[#EBE5D8] group-hover:bg-teal-50 transition-colors">
                    {platform.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {platform.badge}
                  </span>
                </div>
                <h3 className="text-base font-black text-[#0F172A] mt-4 group-hover:text-[#5FA19C] transition-colors">
                  {platform.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                  {platform.desc}
                </p>

                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                  {platform.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                      <span className="text-[#5FA19C]">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* KINETIC EMOJI PROCESS PIPELINE */}
                <div className="mt-6 pt-5 border-t border-dashed border-[#EBE5D8] bg-[#FAF8F4] p-4 rounded-2xl group-hover:bg-teal-50/20 transition-colors">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-4">Operational Pipeline Flow</p>
                  
                  <div className="flex justify-between items-center relative px-2">
                    {/* Background Link Line */}
                    <div className="absolute top-5 left-8 right-8 h-0.5 bg-[#EBE5D8] z-0" />

                    {platform.pipeline.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center relative z-10 w-20">
                        
                        {/* Continuously Floating Avatar Wrapper */}
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.4
                          }}
                          className="w-10 h-10 rounded-full bg-white border border-[#EBE5D8] flex items-center justify-center text-xl shadow-xs group-hover:border-[#5FA19C] transition-colors"
                        >
                          {step.avatar}
                        </motion.div>
                        
                        <h5 className="text-[10px] font-extrabold text-slate-800 mt-2 tracking-tight">
                          {step.label}
                        </h5>
                        <p className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5 line-clamp-2">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-[#5FA19C]">
                <span>{platform.actionText}</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. WHY INSPHIRED DIFFERENTIALS */}
      <section id="why-us" className="max-w-7xl mx-auto px-6 pt-8 pb-24 scroll-mt-20">
        <div className="bg-white rounded-3xl p-8 border border-[#EBE5D8] shadow-3xs">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
              Why InspHired
            </span>
            <h2 className="mt-3 text-xl sm:text-2xl font-black text-[#0F172A]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valuePillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedItem({ ...pillar, type: 'pillar' })}
                className="bg-[#FAFDFD] p-4 rounded-2xl border border-slate-100 cursor-pointer hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">{pillar.icon}</div>
                  <h4 className="text-xs font-black text-[#0F172A] tracking-wide">{pillar.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{pillar.desc}</p>
                </div>
                <span className="text-[10px] font-bold text-amber-700 mt-4 block">Read More ↗</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLATFORM INTERACTIVE MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 12 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 12 }}
              className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-xl border border-slate-100 relative z-10 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${selectedItem.type === 'platform' ? 'bg-[#5FA19C]' : 'bg-[#F4A261]'}`} />
              <div className="flex justify-between items-start mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-2xl border border-slate-100">
                    {selectedItem.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">{selectedItem.title}</h3>
                  </div>
                </div>
                <button onClick={() => setSelectedItem(null)} className="w-7 h-7 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center text-xs font-bold">✕</button>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-600 font-medium bg-slate-50 p-3 rounded-xl leading-relaxed">
                  {selectedItem.desc}
                </p>
              </div>

              {selectedItem.type === 'platform' && (
                <div className="mt-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Integrated Core Capabilities</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-teal-50/40 p-3 rounded-xl">
                    {selectedItem.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                        <span className="text-[#5FA19C]">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4">
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedItem.extendedDetails || selectedItem.details}
                </p>
              </div>

              <div className="mt-6 flex gap-3 pt-4 border-t border-slate-100">
                <button onClick={() => setSelectedItem(null)} className="flex-1 bg-slate-100 text-slate-700 text-xs font-bold py-2.5 rounded-xl">
                  Dismiss
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}