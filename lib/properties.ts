import { Property } from '@/types/property';
import rawProjects from '@/data/projects.json';

const projects: Property[] = rawProjects as Property[];

export function getAllProjects(): Property[] {
  return projects;
}

export function getProjectBySlug(slug: string): Property | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Property[] {
  return projects.filter((p) => p.featured);
}

export function getOtherProjects(currentSlug: string): Property[] {
  return projects.filter((p) => p.slug !== currentSlug);
}

export function getProjectsBySector(sector: string): Property[] {
  return projects.filter((p) => p.location.sector.toLowerCase() === sector.toLowerCase());
}

export function formatINR(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr} Cr`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return `₹${lakh} Lakh`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function convertGajToSqFt(gaj: number): number {
  return gaj * 9;
}

export function convertSqFtToGaj(sqFt: number): number {
  return Math.round(sqFt / 9);
}
