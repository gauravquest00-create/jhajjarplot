'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/lib/site';

interface EnquiryFormProps {
  project?: string;
  defaultBudget?: string;
  sourcePage?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function EnquiryForm({
  project = 'Reliance MET City Sector 1',
  defaultBudget = '30-60 Lakh',
  sourcePage,
  className = '',
  title = 'Book Free Site Visit & Get Price Sheet',
  subtitle = 'Get instant layout maps, circle rates, and availability on WhatsApp.',
}: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState(defaultBudget);
  const [selectedProject, setSelectedProject] = useState(project);
  const [consent, setConsent] = useState(true);
  const [website, setWebsite] = useState(''); // Honeypot field
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');

  const waMessage = `Hi, I submitted an enquiry for ${selectedProject || 'plots in Jhajjar'}:\n• Name: ${name.trim()}\n• Phone: ${phone.trim()}\n• Budget: ${budget}\n• Project: ${selectedProject || 'General'}`;
  const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(waMessage)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: bots fill this field; legitimate users do not
    if (website) {
      console.warn('Bot submission blocked.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');

    if (!consent) {
      alert('Please check the consent box to proceed.');
      return;
    }

    const sheetUrl =
      process.env.NEXT_PUBLIC_SHEET_URL ||
      siteConfig.sheetUrl ||
      'https://script.google.com/macros/s/AKfycbz1lZx0IPy322FjMpB-2ZttKZTauds-X3uHRnN0NEWN_o4uO51kJ5JEmrje1oUHeE-FWg/exec';

    const payload = {
      name: name.trim(),
      phone: cleanPhone,
      budget: budget || 'General',
      project: selectedProject || 'General',
      page: typeof window !== 'undefined' ? window.location.href : (sourcePage || 'Website'),
      website: website,
    };

    try {
      setStatus('loading');
      await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      // In "no-cors" mode the fetch resolves successfully once sent
      setStatus('success');
    } catch (err) {
      console.error('Failed to submit enquiry to sheet:', err);
      setStatus('error');
    }
  };

  return (
    <div
      className={`bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl shadow-slate-200/50 transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="mb-5">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Direct Developer Advisory
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Success State */}
      {status === 'success' && (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <div className="space-y-1">
            <p className="font-extrabold text-emerald-900 text-base sm:text-lg">
              Thanks, your enquiry is saved
            </p>
            <p className="text-xs text-emerald-700">
              Our Jhajjar property advisor will contact you shortly. You can also chat directly on WhatsApp:
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.058-2.029-.494-1.636-.677-2.704-2.339-2.787-2.451-.084-.112-.664-.883-.664-1.682 0-.8.419-1.192.569-1.353.15-.162.33-.203.441-.203.111 0 .222.002.319.006.104.004.243-.039.38.29.144.343.491 1.196.534 1.283.043.087.072.189.014.303-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.104.179.462.763.992 1.235.683.608 1.258.796 1.437.885.179.088.283.074.388-.046.105-.121.452-.527.573-.707.121-.18.242-.151.405-.091.163.061 1.034.488 1.212.576.178.088.298.132.342.206.044.074.044.432-.1.837z" />
            </svg>
            <span>Continue on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-1"
          >
            Submit another enquiry
          </button>
        </div>
      )}

      {/* Error State */}
      {status === 'error' && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-3 animate-fadeIn">
          <p className="font-bold text-amber-900 text-sm">
            Notice: Online sheet backup is currently delayed.
          </p>
          <p className="text-xs text-amber-800">
            You can still send your enquiry directly to our team via WhatsApp:
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-2.5 px-4 rounded-xl shadow transition-all"
          >
            <span>Send it on WhatsApp instead →</span>
          </a>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-xs text-slate-500 underline block mx-auto"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Form State */}
      {status !== 'success' && status !== 'error' && (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Off-screen Honeypot input (must stay empty; tabIndex -1) */}
          <div
            style={{
              position: 'absolute',
              left: '-9999px',
              top: '-9999px',
              opacity: 0,
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          >
            <label htmlFor="enquiry-website">Website</label>
            <input
              id="enquiry-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="enquiry-name" className="block text-xs font-semibold text-slate-700 mb-1">
              Your Full Name *
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Number (10 Digits) *
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                +91
              </span>
              <input
                id="enquiry-phone"
                type="tel"
                required
                maxLength={10}
                placeholder="9876543210"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, ''));
                  setPhoneError('');
                }}
                className={`w-full bg-slate-50 border ${
                  phoneError ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                } rounded-xl pl-12 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-mono`}
              />
            </div>
            {phoneError && (
              <p className="text-[11px] text-red-600 mt-1 font-medium">{phoneError}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="enquiry-project" className="block text-xs font-semibold text-slate-700 mb-1">
                Project
              </label>
              <select
                id="enquiry-project"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
              >
                <option value="Reliance MET City Sector 1">Reliance MET City (₹1.10L/Gaj)</option>
                <option value="Nobel Economic Township Sector 1">Nobel Township (₹30k/Gaj)</option>
                <option value="Om Dream Home Sector 25">Om Dream Home (₹55k/Gaj)</option>
                <option value="General">All Jhajjar Plots</option>
              </select>
            </div>

            <div>
              <label htmlFor="enquiry-budget" className="block text-xs font-semibold text-slate-700 mb-1">
                Budget
              </label>
              <select
                id="enquiry-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
              >
                <option value="Under 30 Lakh">Under ₹30 Lakh</option>
                <option value="30-60 Lakh">₹30 Lakh - ₹60 Lakh</option>
                <option value="60 Lakh - 1.2 Crore">₹60 Lakh - ₹1.2 Cr</option>
                <option value="Above 1.2 Crore">Above ₹1.2 Crore</option>
              </select>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer text-slate-600 select-none">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
              />
              <span className="text-[11px] leading-tight">
                I agree to be contacted via Call or WhatsApp regarding plot prices, layout maps, and site visits.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-60 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Saving Enquiry...
              </span>
            ) : (
              <span>🚀 Submit & Lock Best Plot Price</span>
            )}
          </button>

          <p className="text-[10px] text-center text-slate-500">
            🔒 100% Privacy. Zero Spam. Authorized Jhajjar & MET City Direct Advisory.
          </p>
        </form>
      )}
    </div>
  );
}
