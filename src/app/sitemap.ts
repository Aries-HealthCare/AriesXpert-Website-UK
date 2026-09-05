import { MetadataRoute } from 'next';
import { services } from '@/lib/placeholder-data';
import { UKNations } from '@/lib/locations';
import { citySeoPages } from '@/lib/city-seo-data';
import { locationIndex } from '@/lib/location-index';
import { UK_CITY_HUBS } from '@/lib/uk-geo';
import { CONDITIONS_LIBRARY, TREATMENTS_UNIVERSE } from '@/lib/uk-data';
import { VERIFIED_THERAPISTS_CATALOG } from '@/lib/verified-therapists';
import { ARIES_CLINICS_DIRECTORY } from '@/lib/clinics-data';
import { UK_EXPERTS } from '@/lib/uk-experts';

const BASE_URL = 'https://www.ariesxpert.co.uk';

// Static core pages
const staticPages: Array<{ url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }> = [
    { url: '/', priority: 1.0, changeFrequency: 'daily' },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/surgery-and-rehabilitation', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/conditions', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/treatments', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/experts', priority: 0.85, changeFrequency: 'weekly' },
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
    { url: '/locations/england', priority: 0.92, changeFrequency: 'weekly' },
    { url: '/locations/scotland', priority: 0.92, changeFrequency: 'weekly' },
    { url: '/locations/wales', priority: 0.92, changeFrequency: 'weekly' },
    { url: '/locations/northern-ireland', priority: 0.92, changeFrequency: 'weekly' },
    { url: '/physiotherapy-in-uk', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/work-with-us', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/work-with-us/for-physiotherapists', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/work-with-us/for-corporates', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/work-with-us/for-investors', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/resources', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/technology', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/accessibility', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const seenUrls = new Set<string>();

    // Helper to push deduplicated entries
    const addEntry = (entries: MetadataRoute.Sitemap, entry: MetadataRoute.Sitemap[0]) => {
        if (!seenUrls.has(entry.url)) {
            seenUrls.add(entry.url);
            entries.push(entry);
        }
    };

    // 1. Static Pages
    const staticEntries: MetadataRoute.Sitemap = [];
    staticPages.forEach(({ url, priority, changeFrequency }) => {
        addEntry(staticEntries, {
            url: `${BASE_URL}${url}`,
            lastModified: now,
            changeFrequency,
            priority,
        });
    });

    // 2. Service Pages
    const serviceEntries: MetadataRoute.Sitemap = [];
    services.forEach(service => {
        addEntry(serviceEntries, {
            url: `${BASE_URL}/services/${service.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        });
    });

    // 3. Curated Metropolitan City Landing Pages
    const cityEntries: MetadataRoute.Sitemap = [];
    citySeoPages.forEach(city => {
        addEntry(cityEntries, {
            url: `${BASE_URL}/${city.pageSlug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.92,
        });
    });

    // 4. Regional Directory Hubs (/locations/england/london, etc.)
    const hubEntries: MetadataRoute.Sitemap = [];
    UK_CITY_HUBS.forEach(hub => {
        addEntry(hubEntries, {
            url: `${BASE_URL}/locations/${hub.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.88,
        });
    });

    // 5. Programmatic Area, Authority, Council Area & Locality Pages
    const locationEntries: MetadataRoute.Sitemap = [];
    for (const page of locationIndex) {
        addEntry(locationEntries, {
            url: `${BASE_URL}/${page.pageSlug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: page.type === 'city' ? 0.9 : page.type === 'area' ? 0.85 : 0.8,
        });
    }

    // 6. Clinical Conditions Library
    const conditionEntries: MetadataRoute.Sitemap = [];
    CONDITIONS_LIBRARY.forEach(cond => {
        addEntry(conditionEntries, {
            url: `${BASE_URL}/conditions/${cond.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        });
    });

    // 7. Treatments & Interventions
    const treatmentEntries: MetadataRoute.Sitemap = [];
    TREATMENTS_UNIVERSE.forEach(treatment => {
        addEntry(treatmentEntries, {
            url: `${BASE_URL}/treatments/${treatment.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        });
    });

    // 8. HCPC Experts & Therapists
    const therapistEntries: MetadataRoute.Sitemap = [];
    VERIFIED_THERAPISTS_CATALOG.forEach(th => {
        addEntry(therapistEntries, {
            url: `${BASE_URL}/therapist/${th.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.82,
        });
    });

    UK_EXPERTS.forEach(exp => {
        addEntry(therapistEntries, {
            url: `${BASE_URL}/experts/${exp.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.82,
        });
    });

    // 9. Clinical Hubs / Flagship Clinics
    const clinicEntries: MetadataRoute.Sitemap = [];
    ARIES_CLINICS_DIRECTORY.forEach(clinic => {
        addEntry(clinicEntries, {
            url: `${BASE_URL}/clinic/${clinic.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        });
    });

    // 10. Service + Country/City combinations (e.g. /services/physiotherapy/england/london)
    const serviceLocationEntries: MetadataRoute.Sitemap = [];
    for (const service of services) {
        for (const nation of UKNations) {
            if (!nation.seoEnabled) continue;
            addEntry(serviceLocationEntries, {
                url: `${BASE_URL}/services/${service.slug}/${nation.slug}`,
                lastModified: now,
                changeFrequency: 'weekly',
                priority: 0.82,
            });

            for (const city of nation.cities) {
                if (!city.seoEnabled) continue;
                addEntry(serviceLocationEntries, {
                    url: `${BASE_URL}/services/${service.slug}/${nation.slug}/${city.slug}`,
                    lastModified: now,
                    changeFrequency: 'weekly',
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
        ...conditionEntries,
        ...treatmentEntries,
        ...therapistEntries,
        ...clinicEntries,
        ...serviceLocationEntries,
    ];
}
