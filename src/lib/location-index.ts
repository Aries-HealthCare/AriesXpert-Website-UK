import { UKNations, IndianAreaType, IndianCityType, IndianStateType } from './locations';
import { citySeoPages } from './city-seo-data';

export type LocationPageType = 'city' | 'area' | 'subarea';

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

const BASE = 'https://www.ariesxpert.co.uk';

function buildLocationIndex(): LocationPageData[] {
    const pages: LocationPageData[] = [];
    const registeredSlugs = new Set<string>();

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

            // 1. If city itself is not already a dedicated curated city page in city-seo-data, index it here
            const isCuratedCity = citySeoPages.some(c => c.citySlug === city.slug || c.pageSlug === `physiotherapy-in-${city.slug}`);
            const cityPageSlug = `physiotherapy-in-${city.slug}`;

            if (!isCuratedCity && !registeredSlugs.has(cityPageSlug)) {
                registeredSlugs.add(cityPageSlug);
                pages.push({
                    type: 'city',
                    pageSlug: cityPageSlug,
                    locationSlug: city.slug,
                    locationName: city.name,
                    cityName: city.name,
                    citySlug: city.slug,
                    stateName: nation.name,
                    stateSlug: nation.slug,
                    canonicalUrl: `${BASE}/${cityPageSlug}`,
                    metaTitle: `Best In-Home Physiotherapy in ${city.name}, ${nation.name} | AriesXpert UK`,
                    metaDescription: `Chartered in-home physiotherapy across ${city.name}, ${nation.name}. HCPC & CSP registered clinicians, same-day appointments, direct billing to Bupa, AXA Health, Aviva & Vitality.`,
                    keywords: [
                        `physiotherapy in ${city.name.toLowerCase()}`,
                        `home physiotherapy ${city.name.toLowerCase()}`,
                        `physiotherapist near me ${city.name.toLowerCase()}`,
                        `chartered physio ${city.name.toLowerCase()}`,
                        'chartered physiotherapy uk',
                        'private health insurance physiotherapy'
                    ],
                    heroHeading: `In-Home Physiotherapy in ${city.name}`,
                    heroSubheading: `Hospital-grade chartered physical therapy delivered directly to your doorstep in ${city.name}, ${nation.name}. Statutory HCPC and CSP registered clinicians.`,
                    nearbyAreas: siblingAreas.slice(0, 8),
                });
            }

            // 2. Index each Area (Borough, Council Area, Unitary Authority, Town)
            for (const area of city.areas) {
                if (!area.seoEnabled) continue;

                const areaPageSlug = `physiotherapy-in-${area.slug}`;
                if (!registeredSlugs.has(areaPageSlug)) {
                    registeredSlugs.add(areaPageSlug);
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
                        metaTitle: `Best In-Home Physiotherapy in ${area.name}, ${nation.name} | AriesXpert UK`,
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
                        nearbyAreas: siblingAreas.filter(a => a.slug !== area.slug).slice(0, 8),
                    });
                }

                // 3. Index each Sub-Area / Locality / Ward
                if (area.subAreas) {
                    const siblingSubAreas = area.subAreas
                        .filter(s => s.seoEnabled)
                        .map(s => ({
                            name: s.name,
                            slug: s.slug,
                            pageSlug: `physiotherapy-in-${s.slug}`,
                        }));

                    for (const sub of area.subAreas) {
                        if (!sub.seoEnabled) continue;
                        const subPageSlug = `physiotherapy-in-${sub.slug}`;

                        if (!registeredSlugs.has(subPageSlug)) {
                            registeredSlugs.add(subPageSlug);
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
                                metaTitle: `In-Home Physiotherapy in ${sub.name}, ${area.name} | AriesXpert UK`,
                                metaDescription: `Chartered home physiotherapy in ${sub.name}, ${area.name}, ${city.name}. HCPC registered practitioners, same-day clinical visits, direct insurance billing (Bupa, AXA, Aviva).`,
                                keywords: [
                                    `physiotherapy in ${sub.name.toLowerCase()}`,
                                    `home physio ${sub.name.toLowerCase()}`,
                                    `physiotherapist near me ${sub.name.toLowerCase()}`,
                                    `physio ${sub.name.toLowerCase()}`
                                ],
                                heroHeading: `Home Physiotherapy in ${sub.name}`,
                                heroSubheading: `Specialized rehabilitation in ${sub.name}, ${area.name}. HCPC & CSP registered practitioners.`,
                                nearbyAreas: siblingSubAreas.filter(s => s.slug !== sub.slug).slice(0, 8),
                            });
                        }
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
    locationMap.set(page.pageSlug.toLowerCase(), page);
    locationMap.set(page.locationSlug.toLowerCase(), page);
}

export function getLocationPageData(slug: string): LocationPageData | undefined {
    if (!slug) return undefined;
    const cleanSlug = slug.toLowerCase();
    return locationMap.get(cleanSlug);
}

export function getAllLocationPageSlugs(): string[] {
    return locationIndex.map(p => p.pageSlug);
}

export { locationIndex };
