export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  sheetUrl: string;
  email: string;
  address: string;
}

export const siteConfig: SiteConfig = {
  name: 'JhajjarPlots.com',
  shortName: 'Jhajjar Plots',
  tagline: 'Verified Residential & Commercial Plots in Jhajjar & Reliance MET City',
  url: 'https://www.jhajjarplots.com',
  phone: '918860827578',
  phoneDisplay: '+91 88608 27578',
  sheetUrl:
    process.env.NEXT_PUBLIC_SHEET_URL ||
    'https://script.google.com/macros/s/AKfycbz1lZx0IPy322FjMpB-2ZttKZTauds-X3uHRnN0NEWN_o4uO51kJ5JEmrje1oUHeE-FWg/exec',
  email: 'info@jhajjarplots.com',
  address: 'Opposite Reliance MET City Gate No. 1, Sector 1, Jhajjar - Gurugram Road, Haryana 124103',
};

export function getWhatsAppUrl(message?: string): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent('Hi, I am interested in buying plots in Jhajjar / Reliance MET City. Please share options and price details.');
  return `https://wa.me/${siteConfig.phone}?text=${text}`;
}

export function getCallUrl(): string {
  return `tel:+${siteConfig.phone}`;
}
