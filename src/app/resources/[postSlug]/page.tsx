"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug } from "@/lib/movement-library";
import { Clock, User, CheckCircle2, ArrowLeft, BookOpen, Share2 } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    postSlug: string;
  }>;
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const { postSlug } = use(params);
  const article = getArticleBySlug(postSlug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <Link href="/resources" className="hover:text-clinical-cyan transition-colors">Movement Library</Link>
        <span>/</span>
        <span className="text-clinical-cyan font-bold">{article.category}</span>
      </div>

      {/* Article Header */}
      <div className="space-y-4 pb-8 border-b border-slate-800">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 text-clinical-cyan border border-slate-800">
          {article.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
          <span className="flex items-center gap-1.5 text-slate-300">
            <User className="w-3.5 h-3.5 text-clinical-cyan" /> {article.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}
          </span>
          <span>•</span>
          <span>Published: {article.publishedDate}</span>
        </div>
      </div>

      {/* Key Takeaways Box */}
      <div className="p-6 rounded-2xl bg-midnight-900/90 border border-slate-800 space-y-3 shadow-glass">
        <h3 className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
          Key Clinical Takeaways
        </h3>
        <ul className="space-y-2 text-xs text-slate-300">
          {article.keyTakeaways.map((takeaway) => (
            <li key={takeaway} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-recovery-mint shrink-0 mt-0.5" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-light">
        {article.contentSections.map((section) => (
          <div key={section.heading} className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white tracking-tight">
              {section.heading}
            </h2>
            <p className="leading-relaxed">
              {section.body}
            </p>
            {section.clinicalNote && (
              <div className="p-4 rounded-xl bg-slate-950 border-l-2 border-clinical-cyan text-xs text-slate-300 italic">
                <strong className="text-white not-italic block mb-0.5">Clinical Note:</strong>
                {section.clinicalNote}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
        <Link
          href="/resources"
          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Library</span>
        </Link>
        <Link
          href="/book-assessment"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-xs font-bold shadow-clinical-glow hover:brightness-110"
        >
          Book Movement Assessment
        </Link>
      </div>
    </div>
  );
}
