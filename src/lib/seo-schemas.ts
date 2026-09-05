/**
 * SEO Schema Utilities for AriesXpert UK
 * Generates JSON-LD structured data for various page types
 */

export const BASE_URL = 'https://www.ariesxpert.co.uk';
export const ORG_PHONE = '+44-800-274-3785';
export const ORG_PHONE_DISPLAY = '0800 274 3785';
export const ORG_WHATSAPP = '+44-800-274-3785';
export const ORG_EMAIL = 'support@ariesxpert.co.uk';
export const ORG_ADDRESS = {
    '@type': 'PostalAddress',
    streetAddress: 'Level 32, 1 Canada Square',
    addressLocality: 'Canary Wharf, London',
    addressRegion: 'Greater London',
    postalCode: 'E14 5AA',
    addressCountry: 'GB',
};

// ─────────────────────────────────────────────────
// Organization Schema (used on homepage + about page)
// ─────────────────────────────────────────────────
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'MedicalOrganization'],
        name: 'AriesXpert UK',
        legalName: 'Aries HealthCare (UK) Ltd',
        url: BASE_URL,
        logo: `${BASE_URL}/logo.png`,
        telephone: ORG_PHONE,
        email: ORG_EMAIL,
        foundingDate: '2020',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 150 },
        address: ORG_ADDRESS,
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        sameAs: [
            'https://facebook.com/ariesxpertuk',
            'https://instagram.com/ariesxpertuk',
            'https://twitter.com/ariesxpertuk',
            'https://linkedin.com/company/ariesxpert-uk',
            'https://youtube.com/@ariesxpertuk',
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: ORG_PHONE,
                contactType: 'customer service',
                areaServed: 'GB',
                availableLanguage: ['English'],
                hoursAvailable: [
                    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
                    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '17:00' },
                ],
            },
        ],
    };
}

// ─────────────────────────────────────────────────
// WebSite Schema (homepage)
// ─────────────────────────────────────────────────
export function getWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AriesXpert UK',
        url: BASE_URL,
        description: 'HCPC-registered mobile and clinic physiotherapy and healthcare services across the United Kingdom',
        potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/resources?q={search_term_string}` },
            'query-input': 'required name=search_term_string',
        },
    };
}

// ─────────────────────────────────────────────────
// LocalBusiness Schema (city/location pages)
// ─────────────────────────────────────────────────
export function getLocalBusinessSchema(params: {
    name: string;
    description: string;
    city: string;
    state: string;
    postalCode?: string;
    url: string;
    imageUrl?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
        name: params.name,
        description: params.description,
        url: params.url,
        telephone: ORG_PHONE,
        email: ORG_EMAIL,
        image: params.imageUrl || `${BASE_URL}/og-image.jpg`,
        priceRange: '££',
        address: {
            '@type': 'PostalAddress',
            addressLocality: params.city,
            addressRegion: params.state,
            postalCode: params.postalCode || '',
            addressCountry: 'GB',
        },
        geo: { '@type': 'GeoCoordinates' },
        openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '17:00' },
        ],
        hasMap: `https://www.google.co.uk/maps/search/physiotherapy+${encodeURIComponent(params.city)}`,
        areaServed: {
            '@type': 'City',
            name: params.city,
        },
        parentOrganization: {
            '@type': 'Organization',
            name: 'AriesXpert UK',
            url: BASE_URL,
        },
    };
}

// ─────────────────────────────────────────────────
// HealthcareService Schema (service pages)
// ─────────────────────────────────────────────────
export function getHealthcareServiceSchema(params: {
    name: string;
    description: string;
    url: string;
    imageUrl?: string;
    city?: string;
    state?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'HealthcareService',
        name: params.name,
        description: params.description,
        url: params.url,
        image: params.imageUrl || `${BASE_URL}/og-image.jpg`,
        telephone: ORG_PHONE,
        provider: {
            '@type': 'MedicalOrganization',
            name: 'AriesXpert UK',
            url: BASE_URL,
        },
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: params.url,
            servicePhone: ORG_PHONE,
        },
        areaServed: params.city
            ? { '@type': 'City', name: params.city }
            : { '@type': 'Country', name: 'United Kingdom' },
        serviceType: 'Physiotherapy',
    };
}

// ─────────────────────────────────────────────────
// Physician Schema (therapist/doctor pages)
// ─────────────────────────────────────────────────
export function getPhysicianSchema(params: {
    name: string;
    qualification: string;
    experience: string;
    specialization: string;
    areas: string[];
    slug: string;
    imageUrl?: string;
    rating?: number;
    reviewCount?: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': ['Person', 'Physician', 'MedicalBusiness'],
        name: params.name,
        jobTitle: `${params.qualification} - ${params.specialization}`,
        description: `${params.name} is a certified HCPC-registered physiotherapist with ${params.experience} of experience, specializing in ${params.specialization}.`,
        url: `${BASE_URL}/therapist/${params.slug}`,
        image: params.imageUrl || `${BASE_URL}/og-image.jpg`,
        telephone: ORG_PHONE,
        worksFor: {
            '@type': 'MedicalOrganization',
            name: 'AriesXpert UK',
            url: BASE_URL,
        },
        areaServed: params.areas.map(a => ({ '@type': 'Place', name: a })),
        medicalSpecialty: params.specialization,
        ...(params.rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: params.rating,
                reviewCount: params.reviewCount || 50,
                bestRating: 5,
                worstRating: 1,
            },
        }),
    };
}

// ─────────────────────────────────────────────────
// MedicalClinic Schema (clinic pages)
// ─────────────────────────────────────────────────
export function getMedicalClinicSchema(params: {
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    slug: string;
    mapUrl?: string;
    phone?: string;
    rating?: number;
    reviewCount?: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': ['MedicalClinic', 'LocalBusiness', 'HealthcareService'],
        name: params.name,
        description: params.description,
        url: `${BASE_URL}/clinic/${params.slug}`,
        telephone: params.phone || ORG_PHONE,
        email: ORG_EMAIL,
        address: {
            '@type': 'PostalAddress',
            streetAddress: params.address,
            addressLocality: params.city,
            addressRegion: params.state,
            addressCountry: 'GB',
        },
        hasMap: params.mapUrl || `https://maps.google.co.uk/?q=${encodeURIComponent(params.name + ' ' + params.city)}`,
        parentOrganization: {
            '@type': 'MedicalOrganization',
            name: 'AriesXpert UK',
            url: BASE_URL,
        },
        openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '17:00' },
        ],
        ...(params.rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: params.rating,
                reviewCount: params.reviewCount || 100,
                bestRating: 5,
                worstRating: 1,
            },
        }),
    };
}

// ─────────────────────────────────────────────────
// FAQ Schema
// ─────────────────────────────────────────────────
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// ─────────────────────────────────────────────────
// BreadcrumbList Schema
// ─────────────────────────────────────────────────
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'WebPage',
                '@id': item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
                name: item.name,
                url: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
            },
        })),
    };
}

// ─────────────────────────────────────────────────
// Article/Blog Schema
// ─────────────────────────────────────────────────
export function getArticleSchema(params: {
    title: string;
    description: string;
    url: string;
    imageUrl?: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: params.title,
        description: params.description,
        url: params.url,
        image: params.imageUrl || `${BASE_URL}/og-image.jpg`,
        author: {
            '@type': 'Organization',
            name: params.author || 'AriesXpert UK Clinical Team',
            url: BASE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: 'AriesXpert UK',
            logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
        },
        datePublished: params.datePublished || new Date().toISOString(),
        dateModified: params.dateModified || new Date().toISOString(),
    };
}
