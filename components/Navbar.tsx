'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig, getWhatsAppUrl, getCallUrl } from '@/lib/site';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
            : 'bg-white border-b border-slate-200'
        }`}
      >
        {/* Top Hotline Bar */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white text-[11px] sm:text-xs font-semibold py-1.5 px-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="truncate flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Jhajjar & Reliance MET City Authorized Plot Desk | Free Site Visit
            </span>
            <div className="hidden sm:flex items-center gap-4 text-xs font-bold shrink-0">
              <a href={getCallUrl()} className="hover:underline flex items-center gap-1">
                📞 {siteConfig.phoneDisplay}
              </a>
              <span className="opacity-50">|</span>
              <a
                href={getWhatsAppUrl('Hi, I want details regarding plots in Jhajjar and Reliance MET City.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                💬 WhatsApp Assistance
              </a>
            </div>
          </div>
        </div>

        {/* Main Sticky Navigation Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo with House / Plot Icon */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight leading-tight group-hover:text-amber-600 transition-colors">
                  Jhajjar<span className="text-amber-600">Plots</span>.com
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  MET City & Gated Plots
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-700">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-slate-100/80 transition-colors"
              >
                All Plots
              </Link>
              <Link
                href="/plots/reliance-met-city-sector-1-jhajjar"
                className="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-slate-100/80 transition-colors flex items-center gap-1.5"
              >
                <span>Reliance MET City</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 border border-amber-300 px-1.5 py-0.5 rounded-md font-mono font-bold">
                  ₹1.10L
                </span>
              </Link>
              <Link
                href="/plots/nobel-economic-township-sector-1-jhajjar"
                className="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-slate-100/80 transition-colors flex items-center gap-1.5"
              >
                <span>Nobel Township</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-1.5 py-0.5 rounded-md font-mono font-bold">
                  ₹30k
                </span>
              </Link>
              <Link
                href="/plots/om-dream-home-sector-25-jhajjar"
                className="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-slate-100/80 transition-colors flex items-center gap-1.5"
              >
                <span>Om Dream Home</span>
                <span className="text-[10px] bg-sky-100 text-sky-800 border border-sky-300 px-1.5 py-0.5 rounded-md font-mono font-bold">
                  ₹55k
                </span>
              </Link>
              <Link
                href="/#calculator"
                className="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-slate-100/80 transition-colors"
              >
                Gaj Calculator
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-slate-100/80 transition-colors"
              >
                About Jhajjar
              </Link>
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-2.029-.494-1.636-.677-2.704-2.339-2.787-2.451-.084-.112-.664-.883-.664-1.682 0-.8.419-1.192.569-1.353.15-.162.33-.203.441-.203.111 0 .222.002.319.006.104.004.243-.039.38.29.144.343.491 1.196.534 1.283.043.087.072.189.014.303-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.104.179.462.763.992 1.235.683.608 1.258.796 1.437.885.179.088.283.074.388-.046.105-.121.452-.527.573-.707.121-.18.242-.151.405-.091.163.061 1.034.488 1.212.576.178.088.298.132.342.206.044.074.044.432-.1.837z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href={getCallUrl()}
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Mobile Actions: Phone Icon + Hamburger Button (<= 377px friendly) */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <a
                href={getCallUrl()}
                className="p-2 text-amber-600 bg-amber-50 rounded-lg sm:hidden flex items-center justify-center border border-amber-200"
                aria-label={`Call ${siteConfig.phoneDisplay}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sliding Drawer (Light Theme, optimized for <= 377px) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-[340px] bg-white border-l border-slate-200 z-50 p-4 sm:p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
              JP
            </div>
            <span className="text-slate-900 font-extrabold text-sm sm:text-base">
              Jhajjar Plots
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md bg-slate-100"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-4 space-y-1.5">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1">
            Featured Plot Projects
          </p>

          <Link
            href="/plots/reliance-met-city-sector-1-jhajjar"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200 text-slate-900 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-slate-900">Reliance MET City</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono font-bold">
                ₹1.10L / Gaj
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-0.5">Sector 1 Jhajjar • 8,260 Acres</span>
          </Link>

          <Link
            href="/plots/nobel-economic-township-sector-1-jhajjar"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 text-slate-900 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-slate-900">Nobel Township</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-bold">
                ₹30k / Gaj
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-0.5">Sector 1 Jhajjar • 210 Acre Gated</span>
          </Link>

          <Link
            href="/plots/om-dream-home-sector-25-jhajjar"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50/60 border border-slate-200 text-slate-900 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-slate-900">Om Dream Home</span>
              <span className="text-[10px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded font-mono font-bold">
                ₹55k / Gaj
              </span>
            </div>
            <span className="text-xs text-slate-500 mt-0.5">Sector 25 Jhajjar • Urban Plots</span>
          </Link>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-200 space-y-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1">
            Explore
          </p>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            🏡 All Properties & Plots
          </Link>
          <Link
            href="/#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            📐 Plot Gaj & Price Calculator
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            ℹ️ About Jhajjar & MET City
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            📍 Contact & Free Site Visit
          </Link>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
          <a
            href={getCallUrl()}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm py-3 px-4 rounded-xl shadow transition-all"
          >
            📞 Call {siteConfig.phoneDisplay}
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-all"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
