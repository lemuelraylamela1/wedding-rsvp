"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Allura, Playfair_Display } from "next/font/google";
import { Mea_Culpa } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

const alta = localFont({
  src: "../../fonts/Alta_regular.otf",
  display: "swap",
});

const gistesy = localFont({
  src: "../../fonts/Gistesy.ttf",
  display: "swap",
});

const meaCulpa = Mea_Culpa({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mea-culpa",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const script = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export function GuestsAttire() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={ref}
      className={`${script.variable} ${serif.variable} ${meaCulpa.variable} relative bg-[#fbf7f7] py-24 md:py-32 px-6 overflow-hidden`}>
      {/* Watercolor background */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[radial-gradient(circle,#ead7c2,transparent_60%)] opacity-70" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[radial-gradient(circle,#f0dfcc,transparent_60%)] opacity-70" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* LEFT — IMAGE */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-xl overflow-hidden">
          {/* Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full">
            <Image
              src="/assets/attire_guests.png"
              alt="Guests attire illustration"
              width={640}
              height={1080}
              priority
              className="object-contain shadow-lg w-full h-auto"
            />
          </motion.div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 md:pt-8 lg:pt-12 text-center px-4">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`${gistesy.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7a4a16] font-bold flex flex-wrap justify-center gap-3`}>
              Guests
              <span className="inline-flex gap-2 md:gap-3">
                {["#6b4a12", "#855c34", "#a4744f", "#c5a07a"].map(
                  (color, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </span>
            </motion.h3>
          </div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 lg:space-y-12 text-center md:text-left">
          <div
            className={`${cormorant.className} space-y-2 md:space-y-4 text-[#3f3a35] text-base md:text-lg italic [&_strong]:font-semibold [&_strong]:text-[#7a4a16]`}>
            <p>
              <strong>LADIES:</strong> Filipiniana / Brown Modern Filipiniana
            </p>
            <p>
              <strong>GENTLEMEN:</strong> Barong & Slacks
            </p>
          </div>

          <div
            className={`${alta.className} font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] text-[#3f3a35] leading-tight mx-auto md:mx-0`}>
            <p className="!m-0">Strictly NO JEANS and Shorts</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
