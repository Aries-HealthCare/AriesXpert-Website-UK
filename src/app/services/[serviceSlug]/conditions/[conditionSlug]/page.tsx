'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getServiceBySlug, getConditionBySlug } from '@/lib/placeholder-data';
import { fetchGrowthBlogPosts, type GrowthBlogPost } from '@/lib/growth-blog-posts';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRequestCallback } from '@/components/request-callback-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookAppointmentButton from '@/components/book-appointment-button';
import { ScrollArea } from '@/components/ui/scroll-area';
import LocalizedFaqSection from '@/components/localized-faq-section';

const contents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'symptoms', title: 'Symptoms' },
  { id: 'treatment', title: 'How We Treat' },
  { id: 'benefits', title: 'Benefits of Home Treatment' },
  { id: 'who-should-opt', title: 'Who Should Opt?' },
  { id: 'faqs', title: 'FAQs' },
];

export default function ConditionDetailPage() {
  const params = useParams<{ serviceSlug: string, conditionSlug: string }>();
  const service = getServiceBySlug(params.serviceSlug as string);
  const { openModal } = useRequestCallback();

  if (!service) notFound();

  const condition = getConditionBySlug(service, params.conditionSlug as string);
  if (!condition) notFound();

  const [relatedPosts, setRelatedPosts] = useState<GrowthBlogPost[]>([]);
  useEffect(() => {
    let cancelled = false;
    fetchGrowthBlogPosts().then((posts) => {
      if (cancelled) return;
      const matching = posts.filter(
        (p) => p.territory === service.name || p.topic === service.name,
      );
      setRelatedPosts((matching.length > 0 ? matching : posts).slice(0, 3));
    });
    return () => {
      cancelled = true;
    };
  }, [service.name]);

  const symptomsList = condition.symptoms || [];
  const benefitsList = condition.benefits || condition.evidenceBasedTreatments || [];
  const whoShouldOptList = condition.whoShouldOpt || [];
  const faqsList = condition.faqs || [];
  const displayImage = condition.imageUrl || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800';
  const displayDesc = condition.description || condition.shortDescription || condition.whatIsIt || '';

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-accent border-accent/50 px-4 py-1 uppercase tracking-widest text-[10px] font-black">
                {service.name}
              </Badge>
              <Badge variant="outline" className="text-white/60 border-white/20 text-[10px] uppercase font-mono">
                Evidence-Based Protocol
              </Badge>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
              {condition.name} Treatment at Home
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              {displayDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <BookAppointmentButton
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl"
              >
                Book Home Treatment
              </BookAppointmentButton>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                onClick={() => openModal({ service: `${service.name} - ${condition.name}` })}
              >
                Request Free Callback
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ────────────────────────────────────────────────────── */}
      <div className="bg-muted/40 border-b border-border/50 py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">{service.name}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">{condition.name}</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT CONTAINER ────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-6">
              <Card className="glassmorphic border-primary/10 overflow-hidden">
                <CardHeader className="bg-primary/5 pb-3">
                  <CardTitle className="text-xs font-black uppercase tracking-widest text-primary">On This Page</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <nav className="space-y-1">
                    {contents.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 space-y-16">
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-32">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold">What is {condition.name}?</h2>
                  <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                    <p>{displayDesc}</p>
                    <p>At AriesXpert, we specialize in addressing {condition.name} through evidence-based clinical protocols that prioritize mobility restoration and pain reduction in the comfort of your home.</p>
                  </div>
                </div>
                <div className="relative aspect-video md:aspect-square w-full rounded-2xl overflow-hidden soft-shadow border border-primary/10">
                  <Image
                    src={displayImage}
                    alt={condition.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-bold">Clinical Care</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Symptoms Section */}
            {symptomsList.length > 0 && (
              <section id="symptoms" className="scroll-mt-32">
                <Card className="glassmorphic border-primary/10 overflow-hidden">
                  <CardHeader className="bg-primary/5 border-b border-primary/10">
                    <CardTitle className="font-headline text-2xl flex items-center gap-3">
                      <span className="p-2 bg-primary/10 rounded-lg"><ArrowRight className="w-5 h-5 text-primary" /></span>
                      Common Symptoms
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <ul className="grid sm:grid-cols-2 gap-6">
                      {symptomsList.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/40 border border-primary/5 hover:border-primary/20 transition-colors">
                          <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground font-medium">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Treatment Details */}
            <section id="treatment" className="scroll-mt-32 space-y-6">
              <h2 className="font-headline text-3xl font-bold">How We Treat {condition.name}</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
                <p>{condition.treatmentDetails || `Our registered therapists employ manual mobilizations, personalized exercise regimens, electro-analgesia modalities, and functional retraining to resolve ${condition.name} systematically.`}</p>
              </div>
            </section>

            {/* Benefits of Home Treatment */}
            {benefitsList.length > 0 && (
              <section id="benefits" className="scroll-mt-32">
                <h2 className="font-headline text-3xl font-bold mb-6">Benefits of In-Home Care</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefitsList.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Who Should Opt */}
            {whoShouldOptList.length > 0 && (
              <section id="who-should-opt" className="scroll-mt-32">
                <h2 className="font-headline text-3xl font-bold mb-6">Who Should Opt for This Care?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whoShouldOptList.map((w, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/40">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{w}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32">
              <LocalizedFaqSection faqs={faqsList} title={`Frequently Asked Questions on ${condition.name}`} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
