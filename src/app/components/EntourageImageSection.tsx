"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EntourageImageSectionProps {
  imageSrc: string;
  altText?: string;
}

export function EntourageImageSection({
  imageSrc,
  altText = "Entourage",
}: EntourageImageSectionProps) {
  return (
    <section
      className="relative py-20 bg-white flex justify-center items-center"
      id="entourage">
      <div className="container mx-auto px-4">
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
            src="/assets/entourage-list3.png"
            alt="Entourage list"
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
