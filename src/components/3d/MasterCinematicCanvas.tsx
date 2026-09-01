"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import { BodyRegion, AnatomicalLayer } from "@/lib/types";
import { Sparkles, Layers, Eye, EyeOff, RotateCw, ZoomIn, Info, Activity } from "lucide-react";

interface MasterCinematicCanvasProps {
  activeChapter?: number;
  selectedRegion?: BodyRegion | "";
  onSelectRegion?: (region: BodyRegion) => void;
  activeLayer?: AnatomicalLayer;
  showPainImpulses?: boolean;
  interactiveControls?: boolean;
  className?: string;
}

export const MasterCinematicCanvas: React.FC<MasterCinematicCanvasProps> = ({
  activeChapter = 0,
  selectedRegion = "",
  onSelectRegion,
  activeLayer = "skeletal",
  showPainImpulses = false,
  interactiveControls = true,
  className = "w-full h-full min-h-[600px]",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentLayer, setCurrentLayer] = useState<AnatomicalLayer>(activeLayer);
  const [isRotating, setIsRotating] = useState(true);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Sync external activeLayer prop
  useEffect(() => {
    if (activeLayer) setCurrentLayer(activeLayer);
  }, [activeLayer]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene & Camera Setup
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 2. Renderer with Anti-aliasing
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.innerHTML = "";
    mount.appendChild(renderer.domElement);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0f2b48, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f2fe, 2.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 1.8);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x38bdf8, 1.5, 20);
    fillLight.position.set(0, 0, 4);
    scene.add(fillLight);

    // 4. Anatomical Silhouette Construction (Group)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- SKELETAL LAYER ---
    const skeletalGroup = new THREE.Group();
    masterGroup.add(skeletalGroup);

    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xecfeff,
      roughness: 0.25,
      metalness: 0.15,
      emissive: 0x0369a1,
      emissiveIntensity: 0.35,
    });

    const jointGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
    });

    // Spine Column (C1 - S1)
    const spineCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.8, -0.05),
      new THREE.Vector3(0, 1.2, 0.08),
      new THREE.Vector3(0, 0.3, -0.1),
      new THREE.Vector3(0, -0.6, 0.05),
      new THREE.Vector3(0, -1.2, -0.02),
    ]);
    const spineGeo = new THREE.TubeGeometry(spineCurve, 32, 0.12, 16, false);
    const spineMesh = new THREE.Mesh(spineGeo, boneMat);
    skeletalGroup.add(spineMesh);

    // Vertebral segments
    for (let i = 0; i < 18; i++) {
      const vT = i / 18;
      const pt = spineCurve.getPoint(vT);
      const vGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.06, 12);
      const vMesh = new THREE.Mesh(vGeo, boneMat);
      vMesh.position.copy(pt);
      skeletalGroup.add(vMesh);
    }

    // Skull / Cranium
    const skullGeo = new THREE.SphereGeometry(0.55, 24, 24);
    skullGeo.scale(0.85, 1.1, 0.95);
    const skullMesh = new THREE.Mesh(skullGeo, boneMat);
    skullMesh.position.set(0, 2.55, 0);
    skeletalGroup.add(skullMesh);

    // Ribcage
    for (let i = 0; i < 7; i++) {
      const y = 1.3 - i * 0.22;
      const radius = 0.55 - Math.abs(i - 3) * 0.07;
      const ribCurve = new THREE.EllipseCurve(0, 0, radius, radius * 0.75, 0, Math.PI * 2, false, 0);
      const ribPts = ribCurve.getPoints(24).map(p => new THREE.Vector3(p.x, y, p.y * 0.7));
      const ribGeo = new THREE.BufferGeometry().setFromPoints(ribPts);
      const ribLine = new THREE.LineLoop(ribGeo, new THREE.LineBasicMaterial({ color: 0x38bdf8, opacity: 0.8, transparent: true }));
      skeletalGroup.add(ribLine);
    }

    // Pelvis / Hips
    const pelvisGeo = new THREE.TorusGeometry(0.58, 0.14, 12, 24, Math.PI);
    const pelvisMesh = new THREE.Mesh(pelvisGeo, boneMat);
    pelvisMesh.rotation.x = Math.PI / 2;
    pelvisMesh.position.set(0, -1.2, 0);
    skeletalGroup.add(pelvisMesh);

    // Femurs (Thighs)
    const femurGeo = new THREE.CylinderGeometry(0.1, 0.08, 1.6, 12);
    const leftFemur = new THREE.Mesh(femurGeo, boneMat);
    leftFemur.position.set(-0.45, -2.1, 0);
    leftFemur.rotation.z = -0.05;
    skeletalGroup.add(leftFemur);

    const rightFemur = new THREE.Mesh(femurGeo, boneMat);
    rightFemur.position.set(0.45, -2.1, 0);
    rightFemur.rotation.z = 0.05;
    skeletalGroup.add(rightFemur);

    // Knee Joint Nodes
    const kneeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const leftKnee = new THREE.Mesh(kneeGeo, jointGlowMat);
    leftKnee.position.set(-0.45, -3.0, 0.05);
    skeletalGroup.add(leftKnee);

    const rightKnee = new THREE.Mesh(kneeGeo, jointGlowMat);
    rightKnee.position.set(0.45, -3.0, 0.05);
    skeletalGroup.add(rightKnee);

    // Tibia / Fibula (Lower Legs)
    const tibiaGeo = new THREE.CylinderGeometry(0.08, 0.06, 1.5, 12);
    const leftTibia = new THREE.Mesh(tibiaGeo, boneMat);
    leftTibia.position.set(-0.45, -3.85, 0);
    skeletalGroup.add(leftTibia);

    const rightTibia = new THREE.Mesh(tibiaGeo, boneMat);
    rightTibia.position.set(0.45, -3.85, 0);
    skeletalGroup.add(rightTibia);

    // Shoulders & Arms
    const clavicleGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8);
    const clavicleMesh = new THREE.Mesh(clavicleGeo, boneMat);
    clavicleMesh.rotation.z = Math.PI / 2;
    clavicleMesh.position.set(0, 1.6, 0);
    skeletalGroup.add(clavicleMesh);

    const shoulderJointGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const leftShoulder = new THREE.Mesh(shoulderJointGeo, jointGlowMat);
    leftShoulder.position.set(-0.85, 1.55, 0);
    skeletalGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderJointGeo, jointGlowMat);
    rightShoulder.position.set(0.85, 1.55, 0);
    skeletalGroup.add(rightShoulder);

    const armGeo = new THREE.CylinderGeometry(0.08, 0.06, 1.3, 12);
    const leftArm = new THREE.Mesh(armGeo, boneMat);
    leftArm.position.set(-1.0, 0.85, 0);
    leftArm.rotation.z = -0.15;
    skeletalGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, boneMat);
    rightArm.position.set(1.0, 0.85, 0);
    rightArm.rotation.z = 0.15;
    skeletalGroup.add(rightArm);

    // --- NERVOUS SYSTEM LAYER ---
    const nervousGroup = new THREE.Group();
    masterGroup.add(nervousGroup);

    const nerveMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.9,
    });

    const painNerveMat = new THREE.LineBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 1.0,
      linewidth: 2,
    });

    // Sciatic Nerve Lines (Spine to Feet)
    const leftSciaticPts = [
      new THREE.Vector3(0, -0.6, 0),
      new THREE.Vector3(-0.35, -1.2, -0.1),
      new THREE.Vector3(-0.45, -2.1, -0.05),
      new THREE.Vector3(-0.45, -3.0, -0.05),
      new THREE.Vector3(-0.45, -4.5, 0.1),
    ];
    const leftSciaticGeo = new THREE.BufferGeometry().setFromPoints(leftSciaticPts);
    const leftSciaticLine = new THREE.Line(leftSciaticGeo, showPainImpulses ? painNerveMat : nerveMat);
    nervousGroup.add(leftSciaticLine);

    const rightSciaticPts = [
      new THREE.Vector3(0, -0.6, 0),
      new THREE.Vector3(0.35, -1.2, -0.1),
      new THREE.Vector3(0.45, -2.1, -0.05),
      new THREE.Vector3(0.45, -3.0, -0.05),
      new THREE.Vector3(0.45, -4.5, 0.1),
    ];
    const rightSciaticGeo = new THREE.BufferGeometry().setFromPoints(rightSciaticPts);
    const rightSciaticLine = new THREE.Line(rightSciaticGeo, nerveMat);
    nervousGroup.add(rightSciaticLine);

    // Brachial Plexus (Neck to Arms)
    const leftBrachialPts = [
      new THREE.Vector3(0, 1.7, 0),
      new THREE.Vector3(-0.5, 1.6, 0),
      new THREE.Vector3(-0.85, 1.55, 0),
      new THREE.Vector3(-1.1, 0.7, 0),
      new THREE.Vector3(-1.3, -0.2, 0),
    ];
    const leftBrachialGeo = new THREE.BufferGeometry().setFromPoints(leftBrachialPts);
    const leftBrachialLine = new THREE.Line(leftBrachialGeo, nerveMat);
    nervousGroup.add(leftBrachialLine);

    const rightBrachialPts = [
      new THREE.Vector3(0, 1.7, 0),
      new THREE.Vector3(0.5, 1.6, 0),
      new THREE.Vector3(0.85, 1.55, 0),
      new THREE.Vector3(1.1, 0.7, 0),
      new THREE.Vector3(1.3, -0.2, 0),
    ];
    const rightBrachialGeo = new THREE.BufferGeometry().setFromPoints(rightBrachialPts);
    const rightBrachialLine = new THREE.Line(rightBrachialGeo, nerveMat);
    nervousGroup.add(rightBrachialLine);

    // --- BIOLUMINESCENT PARTICLE CLOUD ---
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 8;
      const radius = 0.5 + Math.random() * 1.5;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = Math.sin(theta) * radius;

      // Color gradation (Cyan to Mint)
      particleColors[i * 3] = 0.0;
      particleColors[i * 3 + 1] = 0.85 + Math.random() * 0.15;
      particleColors[i * 3 + 2] = 0.95;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- REGION HOTSPOTS ---
    const hotspots = [
      { id: "head", label: "Head / TMJ", pos: new THREE.Vector3(0, 2.5, 0.3) },
      { id: "neck", label: "Cervical Spine", pos: new THREE.Vector3(0, 1.8, 0.2) },
      { id: "shoulder", label: "Shoulder", pos: new THREE.Vector3(-0.85, 1.55, 0.2) },
      { id: "spine", label: "Lumbar Spine", pos: new THREE.Vector3(0, -0.4, 0.2) },
      { id: "hip", label: "Pelvis / Hip", pos: new THREE.Vector3(-0.55, -1.3, 0.2) },
      { id: "knee", label: "Knee Joint", pos: new THREE.Vector3(-0.45, -3.0, 0.2) },
      { id: "ankle", label: "Ankle & Foot", pos: new THREE.Vector3(-0.45, -4.5, 0.2) },
    ];

    const hotspotMeshes: THREE.Mesh[] = [];
    hotspots.forEach((spot) => {
      const hGeo = new THREE.SphereGeometry(0.1, 12, 12);
      const isSelected = selectedRegion === spot.id;
      const hMat = new THREE.MeshBasicMaterial({
        color: isSelected ? 0xef4444 : 0x00f2fe,
      });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.position.copy(spot.pos);
      hMesh.userData = { id: spot.id, label: spot.label };
      masterGroup.add(hMesh);
      hotspotMeshes.push(hMesh);
    });

    // --- INTERACTION & DRAG CONTROLS ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsRotating(false);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      masterGroup.rotation.y += deltaX * 0.008;
      masterGroup.rotation.x += deltaY * 0.005;
      masterGroup.rotation.x = Math.max(-0.6, Math.min(0.6, masterGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    if (interactiveControls) {
      dom.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    // --- CAMERA TARGET POSITION INTERPOLATION BASED ON SELECTED REGION ---
    let targetCameraY = 0;
    let targetCameraZ = 8.5;

    if (selectedRegion === "spine") {
      targetCameraY = -0.4;
      targetCameraZ = 5.0;
    } else if (selectedRegion === "knee") {
      targetCameraY = -3.0;
      targetCameraZ = 4.8;
    } else if (selectedRegion === "shoulder") {
      targetCameraY = 1.5;
      targetCameraZ = 4.8;
    } else if (selectedRegion === "head" || selectedRegion === "neck") {
      targetCameraY = 2.0;
      targetCameraZ = 4.5;
    }

    // --- ANIMATION LOOP ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Organic subtle breathing oscillation
      const breathing = Math.sin(elapsed * 1.5) * 0.02;
      masterGroup.position.y = breathing;

      // Auto rotation when idle
      if (isRotating && !isDragging) {
        masterGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.35;
      }

      // Smooth camera interpolation to target
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.04;

      // Animate bioluminescent particle cloud
      const posArray = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += Math.sin(elapsed + i) * 0.003;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Pulse hotspot beacons
      hotspotMeshes.forEach((h, idx) => {
        const pulse = 1 + Math.sin(elapsed * 3 + idx) * 0.25;
        h.scale.set(pulse, pulse, pulse);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactiveControls) {
        dom.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      }
      renderer.dispose();
      if (mount) mount.innerHTML = "";
    };
  }, [selectedRegion, isRotating, showPainImpulses, interactiveControls]);

  return (
    <div className={`relative ${className} overflow-hidden rounded-3xl bg-radial-vignette`}>
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Spatial HUD Controls */}
      <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
        <div className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-2 shadow-glass">
          <span className="w-2 h-2 rounded-full bg-clinical-cyan animate-pulse" />
          <span className="text-white font-bold">3D ANATOMICAL TELEMETRY</span>
          <span className="text-slate-500">|</span>
          <span className="text-clinical-cyan capitalize">{currentLayer} Layer</span>
        </div>

        {/* Anatomical Layer Toggles */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-800/90 shadow-glass">
          {(["skeletal", "nervous", "articular", "muscular", "fascial"] as AnatomicalLayer[]).map((layer) => (
            <button
              key={layer}
              onClick={() => setCurrentLayer(layer)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-mono uppercase font-bold transition-all ${
                currentLayer === layer
                  ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow scale-105"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* Right HUD: Region Focus Picker */}
      <div className="absolute top-6 right-6 flex flex-col gap-1.5 z-10">
        <span className="text-[9px] font-mono uppercase text-slate-400 font-bold px-2">Anatomical Focus:</span>
        {(["spine", "knee", "shoulder", "neck", "hip"] as BodyRegion[]).map((region) => (
          <button
            key={region}
            onClick={() => onSelectRegion && onSelectRegion(region)}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-mono text-right capitalize transition-all ${
              selectedRegion === region
                ? "bg-clinical-cyan/20 border border-clinical-cyan text-white font-bold shadow-clinical-glow"
                : "bg-slate-950/60 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            {region} Focus →
          </button>
        ))}
      </div>

      {/* Bottom HUD: Orbit Guidance & Telemetry Status */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none z-10">
        <div className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-2">
          <RotateCw className="w-3 h-3 text-clinical-cyan" />
          <span>Click & drag to rotate 3D anatomical silhouette</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-2">
          <Activity className="w-3 h-3 text-recovery-mint" />
          <span>Real-time Kinematic Matrix Active</span>
        </div>
      </div>
    </div>
  );
};
