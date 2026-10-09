'use client';

import React, { useState } from 'react';
import { Property } from '@/types/property';
import { formatINR, convertGajToSqFt } from '@/lib/properties';
import { siteConfig } from '@/lib/site';

interface PriceCalculatorProps {
  projects: Property[];
  defaultProjectSlug?: string;
}

export default function PriceCalculator({
  projects,
  defaultProjectSlug,
}: PriceCalculatorProps) {
  const defaultProject = projects.find((p) => p.slug === defaultProjectSlug) || projects[0];

  const [selectedSlug, setSelectedSlug] = useState<string>(defaultProject?.slug || '');
  const [plotSizeGaj, setPlotSizeGaj] = useState<number>(150);

  const currentProject = projects.find((p) => p.slug === selectedSlug) || projects[0];
  const ratePerGaj = currentProject?.ratePerGaj || 30000;

  const totalSqFt = convertGajToSqFt(plotSizeGaj);
  const totalPrice = plotSizeGaj * ratePerGaj;
  const bookingAmount = totalPrice * 0.1;
  const loanAmount = totalPrice * 0.8;

  // Approximate 15-year EMI calculation at 8.5% p.a.
  const monthlyRate = 0.085 / 12;
  const months = 15 * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
  );

  const whatsappMessage = encodeURIComponent(
    `Hi, I calculated plot price for ${currentProject?.title}:\n• Plot Size: ${plotSizeGaj} Gaj (${totalSqFt} Sq.Ft)\n• Rate: ${currentProject?.ratePerGajText}\n• Total Cost: ${formatINR(
      totalPrice
    )}\nPlease check availability and send site layout.`
  );

  return (
    <section id="calculator" className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-9 shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full mb-2">
            Instant Estimate Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Jhajjar Plot Price & Gaj to Sq.Ft Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Calculate instant land cost, booking amount, and estimated bank EMI for Reliance MET City, Nobel Township & Om Dream Home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Controls */}
          <div className="space-y-5 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
            {/* Project Selection */}
            <div>
              <label htmlFor="calc-project-select" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Plot Project
              </label>
              <select
                id="calc-project-select"
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                {projects.map((proj) => (
                  <option key={proj.slug} value={proj.slug}>
                    {proj.shortName} ({proj.ratePerGajText}) - {proj.location.sector}
                  </option>
                ))}
              </select>
            </div>

            {/* Plot Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="calc-plot-size" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  2. Plot Size in Gaj (Sq. Yards)
                </label>
                <span className="text-amber-700 font-extrabold text-sm sm:text-base">
                  {plotSizeGaj} Gaj ({totalSqFt} Sq.Ft)
                </span>
              </div>

              <input
                id="calc-plot-size"
                type="range"
                min="100"
                max="1000"
                step="25"
                value={plotSizeGaj}
                onChange={(e) => setPlotSizeGaj(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                aria-label="Plot Size in Gaj"
              />

              <div className="flex flex-wrap gap-1.5 mt-3">
                {[100, 150, 200, 250, 350, 500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setPlotSizeGaj(preset)}
                    className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                      plotSizeGaj === preset
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {preset} Gaj
                  </button>
                ))}
              </div>
            </div>

            {/* Conversion Note */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600">
              💡 <strong className="text-slate-900">Formula:</strong> 1 Gaj = 1 Sq. Yard = 9 Sq. Feet.
              <br />
              {plotSizeGaj} Gaj × 9 = <span className="text-amber-700 font-bold">{totalSqFt} Sq.Ft</span> at {currentProject?.ratePerGajText}.
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-white border border-amber-300 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-md space-y-4">
            <div className="border-b border-amber-200 pb-3">
              <span className="text-xs text-slate-600 block font-medium">Total Estimated Price</span>
              <div className="text-3xl sm:text-4xl font-black text-amber-700 tracking-tight mt-1">
                {formatINR(totalPrice)}
              </div>
              <span className="text-xs text-slate-500">
                ({plotSizeGaj} Gaj @ ₹{ratePerGaj.toLocaleString('en-IN')}/Gaj)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Booking Token (10%)</span>
                <span className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 block">
                  {formatINR(bookingAmount)}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Bank Loan (80%)</span>
                <span className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 block">
                  {formatINR(loanAmount)}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-slate-600 text-xs block font-medium">Estimated Monthly EMI (15 Yrs)</span>
                <span className="text-[10px] text-slate-400">*At 8.5% interest rate</span>
              </div>
              <span className="text-base sm:text-lg font-extrabold text-emerald-700">
                ~₹{emi.toLocaleString('en-IN')}/mo
              </span>
            </div>

            <a
              href={`https://wa.me/${siteConfig.phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all text-center"
            >
              <span>💬 Lock This Rate via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
