"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { ShieldCheck, Activity, AlertCircle, Sparkles, RefreshCcw, Layers } from "lucide-react";

type SpineLevel = "cervical" | "thoracic" | "lumbar" | "l4-l5" | "l5-s1";
type SpinePathology = "normal" | "bulge" | "protrusion" | "herniation" | "degenerative" | "compression";

export const SpineViewer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedLevel, setSelectedLevel] = useState<SpineLevel>("l4-l5");
  const [selectedPathology, setSelectedPathology] = useState<SpinePathology>("herniation");
  const [isDecompressed, setIsDecompressed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 600;
    const height = mount.clientHeight || 450;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mount.innerHTML = "";
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0x0f2b48, 1.4);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0x00f2fe, 3.0);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const redLight = new THREE.PointLight(
      selectedPathology === "normal" ? 0x00f2fe : 0xef4444, 
      selectedPathology === "normal" ? 0.8 : 3.5, 
      10
    );
    redLight.position.set(0.6, 0, 0.5);
    scene.add(redLight);

    const spineGroup = new THREE.Group();
    scene.add(spineGroup);

    // Vertebrae Materials
    const boneMaterial = new THREE.MeshStandardMaterial({
      color: 0xecfeff,
      roughness: 0.3,
      metalness: 0.2,
      emissive: 0x0369a1,
      emissiveIntensity: 0.3,
    });

    const discNormalMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.85,
    });

    const discHerniatedMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.2,
      emissive: 0xdc2626,
      emissiveIntensity: 0.8,
    });

    const nerveRootMat = new THREE.MeshBasicMaterial({
      color: selectedPathology === "compression" || selectedPathology === "herniation" ? 0xef4444 : 0xfacc15,
      wireframe: true,
    });

    // Construct 2 Vertebrae (Superior L4 & Inferior L5)
    // 1. Superior Vertebral Body (L4)
    const superiorVGeo = new THREE.CylinderGeometry(1.1, 1.15, 0.75, 24);
    superiorVGeo.scale(1.2, 1.0, 1.0);
    const superiorVMesh = new THREE.Mesh(superiorVGeo, boneMaterial);
    superiorVMesh.position.y = isDecompressed ? 1.0 : 0.75;
    spineGroup.add(superiorVMesh);

    // Posterior Spinous Process L4
    const spinousGeo = new THREE.ConeGeometry(0.35, 1.1, 12);
    const spinousMeshL4 = new THREE.Mesh(spinousGeo, boneMaterial);
    spinousMeshL4.rotation.x = -Math.PI / 2.2;
    spinousMeshL4.position.set(0, superiorVMesh.position.y, -1.0);
    spineGroup.add(spinousMeshL4);

    // 2. Inferior Vertebral Body (L5)
    const inferiorVGeo = new THREE.CylinderGeometry(1.2, 1.25, 0.75, 24);
    inferiorVGeo.scale(1.2, 1.0, 1.0);
    const inferiorVMesh = new THREE.Mesh(inferiorVGeo, boneMaterial);
    inferiorVMesh.position.y = isDecompressed ? -1.0 : -0.75;
    spineGroup.add(inferiorVMesh);

    // Posterior Spinous Process L5
    const spinousMeshL5 = new THREE.Mesh(spinousGeo, boneMaterial);
    spinousMeshL5.rotation.x = -Math.PI / 2.2;
    spinousMeshL5.position.set(0, inferiorVMesh.position.y, -1.0);
    spineGroup.add(spinousMeshL5);

    // 3. Intervertebral Disc
    const discHeight = selectedPathology === "degenerative" ? (isDecompressed ? 0.35 : 0.2) : (isDecompressed ? 0.6 : 0.45);
    const discGeo = new THREE.CylinderGeometry(1.05, 1.1, discHeight, 24);
    discGeo.scale(1.18, 1.0, 1.0);
    const discMesh = new THREE.Mesh(
      discGeo, 
      selectedPathology === "herniation" || selectedPathology === "compression" ? discHerniatedMat : discNormalMat
    );
    discMesh.position.y = 0;
    spineGroup.add(discMesh);

    // 4. Herniated Disc Extrusion Node (Posterolateral)
    if (selectedPathology === "herniation" || selectedPathology === "protrusion" || selectedPathology === "bulge") {
      const extrusionSize = selectedPathology === "herniation" ? 0.35 : selectedPathology === "protrusion" ? 0.25 : 0.15;
      const extrusionGeo = new THREE.SphereGeometry(extrusionSize, 16, 16);
      const extrusionMesh = new THREE.Mesh(extrusionGeo, discHerniatedMat);
      extrusionMesh.position.set(0.85, 0, -0.4);
      spineGroup.add(extrusionMesh);
    }

    // 5. Exiting Spinal Nerve Root (L4 / L5 Traversing Nerve)
    const nerveCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.8, -0.4),
      new THREE.Vector3(0.5, 0.3, -0.45),
      new THREE.Vector3(0.9, -0.1, -0.5), // Passes right by disc
      new THREE.Vector3(1.3, -0.6, -0.6),
      new THREE.Vector3(1.6, -1.2, -0.7),
    ]);
    const nerveGeo = new THREE.TubeGeometry(nerveCurve, 20, 0.08, 12, false);
    const nerveMesh = new THREE.Mesh(nerveGeo, nerveRootMat);
    spineGroup.add(nerveMesh);

    // Interaction / Drag
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouse.x;
      const deltaY = e.clientY - prevMouse.y;
      spineGroup.rotation.y += deltaX * 0.008;
      spineGroup.rotation.x += deltaY * 0.005;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isDragging) {
        spineGroup.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.dispose();
      if (mount) mount.innerHTML = "";
    };
  }, [selectedLevel, selectedPathology, isDecompressed]);

  return (
    <div className="w-full rounded-3xl bg-midnight-900/90 border border-slate-800 p-6 lg:p-10 space-y-8 shadow-2xl">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase text-clinical-cyan font-bold tracking-wider">
            Signature 3D Spine Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
            Vertebrae, Disc & Nerve Mechanics
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 leading-relaxed">
            Inspect intervertebral disc deformation, foraminal stenosis, and targeted mechanical decompression at C1–S1.
          </p>
        </div>

        {/* Level Selector */}
        <div className="flex flex-wrap gap-2">
          {(["cervical", "thoracic", "lumbar", "l4-l5", "l5-s1"] as SpineLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase font-bold transition-all ${
                selectedLevel === lvl
                  ? "bg-clinical-cyan text-slate-950 shadow-clinical-glow scale-105"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: 3D Spine Canvas & Pathology Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: 3D Canvas */}
        <div className="lg:col-span-7 h-[460px] rounded-2xl bg-midnight-950/90 border border-slate-800/90 relative overflow-hidden">
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Interactive Overlay Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-slate-300">
              LEVEL: <strong className="text-white uppercase">{selectedLevel}</strong>
            </span>
            <span className={`px-3 py-1 rounded-full backdrop-blur-md border text-[10px] font-mono font-bold ${
              selectedPathology === "normal"
                ? "bg-recovery-mint/20 border-recovery-mint/40 text-recovery-mint"
                : "bg-pain-crimson/20 border-pain-crimson/40 text-pain-crimson"
            }`}>
              STATUS: {selectedPathology.toUpperCase()}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 z-10">
            <button
              onClick={() => setIsDecompressed(!isDecompressed)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 shadow-glass ${
                isDecompressed
                  ? "bg-recovery-mint text-slate-950 shadow-recovery-glow"
                  : "bg-slate-900 border border-slate-700 text-slate-200 hover:border-clinical-cyan"
              }`}
            >
              <RefreshCcw className={`w-3.5 h-3.5 ${isDecompressed ? "animate-spin" : ""}`} />
              <span>{isDecompressed ? "Decompression Active" : "Simulate Decompression"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Comparative Pathology Modes */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
            Select Pathology Simulation:
          </h3>

          <div className="space-y-2.5">
            {[
              { id: "normal", label: "Normal Healthy Disc", desc: "Hydrated nucleus pulposus with intact annular rings and wide neural foramen." },
              { id: "bulge", label: "Disc Bulge", desc: "Generalized extension of disc margin beyond vertebral borders without focal annular rupture." },
              { id: "protrusion", label: "Disc Protrusion", desc: "Focal displacement where the base of extruded material is wider than any other dimension." },
              { id: "herniation", label: "Disc Herniation (Extrusion)", desc: "Nuclear material breaks through annular fibers, creating direct impingement on the nerve root." },
              { id: "degenerative", label: "Degenerative Disc Disease", desc: "Loss of disc height, dehydration, and osteophytic spurring causing foraminal narrowing." },
              { id: "compression", label: "Nerve Root Compression", desc: "Inflammatory chemical irritation and mechanical entrapment causing radiating sciatica symptoms." },
            ].map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPathology(path.id as SpinePathology)}
                className={`w-full p-3.5 rounded-xl border text-left transition-all ${
                  selectedPathology === path.id
                    ? "bg-slate-800/90 border-clinical-cyan text-white shadow-clinical-glow ring-1 ring-clinical-cyan"
                    : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white">{path.label}</h4>
                  <span className={`w-2 h-2 rounded-full ${
                    path.id === "normal" ? "bg-recovery-mint" : "bg-pain-crimson"
                  }`} />
                </div>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{path.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
