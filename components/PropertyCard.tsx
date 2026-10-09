import React from 'react';
import Link from 'next/link';
import { Property } from '@/types/property';
import { siteConfig } from '@/lib/site';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(
    `Hi, I want more details and best price for ${property.title} (${property.ratePerGajText}). Please share layout and site visit schedule.`
  )}`;

  return (
    <article className="flex flex-col bg-white border border-slate-200 hover:border-amber-400 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      {/* Card Header */}
      <div className="relative p-5 sm:p-6 bg-gradient-to-br from-slate-50 to-amber-50/30 border-b border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
            📍 {property.location.sector}, {property.location.city}
          </span>
          <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
            📐 {property.totalArea}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
          <Link href={`/plots/${property.slug}`}>
            {property.title}
          </Link>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2 leading-relaxed">
          {property.tagline}
        </p>

        {/* Pricing Highlight */}
        <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex items-baseline justify-between">
          <div>
            <span className="text-[11px] text-slate-500 block font-medium">Rate per Gaj</span>
            <span className="text-xl sm:text-2xl font-black text-amber-600 tracking-tight">
              {property.ratePerGajText}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-500 block font-medium">Starting Budget</span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {property.startingPriceText}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        {/* Plot Sizes Pill List */}
        <div>
          <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
            Available Plot Sizes (Gaj / Sq.Yd):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {property.plotSizesGaj.map((size) => (
              <span
                key={size}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
              >
                {size} Gaj
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          {property.propertyHighlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
              <span className="text-emerald-600 shrink-0 mt-0.5 font-bold">✓</span>
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
          <Link
            href={`/plots/${property.slug}`}
            className="flex items-center justify-center text-center px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
          >
            View Details →
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-center px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-2.029-.494-1.636-.677-2.704-2.339-2.787-2.451-.084-.112-.664-.883-.664-1.682 0-.8.419-1.192.569-1.353.15-.162.33-.203.441-.203.111 0 .222.002.319.006.104.004.243-.039.38.29.144.343.491 1.196.534 1.283.043.087.072.189.014.303-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.104.179.462.763.992 1.235.683.608 1.258.796 1.437.885.179.088.283.074.388-.046.105-.121.452-.527.573-.707.121-.18.242-.151.405-.091.163.061 1.034.488 1.212.576.178.088.298.132.342.206.044.074.044.432-.1.837z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
