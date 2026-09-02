"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CONDITIONS_LIBRARY } from "@/lib/uk-data";
import { Search, ChevronRight, Activity, Sparkles, Filter } from "lucide-react";
import { BodyRegion } from "@/lib/types";

export default function ConditionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Conditions" },
    { id: "orthopedic", label: "Orthopaedic & Spine" },
    { id: "sports", label: "Sports Injuries" },
    { id: "neurological", label: "Neurological" },
    { id: "chronic-pain", label: "Chronic Pain" },
    { id: "geriatric", label: "Geriatric & Mobility" },
  ];

  const regions = [
    { id: "all", label: "All Regions" },
    { id: "spine", label: "Spine / Back" },
    { id: "knee", label: "Knee" },
    { id: "shoulder", label: "Shoulder" },
    { id: "wrist", label: "Wrist / Hand" },
  ];

  const filteredConditions = CONDITIONS_LIBRARY.filter((cond) => {
    const matchesSearch =
      cond.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ((cond.shortDescription || cond.description || "").toLowerCase()).includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || cond.category === selectedCategory;
    const matchesRegion = selectedRegion === "all" || cond.bodyRegion === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <Activity className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">AriesXpert Clinical Library</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          CONDITIONS & ANATOMY DIRECTORY
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Discover comprehensive, evidence-informed Canadian physical therapy guides for 140+ orthopaedic, sports, and neurological rehabilitation conditions.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 backdrop-blur-xl space-y-4 shadow-glass">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by condition name, symptoms (e.g. 'ACL', 'sciatica', 'rotator cuff')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-clinical-cyan focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-clinical-cyan" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-clinical-cyan text-slate-950 font-bold shadow-clinical-glow"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conditions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConditions.map((cond) => (
          <Link
            key={cond.id}
            href={`/conditions/${cond.slug}`}
            className="p-6 rounded-2xl bg-midnight-900/80 border border-slate-800 hover:border-clinical-cyan/60 flex flex-col justify-between space-y-4 transition-all hover:scale-[1.02] shadow-glass group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-slate-800 text-clinical-cyan border border-slate-700">
                  {cond.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 capitalize">
                  {cond.bodyRegion} Joint
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white group-hover:text-clinical-cyan transition-colors">
                {cond.name}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {cond.shortDescription}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-clinical-cyan">
              <span>View 3D Anatomy & Care Plan</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {filteredConditions.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <p className="text-slate-300 font-semibold">No conditions found matching your search criteria.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSelectedRegion("all");
            }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-clinical-cyan"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
