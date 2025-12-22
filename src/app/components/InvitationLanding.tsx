"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkle } from "lucide-react";
import { useState } from "react";

interface Particle {
  left: string;
  size: number;
  delay: number;
  duration: number;
}

export function InvitationLanding({ onOpen }: { onOpen: () => void }) {
  const [showParticles, setShowParticles] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  // Generate particles once
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 25 }).map(() => ({
      left: `${Math.random() * 100}%`,
      size: 12 + Math.random() * 22,
      delay: Math.random() * 0.3,
      duration: 1.6 + Math.random() * 1.2,
    }))
  );

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get ripple coordinates relative to button
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    setShowParticles(true);

    // Wait for animation before opening invitation
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background */}
      <Image
        src="/assets/wedding-bg-v4.JPG"
        alt="Wedding Invitation Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Particle Animation */}
      <AnimatePresence>
        {showParticles &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: -250, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: "easeOut",
              }}
              className="absolute bottom-0 text-rose-400"
              style={{ left: p.left, fontSize: p.size }}>
              {i % 2 === 0 ? <Heart fill="currentColor" /> : <Sparkle />}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-sm tracking-[0.35em] uppercase text-rose-300">
          You’re Invited
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-10 font-serif text-5xl md:text-7xl text-white leading-tight">
          {/* Mobile (CP) – 3 lines */}
          <span className="block md:hidden">Shanaia</span>
          <span className="block md:hidden text-3xl my-1">&</span>
          <span className="block md:hidden">Jefferson</span>

          {/* Desktop */}
          <span className="hidden md:inline">Shanaia & Jefferson</span>
        </motion.h1>

        {/* Open Button with Ripple */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={handleOpen}
          className="relative overflow-hidden px-14 py-4 text-sm md:text-base tracking-widest uppercase rounded-full bg-white/90 text-rose-600 backdrop-blur-md shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300">
          Open Invitation
          {/* Ripple effect */}
          {ripple && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute bg-rose-200 rounded-full pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 20,
                height: 20,
              }}
            />
          )}
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-white/70 text-sm">
          Tap to begin our forever
        </motion.p>
      </div>
    </div>
  );
}
