'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Property } from '@/types/property';

interface HeroBannerProps {
  projects: Property[];
}

export default function HeroBanner({ projects }: HeroBannerProps) {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (selectedSector !== 'all' && p.location.sector !== selectedSector) return false;
    if (selectedBudget === 'under50' && p.startingPriceInLakhs > 50) return false;
    if (selectedBudget === '50to100' && (p.startingPriceInLakhs < 50 || p.startingPriceInLakhs > 100)) return false;
    if (selectedBudget === 'above100' && p.startingPriceInLakhs < 100) return false;
    return true;
  });

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-amber-50/30 to-slate-50">
      {/* Decorative Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-bold mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            100% Freehold Plots • Immediate Registry & Mutation in Jhajjar Tehsil
          </div>

          {/* Main H1 for Maximum Google SEO Power */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight sm:leading-none">
            Buy Residential & Commercial Plots in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
              Jhajjar & Reliance MET City
            </span>
          </h1>

          <p className="mt-3 sm:mt-5 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Invest in Prime Gated Societies, Smart City Townships, and Urban Plots in Sector 1 & Sector 25 Jhajjar. Rates starting from{' '}
            <strong className="text-amber-700 font-extrabold">₹30,000 to ₹1.10 Lakh per Gaj</strong> with verified legal approvals.
          </p>

          {/* Quick Metrics Bar (Light Cards) */}
          <div className="mt-6 grid grid-cols-3 gap-2.5 max-w-lg mx-auto text-center">
            <div className="bg-white border border-slate-200 p-2.5 sm:p-3.5 rounded-2xl shadow-xs">
              <span className="text-amber-600 font-black text-sm sm:text-xl block">8,260+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold">Acres MET City</span>
            </div>
            <div className="bg-white border border-slate-200 p-2.5 sm:p-3.5 rounded-2xl shadow-xs">
              <span className="text-emerald-600 font-black text-sm sm:text-xl block">₹30,000</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold">Starting Rate/Gaj</span>
            </div>
            <div className="bg-white border border-slate-200 p-2.5 sm:p-3.5 rounded-2xl shadow-xs">
              <span className="text-sky-600 font-black text-sm sm:text-xl block">0 KM</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold">KMP Expressway</span>
            </div>
          </div>

          {/* Fast Interactive Search Bar */}
          <div className="mt-7 sm:mt-8 bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <label htmlFor="hero-sector" className="block text-[11px] font-semibold text-slate-500 text-left mb-1">
                  Sector / Location
                </label>
                <select
                  id="hero-sector"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">All Sectors (Sector 1 & 25)</option>
                  <option value="Sector 1">Sector 1 (MET City / Nobel)</option>
                  <option value="Sector 25">Sector 25 (Om Dream Home)</option>
                </select>
              </div>

              <div>
                <label htmlFor="hero-budget" className="block text-[11px] font-semibold text-slate-500 text-left mb-1">
                  Budget Filter
                </label>
                <select
                  id="hero-budget"
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="all">Any Budget</option>
                  <option value="under50">Under ₹50 Lakh (Nobel)</option>
                  <option value="50to100">₹50 Lakh - ₹1 Crore (Om Dream)</option>
                  <option value="above100">Above ₹1 Crore (Reliance MET)</option>
                </select>
              </div>

              <div className="flex items-end">
                <a
                  href="#featured-plots"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all shadow-md shadow-amber-500/20 text-center flex items-center justify-center gap-1.5 active:scale-[0.98]"
                >
                  <span>Search {filteredProjects.length} Verified Plots</span>
                </a>
              </div>
            </div>

            {/* Quick Keyword Search Tags */}
            <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-center gap-1.5 text-[10px] sm:text-xs text-slate-500">
              <span className="font-semibold text-slate-400">Popular:</span>
              <Link
                href="/plots/reliance-met-city-sector-1-jhajjar"
                className="hover:text-amber-600 underline decoration-slate-300"
              >
                Reliance MET City 1.10L/Gaj
              </Link>
              <span>•</span>
              <Link
                href="/plots/nobel-economic-township-sector-1-jhajjar"
                className="hover:text-emerald-600 underline decoration-slate-300"
              >
                Nobel Township 30k/Gaj
              </Link>
              <span>•</span>
              <Link
                href="/plots/om-dream-home-sector-25-jhajjar"
                className="hover:text-sky-600 underline decoration-slate-300"
              >
                Om Dream Home 55k/Gaj
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
