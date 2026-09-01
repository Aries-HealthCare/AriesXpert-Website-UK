import React from "react";
import Hero from "@/components/landing/hero";
import ServicesStrip from "@/components/landing/services-strip";
import AreaCarousel from "@/components/landing/area-carousel";
import AiPrecisionRecovery from "@/components/landing/ai-precision-recovery";
import Specialities from "@/components/landing/specialities";
import VettedExperts from "@/components/landing/vetted-experts";
import Locations from "@/components/landing/locations";
import WhatWeTreat from "@/components/landing/what-we-treat";
import BlogSection from "@/components/landing/blog-section";
import FaqSection from "@/components/landing/faq-section";
import GoogleReviews from "@/components/google-reviews";
import FreeConsultationBlock from "@/components/landing/free-consultation-block";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import PricingPackagesSection from "@/components/landing/pricing-packages-section";

export const metadata = {
  title: "Aries PhysioCare UK | In-Home & Virtual HCPC Registered Physiotherapy",
  description: "Hospital-grade in-home and virtual registered physiotherapy across London, Manchester, Birmingham, Edinburgh & UK. Direct billing to Bupa, AXA Health, Aviva & Vitality.",
  alternates: {
    canonical: "https://www.ariesxpert.co.uk",
  },
  openGraph: {
    title: "Aries PhysioCare UK | In-Home & Virtual HCPC Registered Physiotherapy",
    description: "Modern physical rehabilitation delivered to your home or virtually across the United Kingdom. Direct billing, 0 wait times, and HCPC Chartered care.",
    url: "https://www.ariesxpert.co.uk",
    siteName: "Aries PhysioCare UK",
    locale: "en_GB",
    type: "website",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Aries PhysioCare UK",
    "url": "https://www.ariesxpert.co.uk",
    "logo": "https://www.ariesxpert.co.uk/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-800-274-3785",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": ["en", "cy"]
    },
    "sameAs": [
      "https://facebook.com/ariesxpertuk",
      "https://instagram.com/ariesxpertuk",
      "https://linkedin.com/company/ariesxpert-uk"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Aries PhysioCare UK - In-Home & Virtual Physiotherapy",
    "image": "https://www.ariesxpert.co.uk/og-image.jpg",
    "@id": "https://www.ariesxpert.co.uk",
    "url": "https://www.ariesxpert.co.uk",
    "telephone": "+44-800-274-3785",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Canada Square, Canary Wharf",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "E14 5AA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5050,
      "longitude": -0.0199
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    }
  };

  return (
    <>
      <SchemaMarkup data={organizationSchema} />
      <SchemaMarkup data={localBusinessSchema} />
      <Hero />
      <ServicesStrip />
      <div className="content-auto">
        <AreaCarousel />
      </div>
      <div className="content-auto">
        <AiPrecisionRecovery />
      </div>
      <div className="content-auto">
        <FreeConsultationBlock />
      </div>
      <div className="content-auto">
        <Specialities />
      </div>
      <div className="content-auto">
        <PricingPackagesSection />
      </div>
      <div className="content-auto">
        <GoogleReviews locationName="London &amp; UK" className="bg-background" />
      </div>
      <div className="content-auto">
        <VettedExperts />
      </div>
      <div className="content-auto">
        <Locations />
      </div>
      <div className="content-auto">
        <WhatWeTreat />
      </div>
      <div className="content-auto">
        <BlogSection />
      </div>
      <div className="content-auto">
        <FaqSection />
      </div>
    </>
  );
}
