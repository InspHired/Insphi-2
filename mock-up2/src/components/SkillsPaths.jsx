import React from 'react';

export default function SkillPaths() {
  return (
    <div className="flex flex-col h-full justify-between space-y-6">
      <div>
        <h2 className="text-xl font-bold text-center mb-6 text-[#0F172A]">
          Skill Development Paths
        </h2>
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-[#475569]">
          <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg">Specific</div>
          <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg">Training</div>
          <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg">Split</div>
        </div>
      </div>
      
      <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex items-center space-x-4">
        <span className="text-3xl">👥</span>
        <p className="text-xs text-[#334155] font-medium">
          Connect with mentors and industry experts across regional tech hubs.
        </p>
      </div>
    </div>
  );
}