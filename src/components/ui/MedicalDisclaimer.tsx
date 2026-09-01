import React from "react";
import { AlertCircle } from "lucide-react";

interface MedicalDisclaimerProps {
  className?: string;
  variant?: "banner" | "card";
}

export const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ 
  className = "",
  variant = "banner" 
}) => {
  if (variant === "card") {
    return (
      <div className={`p-4 rounded-xl border border-slate-700/60 bg-slate-900/50 backdrop-blur-md text-xs text-slate-400 flex items-start gap-3 ${className}`}>
        <AlertCircle className="w-5 h-5 text-clinical-cyan shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-slate-300 mb-1">Canadian Clinical Disclaimer</p>
          <p>
            Educational and 3D visual content provided by AriesXpert is designed for patient health literacy and does not constitute a formal medical diagnosis. Rehabilitation plans should always be evaluated and prescribed by a licensed Registered Physiotherapist (PT) or qualified healthcare practitioner.
          </p>
        </div>
      </div>
    );
  }

  return (
    <aside aria-label="Medical Disclaimer" className={`py-2 px-4 bg-slate-950/80 border-b border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-center gap-2 text-center ${className}`}>
      <AlertCircle className="w-3.5 h-3.5 text-clinical-cyan shrink-0" />
      <span>
        <strong>Notice:</strong> Educational 3D visualizations do not replace in-person clinical assessment by a Registered Physiotherapist. In an emergency, call 911 immediately.
      </span>
    </aside>
  );
};
