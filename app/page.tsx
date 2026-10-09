import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllProjects } from '@/lib/properties';
import HeroBanner from '@/components/HeroBanner';
import PropertyCard from '@/components/PropertyCard';
import PriceCalculator from '@/components/PriceCalculator';
import EnquiryForm from '@/components/EnquiryForm';
import FaqAccordion from '@/components/FaqAccordion';
import MobileStickyBar from '@/components/MobileStickyBar';
import { siteConfig, getCallUrl, getWhatsAppUrl } from '@/lib/site';
import {
  LocalBusinessStructuredData,
  FaqStructuredData,
  BreadcrumbStructuredData,
} from '@/components/SeoStructuredData';

export const metadata: Metadata = {
  title: 'Plots in Jhajjar - Reliance MET City, Nobel Township & Om Dream Home | ₹30k to ₹1.10L/Gaj',
  description:
    'Verified residential & commercial plots in Jhajjar, Sector 1 & Sector 25. Compare Reliance MET City (₹1.10L/Gaj), Nobel Economic Township (₹30k/Gaj) and Om Dream Home (₹55k/Gaj). Immediate registry, DTCP & RERA approved.',
  keywords: [
    'plots in jhajjar',
    'reliance met city plot price',
    'reliance met city sector 1 jhajjar',
    'nobel economic township jhajjar',
    'om dream home sector 25 jhajjar',
    'jhajjar plot rate per gaj',
    'gated society plots in jhajjar',
    'cheap plots in jhajjar 30k per gaj',
    'kmp expressway plots jhajjar',
    'model economic township jhajjar',
    'residential plots near badli aiims'
  ],
  alternates: {
    canonical: 'https://www.jhajjarplots.com',
  },
  openGraph: {
    title: 'Plots in Jhajjar - Reliance MET City, Nobel Township & Om Dream Home | Best Rates',
    description:
      'Explore prime plots in Jhajjar from ₹30,000/Gaj to ₹1.10 Lakh/Gaj. RERA approved townships, immediate registry & mutation.',
    url: 'https://www.jhajjarplots.com',
    siteName: 'JhajjarPlots.com',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plots in Jhajjar - Reliance MET City, Nobel Township & Om Dream Home',
    description:
      'Buy verified plots in Sector 1 & Sector 25 Jhajjar from ₹30,000 to ₹1.10 Lakh per Gaj. 100 to 1000 Gaj sizes.',
  },
};

const homeFaqs = [
  {
    question: 'What is the average plot rate in Jhajjar and Reliance MET City in 2025-2026?',
    answer:
      'Plot rates in Jhajjar vary depending on location and township amenities: Nobel Economic Township in Sector 1 is available at an affordable ₹30,000 per Gaj; Om Dream Home in Sector 25 is priced at ₹55,000 per Gaj; while Reliance MET City (8,260 Acre smart city) is priced around ₹1,10,000 per Gaj.',
  },
  {
    question: 'How is 1 Gaj calculated into Square Feet (Sq.Ft) in Haryana?',
    answer:
      'In Haryana real estate, 1 Gaj equals exactly 1 Square Yard, which equals 9 Square Feet. For example, a 100 Gaj plot equals 900 Sq.Ft; a 150 Gaj plot equals 1,350 Sq.Ft; and a 200 Gaj plot equals 1,800 Sq.Ft.',
  },
  {
    question: 'Why is Reliance MET City Sector 1 considered a high-growth investment?',
    answer:
      'Reliance MET City is an 8,260-Acre world-class greenfield smart city developed by a subsidiary of Reliance Industries. It features Fortune 500 MNCs (Panasonic, Denso, FM Logistic), direct KMP Expressway connectivity, dedicated rail freight terminal, and upcoming Haryana Orbital Rail Corridor (HORC) passenger station.',
  },
  {
    question: 'Can I get a bank loan on residential plots in Jhajjar?',
    answer:
      'Yes, all DTCP and RERA approved plotted developments in Jhajjar including Reliance MET City, Nobel Economic Township, and Om Dream Home are eligible for 70% to 80% bank financing from leading lenders like SBI, HDFC, ICICI, and PNB.',
  },
  {
    question: 'What is the registry and mutation process in Jhajjar Tehsil?',
    answer:
      'Upon clearance of full plot consideration, a registered sale deed is executed in the Sub-Registrar office at Jhajjar Tehsil. The title is then officially entered into the revenue records through Mutation (Dakhil Kharij) in the buyer’s name.',
  },
];

export default function HomePage() {
  const projects = getAllProjects();

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.jhajjarplots.com' },
    { name: 'Plots in Jhajjar', url: 'https://www.jhajjarplots.com' },
  ];

  return (
    <>
      <LocalBusinessStructuredData />
      <FaqStructuredData faqs={homeFaqs} />
      <BreadcrumbStructuredData items={breadcrumbs} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Hero Section */}
        <HeroBanner projects={projects} />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 space-y-14 sm:space-y-20">
          {/* Section: Featured Projects Grid */}
          <section id="featured-plots">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 border border-amber-300 px-3 py-1 rounded-full inline-block mb-2">
                  Prime Verified Inventory
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Featured Plotted Developments in Jhajjar
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Compare rates, master plans, plot sizes & legal approvals across Sector 1 and Sector 25.
                </p>
              </div>
              <div className="text-xs text-slate-500 shrink-0 font-medium">
                Showing <strong className="text-slate-900">3 Approved Townships</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>

          {/* Section: Side-by-Side Comparison Table (Light Theme) */}
          <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-9 overflow-hidden shadow-lg">
            <div className="mb-6">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                Quick Comparison Matrix
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Reliance MET City vs. Nobel Township vs. Om Dream Home
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Make an informed investment decision based on your budget, timeline, and growth goals.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="py-3.5 px-3 sm:px-4 font-bold">Feature / Parameter</th>
                    <th className="py-3.5 px-3 sm:px-4 font-bold text-amber-700">Reliance MET City</th>
                    <th className="py-3.5 px-3 sm:px-4 font-bold text-emerald-700">Nobel Township</th>
                    <th className="py-3.5 px-3 sm:px-4 font-bold text-sky-700">Om Dream Home</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Location</td>
                    <td className="py-3 px-3 sm:px-4 font-medium">Sector 1, Jhajjar</td>
                    <td className="py-3 px-3 sm:px-4 font-medium">Sector 1, Jhajjar</td>
                    <td className="py-3 px-3 sm:px-4 font-medium">Sector 25, Jhajjar</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Total Township Area</td>
                    <td className="py-3 px-3 sm:px-4 font-bold text-amber-700">8,260 Acres (Mega)</td>
                    <td className="py-3 px-3 sm:px-4 font-bold text-emerald-700">210 Acres (Gated)</td>
                    <td className="py-3 px-3 sm:px-4 font-bold text-sky-700">65 Acres (Urban)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Rate per Gaj (Sq.Yd)</td>
                    <td className="py-3 px-3 sm:px-4 font-black text-amber-700">₹1,10,000 / Gaj</td>
                    <td className="py-3 px-3 sm:px-4 font-black text-emerald-700">₹30,000 / Gaj</td>
                    <td className="py-3 px-3 sm:px-4 font-black text-sky-700">₹55,000 / Gaj</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Plot Size Range</td>
                    <td className="py-3 px-3 sm:px-4">150 to 1,000 Gaj</td>
                    <td className="py-3 px-3 sm:px-4">100 to 550 Gaj</td>
                    <td className="py-3 px-3 sm:px-4">100 to 500 Gaj</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Starting Price</td>
                    <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">₹1.65 Crore (150 Gaj)</td>
                    <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">₹30.0 Lakh (100 Gaj)</td>
                    <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">₹55.0 Lakh (100 Gaj)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Key Highlight</td>
                    <td className="py-3 px-3 sm:px-4 text-xs text-slate-600">Reliance subsidiary, MNC corporate hub</td>
                    <td className="py-3 px-3 sm:px-4 text-xs text-slate-600">Most affordable, opposite MET City</td>
                    <td className="py-3 px-3 sm:px-4 text-xs text-slate-600">City center, near civil hospital</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Best Suited For</td>
                    <td className="py-3 px-3 sm:px-4 text-xs text-slate-600">High-net-worth investors & corporate housing</td>
                    <td className="py-3 px-3 sm:px-4 text-xs text-slate-600">High ROI budget buyers & 2x-3x growth seekers</td>
                    <td className="py-3 px-3 sm:px-4 text-xs text-slate-600">Immediate family home construction & end-use</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-600">Explore Details</td>
                    <td className="py-3 px-3 sm:px-4">
                      <Link
                        href="/plots/reliance-met-city-sector-1-jhajjar"
                        className="text-xs font-bold text-amber-700 underline hover:text-amber-800"
                      >
                        View MET City →
                      </Link>
                    </td>
                    <td className="py-3 px-3 sm:px-4">
                      <Link
                        href="/plots/nobel-economic-township-sector-1-jhajjar"
                        className="text-xs font-bold text-emerald-700 underline hover:text-emerald-800"
                      >
                        View Nobel →
                      </Link>
                    </td>
                    <td className="py-3 px-3 sm:px-4">
                      <Link
                        href="/plots/om-dream-home-sector-25-jhajjar"
                        className="text-xs font-bold text-sky-700 underline hover:text-sky-800"
                      >
                        View Om Dream →
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Interactive Calculator */}
          <PriceCalculator projects={projects} />

          {/* Section: Direct Enquiry Form Block */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-700 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Instant Google Sheet Lead Backup
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Request Official Project Brochure & Rate List
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly with our authorized Jhajjar sales team. Every inquiry is logged in our real-time portal, and our senior advisor will contact you within 15 minutes with verified master layouts and circle rate analysis.
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% Freehold DTCP & RERA approved plots</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Zero brokerage direct developer pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Free pick & drop facility for site inspection</span>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm sourcePage="Home Page Direct Section" />
            </div>
          </section>

          {/* Section: Market Analysis Articles */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 border border-amber-300 px-3 py-1 rounded-full inline-block mb-2">
                Market Analysis & Trends
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900">
                Why Plot Investors are Flocking to Jhajjar & Reliance MET City in 2025-2026
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="text-amber-600 font-black">1.</span> Industrial & Corporate Boom
                </h3>
                <p>
                  With Reliance Industries spearheading the 8,260-Acre Model Economic Township, Jhajjar has evolved into one of North India’s premier manufacturing and logistics epicenters. Over 400+ international corporations including Panasonic, Denso, Nihon Kohden, and FM Logistic have set up multi-million-dollar facilities, creating an unprecedented residential housing demand.
                </p>
              </div>

              <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="text-emerald-600 font-black">2.</span> KMP & Rail Infrastructure
                </h3>
                <p>
                  The Western Peripheral Expressway (KMP) provides instant 0-KM freight transit connecting Kundli, Manesar, Palwal, and Delhi. Combined with the upcoming Haryana Orbital Rail Corridor (HORC) passenger line and 20-minute signal-free linkage to New Gurugram & Dwarka Expressway, travel times to Delhi NCR commercial hubs have been slashed by 60%.
                </p>
              </div>

              <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="text-sky-600 font-black">3.</span> Low Entry Barrier & High ROI
                </h3>
                <p>
                  While Gurgaon and Dwarka Expressway plot prices have crossed ₹2.5 to ₹4 Lakh per Gaj, Jhajjar Sector 1 offers entry at just ₹30,000 per Gaj in Nobel Township and ₹1.10 Lakh per Gaj in Reliance MET City. This pricing delta offers early investors 200% to 300% capital gain potential as infrastructure projects mature.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong className="text-amber-800 block mb-1">📐 Land Area Units Quick Reference in Jhajjar:</strong>
              1 Gaj = 1 Sq. Yard = 9 Sq. Feet | 100 Gaj = 900 Sq.Ft | 150 Gaj = 1,350 Sq.Ft | 200 Gaj = 1,800 Sq.Ft | 1 Acre = 4,840 Gaj (43,560 Sq.Ft).
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <FaqAccordion
            faqs={homeFaqs}
            title="Frequently Asked Questions (FAQs) on Jhajjar Plots"
            subtitle="Verified answers on registry, possession, circle rates, and township approvals in Jhajjar, Haryana."
          />

          {/* Section: Free Site Visit Call to Action */}
          <section className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white rounded-3xl p-6 sm:p-12 shadow-xl">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs uppercase font-extrabold tracking-wider bg-white/20 text-white px-3 py-1 rounded-full inline-block backdrop-blur-xs">
                  Free Site Visit Service
                </span>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  Ready to Visit Plots in Jhajjar?
                </h2>
                <p className="text-xs sm:text-sm font-medium text-amber-50 max-w-xl">
                  Book a free complimentary site inspection with our senior property counselor. Pick & drop facility available from Gurgaon & Delhi metro stations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                <a
                  href={getWhatsAppUrl('Hi, I want to book a free site visit for plots in Jhajjar.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all text-center"
                >
                  Book on WhatsApp
                </a>
                <a
                  href={getCallUrl()}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all text-center"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Mobile Sticky Bar for conversion */}
        <MobileStickyBar />
      </main>
    </>
  );
}
