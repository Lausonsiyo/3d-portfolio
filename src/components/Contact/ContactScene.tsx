"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";

import FloatingOrb from "./FloatingOrb";

export default function ContactScene() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />

        <directionalLight position={[2, 2, 2]} intensity={1.5} />

        <pointLight position={[-2, -1, 2]} intensity={2} color="#06b6d4" />

        {/* Orb */}
        <FloatingOrb />

        {/* Particles */}
        <Sparkles count={80} scale={10} size={2} speed={0.3} />

        {/* Environment Lighting */}
        <Environment preset="city" />

        {/* Camera Controls */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
