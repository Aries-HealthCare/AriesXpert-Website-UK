import { MetadataRoute } from 'next';
import { services } from '@/lib/placeholder-data';
import { UKNations } from '@/lib/locations';
import { citySeoPages } from '@/lib/city-seo-data';
import { locationIndex } from '@/lib/location-index';
import { UK_CITY_HUBS } from '@/lib/uk-geo';

const BASE_URL = 'https://www.ariesxpert.co.uk';

// Static core pages
const staticPages: Array<{ url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }> = [
    { url: '/', priority: 1.0, changeFrequency: 'daily' },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/blogs', priority: 0.8, changeFrequency: 'daily' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/therapist', priority: 0.9, changeFrequency: 'daily' },
    { url: '/clinic', priority: 0.9, changeFrequency: 'daily' },
    { url: '/clinics', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/book-appointment', priority: 0.95, changeFrequency: 'monthly' },
    { url: '/book-assessment', priority: 0.95, changeFrequency: 'monthly' },
    { url: '/free-tele-consultation', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/ai-analysis', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/movement-lab', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/anatomy-lab', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/home-physiotherapy', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/virtual-physiotherapy', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/locations', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/physiotherapy-in-uk', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/accessibility', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // 1. Static Pages
    const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ url, priority, changeFrequency }) => ({
        url: `${BASE_URL}${url}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));

    // 2. Service Pages
    const serviceEntries: MetadataRoute.Sitemap = services.map(service => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Curated Metropolitan City Landing Pages
    const cityEntries: MetadataRoute.Sitemap = citySeoPages.map(city => ({
        url: `${BASE_URL}/${city.pageSlug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.92,
    }));

    // 4. Regional Directory Hubs (/locations/england/london, etc.)
    const hubEntries: MetadataRoute.Sitemap = UK_CITY_HUBS.map(hub => ({
        url: `${BASE_URL}/locations/${hub.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.88,
    }));

    // 5. Programmatic Area, Authority, Council Area & Locality Pages
    const seenUrls = new Set<string>();
    cityEntries.forEach(e => seenUrls.add(e.url));

    const locationEntries: MetadataRoute.Sitemap = [];
    for (const page of locationIndex) {
        const fullUrl = `${BASE_URL}/${page.pageSlug}`;
        if (!seenUrls.has(fullUrl)) {
            seenUrls.add(fullUrl);
            locationEntries.push({
                url: fullUrl,
                lastModified: now,
                changeFrequency: 'weekly' as const,
                priority: page.type === 'city' ? 0.9 : page.type === 'area' ? 0.85 : 0.8,
            });
        }
    }

    // 6. Service + Country/City combinations (e.g. /services/physiotherapy/england/london)
    const serviceLocationEntries: MetadataRoute.Sitemap = [];
    for (const service of services) {
        for (const nation of UKNations) {
            if (!nation.seoEnabled) continue;
            serviceLocationEntries.push({
                url: `${BASE_URL}/services/${service.slug}/${nation.slug}`,
                lastModified: now,
                changeFrequency: 'weekly' as const,
                priority: 0.82,
            });

            for (const city of nation.cities) {
                if (!city.seoEnabled) continue;
                serviceLocationEntries.push({
                    url: `${BASE_URL}/services/${service.slug}/${nation.slug}/${city.slug}`,
                    lastModified: now,
                    changeFrequency: 'weekly' as const,
                    priority: 0.8,
                });
            }
        }
    }

    return [
        ...staticEntries,
        ...serviceEntries,
        ...cityEntries,
        ...hubEntries,
        ...locationEntries,
        ...serviceLocationEntries,
    ];
}
