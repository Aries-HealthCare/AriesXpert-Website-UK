"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Loader2, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UK_NATIONS } from "@/lib/uk-geo";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nation, setNation] = useState("ENG");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 600));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase">
          <Phone className="w-4 h-4" />
          <span>UK Clinical Coordination</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-headline font-black text-foreground tracking-tight">
          GET IN TOUCH WITH CLINICAL TRIAGE
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Reach out to our clinical dispatch team for in-home physical therapy scheduling, private health insurance authorization checks, or multidisciplinary care coordination.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl premium-card space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">UK Toll-Free Helpline</span>
                <a href="tel:08002743785" className="font-headline font-bold text-lg text-foreground block hover:text-primary">
                  0800 ARIES UK (0800 274 3785)
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Available Mon–Sat: 7:00 AM – 9:00 PM GMT for emergency and post-discharge dispatch.</p>
          </div>

          <div className="p-6 rounded-3xl premium-card space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">Clinical Directorate Email</span>
                <a href="mailto:care.uk@ariesxpert.com" className="font-headline font-bold text-base text-foreground block hover:text-primary">
                  care.uk@ariesxpert.com
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Direct billing inquiries, insurer pre-authorization, and medical practitioner referrals.</p>
          </div>

          <div className="p-6 rounded-3xl premium-card space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground font-bold">Central Coordination Office</span>
                <span className="font-headline font-bold text-sm text-foreground block">
                  1 Canada Square, Canary Wharf, London E14 5AA
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Serving Greater London, Greater Manchester, West Midlands, Scotland, Wales &amp; Northern Ireland.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 p-8 rounded-3xl premium-card">
          {isSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-headline text-2xl font-bold text-foreground">Message Dispatched!</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Thank you. A Chartered Physiotherapist from our UK team will review your inquiry and get in touch within 30 minutes.
              </p>
              <Button onClick={() => setIsSuccess(false)} className="mt-4 font-bold">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-headline text-xl font-bold text-foreground">Send Clinical Inquiry</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="c-name" className="text-xs font-semibold">Full Name</Label>
                  <Input
                    id="c-name"
                    required
                    placeholder="e.g. Dr. Thomas Finch"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-phone" className="text-xs font-semibold">Contact Phone</Label>
                  <Input
                    id="c-phone"
                    required
                    type="tel"
                    placeholder="07700 900099"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="c-email" className="text-xs font-semibold">Email Address</Label>
                  <Input
                    id="c-email"
                    required
                    type="email"
                    placeholder="t.finch@example.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-nation" className="text-xs font-semibold">Region / Nation</Label>
                  <select
                    id="c-nation"
                    value={nation}
                    onChange={(e) => setNation(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-card border border-border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {UK_NATIONS.map((n) => (
                      <option key={n.code} value={n.code}>{n.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="c-msg" className="text-xs font-semibold">Inquiry / Patient Symptoms</Label>
                <textarea
                  id="c-msg"
                  required
                  rows={4}
                  placeholder="Please describe your symptoms, recent surgery, or private insurance policy details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl bg-card border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl font-bold uppercase tracking-wider text-sm shadow-md"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Dispatching...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Clinical Message
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
