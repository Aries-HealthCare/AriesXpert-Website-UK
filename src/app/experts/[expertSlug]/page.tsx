import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UK_EXPERTS } from "@/lib/uk-experts";
import { ShieldCheck, Star, MapPin, Award, CheckCircle2, PhoneCall } from "lucide-react";
import BookAppointmentButton from "@/components/book-appointment-button";
import GoogleReviews from "@/components/google-reviews";

interface ExpertPageProps {
  params: Promise<{
    expertSlug: string;
  }>;
}

export async function generateStaticParams() {
  return UK_EXPERTS.map((exp) => ({
    expertSlug: exp.slug,
  }));
}

export default async function ExpertDetailPage({ params }: ExpertPageProps) {
  const { expertSlug } = await params;
  const expert = UK_EXPERTS.find((e) => e.slug === expertSlug);

  if (!expert) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
        <Link href="/experts" className="hover:text-primary">Clinicians</Link>
        <span>/</span>
        <span className="text-primary font-bold">{expert.fullName}</span>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start p-8 rounded-3xl premium-card">
        <div className="md:col-span-4 relative h-80 rounded-2xl overflow-hidden bg-muted">
          <Image
            src={expert.imageUrl}
            alt={expert.fullName}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="md:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>HCPC REGISTRATION: {expert.hcpcNumber}</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl font-black text-foreground">
            {expert.fullName}
          </h1>

          <p className="text-xs font-mono text-muted-foreground">
            {expert.credentials} • {expert.cspNumber}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {expert.bio}
          </p>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase font-bold text-foreground block">Key Specializations:</span>
            <div className="flex flex-wrap gap-1.5">
              {expert.specialties.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-xl bg-primary/10 text-primary text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <BookAppointmentButton size="lg" className="font-bold">
              Book Assessment with {expert.fullName.split(" ")[0]}
            </BookAppointmentButton>
          </div>
        </div>
      </div>

      <GoogleReviews locationName={expert.primaryHub} />
    </div>
  );
}
