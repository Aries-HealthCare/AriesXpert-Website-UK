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
    BodyRegion,
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
      title: "Thoracolumbar Spine & Lumbar Discs",
      subtitle: "The central kinetic column supporting weight distribution and spinal cord transmission.",
      commonConcerns: ["Lumbar Disc Herniation", "Sciatica & Radiculopathy", "Facet Joint Arthrosis", "Postural Muscle Fatigue"],
      anatomy: "5 lumbar vertebrae (L1–L5), intervertebral fibrocartilage discs, deep stabilizing multifidus muscles, and descending spinal nerve roots.",
      treatments: ["Segmental Spinal Mobilization", "McKenzie Directional Loading", "Deep Core Motor Control", "Mechanical Traction"],
      redFlags: "Sudden bowel or bladder dysfunction, saddle numbness, or rapid leg weakness requires emergency triage.",
      primaryConditionSlug: "lumbar-spondylosis",
    },
    neck: {
      title: "Cervical Spine & Suboccipital Complex",
      subtitle: "Balancing the weight of the cranium while permitting wide-ranging rotational vision.",
      commonConcerns: ["Cervical Spondylosis", "Whiplash Strain", "Cervicogenic Headaches", "Pinched Cervical Nerve"],
      anatomy: "7 cervical vertebrae (C1–C7), suboccipital muscles, facet joints, and brachial plexus nerve roots.",
      treatments: ["Gentle Joint Mobilization", "Postural Scapular Setting", "Neural Gliding", "Intramuscular Dry Needling"],
      redFlags: "Sudden visual disturbance, severe dizziness on turning head, or difficulty swallowing warrants immediate medical review.",
      primaryConditionSlug: "lumbar-spondylosis",
    },
    shoulder: {
      title: "Glenohumeral Joint & Rotator Cuff",
      subtitle: "The human body's most mobile ball-and-socket joint, heavily reliant on dynamic muscular stability.",
      commonConcerns: ["Rotator Cuff Tears", "Subacromial Impingement", "Adhesive Capsulitis (Frozen Shoulder)", "Labral Tears"],
      anatomy: "Humeral head, glenoid fossa, acromion, and the 4 rotator cuff tendons (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis).",
      treatments: ["Isomeric & Eccentric Loading", "Scapulohumeral Rhythm Retraining", "Posterior Capsule Mobilization"],
      redFlags: "Inability to lift the arm following acute trauma, or chest pain radiating to shoulder.",
      primaryConditionSlug: "rotator-cuff-injury",
    },
    knee: {
      title: "Knee Joint & Ligamentous Restraints",
      subtitle: "A complex hinge joint bearing multi-directional shock loads during gait, running, and athletic deceleration.",
      commonConcerns: ["ACL / PCL / MCL Tears", "Meniscal Cartilage Tears", "Osteoarthritis", "Patellofemoral Pain Syndrome"],
      anatomy: "Femur, tibia, patella, medial/lateral menisci, cruciate ligaments, and articular hyaline cartilage.",
      treatments: ["Closed-Kinetic-Chain Strengthening", "Neuromuscular Proprioception Drills", "Manual Patellar Glides", "Post-Op Phased Protocol"],
      redFlags: "Knee completely locking in flexion, inability to bear any weight post-trauma, or calf tenderness with heat.",
      primaryConditionSlug: "acl-tear",
    },
    hip: {
      title: "Coxofemoral Joint & Pelvic Girdle",
      subtitle: "Deep acetabular socket designed for powerful ground force propulsion and pelvic equilibrium.",
      commonConcerns: ["Hip Osteoarthritis", "Labral Tears & FAI", "Trochanteric Bursitis", "Total Hip Replacement Rehab"],
      anatomy: "Acetabulum, femoral head/neck, gluteus medius/maximus stabilizers, and iliopsoas complex.",
      treatments: ["Hip Abductor Strengthening", "Joint Distraction & Capsule Glides", "Gait Symmetry Retraining"],
      redFlags: "Severe groin pain with inability to walk, or sudden fever after hip injection/surgery.",
      primaryConditionSlug: "lumbar-spondylosis",
    },
    elbow: {
      title: "Elbow Joint & Forearm Tendons",
      subtitle: "Hinge and pivot joint facilitating precise hand placement and heavy gripping leverage.",
      commonConcerns: ["Lateral Epicondylitis (Tennis Elbow)", "Medial Epicondylitis (Golfer's Elbow)", "Cubital Tunnel Ulnar Nerve Compression"],
      anatomy: "Humeroulnar, humeroradial, and proximal radioulnar joints, common extensor and flexor tendon origins.",
      treatments: ["Eccentric Wrist Loading", "Soft Tissue Mobilization", "Neural Flossing for Ulnar Nerve"],
      redFlags: "Visible joint deformity or complete loss of sensation in 4th/5th fingers post-injury.",
      primaryConditionSlug: "carpal-tunnel-syndrome",
    },
    wrist: {
      title: "Carpus & Median Nerve Gateway",
      subtitle: "Intricate 8-bone complex enabling multi-axis hand articulation, grip strength, and fine motor dexterity.",
      commonConcerns: ["Carpal Tunnel Syndrome (CTS)", "De Quervain's Tenosynovitis", "Distal Radius Post-Fracture Stiffness"],
      anatomy: "8 carpal bones, transverse carpal ligament, 9 flexor tendons, and median nerve.",
      treatments: ["Nocturnal Splinting", "Median Nerve Gliding Drills", "Forearm Myofascial Release", "Dexterity Retraining"],
      redFlags: "Rapidly progressing numbness in fingertips or visible muscle wasting at base of thumb.",
      primaryConditionSlug: "carpal-tunnel-syndrome",
    },
    ankle: {
      title: "Talocrural Joint & Achilles Complex",
      subtitle: "The foundation of human bipedal locomotion, absorbing ground reaction forces and launching push-off.",
      commonConcerns: ["Inversion Ankle Sprain (ATFL/CFL)", "Achilles Tendinopathy", "Plantar Fasciitis", "Chronic Ankle Instability"],
      anatomy: "Tibia, fibula, talus, lateral/medial collateral ligaments, and thick Achilles tendon.",
      treatments: ["Progressive Eccentric Heel Drops", "Single-Leg Balance Board Perturbations", "Talus Posterior Mobilization"],
      redFlags: "Sudden 'gunshot' pop in back of calf with loss of plantarflexion (suspected Achilles rupture).",
      primaryConditionSlug: "acl-tear",
    },
    foot: {
      title: "Plantar Fascia & Transverse Arch",
      subtitle: "Dynamic shock-absorbing windlass mechanism converting kinetic energy during every stride.",
      commonConcerns: ["Plantar Fasciitis", "Metatarsalgia", "Morton's Neuroma", "Posterior Tibial Tendon Dysfunction"],
      anatomy: "Calcaneus, plantar aponeurosis, metatarsals, phalanges, and intrinsic foot musculature.",
      treatments: ["Intrinsic Foot Strengthening", "Plantar Fascia Night Splints", "Custom Footwear & Orthotic Advice"],
      redFlags: "Non-healing diabetic foot ulcer or severe unprovoked localized foot swelling.",
      primaryConditionSlug: "acl-tear",
    },
    head: {
      title: "Craniofacial & TMJ System",
      subtitle: "Integrated jaw joint and cranial musculature controlling mastication, speech, and facial balance.",
      commonConcerns: ["TMJ Disc Displacement", "Bruxism (Teeth Grinding)", "Tension Headaches", "Jaw Locking"],
      anatomy: "Mandibular condyle, articular disc, temporomandibular fossa, masseter, and pterygoid muscles.",
      treatments: ["Intra-Oral Myofascial Release", "Cervical Spine Realignment", "Symmetrical Opening Drills"],
      redFlags: "Inability to open mouth past 1 finger width (acute lock) or sudden facial asymmetry.",
      primaryConditionSlug: "lumbar-spondylosis",
    },
  };

  const currentInfo = regionDetails[selectedRegion];

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
    <div className="w-full rounded-3xl bg-midnight-900/70 border border-slate-800 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-clinical-cyan text-xs font-mono mb-2 border border-slate-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Anatomical Navigator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Where is your body speaking to you?
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-sm">
          Select any joint to rotate the 3D model, isolate anatomical structures, and discover evidence-based physiotherapy pathways.
        </p>
      </div>

      {/* Region Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
        {regionList.map((r) => (
          <button
            key={r.id}
            onClick={() => setSelectedRegion(r.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedRegion === r.id
                ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow font-bold scale-105"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Main 3D Canvas + Medical Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
        {/* Left 3D Viewport */}
        <div className="lg:col-span-7 rounded-2xl bg-midnight-950/80 border border-slate-800/80 overflow-hidden relative min-h-[480px]">
          <SceneContainer selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion}>
            <HumanBodyScene
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              className="w-full h-full min-h-[480px]"
            />
          </SceneContainer>
        </div>

        {/* Right Dynamic Clinical Breakdown Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-midnight-950/60 border border-slate-800/80 space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-clinical-cyan font-bold">
                Anatomical Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                {currentInfo.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {currentInfo.subtitle}
              </p>
            </div>

            {/* Anatomy overview */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-white block mb-1 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-clinical-cyan" /> Key Anatomy:
              </span>
              {currentInfo.anatomy}
            </div>

            {/* Common Concerns */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Common Clinical Concerns</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {currentInfo.commonConcerns.map((concern) => (
                  <div key={concern} className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 text-slate-300 flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pain-crimson mt-1 shrink-0" />
                    <span>{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence-Based Interventions */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Evidence-Informed Physiotherapy</h4>
              <div className="space-y-1.5 text-xs text-slate-300">
                {currentInfo.treatments.map((tx) => (
                  <div key={tx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-recovery-mint shrink-0" />
                    <span>{tx}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgent Safety Callout */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-pain-amber shrink-0 mt-0.5" />
              <span>
                <strong>Safety Notice:</strong> {currentInfo.redFlags}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            {onOpenBookingWithRegion ? (
              <button
                onClick={() => onOpenBookingWithRegion(selectedRegion)}
                className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Assessment for {regionList.find(r => r.id === selectedRegion)?.name}</span>
              </button>
            ) : (
              <Link
                href={`/book-assessment?region=${selectedRegion}`}
                className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 font-bold text-xs shadow-clinical-glow hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Assessment</span>
              </Link>
            )}

            <Link
              href={`/conditions/${currentInfo.primaryConditionSlug}`}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1"
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
