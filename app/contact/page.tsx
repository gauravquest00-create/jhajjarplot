import React from 'react';
import { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
import MobileStickyBar from '@/components/MobileStickyBar';
import { siteConfig, getCallUrl, getWhatsAppUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Jhajjar Plots Advisory - Book Free Site Visit & Consultation',
  description:
    'Contact authorized plot consultants for Reliance MET City Sector 1, Nobel Township, and Om Dream Home Sector 25 Jhajjar. Call +91 88608 27578 or book a free site visit.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-10 px-3 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Reach Out Directly
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact Jhajjar Plot Advisory Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Have questions about plot rates, legal approvals, circle rates, or site inspections? Our team is available 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Details & Office Location */}
          <div className="space-y-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Office Address</h2>
              <address className="not-italic text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>{siteConfig.name} Advisory Center</strong>
                <br />
                {siteConfig.address}
              </address>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3.5">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Direct Contact Channels
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <span className="text-xs text-slate-500 block">Phone Consultation</span>
                  <a href={getCallUrl()} className="text-sm font-bold text-amber-700 hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <span className="text-xs text-slate-500 block">WhatsApp Desk (Instant Reply)</span>
                  <a
                    href={getWhatsAppUrl('Hello! I want assistance regarding plots in Jhajjar.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:underline"
                  >
                    Chat on WhatsApp ({siteConfig.phoneDisplay})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <span className="text-xs text-slate-500 block">Email Inquiries</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-slate-700 hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-500 block mb-1">
                Office Hours
              </span>
              <p className="text-xs text-slate-700">
                Monday to Sunday: 9:00 AM – 7:30 PM (Open all 7 days for site visits)
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <EnquiryForm sourcePage="Contact Page" />
          </div>
        </div>
      </div>
      <MobileStickyBar />
    </main>
  );
}
