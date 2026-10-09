import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Jhajjar Plots - Reliance MET City, Nobel Township & Om Dream Home',
    template: '%s | JhajjarPlots.com',
  },
  description:
    'Verified residential, commercial, and industrial plots in Jhajjar, Sector 1 & Sector 25. Compare Reliance MET City (₹1.10L/Gaj), Nobel Economic Township (₹30k/Gaj), and Om Dream Home (₹55k/Gaj). Immediate registry, DTCP & RERA approved.',
  applicationName: 'Jhajjar Plots Portal',
  authors: [{ name: 'Jhajjar Plots Advisory', url: siteConfig.url }],
  creator: 'Jhajjar Plots Advisory',
  publisher: 'Jhajjar Plots Advisory',
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Jhajjar Plots - Reliance MET City & Gated Society Plots | ₹30k to ₹1.10L/Gaj',
    description:
      'Explore prime residential and commercial plots in Jhajjar starting from ₹30,000/Gaj to ₹1.10 Lakh/Gaj. RERA approved townships with immediate registry & mutation.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Plots in Jhajjar & Reliance MET City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jhajjar Plots - Reliance MET City & Sector 1 Plots',
    description: 'Find verified plots in Jhajjar Haryana. Best rates, clear title, immediate registry.',
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
  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Jhajjar',
    'geo.position': '28.5638;76.7824',
    'ICBM': '28.5638, 76.7824',
    'target-location': 'Jhajjar, Reliance MET City, Badli, Farrukhnagar, Gurugram, Delhi NCR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-white overflow-x-hidden min-w-[320px]">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
