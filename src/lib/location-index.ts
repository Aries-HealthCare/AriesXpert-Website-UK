import { UKNations, IndianAreaType, IndianCityType, IndianStateType } from './locations';

export type LocationPageType = 'area' | 'subarea';

export interface LocationPageData {
    type: LocationPageType;
    pageSlug: string;
    locationSlug: string;
    locationName: string;
    cityName: string;
    citySlug: string;
    stateName: string;
    stateSlug: string;
    areaName?: string;
    areaSlug?: string;
    canonicalUrl: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroHeading: string;
    heroSubheading: string;
    nearbyAreas: { name: string; slug: string; pageSlug: string }[];
}

const BASE = 'https://uk.ariesphysiocare.com';

function buildLocationIndex(): LocationPageData[] {
    const pages: LocationPageData[] = [];

    for (const nation of UKNations) {
        if (!nation.seoEnabled) continue;

        for (const city of nation.cities) {
            if (!city.seoEnabled) continue;

            const siblingAreas = city.areas
                .filter(a => a.seoEnabled)
                .map(a => ({
                    name: a.name,
                    slug: a.slug,
                    pageSlug: `physiotherapy-in-${a.slug}`,
                }));

            for (const area of city.areas) {
                if (!area.seoEnabled) continue;

                const areaPageSlug = `physiotherapy-in-${area.slug}`;

                pages.push({
                    type: 'area',
                    pageSlug: areaPageSlug,
                    locationSlug: area.slug,
                    locationName: area.name,
                    cityName: city.name,
                    citySlug: city.slug,
                    stateName: nation.name,
                    stateSlug: nation.slug,
                    canonicalUrl: `${BASE}/${areaPageSlug}`,
                    metaTitle: `Best In-Home Physiotherapy in ${area.name}, ${city.name} | Aries PhysioCare UK`,
                    metaDescription: `Expert chartered physiotherapy at home in ${area.name}, ${city.name}. HCPC & CSP registered clinicians, private medical insurance direct billing (Bupa, AXA Health, Aviva). Same-day visits.`,
                    keywords: [
                        `physiotherapy in ${area.name.toLowerCase()}`,
                        `home physiotherapy ${area.name.toLowerCase()}`,
                        `physiotherapist near me ${area.name.toLowerCase()}`,
                        `physiotherapy ${city.name.toLowerCase()}`,
                        'chartered physiotherapy uk',
                        'private health insurance physiotherapy'
                    ],
                    heroHeading: `In-Home Physiotherapy in ${area.name}`,
                    heroSubheading: `Hospital-grade chartered physical therapy delivered to your doorstep in ${area.name}, ${city.name}. Registered with HCPC and CSP.`,
                    nearbyAreas: siblingAreas.filter(a => a.slug !== area.slug),
                });

                if (area.subAreas) {
                    for (const sub of area.subAreas) {
                        if (!sub.seoEnabled) continue;
                        const subPageSlug = `physiotherapy-in-${sub.slug}`;
                        pages.push({
                            type: 'subarea',
                            pageSlug: subPageSlug,
                            locationSlug: sub.slug,
                            locationName: sub.name,
                            cityName: city.name,
                            citySlug: city.slug,
                            stateName: nation.name,
                            stateSlug: nation.slug,
                            areaName: area.name,
                            areaSlug: area.slug,
                            canonicalUrl: `${BASE}/${subPageSlug}`,
                            metaTitle: `In-Home Physiotherapy in ${sub.name}, ${area.name} | Aries PhysioCare UK`,
                            metaDescription: `Chartered home physiotherapy in ${sub.name}, ${area.name}, ${city.name}. HCPC registered practitioners, same-day clinical visits.`,
                            keywords: [`physiotherapy in ${sub.name.toLowerCase()}`, `physio ${sub.name.toLowerCase()}`],
                            heroHeading: `Home Physiotherapy in ${sub.name}`,
                            heroSubheading: `Specialized rehabilitation in ${sub.name}, ${area.name}. HCPC & CSP registered practitioners.`,
                            nearbyAreas: siblingAreas,
                        });
                    }
                }
            }
        }
    }

    return pages;
}

const locationIndex = buildLocationIndex();
const locationMap = new Map<string, LocationPageData>();
for (const page of locationIndex) {
    locationMap.set(page.pageSlug, page);
    locationMap.set(page.locationSlug, page);
}

export function getLocationPageData(slug: string): LocationPageData | undefined {
    return locationMap.get(slug);
}

export function getAllLocationPageSlugs(): string[] {
    return locationIndex.map(p => p.pageSlug);
}

export { locationIndex };
