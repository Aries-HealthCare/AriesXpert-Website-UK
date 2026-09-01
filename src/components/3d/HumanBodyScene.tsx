"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BodyRegion } from "@/lib/types";
import { RotateCw, ZoomIn, ZoomOut, Eye, Layers } from "lucide-react";

interface HumanBodySceneProps {
  selectedRegion?: BodyRegion;
  onSelectRegion?: (region: BodyRegion) => void;
  className?: string;
  showControls?: boolean;
}

export const HumanBodyScene: React.FC<HumanBodySceneProps> = ({
  selectedRegion = "spine",
  onSelectRegion,
  className = "w-full h-full min-h-[500px]",
  showControls = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<"skeletal" | "muscular" | "nervous">("skeletal");
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b12, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0ea5e9, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f2fe, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 1.8);
    rimLight.position.set(-5, -2, -4);
    scene.add(rimLight);

    const painLight = new THREE.PointLight(0xef4444, 0, 8);
    painLight.position.set(0, 0, 1);
    scene.add(painLight);

    // Human Anatomical Rig Group
    const humanGroup = new THREE.Group();
    scene.add(humanGroup);

    // Materials
    const boneMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe2e8f0,
      metalness: 0.1,
      roughness: 0.3,
      transmission: 0.4,
      thickness: 0.5,
      transparent: true,
      opacity: 0.9,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.15,
    });

    const muscleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const jointMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });

    // Anatomical Structures
    // Head / Cranium
    const headGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const headMesh = new THREE.Mesh(headGeo, boneMaterial);
    headMesh.position.y = 2.4;
    humanGroup.add(headMesh);

    // Cervical / Spine Column (Segmented cylinders)
    const spineGroup = new THREE.Group();
    for (let i = 0; i < 14; i++) {
      const vertebraGeo = new THREE.CylinderGeometry(0.18 - i * 0.005, 0.2 - i * 0.005, 0.12, 16);
      const vertebraMesh = new THREE.Mesh(vertebraGeo, boneMaterial);
      vertebraMesh.position.y = 1.7 - i * 0.14;
      vertebraMesh.rotation.x = Math.sin(i * 0.3) * 0.08;
      spineGroup.add(vertebraMesh);

      // Discs
      const discGeo = new THREE.CylinderGeometry(0.19, 0.19, 0.04, 16);
      const discMat = new THREE.MeshStandardMaterial({ color: 0x00f2fe, emissive: 0x00f2fe, emissiveIntensity: 0.4 });
      const discMesh = new THREE.Mesh(discGeo, discMat);
      discMesh.position.y = 1.7 - i * 0.14 - 0.07;
      spineGroup.add(discMesh);
    }
    humanGroup.add(spineGroup);

    // Ribcage Structure
    const ribcageGroup = new THREE.Group();
    for (let r = 0; r < 7; r++) {
      const ribGeo = new THREE.TorusGeometry(0.65 - r * 0.03, 0.035, 12, 32, Math.PI * 1.6);
      const ribMesh = new THREE.Mesh(ribGeo, boneMaterial);
      ribMesh.position.y = 1.5 - r * 0.15;
      ribMesh.rotation.x = Math.PI / 2 + 0.15;
      ribMesh.rotation.z = -Math.PI * 0.8;
      ribcageGroup.add(ribMesh);
    }
    humanGroup.add(ribcageGroup);

    // Pelvis
    const pelvisGeo = new THREE.TorusGeometry(0.55, 0.14, 16, 32, Math.PI * 1.8);
    const pelvisMesh = new THREE.Mesh(pelvisGeo, boneMaterial);
    pelvisMesh.position.y = -0.35;
    pelvisMesh.rotation.x = Math.PI / 2;
    humanGroup.add(pelvisMesh);

    // Shoulders & Clavicle
    const clavicleGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.6, 16);
    const clavicleMesh = new THREE.Mesh(clavicleGeo, boneMaterial);
    clavicleMesh.position.y = 1.65;
    clavicleMesh.rotation.z = Math.PI / 2;
    humanGroup.add(clavicleMesh);

    // Arms
    const createLimb = (isLeft: boolean) => {
      const armGroup = new THREE.Group();
      const mult = isLeft ? -1 : 1;

      // Shoulder joint
      const shoulderJoint = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), jointMaterial);
      shoulderJoint.position.set(mult * 0.9, 1.65, 0);
      armGroup.add(shoulderJoint);

      // Upper Arm (Humerus)
      const humerus = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.9, 16), boneMaterial);
      humerus.position.set(mult * 1.05, 1.15, 0);
      humerus.rotation.z = mult * 0.15;
      armGroup.add(humerus);

      // Elbow
      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 16), jointMaterial);
      elbow.position.set(mult * 1.18, 0.65, 0);
      armGroup.add(elbow);

      // Forearm (Radius & Ulna)
      const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.85, 16), boneMaterial);
      forearm.position.set(mult * 1.25, 0.2, 0);
      armGroup.add(forearm);

      // Wrist & Hand
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.25, 0.05), boneMaterial);
      hand.position.set(mult * 1.3, -0.3, 0);
      armGroup.add(hand);

      return armGroup;
    };

    humanGroup.add(createLimb(true));
    humanGroup.add(createLimb(false));

    // Legs
    const createLeg = (isLeft: boolean) => {
      const legGroup = new THREE.Group();
      const mult = isLeft ? -1 : 1;

      // Hip joint
      const hipJoint = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), jointMaterial);
      hipJoint.position.set(mult * 0.45, -0.4, 0);
      legGroup.add(hipJoint);

      // Femur (Thigh)
      const femur = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 1.3, 16), boneMaterial);
      femur.position.set(mult * 0.45, -1.15, 0);
      legGroup.add(femur);

      // Knee Joint & Patella
      const knee = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), jointMaterial);
      knee.position.set(mult * 0.45, -1.85, 0.05);
      legGroup.add(knee);

      // Tibia / Fibula (Shank)
      const tibia = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 1.2, 16), boneMaterial);
      tibia.position.set(mult * 0.45, -2.55, 0);
      legGroup.add(tibia);

      // Ankle & Foot
      const ankle = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), jointMaterial);
      ankle.position.set(mult * 0.45, -3.2, 0);
      legGroup.add(ankle);

      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.4), boneMaterial);
      foot.position.set(mult * 0.45, -3.3, 0.15);
      legGroup.add(foot);

      return legGroup;
    };

    humanGroup.add(createLeg(true));
    humanGroup.add(createLeg(false));

    // Floating Bioluminescent Connective Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePositions[p] = (Math.random() - 0.5) * 4;
      particlePositions[p + 1] = (Math.random() - 0.5) * 7;
      particlePositions[p + 2] = (Math.random() - 0.5) * 3;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Interactive Drag & Orbit state
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      humanGroup.rotation.y += deltaX * 0.008;
      humanGroup.rotation.x = Math.max(-0.4, Math.min(0.4, humanGroup.rotation.x + deltaY * 0.008));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Animation Loop (Breathing + Floating Particles)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle organic breathing motion
      const breathScale = 1 + Math.sin(elapsedTime * 1.5) * 0.015;
      ribcageGroup.scale.set(breathScale, 1, breathScale);
      
      // Floating particle drift
      particleSystem.rotation.y = elapsedTime * 0.03;

      // Auto rotation if enabled
      if (isRotating && !isDragging) {
        humanGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.25;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isRotating]);

  return (
    <div className={`relative ${className}`}>
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Navigation Controls */}
      {showControls && (
        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 p-1.5 rounded-xl bg-midnight-900/80 border border-slate-800 backdrop-blur-xl">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              isRotating ? "bg-clinical-cyan/20 text-clinical-cyan border border-clinical-cyan/40" : "text-slate-400 hover:text-white"
            }`}
            title="Toggle Continuous Anatomical Orbit"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Orbit</span>
          </button>

          <div className="h-4 w-px bg-slate-800" />

          <button
            onClick={() => {
              if (onSelectRegion) onSelectRegion("spine");
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200"
          >
            Reset View
          </button>
        </div>
      )}

      {/* Top Clinical Layer Indicator */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
        <span className="px-3 py-1.5 rounded-full bg-slate-900/90 border border-clinical-cyan/30 text-xs font-mono text-clinical-cyan backdrop-blur-md flex items-center gap-1.5 shadow-clinical-glow">
          <Layers className="w-3.5 h-3.5 text-clinical-cyan" />
          <span>Living Anatomical Rig (WebGL)</span>
        </span>
      </div>
    </div>
  );
};
