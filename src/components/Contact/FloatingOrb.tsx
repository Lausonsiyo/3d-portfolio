function FloatingOrb() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.y += 0.003
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.2
  })

  return (
    <Float speed={2}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />

        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={1.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}