"use client";

import React, { useState } from "react";
import { BodyRegion } from "@/lib/types";
import { HumanBodyScene } from "./HumanBodyScene";
import { SceneContainer } from "./SceneContainer";
import { 
  Sparkles, 
  Activity, 
  ChevronRight, 
  Calendar, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Info 
} from "lucide-react";
import Link from "next/link";

interface InteractiveBodyMapProps {
  onOpenBookingWithRegion?: (region: BodyRegion) => void;
}

export const InteractiveBodyMap: React.FC<InteractiveBodyMapProps> = ({
  onOpenBookingWithRegion,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion>("spine");

  const regionDetails: Record<
    string,
    {
      title: string;
      subtitle: string;
      commonConcerns: string[];
      anatomy: string;
      treatments: string[];
      redFlags: string;
      primaryConditionSlug: string;
    }
  > = {
    spine: {
      title: "Spinal Column & Lumbar Core",
      subtitle: "The central kinematic axis supporting axial load, protecting the spinal cord, and generating rotational power.",
      commonConcerns: ["Disc Herniation", "Sciatica & Radiculopathy", "Facet Joint Arthropathy", "Spondylolisthesis"],
      anatomy: "33 vertebrae, intervertebral discs (nucleus pulposus & anulus fibrosus), multifidus, and erector spinae.",
      treatments: ["Spinal Decompression", "Maitland Joint Mobilization", "Motor Control Stabilization", "McKenzie Extension"],
      redFlags: "Sudden loss of bowel/bladder control, saddle anesthesia (numbness in groin), progressive bilateral leg weakness.",
      primaryConditionSlug: "lumbar-disc-herniation",
    },
    neck: {
      title: "Cervical Spine & Suboccipital Complex",
      subtitle: "Highly mobile spinal segment balancing cranial weight while housing crucial vertebral arteries.",
      commonConcerns: ["Cervical Radiculopathy", "Whiplash Associated Disorders (WAD)", "Cervicogenic Headaches", "Tech Neck"],
      anatomy: "C1-C7 vertebrae, suboccipital triangle, levator scapulae, upper trapezius, and deep neck flexors.",
      treatments: ["Deep Neck Flexor Retraining", "Neural Dynamic Mobilization", "Trigger Point Dry Needling", "Ergonomic Correction"],
      redFlags: "Drop attacks, visual disturbances, unsteadiness, or progressive numbness in arms.",
      primaryConditionSlug: "cervical-radiculopathy",
    },
    shoulder: {
      title: "Shoulder Complex & Rotator Cuff",
      subtitle: "The body's most mobile joint, sacrificing bony stability for extreme multi-planar dynamic freedom.",
      commonConcerns: ["Rotator Cuff Tears", "Subacromial Impingement", "Adhesive Capsulitis (Frozen Shoulder)", "Labral Slap Tears"],
      anatomy: "Glenohumeral joint, scapulothoracic articulation, SITS muscles (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis).",
      treatments: ["Scapular Dyskinesis Correction", "Rotator Cuff Eccentric Loading", "Capsular Stretches", "Hydrodilatation Support"],
      redFlags: "Sudden unexplained loss of active arm elevation, cold sensation in hand, or severe night pain unaffected by position.",
      primaryConditionSlug: "rotator-cuff-tendinopathy",
    },
    knee: {
      title: "Knee Joint & Patellofemoral Mechanism",
      subtitle: "Modified hinge joint transmitting ground reaction forces while absorbing high kinetic shock during gait.",
      commonConcerns: ["ACL / PCL Tears", "Meniscus Degeneration", "Patellofemoral Pain Syndrome", "Knee Osteoarthritis"],
      anatomy: "Tibiofemoral & patellofemoral joints, cruciate & collateral ligaments, fibrocartilaginous menisci, quadriceps mechanism.",
      treatments: ["0°–120° ROM Phased Protocol", "Closed Kinetic Chain Strengthening", "Neuromuscular Proprioception", "Patellar Taping"],
      redFlags: "Inability to bear any weight immediately following trauma, mechanical locking where knee cannot fully straighten.",
      primaryConditionSlug: "acl-tear",
    },
    hip: {
      title: "Hip Joint & Pelvifemoral Kinematics",
      subtitle: "Deep ball-and-socket joint transferring ground reaction forces into the core and powering locomotion.",
      commonConcerns: ["Femoroacetabular Impingement (FAI)", "Labral Tears", "Hip Osteoarthritis", "Greater Trochanteric Pain"],
      anatomy: "Acetabulofemoral articulation, labrum, gluteus medius/maximus, iliopsoas, deep external rotators.",
      treatments: ["Hip Joint Distraction", "Gluteal Tendon Loading", "Pelvic Tilt Correction", "Post-THR In-Home Mobilization"],
      redFlags: "Inability to weight-bear after a fall in elderly, fever associated with severe groin pain.",
      primaryConditionSlug: "knee-osteoarthritis",
    },
    ankle: {
      title: "Ankle Mortise & Subtalar Complex",
      subtitle: "The primary ground interface providing multi-axis stability on uneven terrain and explosive propulsion.",
      commonConcerns: ["Inversion Sprains (ATFL)", "High Ankle Syndesmosis", "Achilles Tendinopathy", "Chronic Instability"],
      anatomy: "Talocrural joint, subtalar joint, anterior talofibular ligament (ATFL), calcaneofibular ligament (CFL), Achilles tendon.",
      treatments: ["Star Excursion Balance Training", "Heavy Slow Resistance (HSR) Calf Protocol", "Subtalar Mobilization", "Proprioceptive Taping"],
      redFlags: "Ottawa Ankle Rules positive (inability to take 4 steps, bone tenderness at posterior malleoli), sudden pop in calf.",
      primaryConditionSlug: "plantar-fasciitis",
    },
    foot: {
      title: "Plantar Fascia & Longitudinal Arches",
      subtitle: "Intricate multi-bone spring mechanism converting between flexible shock absorption and rigid lever.",
      commonConcerns: ["Plantar Fasciitis", "Morton's Neuroma", "Metatarsalgia", "Posterior Tibial Tendon Dysfunction"],
      anatomy: "Medial/lateral longitudinal arches, plantar aponeurosis, intrinsic foot muscles, calcaneal insertion.",
      treatments: ["High-Load Plantar Fascia Strength", "Intrinsic Foot Muscle (Short Foot) Drills", "Custom Orthotic Triage", "Calf Soft Tissue Release"],
      redFlags: "Unrelenting burning nocturnal pain, sudden arch collapse with acute trauma.",
      primaryConditionSlug: "plantar-fasciitis",
    },
    elbow: {
      title: "Elbow Hinge & Radiohumeral Articulation",
      subtitle: "Compound joint enabling arm flexion/extension and forearm pronation/supination for dexterous tool use.",
      commonConcerns: ["Lateral Epicondylalgia (Tennis Elbow)", "Medial Epicondylalgia (Golfer's Elbow)", "Ulnar Nerve Entrapment"],
      anatomy: "Humeroulnar, humeroradial, and proximal radioulnar joints, common extensor/flexor tendon origins.",
      treatments: ["Isometric Tendon Analgesia", "Radial Head Mobilization", "Neural Flossing of Ulnar Nerve", "Tyler Twist Eccentric Drills"],
      redFlags: "Deformity following acute fall, loss of radial pulse, sudden wrist drop.",
      primaryConditionSlug: "frozen-shoulder",
    },
    wrist: {
      title: "Carpal Tunnel & Radiocarpal Complex",
      subtitle: "Precision joint complex facilitating 3D hand orientation and fine motor dexterous force transmission.",
      commonConcerns: ["Carpal Tunnel Syndrome", "De Quervain's Tenosynovitis", "TFCC Tears", "Scaphoid Fractures"],
      anatomy: "8 carpal bones, transverse carpal ligament, median nerve, triangular fibrocartilage complex (TFCC).",
      treatments: ["Median Nerve Glides", "Carpal Bone Mobilization", "Night Neutral Splinting", "Grip Strength Redistribution"],
      redFlags: "Tenderness in anatomical snuffbox after fall on outstretched hand, persistent cold fingers with paleness.",
      primaryConditionSlug: "lumbar-disc-herniation",
    },
    head: {
      title: "Craniofacial & TMJ System",
      subtitle: "Integrated jaw joint and cranial musculature controlling mastication, speech, and facial balance.",
      commonConcerns: ["TMJ Disc Displacement", "Bruxism (Teeth Grinding)", "Tension Headaches", "Jaw Locking"],
      anatomy: "Mandibular condyle, articular disc, temporomandibular fossa, masseter, and pterygoid muscles.",
      treatments: ["Intra-Oral Myofascial Release", "Cervical Spine Realignment", "Symmetrical Opening Drills"],
      redFlags: "Inability to open mouth past 1 finger width (acute lock) or sudden facial asymmetry.",
      primaryConditionSlug: "cervical-radiculopathy",
    },
  };

  const currentInfo = regionDetails[selectedRegion] || regionDetails.spine;

  const regionList: { id: BodyRegion; name: string }[] = [
    { id: "head", name: "Head & TMJ" },
    { id: "neck", name: "Neck & Cervical" },
    { id: "shoulder", name: "Shoulder" },
    { id: "elbow", name: "Elbow" },
    { id: "wrist", name: "Wrist & Hand" },
    { id: "spine", name: "Spine & Low Back" },
    { id: "hip", name: "Hip & Pelvis" },
    { id: "knee", name: "Knee Joint" },
    { id: "ankle", name: "Ankle & Achilles" },
    { id: "foot", name: "Foot" },
  ];

  return (
    <div className="w-full rounded-3xl premium-card p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-2 border border-primary/20 font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Anatomical Navigator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-foreground tracking-tight">
            Where is your body speaking to you?
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
          Select any joint to rotate the 3D model, isolate anatomical structures, and discover evidence-based physiotherapy pathways.
        </p>
      </div>

      {/* Region Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none">
        {regionList.map((r) => (
          <button
            key={r.id}
            onClick={() => setSelectedRegion(r.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedRegion === r.id
                ? "bg-primary text-primary-foreground font-bold shadow-sm scale-105"
                : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Main 3D Canvas + Medical Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
        {/* Left 3D Viewport */}
        <div className="lg:col-span-7 rounded-2xl bg-card border border-border overflow-hidden relative min-h-[480px]">
          <SceneContainer selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion}>
            <HumanBodyScene
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              className="w-full h-full min-h-[480px]"
            />
          </SceneContainer>
        </div>

        {/* Right Dynamic Clinical Breakdown Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-secondary/40 border border-border space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-bold">
                Anatomical Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-bold text-foreground mt-0.5">
                {currentInfo.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {currentInfo.subtitle}
              </p>
            </div>

            {/* Anatomy overview */}
            <div className="p-3.5 rounded-xl bg-card border border-border text-xs text-foreground">
              <span className="font-semibold text-foreground block mb-1 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-primary" /> Key Anatomy:
              </span>
              {currentInfo.anatomy}
            </div>

            {/* Common Concerns */}
            <div>
              <h4 className="text-xs font-mono uppercase text-muted-foreground mb-2">Common Clinical Concerns</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {currentInfo.commonConcerns.map((concern) => (
                  <div key={concern} className="p-2 rounded-lg bg-card border border-border text-muted-foreground flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1 shrink-0" />
                    <span>{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence-Based Interventions */}
            <div>
              <h4 className="text-xs font-mono uppercase text-muted-foreground mb-2">Evidence-Informed Physiotherapy</h4>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                {currentInfo.treatments.map((tx) => (
                  <div key={tx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{tx}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgent Safety Callout */}
            <div className="p-3 rounded-xl bg-card border border-border text-[11px] text-muted-foreground flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>Safety Notice:</strong> {currentInfo.redFlags}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center gap-3">
            <Link
              href={`/book-assessment?region=${selectedRegion}`}
              className="w-full sm:flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Assessment for {regionList.find(r => r.id === selectedRegion)?.name}</span>
            </Link>

            <Link
              href={`/conditions/${currentInfo.primaryConditionSlug}`}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors flex items-center justify-center gap-1"
            >
              <span>Deep-Dive Condition</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBodyMap;
