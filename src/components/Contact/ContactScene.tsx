<Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
  <ambientLight intensity={0.5} />

  <directionalLight
    position={[2, 2, 2]}
    intensity={2}
  />

  <FloatingOrb />

  <Sparkles
    count={100}
    scale={10}
    size={2}
    speed={0.3}
  />

  <Environment preset="city" />
</Canvas>