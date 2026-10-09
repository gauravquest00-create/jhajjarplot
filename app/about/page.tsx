import React from 'react';
import { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
import MobileStickyBar from '@/components/MobileStickyBar';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Jhajjar Real Estate & Reliance MET City Investment Corridor',
  description:
    'Comprehensive guide on Jhajjar Master Plan 2031, Reliance MET City 8260-Acre growth, KMP Expressway connectivity, and why plotted land in Jhajjar offers maximum capital appreciation.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-10 px-3 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Corridor Insights
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            About Jhajjar Real Estate & Reliance MET City
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Positioned along the high-speed KMP Expressway and just 20 minutes from New Gurugram & Dwarka Expressway, Jhajjar has emerged as Delhi-NCR’s fastest-growing plotted land destination.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 space-y-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            The Transformation of Jhajjar: From Agricultural Belt to Global Industrial Hub
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Over the past decade, the government’s focus on the Delhi-Mumbai Industrial Corridor (DMIC) and the Western Peripheral Expressway (KMP) has transformed Jhajjar into a crucial economic powerhouse. The centerpiece of this transformation is the <strong>8,260-Acre Model Economic Township (Reliance MET City)</strong> developed by a subsidiary of Reliance Industries.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Leading international conglomerates from Japan, Europe, and South Korea have set up production facilities here, including Panasonic, Denso Automotive, FM Logistic, and Nihon Kohden. This massive industrialization has catalyzed immense demand for residential plotted developments in Sector 1 and Sector 25.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2.5 shadow-sm">
            <span className="text-2xl">🏭</span>
            <h3 className="font-bold text-lg text-slate-900">The Reliance MET City Advantage</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Spanning 8,260 acres, MET City is recognized as one of North India’s largest private greenfield smart cities. Offering residential, commercial (SCO), and industrial plots, it represents institutional grade real estate with 24x7 power grid, wide 60m-80m roads, and upcoming rail passenger connectivity.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2.5 shadow-sm">
            <span className="text-2xl">🏘️</span>
            <h3 className="font-bold text-lg text-slate-900">Gated Communities & Affordable Luxury</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For retail investors and families, projects like <strong>Nobel Economic Township (210 Acres)</strong> at ₹30,000/Gaj and <strong>Om Dream Home</strong> at ₹55,000/Gaj provide secure, gated living with immediate registry and mutation at a fraction of Gurgaon’s astronomical prices.
            </p>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 space-y-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Why Buy Through JhajjarPlots.com?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-emerald-700 font-bold block mb-1">100% Freehold Titles</span>
              <p className="text-xs text-slate-600">All inventory listed has legally cleared titles with instant registry in Jhajjar Tehsil.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-amber-700 font-bold block mb-1">Zero Brokerage Advisory</span>
              <p className="text-xs text-slate-600">Direct developer rate sheets and transparent documentation assistance.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-sky-700 font-bold block mb-1">Complimentary Site Visits</span>
              <p className="text-xs text-slate-600">Free vehicle pick & drop from nearby metro stations in Delhi & Gurgaon.</p>
            </div>
          </div>
        </section>

        <div className="pt-4">
          <EnquiryForm sourcePage="About Us Page" />
        </div>
      </div>
      <MobileStickyBar />
    </main>
  );
}
