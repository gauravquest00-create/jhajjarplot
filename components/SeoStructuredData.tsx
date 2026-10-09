import React from 'react';
import { Property, FaqItem } from '@/types/property';
import { siteConfig } from '@/lib/site';

interface RealEstateSchemaProps {
  property: Property;
}

export function RealEstateStructuredData({ property }: RealEstateSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    'name': property.title,
    'description': property.seo.metaDescription,
    'url': property.seo.canonicalUrl,
    'datePosted': '2025-01-01',
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'INR',
      'lowPrice': property.startingPriceInLakhs * 100000,
      'highPrice': property.startingPriceInLakhs * 100000 * 4,
      'offerCount': property.plotSizesGaj.length,
      'price': property.startingPriceInLakhs * 100000,
      'unitText': 'Gaj / Sq.Yard',
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'price': property.ratePerGaj,
        'priceCurrency': 'INR',
        'unitCode': 'SQYD',
        'unitText': 'per Gaj',
      },
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'RealEstateAgent',
        'name': `${siteConfig.shortName} Advisory Desk`,
        'telephone': `+${siteConfig.phone}`,
        'url': siteConfig.url,
      },
    },
    'about': {
      '@type': 'Place',
      'name': property.title,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': property.location.fullAddress,
        'addressLocality': property.location.sector,
        'addressRegion': property.location.district,
        'postalCode': property.location.pinCode,
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': property.location.coordinates.lat,
        'longitude': property.location.coordinates.lng,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FaqSchemaProps {
  faqs: FaqItem[];
}

export function FaqStructuredData({ faqs }: FaqSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbStructuredData({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    'name': `${siteConfig.name} - Reliance MET City & Jhajjar Plot Advisory`,
    'description':
      'Premier property advisory for residential, industrial and commercial plots in Reliance MET City Sector 1, Nobel Economic Township, and Om Dream Home Sector 25 Jhajjar.',
    'url': siteConfig.url,
    'logo': `${siteConfig.url}/icon.svg`,
    'telephone': `+${siteConfig.phone}`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': siteConfig.address,
      'addressLocality': 'Jhajjar',
      'addressRegion': 'Haryana',
      'postalCode': '124103',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 28.5638,
      'longitude': 76.7824,
    },
    'openingHours': 'Mo-Su 09:00-20:00',
    'priceRange': '₹₹ - ₹₹₹₹',
    'areaServed': [
      'Jhajjar',
      'Reliance MET City',
      'Sector 1 Jhajjar',
      'Sector 25 Jhajjar',
      'Badli',
      'Farrukhnagar',
      'Gurugram',
      'Delhi-NCR',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
