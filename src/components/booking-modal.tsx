"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Calendar, Clock, MapPin, ShieldCheck, Stethoscope } from "lucide-react";
import { UK_CITY_HUBS } from "@/lib/uk-geo";
import { UK_INSURANCE_PROVIDERS } from "@/lib/uk-insurance";
import { BodyRegion } from "@/lib/types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: Record<string, any>;
  initialRegion?: BodyRegion | "";
  initialCareMode?: "in-clinic" | "in-home" | "virtual" | "";
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [careMode, setCareMode] = useState<"in-home" | "virtual">("in-home");
  const [city, setCity] = useState("hub-london");
  const [postcode, setPostcode] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [insurance, setInsurance] = useState("self-pay");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 600));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg premium-card p-6 md:p-8 rounded-3xl border border-border">
        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <DialogTitle className="font-headline text-2xl font-bold text-foreground">
              Assessment Requested!
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground max-w-sm mx-auto">
              Our UK clinical dispatch coordinator will contact you at <strong className="text-foreground">{phone}</strong> within 15 minutes to confirm your HCPC physiotherapist visit.
            </DialogDescription>
            <Button onClick={handleClose} className="mt-4 font-bold bg-primary text-primary-foreground">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <DialogHeader className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold uppercase tracking-wider w-fit">
                🇬🇧 NHS Step-Down &amp; Private In-Home Physiotherapy
              </div>
              <DialogTitle className="font-headline text-2xl font-bold text-foreground">
                Book UK Physiotherapy Assessment
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Delivered by HCPC &amp; CSP Registered Physiotherapists at your home or via encrypted tele-rehab.
              </DialogDescription>
            </DialogHeader>

            {/* Care Mode Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setCareMode("in-home")}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  careMode === "in-home"
                    ? "border-primary bg-primary/10 text-foreground font-bold shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                <span className="block text-xs font-bold text-foreground">🏡 In-Home Visit</span>
                <span className="text-[10px] text-muted-foreground">At your home / flat</span>
              </button>
              <button
                type="button"
                onClick={() => setCareMode("virtual")}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  careMode === "virtual"
                    ? "border-primary bg-primary/10 text-foreground font-bold shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                <span className="block text-xs font-bold text-foreground">💻 Virtual HD Video</span>
                <span className="text-[10px] text-muted-foreground">Across all UK regions</span>
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="bk-name" className="text-xs font-semibold text-foreground">Patient Full Name</Label>
                <Input
                  id="bk-name"
                  required
                  placeholder="e.g. Oliver Harrison"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-xl bg-card border-border text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="bk-phone" className="text-xs font-semibold text-foreground">UK Phone Number</Label>
                  <Input
                    id="bk-phone"
                    type="tel"
                    required
                    placeholder="07700 900077"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl bg-card border-border text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="bk-postcode" className="text-xs font-semibold text-foreground">Postcode District</Label>
                  <Input
                    id="bk-postcode"
                    required
                    placeholder="e.g. SW1A 1AA / M1 1AD"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    className="rounded-xl bg-card border-border text-sm font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="bk-city" className="text-xs font-semibold text-foreground">UK Hub</Label>
                  <select
                    id="bk-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-card border border-border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    {UK_CITY_HUBS.map((hub) => (
                      <option key={hub.id} value={hub.id} className="bg-card text-foreground">
                        {hub.name} ({hub.nation})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="bk-ins" className="text-xs font-semibold text-foreground">Payment / Insurer</Label>
                  <select
                    id="bk-ins"
                    value={insurance}
                    onChange={(e) => setInsurance(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-card border border-border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    <option value="self-pay">Self-Pay / Card / Transfer</option>
                    {UK_INSURANCE_PROVIDERS.map((ins) => (
                      <option key={ins.code} value={ins.code}>
                        {ins.name} (Direct Billing)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-muted/60 border border-border text-[11px] text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>HCPC Registered Clinicians • ICO Registered • UK-GDPR Compliant</span>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Confirming...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" /> Request Assessment Slot
                </span>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default BookingModal;
