"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkle, X } from "lucide-react";

interface PrenupGalleryProps {
  images: { src: string; alt: string }[];
}

interface HeartData {
  left: string;
  top: string;
  size: string;
  durationY: number;
  durationOpacity: number;
  delay: number;
}

interface SparkleData {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
}

export function PrenupGallery({ images }: PrenupGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Floating hearts
  const numberOfHearts = Math.min(Math.ceil(images.length * 1.5), 25);
  const [hearts] = useState<HeartData[]>(() =>
    Array.from({ length: numberOfHearts }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${12 + Math.random() * 24}px`,
      durationY: 6 + Math.random() * 4,
      durationOpacity: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  );

  // Hover sparkles
  const [sparkles] = useState<SparkleData[]>(() =>
    Array.from({ length: 3 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 12,
      duration: 1.2 + Math.random() * 1.5,
      delay: Math.random(),
    }))
  );

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-white to-pink-50 overflow-hidden"
      id="prenup">
      {/* Floating hearts */}
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-10, 10], opacity: [0.2, 0.6] }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: heart.durationY,
            },
            opacity: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: heart.durationOpacity,
            },
            delay: heart.delay,
          }}
          className="absolute text-pink-300"
          style={{ left: heart.left, top: heart.top, fontSize: heart.size }}>
          <Heart />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl text-center text-rose-900 font-serif mb-16">
          Our Prenup Moments
        </h2>

        {/* Masonry gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-6 relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openLightbox(index)}>
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Sparkles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}>
                {sparkles.map((s, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white"
                    style={{
                      left: s.left,
                      top: s.top,
                      fontSize: s.size,
                      filter: "drop-shadow(0 0 3px white)",
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: s.duration,
                      delay: s.delay,
                    }}>
                    <Sparkle />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <button
              className="absolute top-6 right-6 text-white p-2 hover:text-pink-400 transition-colors"
              onClick={closeLightbox}>
              <X size={36} />
            </button>

            <motion.div
              key={images[currentIndex].src}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] relative rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
