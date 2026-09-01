"use client";

import React, { useState } from "react";
import { BIOMECHANICAL_MOVEMENTS } from "@/lib/canadian-data";
import { Activity, Compass, AlertTriangle, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";

interface KinematicsMovement3DProps {
  onOpenBooking?: () => void;
}

export const KinematicsMovement3D: React.FC<KinematicsMovement3DProps> = ({ onOpenBooking }) => {
  const [selectedMovementIndex, setSelectedMovementIndex] = useState(0);
  const currentMovement = BIOMECHANICAL_MOVEMENTS[selectedMovementIndex] || BIOMECHANICAL_MOVEMENTS[0];

  return (
    <div className="w-full rounded-3xl bg-midnight-900/80 border border-slate-800 p-6 lg:p-10 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase text-recovery-mint font-bold tracking-wider">
            Biomechanical Intelligence
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
            Movement & Kinematics Lab
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 leading-relaxed">
            Every daily task is governed by kinematic force vectors, joint angles, and neuromuscular timing. Inspect movement patterns to correct compensations before injuries occur.
          </p>
        </div>

        {/* Movement Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {BIOMECHANICAL_MOVEMENTS.map((mov, idx) => (
            <button
              key={mov.id}
              onClick={() => setSelectedMovementIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedMovementIndex === idx
                  ? "bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 shadow-clinical-glow scale-105"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
              }`}
            >
              {mov.title.split("&")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Kinematic Angles & Muscle Activation Chains */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Joint Angles & Biomechanical Checks */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-clinical-cyan font-bold flex items-center gap-2">
            <Compass className="w-4 h-4" /> Critical Kinematic Joint Angles
          </h3>

          <div className="space-y-3">
            {currentMovement.criticalKinematicAngles.map((angle) => (
              <div key={angle.joint} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{angle.joint}</h4>
                  <span className="px-2 py-0.5 rounded bg-clinical-cyan/20 border border-clinical-cyan/40 text-[11px] font-mono text-clinical-cyan font-bold">
                    {angle.optimalAngle}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-pain-crimson/10 border border-pain-crimson/20 text-xs text-slate-300 flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-pain-amber shrink-0 mt-0.5" />
                  <span>
                    <strong>Compensation Risk:</strong> {angle.compensationWarning}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Muscle Activation Heatmap */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-recovery-mint font-bold flex items-center gap-2">
            <Activity className="w-4 h-4" /> Kinetic Chain & Muscle Activation
          </h3>

          <div className="space-y-3">
            {currentMovement.muscleActivationGroups.map((muscle) => (
              <div key={muscle.name} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{muscle.name}</h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${
                    muscle.role === "prime-mover" 
                      ? "bg-recovery-mint/20 text-recovery-mint border border-recovery-mint/40" 
                      : "bg-clinical-cyan/20 text-clinical-cyan border border-clinical-cyan/40"
                  }`}>
                    {muscle.role}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {muscle.functionInMovement}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between p-4 rounded-2xl bg-midnight-950/90 border border-slate-800">
            <div>
              <p className="text-xs font-semibold text-white">Have your movement analyzed in person</p>
              <p className="text-[11px] text-slate-400">Clinical movement assessment by a Registered PT</p>
            </div>
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-xs font-bold shadow-clinical-glow hover:brightness-110"
              >
                Book Assessment
              </button>
            ) : (
              <Link
                href="/book-assessment"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 text-xs font-bold shadow-clinical-glow hover:brightness-110"
              >
                Book Assessment
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
