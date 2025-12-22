import { motion } from "framer-motion";
import Image from "next/image";

export function WeddingAttire() {
  return (
    <section className="py-36 px-6 bg-gradient-to-b from-white via-amber-50 to-white overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24">
        <h2 className="text-6xl md:text-7xl lg:text-8xl text-rose-900 font-serif tracking-wide">
          Attire Inspiration
        </h2>
        <div className="w-36 h-px bg-rose-400 mx-auto mt-8" />
      </motion.div>

      {/* Images */}
      <div className="flex flex-col gap-24">
        {/* First Image — Left → Right */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
          }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 14,
            duration: 1.2,
          }}
          className="relative w-full max-w-6xl mx-auto rounded-3xl cursor-pointer">
          <Image
            src="/assets/wedding-attire.jpg"
            alt="Wedding attire inspiration"
            width={1400}
            height={900}
            className="w-full h-auto rounded-3xl object-contain"
            priority
          />

          {/* Soft glow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
        </motion.div>

        {/* Second Image — Right → Left */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
          }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 14,
            duration: 1.2,
            delay: 0.15,
          }}
          className="relative w-full max-w-6xl mx-auto rounded-3xl cursor-pointer">
          <Image
            src="/assets/ninang-ninong.jpg"
            alt="Ninang and Ninong attire inspiration"
            width={1400}
            height={900}
            className="w-full h-auto rounded-3xl object-contain"
          />

          {/* Soft glow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
