"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Activity, ShieldCheck, Layers, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";

type KneeMode = "healthy" | "osteoarthritis" | "acl-tear" | "meniscus" | "tkr-implant";

export const KneeViewer3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedMode, setSelectedMode] = useState<KneeMode>("healthy");
  const [showCartilage, setShowCartilage] = useState(true);
  const [showMeniscus, setShowMeniscus] = useState(true);
  const [showCruciates, setShowCruciates] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 600;
    const height = mount.clientHeight || 450;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 6.8);

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

    const keyLight = new THREE.DirectionalLight(0x00f2fe, 2.8);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x10b981, 1.5);
    fillLight.position.set(-5, -4, -4);
    scene.add(fillLight);

    const kneeGroup = new THREE.Group();
    scene.add(kneeGroup);

    // Materials
    const boneMaterial = new THREE.MeshStandardMaterial({
      color: 0xecfeff,
      roughness: 0.35,
      metalness: 0.15,
      emissive: 0x0369a1,
      emissiveIntensity: 0.25,
    });

    const implantMetalMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.2,
    });

    const cartilageNormalMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85,
    });

    const cartilageDegradedMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.8,
      transparent: true,
      opacity: 0.45,
    });

    const ligamentMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.3,
    });

    const ligamentTornMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.8,
      emissive: 0xdc2626,
      emissiveIntensity: 0.6,
    });

    // 1. Distal Femur (Thigh Bone)
    if (selectedMode === "tkr-implant") {
      const tkrFemurGeo = new THREE.BoxGeometry(1.6, 1.2, 1.4);
      const tkrFemur = new THREE.Mesh(tkrFemurGeo, implantMetalMat);
      tkrFemur.position.y = 1.0;
      kneeGroup.add(tkrFemur);
    } else {
      const femurCondyleGeo = new THREE.CylinderGeometry(0.75, 0.95, 1.8, 20);
      const femurMesh = new THREE.Mesh(femurCondyleGeo, boneMaterial);
      femurMesh.position.y = 1.1;
      kneeGroup.add(femurMesh);

      // Medial & Lateral Femoral Condyles
      const condyleSphereGeo = new THREE.SphereGeometry(0.48, 16, 16);
      condyleSphereGeo.scale(0.8, 1.0, 1.2);
      const medialCondyle = new THREE.Mesh(condyleSphereGeo, boneMaterial);
      medialCondyle.position.set(-0.45, 0.3, 0);
      kneeGroup.add(medialCondyle);

      const lateralCondyle = new THREE.Mesh(condyleSphereGeo, boneMaterial);
      lateralCondyle.position.set(0.45, 0.3, 0);
      kneeGroup.add(lateralCondyle);
    }

    // 2. Proximal Tibia (Shin Bone)
    if (selectedMode === "tkr-implant") {
      const tkrTibiaGeo = new THREE.CylinderGeometry(0.85, 0.55, 1.5, 16);
      const tkrTibia = new THREE.Mesh(tkrTibiaGeo, implantMetalMat);
      tkrTibia.position.y = -1.1;
      kneeGroup.add(tkrTibia);

      // Polyethylene Plastic Spacer
      const spacerGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.25, 20);
      const spacerMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
      const spacerMesh = new THREE.Mesh(spacerGeo, spacerMat);
      spacerMesh.position.y = -0.25;
      kneeGroup.add(spacerMesh);
    } else {
      const tibiaPlateauGeo = new THREE.CylinderGeometry(0.95, 0.6, 1.8, 20);
      const tibiaMesh = new THREE.Mesh(tibiaPlateauGeo, boneMaterial);
      tibiaMesh.position.y = -1.1;
      kneeGroup.add(tibiaMesh);
    }

    // 3. Articular Cartilage Caps
    if (showCartilage && selectedMode !== "tkr-implant") {
      const cartilageGeo = new THREE.SphereGeometry(0.49, 16, 16);
      cartilageGeo.scale(0.82, 0.3, 1.22);
      const cartilageMesh = new THREE.Mesh(
        cartilageGeo, 
        selectedMode === "osteoarthritis" ? cartilageDegradedMat : cartilageNormalMat
      );
      cartilageMesh.position.set(-0.45, 0.25, 0);
      kneeGroup.add(cartilageMesh);

      const cartilageLateral = new THREE.Mesh(
        cartilageGeo, 
        selectedMode === "osteoarthritis" ? cartilageDegradedMat : cartilageNormalMat
      );
      cartilageLateral.position.set(0.45, 0.25, 0);
      kneeGroup.add(cartilageLateral);
    }

    // 4. Meniscus (Medial & Lateral C-shaped Cushions)
    if (showMeniscus && selectedMode !== "tkr-implant") {
      const meniscusGeo = new THREE.TorusGeometry(0.35, 0.09, 10, 20, Math.PI * 1.5);
      const meniscusMat = new THREE.MeshStandardMaterial({
        color: selectedMode === "meniscus" ? 0xef4444 : 0x0ea5e9,
        roughness: 0.4,
      });
      const medialMeniscus = new THREE.Mesh(meniscusGeo, meniscusMat);
      medialMeniscus.rotation.x = Math.PI / 2;
      medialMeniscus.position.set(-0.45, -0.18, 0);
      kneeGroup.add(medialMeniscus);

      const lateralMeniscus = new THREE.Mesh(meniscusGeo, meniscusMat);
      lateralMeniscus.rotation.x = Math.PI / 2;
      lateralMeniscus.rotation.z = Math.PI;
      lateralMeniscus.position.set(0.45, -0.18, 0);
      kneeGroup.add(lateralMeniscus);
    }

    // 5. Cruciate Ligaments (ACL & PCL)
    if (showCruciates && selectedMode !== "tkr-implant") {
      if (selectedMode === "acl-tear") {
        // Torn separated ACL pieces
        const aclTopGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.3, 8);
        const aclTop = new THREE.Mesh(aclTopGeo, ligamentTornMat);
        aclTop.position.set(0.15, 0.2, 0.1);
        aclTop.rotation.z = 0.4;
        kneeGroup.add(aclTop);

        const aclBottomGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.25, 8);
        const aclBottom = new THREE.Mesh(aclBottomGeo, ligamentTornMat);
        aclBottom.position.set(-0.15, -0.15, 0.15);
        aclBottom.rotation.z = -0.4;
        kneeGroup.add(aclBottom);
      } else {
        const aclGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.65, 12);
        const aclMesh = new THREE.Mesh(aclGeo, ligamentMat);
        aclMesh.position.set(0, 0.05, 0.1);
        aclMesh.rotation.z = 0.35;
        aclMesh.rotation.x = 0.25;
        kneeGroup.add(aclMesh);
      }

      // PCL (Posterior)
      const pclGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.65, 12);
      const pclMesh = new THREE.Mesh(pclGeo, ligamentMat);
      pclMesh.position.set(0, 0.05, -0.1);
      pclMesh.rotation.z = -0.35;
      pclMesh.rotation.x = -0.25;
      kneeGroup.add(pclMesh);
    }

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
      kneeGroup.rotation.y += deltaX * 0.008;
      kneeGroup.rotation.x += deltaY * 0.005;
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
        kneeGroup.rotation.y += 0.003;
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
  }, [selectedMode, showCartilage, showMeniscus, showCruciates]);

  return (
    <div className="w-full rounded-3xl bg-midnight-900/90 border border-slate-800 p-6 lg:p-10 space-y-8 shadow-2xl">
      {/* Top Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono uppercase text-recovery-mint font-bold tracking-wider">
            Signature 3D Knee Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
            Tibiofemoral & Ligament Dynamics
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 leading-relaxed">
            Transition seamlessly between healthy cartilage, osteoarthritis wear, traumatic ACL tear, and modern prosthetic joint replacement.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "healthy", label: "Healthy Knee" },
            { id: "osteoarthritis", label: "Osteoarthritis" },
            { id: "acl-tear", label: "ACL Tear" },
            { id: "meniscus", label: "Meniscal Tear" },
            { id: "tkr-implant", label: "TKR Implant" },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id as KneeMode)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedMode === mode.id
                  ? "bg-gradient-to-r from-clinical-cyan to-clinical-teal text-slate-950 shadow-clinical-glow scale-105"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas & Layer Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 h-[460px] rounded-2xl bg-midnight-950/90 border border-slate-800/90 relative overflow-hidden">
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Layer Visibility Toggles */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
            <button
              onClick={() => setShowCartilage(!showCartilage)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold border transition-all ${
                showCartilage ? "bg-clinical-cyan/20 border-clinical-cyan text-white" : "bg-slate-950 border-slate-800 text-slate-500"
              }`}
            >
              Cartilage {showCartilage ? "ON" : "OFF"}
            </button>
            <button
              onClick={() => setShowMeniscus(!showMeniscus)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold border transition-all ${
                showMeniscus ? "bg-clinical-teal/20 border-clinical-teal text-white" : "bg-slate-950 border-slate-800 text-slate-500"
              }`}
            >
              Meniscus {showMeniscus ? "ON" : "OFF"}
            </button>
            <button
              onClick={() => setShowCruciates(!showCruciates)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold border transition-all ${
                showCruciates ? "bg-recovery-mint/20 border-recovery-mint text-white" : "bg-slate-950 border-slate-800 text-slate-500"
              }`}
            >
              ACL/PCL {showCruciates ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <span className="text-[10px] font-mono uppercase text-clinical-cyan font-bold tracking-wider">
              Anatomical Pathology Profile
            </span>
            <h3 className="text-xl font-display font-bold text-white capitalize">
              {selectedMode.replace("-", " ")}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedMode === "healthy" && "Pristine hyaline cartilage cushion with intact meniscus and robust anterior cruciate ligament providing rotational stability."}
              {selectedMode === "osteoarthritis" && "Progressive loss of articular cartilage, narrowing of joint space, and subchondral bone sclerosis causing mechanical pain and crepitus."}
              {selectedMode === "acl-tear" && "Rupture of the anterior cruciate ligament resulting in anterior tibial translation, rotational knee instability, and secondary meniscal loading."}
              {selectedMode === "meniscus" && "Focal horizontal or radial tear within fibrocartilage cushion, leading to joint line tenderness, clicking, and mechanical locking."}
              {selectedMode === "tkr-implant" && "Surgically resurfaced femoral and tibial components with ultra-high-molecular-weight polyethylene spacer restoring neutral mechanical alignment."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
