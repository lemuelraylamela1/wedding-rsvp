import { motion } from "framer-motion";
import Image from "next/image";

export function WeddingAttire() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl text-rose-900 font-serif mb-6">
          Attire Inspiration
        </h2>
        <div className="w-24 h-px bg-rose-400 mx-auto mb-6" />
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Our wedding theme embraces a{" "}
          <span className="font-medium">Boho / Dark Brown</span> palette. Please
          feel free to dress in earth tones and relaxed elegance.
        </p>
      </motion.div>

      {/* Attire Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Women */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-[520px]">
            <Image
              src="/assets/attire-women-v2.jpg"
              alt="Women's attire inspiration"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h3 className="text-3xl text-rose-900 font-serif mb-4">
              For Women
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Flowing dresses, soft fabrics, and natural silhouettes. Earth
              tones such as brown, beige, rust, olive, and muted florals are
              highly encouraged.
            </p>
          </div>
        </motion.div>

        {/* Men */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-[520px]">
            <Image
              src="/assets/attire-men-v2.jpg"
              alt="Men's attire inspiration"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h3 className="text-3xl text-rose-900 font-serif mb-4">For Men</h3>
            <p className="text-gray-700 leading-relaxed">
              Linen suits, dress shirts, or smart casual wear. Shades of dark
              brown, tan, cream, olive, or muted neutrals perfectly match the
              boho vibe.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-gray-600 mt-16 text-sm">
        Please avoid bright neon colors and heavy formal black suits 🤎
      </motion.p>
    </section>
  );
}
