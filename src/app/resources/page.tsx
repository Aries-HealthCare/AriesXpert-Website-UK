"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MOVEMENT_ARTICLES } from "@/lib/movement-library";
import { Sparkles, ChevronRight, Clock, User, BookOpen } from "lucide-react";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "spine", label: "Spine & Neuro" },
    { id: "post-op", label: "Post-Surgical" },
    { id: "ergo", label: "Ergonomics & Posture" },
  ];

  const filteredArticles = MOVEMENT_ARTICLES.filter((art) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "spine") return art.category.includes("Spine");
    if (selectedCategory === "post-op") return art.category.includes("Post-Surgical");
    if (selectedCategory === "ergo") return art.category.includes("Ergonomics");
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-clinical-cyan">
          <BookOpen className="w-4 h-4" />
          <span className="uppercase font-bold tracking-wider">The Movement Library</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          EVIDENCE-BASED HEALTH EDUCATION
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Written by licensed Canadian Registered Physiotherapists. Demystifying anatomy, pain neuroscience, and biomechanical rehabilitation.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat.id
                ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow scale-105"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.map((art) => (
          <Link
            key={art.id}
            href={`/resources/${art.slug}`}
            className="p-8 rounded-3xl bg-midnight-900/80 border border-slate-800 hover:border-clinical-cyan/60 flex flex-col justify-between space-y-6 transition-all hover:scale-[1.02] shadow-glass group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-slate-800 text-clinical-cyan border border-slate-700">
                  {art.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {art.readTime}
                </span>
              </div>

              <h2 className="text-xl font-display font-bold text-white group-hover:text-clinical-cyan transition-colors leading-snug">
                {art.title}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {art.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-clinical-cyan">
              <span>Read Full Article</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
