'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig, getCallUrl } from '@/lib/site';

interface MobileStickyBarProps {
  propertyName?: string;
}

export default function MobileStickyBar({ propertyName }: MobileStickyBarProps) {
  const whatsappText = propertyName
    ? encodeURIComponent(`Hi, I am interested in ${propertyName}. Please send me the latest price list, plot availability, and location map.`)
    : encodeURIComponent('Hi, I am interested in buying plots in Jhajjar / Reliance MET City. Please share options & price details.');

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-200 px-2.5 py-2 sm:hidden backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={getCallUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 active:scale-95 transition-all text-center"
        >
          <svg className="w-4 h-4 text-amber-600 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-[10px] font-bold tracking-tight">Call Now</span>
        </a>

        <a
          href={`https://wa.me/${siteConfig.phone}?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95 transition-all text-center shadow-sm"
        >
          <svg className="w-4 h-4 text-white mb-0.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-2.029-.494-1.636-.677-2.704-2.339-2.787-2.451-.084-.112-.664-.883-.664-1.682 0-.8.419-1.192.569-1.353.15-.162.33-.203.441-.203.111 0 .222.002.319.006.104.004.243-.039.38.29.144.343.491 1.196.534 1.283.043.087.072.189.014.303-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.104.179.462.763.992 1.235.683.608 1.258.796 1.437.885.179.088.283.074.388-.046.105-.121.452-.527.573-.707.121-.18.242-.151.405-.091.163.061 1.034.488 1.212.576.178.088.298.132.342.206.044.074.044.432-.1.837z" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 active:scale-95 transition-all text-center font-bold"
        >
          <svg className="w-4 h-4 text-slate-950 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight">Site Visit</span>
        </Link>
      </div>
    </aside>
  );
}
