import React from 'react';
import type { Metadata } from 'next';
import DieticianClient from './DieticianClient';
import SchemaMarkup from '@/components/seo/schema-markup';
import { services } from '@/lib/placeholder-data';

export const metadata: Metadata = {
    title: 'Clinical Dietitian at Home | Expert Medical Nutrition Therapy | AriesXpert UK',
    description: 'Evidence-based clinical dietitian services at your doorstep. Specialized medical nutrition therapy for diabetes, hypertension, weight management, and post-surgery recovery across London, Manchester, and major UK cities.',
    keywords: [
        'clinical dietician at home',
        'medical nutrition therapy',
        'dietician for diabetes',
        'nutrition for hypertension',
        'weight loss clinical program',
        'heart healthy diet plan',
        'home nutrition consultation'
    ],
    openGraph: {
        title: 'Professional Medical Nutrition Therapy at Your Doorstep',
        description: 'Master your metabolic health with our expert clinical dietitians. Personalized, science-backed nutrition plans delivered in your home.',
        url: 'https://www.ariesxpert.co.uk/services/dietician',
        images: [{ url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=85&w=1200', width: 1200, height: 630, alt: 'Clinical Dietician' }],
    },
    alternates: {
        canonical: 'https://www.ariesxpert.co.uk/services/dietician',
    },
};

export default function DieticianPage() {
    const service = services.find(s => s.slug === 'dietician');

    if (!service) return null;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Clinical Dietician & Medical Nutrition Therapy",
        "description": service.longDescription,
        "provider": {
            "@type": "MedicalOrganization",
            "name": "AriesXpert UK",
            "url": "https://www.ariesxpert.co.uk"
        },
        "areaServed": "United Kingdom",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Clinical Nutrition Programs",
            "itemListElement": service.conditions.map((c, i) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": c.name,
                    "description": c.description
                },
                "position": i + 1
            }))
        }
    };

    return (
        <>
            <SchemaMarkup data={serviceSchema} />
            <DieticianClient />
        </>
    );
}
