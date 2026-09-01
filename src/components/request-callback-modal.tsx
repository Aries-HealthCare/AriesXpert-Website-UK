'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, CheckCircle2, Loader2, ShieldCheck, Stethoscope } from 'lucide-react';
import { UK_NATIONS } from '@/lib/uk-geo';

interface RequestCallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: Record<string, any>;
}

export default function RequestCallbackModal({ isOpen, onClose }: RequestCallbackModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [nation, setNation] = useState('ENG');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 600));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md premium-card p-6 md:p-8 rounded-3xl border border-border">
        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <DialogTitle className="font-headline text-2xl font-bold text-foreground">
              Callback Scheduled!
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground max-w-sm mx-auto">
              An HCPC Registered Physiotherapist or clinical coordinator will call you at <strong className="text-foreground">{phone}</strong> within 15–30 minutes.
            </DialogDescription>
            <Button onClick={handleClose} className="mt-4 font-bold bg-primary text-primary-foreground">
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <DialogHeader className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold uppercase tracking-wider w-fit">
                🇬🇧 Free 15-Minute UK Tele-Assessment
              </div>
              <DialogTitle className="font-headline text-2xl font-bold text-foreground">
                Speak with a Chartered Physiotherapist
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground leading-relaxed">
                Connect with our clinical team to discuss your condition, NHS step-down options, private health insurance (Bupa, AXA, Aviva), and in-home booking.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="uk-req-name" className="text-xs font-semibold text-foreground">Full Name</Label>
                <Input
                  id="uk-req-name"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-xl bg-card border-border text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="uk-req-phone" className="text-xs font-semibold text-foreground">UK Contact Number</Label>
                  <Input
                    id="uk-req-phone"
                    type="tel"
                    required
                    placeholder="07700 900088"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl bg-card border-border text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="uk-req-nation" className="text-xs font-semibold text-foreground">Region / Nation</Label>
                  <select
                    id="uk-req-nation"
                    value={nation}
                    onChange={(e) => setNation(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-card border border-border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    {UK_NATIONS.map((n) => (
                      <option key={n.code} value={n.code} className="bg-card text-foreground">
                        {n.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-muted/60 border border-border text-[11px] text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>UK-GDPR Compliant • Caldicott Principle Standards</span>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Request Clinical Call
                </span>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
