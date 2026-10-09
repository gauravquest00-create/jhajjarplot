import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug, getOtherProjects, formatINR, convertGajToSqFt } from '@/lib/properties';
import { siteConfig, getCallUrl } from '@/lib/site';
import {
  RealEstateStructuredData,
  FaqStructuredData,
  BreadcrumbStructuredData,
} from '@/components/SeoStructuredData';
import FaqAccordion from '@/components/FaqAccordion';
import PriceCalculator from '@/components/PriceCalculator';
import EnquiryForm from '@/components/EnquiryForm';
import PropertyCard from '@/components/PropertyCard';
import MobileStickyBar from '@/components/MobileStickyBar';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Plot Not Found | JhajjarPlots.com',
      description: 'The requested plot project in Jhajjar was not found.',
    };
  }

  const { metaTitle, metaDescription, keywords, canonicalUrl } = project.seo;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function PlotDetailsPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const otherProjects = getOtherProjects(project.slug);

  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Plots in Jhajjar', url: `${siteConfig.url}/#featured-plots` },
    { name: project.shortName, url: project.seo.canonicalUrl },
  ];

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(
    `Hello, I am interested in booking a plot in ${project.title} (${project.ratePerGajText}). Please send me the latest master layout plan, available inventory, and schedule a site visit.`
  )}`;

  return (
    <>
      <RealEstateStructuredData property={project} />
      <FaqStructuredData faqs={project.faqs} />
      <BreadcrumbStructuredData items={breadcrumbs} />

      <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Breadcrumb Navigation Bar */}
        <div className="bg-white border-b border-slate-200 text-xs text-slate-500 py-3 px-3 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/#featured-plots" className="hover:text-amber-600">
              Plots in Jhajjar
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{project.shortName}</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="relative bg-gradient-to-b from-white via-amber-50/20 to-slate-50 border-b border-slate-200 pt-8 pb-10 sm:py-14 px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Badges Strip */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                📍 {project.location.sector}, {project.location.city}
              </span>
              <span className="bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full">
                ✓ {project.reraStatus}
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs">
                📐 {project.totalArea} Total Land
              </span>
              <span className="bg-sky-100 border border-sky-300 text-sky-900 text-xs font-bold px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left 2 Cols: Main Info */}
              <div className="lg:col-span-2 space-y-4">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed">
                  {project.tagline}
                </p>

                {/* Key Metric Highlights Box */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                  <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">Rate per Gaj</span>
                    <span className="text-xl sm:text-2xl font-black text-amber-600">
                      {project.ratePerGajText}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">₹{(project.ratePerGaj / 9).toFixed(0)}/sq.ft</span>
                  </div>

                  <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">Starting Budget</span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900">
                      {project.startingPriceText}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">10% Booking Token</span>
                  </div>

                  <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">Plot Sizes</span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {project.plotSizesGaj[0]} - {project.plotSizesGaj[project.plotSizesGaj.length - 1]} Gaj
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{convertGajToSqFt(project.plotSizesGaj[0])}+ Sq.Ft</span>
                  </div>

                  <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">Legal Status</span>
                    <span className="text-sm sm:text-base font-bold text-emerald-700">
                      Freehold Title
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Immediate Registry</span>
                  </div>
                </div>

                {/* Quick Call to Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all text-center"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-2.029-.494-1.636-.677-2.704-2.339-2.787-2.451-.084-.112-.664-.883-.664-1.682 0-.8.419-1.192.569-1.353.15-.162.33-.203.441-.203.111 0 .222.002.319.006.104.004.243-.039.38.29.144.343.491 1.196.534 1.283.043.087.072.189.014.303-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.104.179.462.763.992 1.235.683.608 1.258.796 1.437.885.179.088.283.074.388-.046.105-.121.452-.527.573-.707.121-.18.242-.151.405-.091.163.061 1.034.488 1.212.576.178.088.298.132.342.206.044.074.044.432-.1.837z" />
                    </svg>
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <a
                    href={getCallUrl()}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all text-center"
                  >
                    <span>📞 Call Advisor: {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Right Col: Instant Enquiry Form */}
              <div className="lg:col-span-1">
                <EnquiryForm project={project.title} sourcePage={`Plot Details - ${project.shortName}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-10 space-y-12 sm:space-y-16">
          {/* Section 1: Overview & Project Highlights */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm">
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">
              Project Overview & Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Located at {project.location.fullAddress}, {project.title} stands out as a high-demand plotted development. Offering freehold plots with complete legal sanctions from DTCP Haryana and RERA, this project caters to both discerning investors looking for exponential capital appreciation and homebuyers planning independent house construction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.propertyHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{hl}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Pros & Key Investment Strengths */}
          <section>
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full inline-block mb-2">
                Why Buy Here
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Pros & Key Advantages
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl mx-auto">
                Discover the key strategic drivers that make {project.shortName} the most compelling plotted development in Jhajjar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.pros.map((pro, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-amber-400 p-6 rounded-2xl transition-all shadow-xs hover:shadow-md group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center font-bold text-lg mb-3 group-hover:scale-105 transition-transform">
                    ★
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                    {pro.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {pro.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Deep Categorized Advantages */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 tracking-tight">
              Detailed Advantage Breakdown for {project.shortName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.advantages.map((adv, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <h3 className="text-sm sm:text-base font-bold text-amber-800 border-b border-slate-200 pb-2">
                    {adv.category}
                  </h3>
                  <ul className="space-y-2.5">
                    {adv.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <span className="text-amber-600 shrink-0 font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Location & Strategic Connectivity */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                Prime Location
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Location & Travel Distance Highlights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Landmark: {project.location.landmark} | Full Address: {project.location.fullAddress}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {project.locationConnectivity.map((conn, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{conn.destination}</span>
                    <span className="text-[11px] text-slate-500">{conn.travelTime} drive</span>
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    {conn.distance}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Plot Sizes & Pricing Breakdown Table */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm overflow-hidden">
            <div className="mb-6">
              <span className="text-xs font-bold text-sky-800 bg-sky-100 border border-sky-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                Transparent Pricing
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Plot Sizes & Price List for {project.shortName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Rate: <strong className="text-amber-700">{project.ratePerGajText}</strong>. All prices include base land cost.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="py-3 px-3 sm:px-4 font-bold">Plot Size (Gaj)</th>
                    <th className="py-3 px-3 sm:px-4 font-bold">Area (Sq. Ft)</th>
                    <th className="py-3 px-3 sm:px-4 font-bold">Total Cost</th>
                    <th className="py-3 px-3 sm:px-4 font-bold">10% Booking Token</th>
                    <th className="py-3 px-3 sm:px-4 font-bold">Est. Monthly EMI</th>
                    <th className="py-3 px-3 sm:px-4 font-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {project.pricingBreakdown.map((row) => (
                    <tr key={row.sizeGaj} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-3 sm:px-4 font-extrabold text-amber-700">
                        {row.sizeGaj} Gaj
                      </td>
                      <td className="py-3.5 px-3 sm:px-4">{row.sizeSqFt} Sq.Ft</td>
                      <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">{row.basePrice}</td>
                      <td className="py-3.5 px-3 sm:px-4 text-slate-600">{row.bookingAmount}</td>
                      <td className="py-3.5 px-3 sm:px-4 text-emerald-700 font-semibold">{row.estimatedMonthlyEMI}</td>
                      <td className="py-3.5 px-3 sm:px-4 text-center">
                        <a
                          href={`https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(
                            `Hi, I want to book ${row.sizeGaj} Gaj plot in ${project.title} for ${row.basePrice}. Please confirm availability.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[11px] font-bold px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                        >
                          Book Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 mt-3">
              *GST, Stamp Duty, and Registration charges as per Haryana Government Tehsil rules at actuals.
            </p>
          </section>

          {/* Section 6: Interactive Plot Calculator */}
          <PriceCalculator projects={allProjects} defaultProjectSlug={project.slug} />

          {/* Section 7: Amenities & Infrastructure Specifications */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 tracking-tight">
              Township Infrastructure & Amenities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {project.amenities.map((amenity, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">
                    ⚡
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{amenity.name}</span>
                    <span className="text-[10px] text-slate-500">{amenity.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: FAQs */}
          <FaqAccordion
            faqs={project.faqs}
            title={`Frequently Asked Questions about ${project.shortName}`}
            subtitle={`Get all facts regarding price, RERA approval, bank loans, and possession for ${project.title}.`}
          />

          {/* Section 9: Other Projects Cross-Link Section for SEO */}
          <section className="pt-4 border-t border-slate-200">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Compare with Other Plots in Jhajjar
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore adjacent projects in Sector 1 & Sector 25 Jhajjar matching your budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        </div>

        {/* Mobile Sticky Bar for conversion */}
        <MobileStickyBar propertyName={project.title} />
      </main>
    </>
  );
}
