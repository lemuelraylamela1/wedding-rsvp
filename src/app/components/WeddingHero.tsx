import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { RefObject } from "react";

interface WeddingHeroProps {
  rsvpRef: RefObject<HTMLDivElement | null>;
}

export function WeddingHero({ rsvpRef }: WeddingHeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/wedding-bg-v4.JPG"
          alt="Wedding background"
          fill
          priority
          className="object-cover brightness-[0.7] contrast-105 saturate-110"
        />

        {/* Soft overlay layers */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6">
          <Heart className="w-14 h-14 mx-auto text-rose-300 fill-rose-300 drop-shadow-md" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10">
          <p className="tracking-[0.3em] uppercase text-xs text-rose-300 mb-4">
            You are invited to celebrate
          </p>

          <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
            Shanaia
            <span className="block text-4xl md:text-5xl font-light my-2 text-white/80">
              &
            </span>
            Jeff
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 my-8">
            <span className="h-px w-16 bg-rose-300/60" />
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            <span className="h-px w-16 bg-rose-300/60" />
          </div>

          <p className="text-xl md:text-2xl text-white/90 tracking-wide">
            February 07, 2026
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-white/80 text-lg mb-14">
          Join us as we begin our forever
        </motion.p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          onClick={() =>
            rsvpRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="
            px-12 py-4
            rounded-full
            bg-white/90
            text-rose-700
            font-medium
            backdrop-blur-md
            shadow-xl
            hover:bg-white
            hover:shadow-2xl
            transition-all duration-300
          ">
          RSVP Now
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-7 h-12 border border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-2 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </div>
  );
}
