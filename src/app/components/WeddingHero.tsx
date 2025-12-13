import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { RefObject } from "react";

interface WeddingHeroProps {
  rsvpRef: RefObject<HTMLDivElement | null>; // allow null
}

export function WeddingHero({ rsvpRef }: WeddingHeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/wedding-bg-v4.JPG"
          alt="Wedding background"
          fill
          priority
          className="object-cover brightness-75 contrast-105 saturate-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}>
          <Heart className="w-12 h-12 mx-auto mb-6 text-rose-400 fill-rose-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8">
          <p className="text-rose-600 tracking-widest uppercase mb-4 text-sm">
            You Are Invited to Celebrate
          </p>
          <h1 className="text-6xl md:text-8xl text-white mb-4 font-serif">
            Shanaia & Jeff
          </h1>
          <div className="w-24 h-px bg-rose-400 mx-auto my-6"></div>
          <p className="text-2xl md:text-3xl text-white/90">
            February 07, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/80 text-lg">
          <p>Join us as we begin our forever</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12">
          <button
            onClick={() => {
              rsvpRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-white/90 hover:bg-white text-rose-600 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            RSVP Now
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
