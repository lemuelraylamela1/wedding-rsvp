"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Allura, Playfair_Display } from "next/font/google";
import { Mea_Culpa } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

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

export function NinangNinongAttire() {
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
      className={`${script.variable} ${serif.variable} ${meaCulpa.variable} relative bg-[#fbf7f3] py-24 md:py-36 px-6 overflow-hidden`}>
      {/* Watercolor background */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[460px] h-[300px] md:h-[460px] bg-[radial-gradient(circle,#ead7c2,transparent_60%)] opacity-70" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[460px] h-[300px] md:h-[460px] bg-[radial-gradient(circle,#f0dfcc,transparent_60%)] opacity-70" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* LEFT — TEXT */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-12 md:space-y-16 text-center md:text-left">
          {/* Header */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${meaCulpa.className} text-4xl md:text-7xl lg:text-8xl text-[#7a4a16] leading-tight md:leading-none`}>
              The Details
            </motion.h2>

            <div className="mt-4 mb-4 w-20 md:w-24 h-px bg-[#c2a27a] mx-auto md:mx-0" />

            <p
              className={`${cormorant.className} text-2xl md:text-3xl text-[#3f3a35]`}>
              Attire Guide
            </p>

            <p
              className={`${cormorant.className} mt-4 md:mt-6 max-w-full md:max-w-xl text-[#6a5848] leading-[1.6] md:leading-[1.7] font-semibold !italic mx-auto md:mx-0`}>
              We would love to see you in your formal attire.
              <br />
              We encourage you to dress according to our wedding color.
            </p>
          </div>

          {/* Primary Sponsors */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`${gistesy.className} text-3xl md:text-5xl lg:text-6xl text-[#7a4a16] mb-6 md:mb-8 leading-none`}>
              Primary Sponsors
            </motion.h3>

            <div
              className={`${cormorant.className} space-y-3 md:space-y-4 text-[#3f3a35] text-base md:text-lg !italic`}>
              <p>
                <strong>LADIES:</strong> Filipiniana / Brown Modern Filipiniana
              </p>
              <p>
                <strong>GENTLEMEN:</strong> Barong & Slacks
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          whileHover={{ scale: 1.015 }}
          className="flex justify-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/assets/ninong-ninang.png"
              alt="Ninang and Ninong attire illustration"
              width={520}
              height={900}
              priority
              className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.28)] rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
