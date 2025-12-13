"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InvitationLanding({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/wedding-bg-v4.JPG"
        alt="Wedding Invitation Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Elegant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        {/* Small intro text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-sm tracking-[0.35em] uppercase text-rose-300">
          You’re Invited
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-10 font-serif text-5xl md:text-7xl text-white">
          Shanaia & Jeff
        </motion.h1>

        {/* Open Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={onOpen}
          className="
            px-14 py-4
            text-sm md:text-base
            tracking-widest uppercase
            rounded-full
            bg-white/90
            text-rose-600
            backdrop-blur-md
            shadow-2xl
            hover:bg-white
            hover:scale-105
            transition-all duration-300
          ">
          Open Invitation
        </motion.button>

        {/* Subtle hint */}
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
