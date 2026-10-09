import React from 'react';
import Link from 'next/link';
import { siteConfig, getCallUrl, getWhatsAppUrl } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs sm:text-sm">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm shadow">
                JP
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">
                Jhajjar<span className="text-amber-400">Plots</span>.com
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Leading property advisory portal for residential, commercial, and industrial plots in Reliance MET City, Nobel Township, and Jhajjar Urban Sectors. Authorized direct advisory with zero brokerage assistance.
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-300">
              <a href={getCallUrl()} className="hover:text-amber-400 font-semibold text-xs sm:text-sm">
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Top Plot Projects
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/plots/reliance-met-city-sector-1-jhajjar"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Reliance MET City Sector 1</span>
                  <span className="text-[10px] text-amber-400 font-mono">₹1.10L/Gaj</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/plots/nobel-economic-township-sector-1-jhajjar"
                  className="hover:text-emerald-400 transition-colors flex items-center justify-between"
                >
                  <span>Nobel Economic Township</span>
                  <span className="text-[10px] text-emerald-400 font-mono">₹30k/Gaj</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/plots/om-dream-home-sector-25-jhajjar"
                  className="hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Om Dream Home Sector 25</span>
                  <span className="text-[10px] text-sky-400 font-mono">₹55k/Gaj</span>
                </Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-white transition-colors">
                  📐 Plot Gaj to Sq.Ft Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  ℹ️ Jhajjar Master Plan 2031
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Search Keywords */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Plots in Jhajjar</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Reliance MET City</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Sector 1 Jhajjar Plots</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">30k per gaj plots</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Om Dream Home Sector 25</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">KMP Expressway Plots</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Gated Society Jhajjar</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">AIIMS Badli Plots</span>
            </div>
          </div>

          {/* Office & Site Visit Desk */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Site Visit & Advisory Desk
            </p>
            <address className="not-italic text-xs text-slate-400 space-y-1.5">
              <p className="text-slate-200 font-semibold">{siteConfig.shortName} Advisory Desk</p>
              <p>{siteConfig.address}</p>
              <p className="pt-1">
                <span className="text-slate-500">Helpline:</span>{' '}
                <a href={getCallUrl()} className="text-amber-400 font-bold hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="pt-1">
                <span className="text-slate-500">Visiting Hours:</span> Mon - Sun: 9:00 AM - 7:00 PM
              </p>
              <p className="pt-2">
                <a
                  href={getWhatsAppUrl('Hi, I want to book a free site visit for plots in Jhajjar.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-emerald-400 hover:underline"
                >
                  👉 Book Free Pick & Drop Site Visit
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-[11px] text-slate-400 space-y-3 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> JhajjarPlots.com is an independent real estate advisory and research platform providing information regarding plotted developments in Jhajjar, Model Economic Township (Reliance MET City), and surrounding Delhi-NCR corridors. Project details, dimensions, rates, and specifications are gathered from respective developer brochures, public town planning records, and field verification. Prices mentioned (e.g. ₹1.10 Lakh/Gaj, ₹30,000/Gaj, ₹55,000/Gaj) are subject to periodic market revisions. Prospective buyers are advised to verify all legal title deeds, RERA numbers, and DTCP approvals before financial transactions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400">
            <p>© {new Date().getFullYear()} JhajjarPlots.com. All Rights Reserved.</p>
            <p className="text-slate-400">High Performance Next.js • SEO Optimized • Mobile Responsive</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
