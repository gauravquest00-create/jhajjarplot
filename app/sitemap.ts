import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/properties';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jhajjarplots.com';
  const projects = getAllProjects();

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/plots/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.95,
  }));

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...projectUrls];
}
