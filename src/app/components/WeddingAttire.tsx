import { motion } from "framer-motion";
import Image from "next/image";

export function WeddingAttire() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-amber-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16">
        <h2 className="text-6xl md:text-7xl lg:text-8xl text-rose-900 font-serif">
          Attire Inspiration
        </h2>
        <div className="w-32 h-px bg-rose-400 mx-auto mt-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 1,
        }}
        className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
        <Image
          src="/assets/wedding-attire.jpg"
          alt="Wedding attire inspiration"
          width={1200}
          height={800}
          className="w-full h-auto object-contain rounded-3xl"
        />
      </motion.div>
    </section>
  );
}
