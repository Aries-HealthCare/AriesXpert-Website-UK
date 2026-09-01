"use client";

import React, { useState } from "react";
import { BodyRegion } from "@/lib/types";
import { Sparkles, Info, Layers } from "lucide-react";

interface FallbackAnatomyViewProps {
  type?: "full-body" | "spine" | "knee" | "movement" | "surgery";
  selectedRegion?: BodyRegion;
  onSelectRegion?: (region: BodyRegion) => void;
  className?: string;
}

export const FallbackAnatomyView: React.FC<FallbackAnatomyViewProps> = ({
  type = "full-body",
  selectedRegion = "spine",
  onSelectRegion,
  className = "w-full h-full min-h-[450px]",
}) => {
  const [activeLayer, setActiveLayer] = useState<"skeletal" | "muscular" | "nervous">("skeletal");
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);

  const regionHotspots: { id: BodyRegion; name: string; x: number; y: number }[] = [
    { id: "head", name: "Craniofacial & TMJ", x: 50, y: 10 },
    { id: "neck", name: "Cervical Spine", x: 50, y: 17 },
    { id: "shoulder", name: "Shoulder & Rotator Cuff", x: 33, y: 23 },
    { id: "elbow", name: "Elbow Joint", x: 26, y: 36 },
    { id: "wrist", name: "Wrist & Hand", x: 20, y: 48 },
    { id: "spine", name: "Thoracolumbar Spine", x: 50, y: 35 },
    { id: "hip", name: "Hip & Pelvis", x: 44, y: 50 },
    { id: "knee", name: "Knee Joint & Ligaments", x: 44, y: 70 },
    { id: "ankle", name: "Ankle & Achilles", x: 44, y: 88 },
    { id: "foot", name: "Foot & Plantar Fascia", x: 44, y: 94 },
  ];

  return (
    <div className={`relative flex flex-col items-center justify-center p-6 bg-midnight-950/80 border border-slate-800 rounded-2xl ${className}`}>
      {/* Controls & Layer switcher */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 p-1 rounded-lg bg-midnight-900/90 border border-slate-800 backdrop-blur-md">
        <span className="text-[10px] font-mono text-slate-400 px-2 flex items-center gap-1">
          <Layers className="w-3 h-3 text-clinical-cyan" /> Layer:
        </span>
        {(["skeletal", "muscular", "nervous"] as const).map((layer) => (
          <button
            key={layer}
            onClick={() => setActiveLayer(layer)}
            className={`px-2.5 py-1 rounded text-xs font-medium capitalize transition-all ${
              activeLayer === layer
                ? "bg-clinical-cyan/20 text-clinical-cyan border border-clinical-cyan/40"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {layer}
          </button>
        ))}
      </div>

      <div className="absolute top-4 right-4 z-10 text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
        <Sparkles className="w-3 h-3 text-recovery-mint" />
        <span>Accessible 2.5D Medical View</span>
      </div>

      {/* Interactive Medical Vector Schematic */}
      <div className="relative w-full max-w-sm aspect-[1/2] my-8 flex items-center justify-center">
        <svg
          viewBox="0 0 100 200"
          className="w-full h-full filter drop-shadow-[0_0_20px_rgba(0,242,254,0.15)]"
        >
          {/* Ambient Grid Lines */}
          <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 2" />
          <line x1="10" y1="100" x2="90" y2="100" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 2" />
          <line x1="10" y1="150" x2="90" y2="150" stroke="rgba(255,255,255,0.04)" strokeDasharray="2 2" />
          <line x1="50" y1="10" x2="50" y2="190" stroke="rgba(0,242,254,0.1)" strokeDasharray="2 4" />

          {/* Procedural Silhouette Anatomy */}
          {/* Head & Neck */}
          <circle cx="50" cy="20" r="9" fill="none" stroke="rgba(0,242,254,0.6)" strokeWidth="1.5" />
          <line x1="50" y1="29" x2="50" y2="35" stroke="rgba(0,242,254,0.8)" strokeWidth="2" />

          {/* Clavicle & Shoulders */}
          <line x1="33" y1="36" x2="67" y2="36" stroke="rgba(0,242,254,0.7)" strokeWidth="2" />

          {/* Spine Column */}
          <line x1="50" y1="36" x2="50" y2="95" stroke={activeLayer === "nervous" ? "#f59e0b" : "#00f2fe"} strokeWidth="2.5" />
          
          {/* Rib Cage */}
          <ellipse cx="50" cy="55" rx="14" ry="16" fill="none" stroke="rgba(0,242,254,0.3)" strokeWidth="1.2" strokeDasharray="4 2" />

          {/* Pelvis */}
          <polygon points="38,95 62,95 56,110 44,110" fill="none" stroke="rgba(0,242,254,0.7)" strokeWidth="1.8" />

          {/* Left Arm */}
          <line x1="33" y1="36" x2="26" y2="65" stroke="rgba(0,242,254,0.6)" strokeWidth="1.8" />
          <line x1="26" y1="65" x2="20" y2="92" stroke="rgba(0,242,254,0.6)" strokeWidth="1.8" />

          {/* Right Arm */}
          <line x1="67" y1="36" x2="74" y2="65" stroke="rgba(0,242,254,0.6)" strokeWidth="1.8" />
          <line x1="74" y1="65" x2="80" y2="92" stroke="rgba(0,242,254,0.6)" strokeWidth="1.8" />

          {/* Left Leg */}
          <line x1="44" y1="110" x2="43" y2="148" stroke="rgba(0,242,254,0.6)" strokeWidth="2" />
          <line x1="43" y1="148" x2="42" y2="186" stroke="rgba(0,242,254,0.6)" strokeWidth="2" />
          <line x1="42" y1="186" x2="38" y2="190" stroke="rgba(0,242,254,0.7)" strokeWidth="2" />

          {/* Right Leg */}
          <line x1="56" y1="110" x2="57" y2="148" stroke="rgba(0,242,254,0.6)" strokeWidth="2" />
          <line x1="57" y1="148" x2="58" y2="186" stroke="rgba(0,242,254,0.6)" strokeWidth="2" />
          <line x1="58" y1="186" x2="62" y2="190" stroke="rgba(0,242,254,0.7)" strokeWidth="2" />

          {/* Clickable Anatomical Hotspots */}
          {regionHotspots.map((spot) => {
            const isSelected = selectedRegion === spot.id;
            const isHovered = hoveredRegion === spot.id;

            return (
              <g
                key={spot.id}
                className="cursor-pointer transition-all duration-200"
                onClick={() => onSelectRegion && onSelectRegion(spot.id)}
                onMouseEnter={() => setHoveredRegion(spot.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                <circle
                  cx={spot.x}
                  cy={spot.y}
                  r={isSelected ? 5.5 : isHovered ? 4.5 : 3.5}
                  fill={isSelected ? "#00f2fe" : isHovered ? "#10b981" : "rgba(13, 23, 42, 0.9)"}
                  stroke={isSelected ? "#ffffff" : isHovered ? "#10b981" : "#00f2fe"}
                  strokeWidth={isSelected ? "1.5" : "1"}
                  className="animate-pulse-slow"
                />
                {isSelected && (
                  <circle
                    cx={spot.x}
                    cy={spot.y}
                    r="8"
                    fill="none"
                    stroke="#00f2fe"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Hotspot Floating Indicator */}
        {(hoveredRegion || selectedRegion) && (
          <div className="absolute -bottom-6 bg-slate-900/90 border border-clinical-cyan/40 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-clinical-glow">
            {regionHotspots.find((r) => r.id === (hoveredRegion || selectedRegion))?.name}
          </div>
        )}
      </div>

      <p className="text-xs text-slate-400 text-center max-w-xs">
        Click any illuminated anatomical joint to isolate biomechanical structures and inspect evidence-based rehabilitation protocols.
      </p>
    </div>
  );
};
