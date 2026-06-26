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

// Interactive Avatar Node Data with Absolute Coordinates relative to the left half canvas (%)
const talentNodes = [
  {
    id: 1,
    name: 'Amina D.',
    role: 'Cloud Architect',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    x: 15, y: 20,
    connections: [2, 3]
  },
  {
    id: 2,
    name: 'Kofi O.',
    role: 'Operations Director',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    x: 30, y: 65,
    connections: [1, 4]
  },
  {
    id: 3,
    name: 'Thabo M.',
    role: 'Senior Engineer',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    x: 65, y: 15,
    connections: [1, 4]
  },
  {
    id: 4,
    name: 'Zola K.',
    role: 'Product Strategist',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    x: 80, y: 55,
    connections: [2, 3, 5]
  },
  {
    id: 5,
    name: 'Tariq E.',
    role: 'FinTech Consultant',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80',
    x: 45, y: 85,
    connections: [4]
  }
];

// Big Interactive Office Locations Data relative to the right map canvas (%)
const officeLocations = [
  {
    id: 'kinshasa',
    city: 'Kinshasa',
    country: 'DRC',
    details: 'Regional Central Hub orchestrating cross-continental talent mapping pipeline syncs.',
    x: 36, 
    y: 52,
    color: '#D97706'
  },
  {
    id: 'johannesburg',
    city: 'Johannesburg',
    country: 'South Africa',
    details: 'Headquarters leading software engineering partnerships and core executive placements.',
    x: 52, 
    y: 78,
    color: '#F59E0B'
  },
  {
    id: 'capetown',
    city: 'Cape Town',
    country: 'South Africa',
    details: 'Strategic node managing creative ecosystems and cloud-scaling remote resources.',
    x: 42, 
    y: 89,
    color: '#9A3412'
  }
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2D221E] font-sans antialiased relative overflow-x-hidden">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="max-w-7xl mx-auto px-6 py-5 bg-[#FAF6F0]/95 backdrop-blur-md flex justify-between items-center sticky top-0 z-50 shadow-xs">
        <div className="font-black text-2xl text-[#4A1E17] tracking-tight">
          Insp<span className="text-[#D97706]">Hired</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-[#614E47]">
          <a href="#purpose" className="hover:text-[#D97706] transition">Our Purpose</a>
          <a href="#solutions" className="hover:text-[#D97706] transition">Services Ecosystem</a>
          <a href="#why-us" className="hover:text-[#D97706] transition">Why InspHired</a>
        </div>
        <button className="bg-[#4A1E17] hover:bg-[#34140F] text-[#FAF6F0] text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2">
          <span>💼</span> Book Consultation
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative w-full bg-[#4A1E17] pt-16 pb-20 lg:pb-28 overflow-hidden flex items-center text-[#FAF6F0]">
        
        {/* Decorative Grid Matrix Background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-10">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M-20,60 Q80,20 200,100 T500,40 T800,90" 
              stroke="#F59E0B" 
              strokeWidth="1.5" 
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ ease: "linear", duration: 6, repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography Block */}
          <div className="lg:col-span-4 z-20">
            <h1 className="text-4xl sm:text-[44px] font-black tracking-tight text-[#FAF6F0] leading-[1.12]">
              Connecting great talent <br />
              <span className="text-[#F59E0B]">with great companies</span>
            </h1>
            <p className="mt-6 text-sm text-[#E6D5CC]/80 max-w-lg leading-relaxed font-medium">
              We don't just fill jobs — we build careers, relationships, and futures. 
              InspHired has been solving Africa's employment challenges through 
              innovative technology and people who care.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-[#D97706] to-[#9A3412] hover:from-[#B45309] hover:to-[#7C2D12] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all shadow-md flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-current transform -rotate-45" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                Find talent
              </button>
            </div>
          </div>

          {/* TWO-COLUMN VISUAL SHOWCASE: SIDE-BY-SIDE WITH NO CONTAINING BORDERS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 h-[550px] w-full relative">
            
            {/* LEFT COLUMN: INTERACTIVE TALENT MATRIX CANVAS (BORDERLESS) */}
            <div className="relative w-full h-full bg-[#34140F]/40 rounded-3xl overflow-hidden">
              <div className="absolute top-4 left-5 z-40">
                <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest bg-[#4A1E17] px-2.5 py-1 rounded-md">
                  Active Talent Network
                </p>
              </div>

              {/* Inter-avatar Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                {talentNodes.map((source) => 
                  source.connections.map((targetId) => {
                    const target = talentNodes.find(t => t.id === targetId);
                    if (!target || source.id > targetId) return null;

                    const isHighlighted = activeNode === source.id || activeNode === target.id;

                    return (
                      <motion.line
                        key={`talent-${source.id}-${targetId}`}
                        x1={`${source.x}%`}
                        y1={`${source.y}%`}
                        x2={`${target.x}%`}
                        y2={`${target.y}%`}
                        stroke={isHighlighted ? '#F59E0B' : 'rgba(245, 158, 11, 0.25)'}
                        strokeWidth={isHighlighted ? '3' : '1.5'}
                        strokeDasharray={isHighlighted ? 'none' : '5 5'}
                        transition={{ duration: 0.25 }}
                      />
                    );
                  })
                )}
              </svg>

              {/* Large Avatars */}
              <div className="absolute inset-0 z-30">
                {talentNodes.map((node) => {
                  const isSelected = activeNode === node.id;
                  
                  return (
                    <div
                      key={node.id}
                      className="absolute group flex flex-col items-center"
                      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                    >
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4A1E17] p-1 shadow-2xl transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? 'scale-110 ring-4 ring-[#F59E0B]' 
                          : 'hover:ring-2 hover:ring-[#F59E0B]/30'
                      }`}>
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#5C2B22]">
                          <img 
                            src={node.src} 
                            alt={node.name} 
                            className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      <div className={`mt-2 px-2.5 py-1 rounded-xl bg-[#34140F] text-center shadow-lg transition-all duration-300 whitespace-nowrap pointer-events-none ${
                        isSelected ? 'opacity-100 translate-y-0 bg-[#D97706]/20' : 'opacity-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                      }`}>
                        <h4 className="text-[10px] font-black tracking-wide text-white">{node.name}</h4>
                        <p className="text-[9px] font-bold text-[#F59E0B] tracking-tight">{node.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: DETAILED AFRICAN CONTINENT MAP & LOCATION PINS (BORDERLESS) */}
            <div className="relative w-full h-full bg-[#34140F]/20 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="absolute top-4 left-5 z-40">
                <p className="text-[10px] font-black text-white uppercase tracking-widest bg-[#4A1E17] px-2.5 py-1 rounded-md">
                  Enterprise Locations
                </p>
              </div>

              {/* DETAILED WHITE AFRICAN CONTINENT AVATAR VECTOR */}
              <div className="absolute w-[85%] h-[85%] z-10 opacity-95 text-white select-none pointer-events-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                <svg viewBox="0 0 420 450" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M192.3,13.2 C204.1,10.5 218.4,12.1 230.1,14.6 C242.8,17.3 255.2,16.8 268.4,22.1 C275.9,25.1 281.3,31.7 289.4,34.2 C299.1,37.2 308.5,33.5 318.1,38.1 C324.9,41.4 329.1,48.2 334.8,53.0 C345.2,61.8 357.1,68.9 365.2,80.1 C371.4,88.6 373.9,99.2 377.1,109.3 C379.8,117.8 384.2,123.1 381.1,132.8 C378.1,142.3 368.2,148.1 364.6,157.4 C360.2,168.7 364.5,180.2 365.1,192.0 C365.7,203.9 360.1,214.5 363.3,226.1 C365.4,233.9 371.8,240.1 372.4,248.2 C373.1,257.4 366.1,264.9 365.8,274.1 C365.4,286.4 372.9,296.8 371.3,309.0 C369.9,319.8 359.8,326.7 356.1,337.1 C352.2,348.1 354.3,361.3 346.2,370.8 C339.4,378.8 328.7,381.9 321.1,389.2 C314.9,395.2 312.1,404.3 304.3,409.1 C295.1,414.7 283.4,412.3 273.7,417.8 C267.1,421.6 262.4,428.9 254.9,431.1 C248.1,433.1 241.9,426.1 235.2,423.1 C227.4,419.6 220.4,424.3 212.1,421.4 C205.4,419.0 202.1,411.3 196.2,407.2 C190.1,403.0 183.1,402.1 177.9,396.7 C174.1,392.8 174.8,386.1 172.4,381.0 C169.8,375.4 163.9,372.0 161.9,366.1 C159.2,358.1 164.2,350.3 161.6,342.3 C159.2,334.9 151.7,330.1 149.3,322.6 C147.2,316.0 151.4,309.2 149.3,302.7 C147.1,295.9 140.5,291.6 137.9,284.9 C134.8,276.9 138.8,267.8 135.2,259.9 C131.7,252.2 122.9,247.9 119.8,240.0 C116.4,231.3 121.7,221.7 117.3,213.1 C114.1,206.8 106.9,202.8 103.1,196.8 C98.1,188.9 98.4,179.3 93.4,171.4 C89.2,164.8 81.6,160.7 77.9,153.8 C73.1,144.9 76.5,134.2 71.9,125.1 C68.2,117.8 60.1,113.1 56.6,105.7 C52.2,96.4 56.9,85.2 52.8,75.8 C50.5,70.5 44.8,67.1 42.8,61.7 C39.9,54.0 45.4,45.4 43.1,37.5 C41.6,32.3 35.8,28.7 35.2,23.3 C34.4,16.0 42.1,11.2 46.1,5.1 C51.3,12.4 59.5,16.8 66.2,22.9 C71.9,28.1 73.1,36.4 79.9,40.4 C87.3,44.7 96.2,40.9 104.2,44.3 C113.1,48.1 119.8,56.2 129.4,58.8 C138.5,61.3 145.4,54.7 154.9,56.2 C163.5,57.5 169.3,64.9 177.8,67.1 C181.9,68.1 185.2,65.3 189.3,64.2 C196.4,62.3 203.2,65.2 210.4,63.1 C215.1,61.7 217.4,56.6 221.9,54.6 C228.3,51.8 235.6,53.4 242.2,50.9 C246.3,49.3 248.9,45.3 252.8,43.4 C259.9,39.9 268.1,41.9 275.4,38.8 C278.4,37.5 280.1,34.3 283.1,32.8 C294.5,27.1 292.1,11.1 282.8,4.1 C271.2,-4.5 249.2,2.5 235.3,3.8 C220.5,5.2 205.8,7.3 192.3,13.2 Z" />
                  <path d="M382.4,320.1 C386.1,315.2 391.2,324.8 393.4,329.1 C397.2,336.5 401.4,344.2 403.1,352.3 C405.2,362.4 400.1,372.1 398.9,382.2 C397.8,391.1 391.2,398.4 388.1,407.1 C385.2,415.2 380.1,424.1 373.2,421.2 C368.1,419.1 369.2,408.3 371.4,402.9 C375.1,393.8 377.2,384.1 379.3,374.8 C381.5,364.9 380.2,354.7 381.1,344.6 C381.9,335.8 379.4,324.1 382.4,320.1 Z" />
                </svg>
              </div>

              {/* Big Interactive Office Map Pins */}
              <div className="absolute inset-0 z-40 pointer-events-none">
                {officeLocations.map((loc) => {
                  const isHovered = hoveredLocation === loc.id;
                  
                  return (
                    <div
                      key={loc.id}
                      className="absolute pointer-events-auto cursor-pointer"
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                      onMouseEnter={() => setHoveredLocation(loc.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                    >
                      {/* Active Pulse Anchors */}
                      <div className="absolute -left-6 -top-6 w-12 h-12 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full opacity-60" style={{ backgroundColor: loc.color }} />
                        <span className="relative inline-flex rounded-full h-5 w-5 shadow-md border-2 border-white" style={{ backgroundColor: loc.color }} />
                      </div>

                      {/* Large Location Pin Vectors */}
                      <motion.div 
                        className="absolute bottom-[5px] -left-6 origin-bottom"
                        animate={{ y: isHovered ? -10 : 0, scale: isHovered ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 14 }}
                      >
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-xl">
                          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill={loc.color} stroke="#4A1E17" strokeWidth="1.5" />
                          <circle cx="12" cy="9" r="3" fill="#4A1E17" />
                        </svg>
                      </motion.div>

                      {/* Location Flyout Metadata cards */}
                      <div className={`absolute left-8 -top-16 bg-[#34140F] text-[#FAF6F0] p-3 rounded-2xl shadow-2xl transition-all duration-300 min-w-[190px] pointer-events-none z-50 ${
                        isHovered ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-2 scale-95'
                      }`}>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: loc.color }} />
                          <h4 className="text-xs font-black tracking-tight text-[#FAF6F0]">{loc.city}</h4>
                        </div>
                        <p className="text-[9px] font-bold text-[#E6D5CC]/60 tracking-wider uppercase mt-0.5">{loc.country}</p>
                        <p className="text-[10px] text-[#E6D5CC]/80 font-medium leading-tight mt-1.5 border-t border-[#4A1E17] pt-1.5">
                          {loc.details}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* 3. PURPOSE & DIRECTION SECTION */}
      <section id="purpose" className="max-w-7xl mx-auto px-6 py-14 scroll-mt-20">
        <div className="bg-[#4A1E17] text-[#FAF6F0] rounded-3xl p-10 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F59E0B] bg-[#34140F] px-3.5 py-1.5 rounded-full">
              Our Purpose & Direction
            </span>
            <h2 className="mt-5 text-2xl sm:text-3xl font-black tracking-tight text-[#FAF6F0]">
              Reshaping Africa's Workforce Ecosystem
            </h2>
            <p className="mt-3 text-sm text-[#E6D5CC]/80 font-medium leading-relaxed">
              Driven by impact, guided by innovation — we connect enterprise needs with exceptional individual execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 border-t border-[#5C2B22] pt-8">
            <div className="bg-[#34140F]/60 p-6 rounded-2xl">
              <div className="flex items-center gap-2 text-[#F59E0B] font-black text-xs uppercase tracking-wider">
                <span>🎯</span> Our Mission
              </div>
              <p className="text-xs text-[#FAF6F0]/80 mt-3 leading-relaxed">
                Innovative recruitment through technology and people — custom-built for Africa's unique employment landscape.
              </p>
            </div>
            <div className="bg-[#34140F]/60 p-6 rounded-2xl">
              <div className="flex items-center gap-2 text-[#F59E0B] font-black text-xs uppercase tracking-wider">
                <span>👁️</span> Our Vision
              </div>
              <p className="text-xs text-[#FAF6F0]/80 mt-3 leading-relaxed">
                To be the premier solution to Africa's enterprise staffing challenges, from entry-level positions to executive searches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP PLATFORMS */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-8 scroll-mt-20">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4A1E17] bg-[#E6D5CC]/30 px-3.5 py-1.5 rounded-full">
            Our Solutions
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#2D221E]">
            Platforms Tailored For Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ecosystemPlatforms.map((platform) => (
            <motion.div
              key={platform.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedItem({ ...platform, type: 'platform' })}
              className="bg-[#FFFDFB] rounded-3xl p-6 cursor-pointer transition-all flex flex-col justify-between group hover:shadow-md shadow-sm overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#FAF6F0] rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#E6D5CC]/40 transition-colors">
                    {platform.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#614E47] bg-[#FAF6F0] px-2.5 py-1 rounded-md">
                    {platform.badge}
                  </span>
                </div>
                <h3 className="text-base font-black text-[#2D221E] mt-5 group-hover:text-[#9A3412] transition-colors">
                  {platform.title}
                </h3>
                <p className="text-xs text-[#614E47] mt-2.5 leading-relaxed font-medium">
                  {platform.desc}
                </p>

                <div className="mt-5 space-y-2 border-t border-[#FAF6F0] pt-4">
                  {platform.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-[#2D221E] font-semibold">
                      <span className="text-[#D97706]">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-dashed border-[#E6D5CC] bg-[#FAF6F0] p-4 rounded-2xl group-hover:bg-[#FAF6F0]/80 transition-colors">
                  <p className="text-[10px] font-black text-[#614E47]/60 uppercase tracking-wider mb-4">Operational Pipeline Flow</p>
                  
                  <div className="flex justify-between items-center relative px-2">
                    <div className="absolute top-5 left-8 right-8 h-0.5 bg-[#E6D5CC]/40 z-0" />

                    {platform.pipeline.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center relative z-10 w-20">
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.4
                          }}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform"
                        >
                          {step.avatar}
                        </motion.div>
                        
                        <h5 className="text-[10px] font-extrabold text-[#2D221E] mt-2 tracking-tight">
                          {step.label}
                        </h5>
                        <p className="text-[9px] text-[#614E47] font-medium leading-tight mt-0.5 line-clamp-2">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-[#FAF6F0] flex items-center justify-between text-xs font-black text-[#D97706]">
                <span>{platform.actionText}</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. WHY INSPHIRED DIFFERENTIALS */}
      <section id="why-us" className="max-w-7xl mx-auto px-6 pt-8 pb-24 scroll-mt-20">
        <div className="bg-[#FFFDFB] rounded-3xl p-8 shadow-sm">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9A3412] bg-[#9A3412]/10 px-3.5 py-1.5 rounded-full">
              Why InspHired
            </span>
            <h2 className="mt-4 text-xl sm:text-2xl font-black text-[#2D221E]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valuePillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedItem({ ...pillar, type: 'pillar' })}
                className="bg-[#FAF6F0] p-5 rounded-2xl cursor-pointer hover:bg-[#E6D5CC]/30 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="text-2xl mb-3">{pillar.icon}</div>
                  <h4 className="text-xs font-black text-[#2D221E] tracking-wide">{pillar.title}</h4>
                  <p className="text-[11px] text-[#614E47] mt-2 leading-relaxed font-medium">{pillar.desc}</p>
                </div>
                <span className="text-[10px] font-bold text-[#9A3412] mt-5 block">Read More ↗</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PLATFORM INTERACTIVE MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)} className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 12 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 12 }}
              className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl relative z-10 overflow-hidden text-[#2D221E]"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${selectedItem.type === 'platform' ? 'bg-[#4A1E17]' : 'bg-[#D97706]'}`} />
              <div className="flex justify-between items-start mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] flex items-center justify-center text-2xl">
                    {selectedItem.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-gray-900">{selectedItem.title}</h3>
                  </div>
                </div>
                <button onClick={() => setSelectedItem(null)} className="w-7 h-7 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold hover:bg-gray-200 transition-colors">✕</button>
              </div>

              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs text-[#614E47] font-medium bg-[#FAF6F0] p-3 rounded-xl leading-relaxed">
                  {selectedItem.desc}
                </p>
              </div>

              {selectedItem.type === 'platform' && (
                <div className="mt-4">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2">Integrated Core Capabilities</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#FAF6F0] p-3 rounded-xl">
                    {selectedItem.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#2D221E] font-semibold">
                        <span className="text-[#D97706]">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4">
                <p className="text-xs text-[#614E47] leading-relaxed">
                  {selectedItem.extendedDetails || selectedItem.details}
                </p>
              </div>

              <div className="mt-6 flex gap-3 pt-4 border-t border-gray-100">
                <button onClick={() => setSelectedItem(null)} className="flex-1 bg-gray-100 text-gray-700 text-xs font-bold py-2.5 rounded-xl hover:bg-gray-200 transition-colors">
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