export interface LocationDetails {
  sector: string;
  city: string;
  district: string;
  state: string;
  landmark: string;
  fullAddress: string;
  pinCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ProItem {
  title: string;
  description: string;
  icon: string;
}

export interface AdvantageCategory {
  category: string;
  items: string[];
}

export interface ConnectivityItem {
  destination: string;
  distance: string;
  travelTime: string;
}

export interface AmenityItem {
  name: string;
  category: string;
  icon: string;
}

export interface PricingBreakdownItem {
  sizeGaj: number;
  sizeSqFt: number;
  basePrice: string;
  bookingAmount: string;
  estimatedMonthlyEMI: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  badge: string;
  category: string;
  featured: boolean;
  location: LocationDetails;
  ratePerGaj: number;
  ratePerGajText: string;
  totalArea: string;
  plotSizesGaj: number[];
  plotSizesSqFt: number[];
  startingPriceInLakhs: number;
  startingPriceText: string;
  projectType: string;
  reraStatus: string;
  reraNumber: string;
  developer: string;
  possession: string;
  propertyHighlights: string[];
  pros: ProItem[];
  advantages: AdvantageCategory[];
  locationConnectivity: ConnectivityItem[];
  amenities: AmenityItem[];
  masterPlanHighlights: string[];
  pricingBreakdown: PricingBreakdownItem[];
  faqs: FaqItem[];
  seo: SeoMetadata;
}
