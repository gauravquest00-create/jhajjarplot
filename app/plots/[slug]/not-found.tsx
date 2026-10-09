import React from 'react';
import Link from 'next/link';

export default function PlotNotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-slate-950 text-white">
      <span className="text-5xl mb-4">🔍</span>
      <h1 className="text-3xl font-extrabold text-white">Property Not Found</h1>
      <p className="text-slate-400 mt-2 max-w-md text-sm">
        The plot or township project you are searching for does not exist or has been relocated.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
        >
          View All Available Plots
        </Link>
        <Link
          href="/contact"
          className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all"
        >
          Contact Advisory Desk
        </Link>
      </div>
    </div>
  );
}
