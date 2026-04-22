import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function StarField() {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={60000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
      <ambientLight intensity={0.5} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
        </Canvas>
      </div>

      {/* Glow blob */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fullstack Developer
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {"Andres "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Lauson
          </span>
        </motion.h1>

        <motion.p
          className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building fullstack web experiences with React, TypeScript and Node.js.
          Currently expanding into AI engineering.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#projects"
            className=" px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className=" px-8 py-3  border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent"
          animate={{ scaleY: 0.5 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </section>
  );
}
export default Hero;
