"use client";

import React, { useState } from "react";
import { UK_NATIONS, UK_CITY_HUBS } from "@/lib/uk-geo";
import { MapPin, ShieldCheck, CheckCircle2, ChevronRight, Phone, Calendar, Stethoscope, ArrowRight } from "lucide-react";
import Link from "next/link";
import { UKNation, UKCityHub } from "@/lib/types";

interface InteractiveUKMapProps {
  onSelectNation?: (nation: UKNation) => void;
  onSelectHub?: (hub: UKCityHub) => void;
  onOpenBookingModal?: (nationCode?: string, hubId?: string) => void;
}

export const InteractiveUKMap: React.FC<InteractiveUKMapProps> = ({
  onSelectNation,
  onSelectHub,
  onOpenBookingModal,
}) => {
  const [activeNationCode, setActiveNationCode] = useState<string>("ENG");
  const [activeHubId, setActiveHubId] = useState<string>("hub-london");

  const currentNation = UK_NATIONS.find((n) => n.code === activeNationCode) || UK_NATIONS[0];
  const currentHub = UK_CITY_HUBS.find((h) => h.id === activeHubId) || UK_CITY_HUBS[0];

  const handleNationClick = (nation: UKNation) => {
    setActiveNationCode(nation.code);
    if (nation.majorHubs.length > 0) {
      setActiveHubId(nation.majorHubs[0].id);
    }
    if (onSelectNation) onSelectNation(nation);
  };

  const handleHubClick = (hub: UKCityHub) => {
    setActiveHubId(hub.id);
    if (onSelectHub) onSelectHub(hub);
  };

  return (
    <div className="w-full rounded-3xl premium-card p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-2 font-bold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive UK Regional Navigator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-foreground tracking-tight">
            Select Your UK Nation &amp; Metropolitan Hub
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
          Explore in-home physiotherapy dispatch lead times, local postcodes, and private medical insurance direct billing recognition across the UK.
        </p>
      </div>

      {/* 4 Nations Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {UK_NATIONS.map((nation) => (
          <button
            key={nation.code}
            onClick={() => handleNationClick(nation)}
            className={`p-4 rounded-2xl border text-left transition-all ${
              activeNationCode === nation.code
                ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                : "border-border bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-foreground">{nation.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-primary font-bold">
                {nation.code}
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground block mt-1">
              {nation.majorHubs.length} Service Hubs
            </span>
          </button>
        ))}
      </div>

      {/* Active Hub Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Hub Selector List */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono uppercase font-bold text-muted-foreground block">
            {currentNation.name} Metropolitan Hubs:
          </span>
          <div className="space-y-2">
            {currentNation.majorHubs.map((hub) => (
              <button
                key={hub.id}
                onClick={() => handleHubClick(hub)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  activeHubId === hub.id
                    ? "border-primary bg-primary/10 font-bold shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                <div>
                  <h4 className="text-sm font-bold text-foreground">{hub.name}</h4>
                  <span className="text-[11px] text-muted-foreground">{hub.inHomeLeadTime} Dispatch</span>
                </div>
                <ChevronRight className="w-4 h-4 text-primary" />
              </button>
            ))}
          </div>
        </div>

        {/* Hub Details Card */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-secondary/40 border border-border space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-mono text-primary font-bold">
                {currentHub.nation} Hub
              </span>
              <span className="text-xs font-mono text-emerald-500 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active Coverage
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">{currentHub.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{currentHub.description}</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-border/40">
            <span className="text-[11px] font-mono uppercase font-bold text-muted-foreground block">
              Key Postcode Coverage:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentHub.keyPostcodes.map((pc, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-card border border-border text-[11px] font-mono text-foreground font-bold">
                  {pc}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-border/40">
            <span className="text-[11px] font-mono uppercase font-bold text-muted-foreground block">
              Neighborhoods Served:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentHub.keyHubs.map((h, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-card border border-border text-xs text-muted-foreground">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border/40 flex flex-wrap gap-3">
            <Link
              href={`/locations/${currentHub.slug}`}
              className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs text-center hover:brightness-110 transition-all shadow-md"
              prefetch={false}
            >
              Explore Full {currentHub.name} Directory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveUKMap;
