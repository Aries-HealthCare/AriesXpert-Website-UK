"use client";

import React, { useState, useEffect } from "react";
import { detectDeviceCapabilities, DeviceCapability } from "@/lib/webgl-detection";
import { FallbackAnatomyView } from "./FallbackAnatomyView";
import { BodyRegion } from "@/lib/types";

interface SceneContainerProps {
  children: React.ReactNode;
  fallbackType?: "full-body" | "spine" | "knee" | "movement" | "surgery";
  selectedRegion?: BodyRegion;
  onSelectRegion?: (region: BodyRegion) => void;
  className?: string;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
  children,
  fallbackType = "full-body",
  selectedRegion = "spine",
  onSelectRegion,
  className = "w-full h-full min-h-[400px]",
}) => {
  const [capabilities, setCapabilities] = useState<DeviceCapability | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      const caps = detectDeviceCapabilities();
      setCapabilities(caps);
    } catch {
      setHasError(true);
    }
  }, []);

  if (hasError || (capabilities && capabilities.tier === "fallback")) {
    return (
      <div className={`relative ${className}`}>
        <FallbackAnatomyView
          type={fallbackType}
          selectedRegion={selectedRegion}
          onSelectRegion={onSelectRegion}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};
