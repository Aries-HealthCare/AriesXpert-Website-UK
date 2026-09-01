"use client";

import React, { useState } from "react";
import { UK_CITY_HUBS, UK_NATIONS } from "@/lib/uk-geo";
import { UK_INSURANCE_PROVIDERS } from "@/lib/uk-insurance";
import { ShieldCheck, CheckCircle2, Loader2, Calendar, Clock, MapPin, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BookAssessmentPage() {
  const [careMode, setCareMode] = useState<"in-home" | "virtual">("in-home");
  const [city, setCity] = useState("hub-london");
  const [postcode, setPostcode] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [insurance, setInsurance] = useState("self-pay");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 700));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold uppercase">
          <Stethoscope className="w-4 h-4" />
          <span>UK Assessment Intake</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-headline font-black text-foreground tracking-tight">
          BOOK YOUR ASSESSMENT
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Select your preferred care mode and enter your details to receive an assessment from a Chartered Physiotherapist.
        </p>
      </div>

      <div className="p-8 rounded-3xl premium-card">
        {isSuccess ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-headline text-3xl font-bold text-foreground">Assessment Requested!</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-foreground">{fullName}</strong>. Our clinical coordination desk will contact you at <strong className="text-foreground">{phone}</strong> within 15 minutes to confirm your appointment time.
            </p>
            <Button onClick={() => setIsSuccess(false)} className="mt-4 font-bold">
              Book Another Session
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Care Mode Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setCareMode("in-home")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  careMode === "in-home"
                    ? "border-primary bg-primary/10 font-bold shadow-sm"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                <span className="block text-sm font-bold text-foreground">🏡 In-Home Physiotherapy</span>
                <span className="text-xs text-muted-foreground">Chartered clinician visits your residence</span>
              </button>
              <button
                type="button"
                onClick={() => setCareMode("virtual")}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  careMode === "virtual"
                    ? "border-primary bg-primary/10 font-bold shadow-sm"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                <span className="block text-sm font-bold text-foreground">💻 Virtual Tele-Physiotherapy</span>
                <span className="text-xs text-muted-foreground">Encrypted HD video consultation</span>
              </button>
            </div>

            {/* Form Inputs */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="bk-pg-name" className="text-xs font-semibold">Patient Full Name</Label>
                <Input
                  id="bk-pg-name"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="bk-pg-phone" className="text-xs font-semibold">UK Phone Number</Label>
                  <Input
                    id="bk-pg-phone"
                    required
                    type="tel"
                    placeholder="07700 900011"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="bk-pg-postcode" className="text-xs font-semibold">Postcode District</Label>
                  <Input
                    id="bk-pg-postcode"
                    required
                    placeholder="e.g. SW1A 1AA / M1 1AE"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    className="rounded-xl font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="bk-pg-hub" className="text-xs font-semibold">UK Hub</Label>
                  <select
                    id="bk-pg-hub"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-card border border-border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    {UK_CITY_HUBS.map((h) => (
                      <option key={h.id} value={h.id}>{h.name} ({h.nation})</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="bk-pg-ins" className="text-xs font-semibold">Insurance / Payment</Label>
                  <select
                    id="bk-pg-ins"
                    value={insurance}
                    onChange={(e) => setInsurance(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-card border border-border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    <option value="self-pay">Self-Pay (£110 Assessment)</option>
                    {UK_INSURANCE_PROVIDERS.map((ins) => (
                      <option key={ins.code} value={ins.code}>{ins.name} (Direct Billing)</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-muted/60 border border-border text-xs text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>HCPC Registered Clinicians • Healthcode Direct Billing • UK-GDPR Compliant</span>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Confirming Intake...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" /> Request Assessment Slot
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
