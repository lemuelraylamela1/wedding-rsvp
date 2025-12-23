"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function WeddingAttire() {
  const [selectedQR, setSelectedQR] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const qrData = [
    { label: "GoTyme", src: "/assets/Gotyme.jpg" },
    { label: "GCash", src: "/assets/gcash.jpg" },
    { label: "BPI", src: "/assets/bpi.jpg" },
  ];

  return (
    <section className="relative bg-[#f9f6f2] py-28 px-6 overflow-hidden">
      {/* Soft watercolor background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e9dccf,transparent_45%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#eadbc9,transparent_45%)] opacity-50" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-24">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="flex justify-center cursor-pointer">
          <Image
            src="/assets/wedding-attire.jpg"
            alt="Wedding illustration"
            width={500}
            height={900}
            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
          />
        </motion.div>

        {/* RIGHT ILLUSTRATION */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-14">
          {/* Attire */}
          <div>
            <h3 className="font-[cursive] text-3xl text-[#7a4a16] mb-4">
              Attire
            </h3>

            <div className="flex gap-4 mb-4">
              {["#6b4a12", "#855c34", "#a4744f", "#c5a07a"].map((color, i) => (
                <span
                  key={i}
                  className="w-14 h-14 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <p className="uppercase tracking-widest text-sm text-[#7a4a16] font-medium">
              Formal / Semi-Formal
            </p>

            <p className="italic text-[#7a4a16] mt-2">
              We would love to see you wear these colors on our wedding day
            </p>
          </div>

          {/* Gifts */}
          <div>
            <h3 className="font-[cursive] text-3xl text-[#7a4a16] mb-4">
              A note on gifts
            </h3>
            <p className="text-[#5f4a3a] leading-relaxed max-w-xl">
              Your presence at our wedding is present enough so don’t worry
              about what to buy. However, if you were thinking of giving a gift,
              a gift of money towards our own home would really make our day.
            </p>
          </div>

          {/* Payment QRs */}
          <div className="grid grid-cols-3 gap-10 max-w-xl mx-auto">
            {qrData.map((item, i) => (
              <motion.div
                key={i}
                className="text-center space-y-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedQR(item.src)}>
                <div className="bg-white w-40 h-40 flex items-center justify-center p-3 shadow-md rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="font-serif text-[#7a4a16] text-lg">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Modal for mobile / click */}
          {selectedQR && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedQR(null)}>
              <div className="bg-white p-4 rounded-xl max-w-sm w-full">
                <Image
                  src={selectedQR}
                  alt="QR code"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Unplugged */}
          <div>
            <h3 className="font-[cursive] text-3xl text-[#7a4a16] mb-3">
              Unplugged
            </h3>
            <p className="text-[#5f4a3a] max-w-xl leading-relaxed">
              Please keep our ceremony camera-free. We’ve hired professional
              photographers to capture us marry. Though our I Do’s are
              unplugged, our reception is not.
            </p>
          </div>

          {/* Snap & Share */}
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h3 className="font-[cursive] text-3xl text-[#7a4a16] mb-2">
                Snap & Share!
              </h3>
              <p className="text-[#5f4a3a]">
                Help us spread the love and share our hashtag
              </p>
              <p className="font-serif text-[#7a4a16] mt-1">
                #JEFFinitelyForNAIA
              </p>
            </div>

            <motion.div
              className="bg-white p-3 shadow-md w-40 h-40 flex items-center justify-center rounded-xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedQR("/assets/Dots shared album.jpg")}>
              <Image
                src="/assets/Dots shared album.jpg"
                alt="Shared Album"
                width={150}
                height={150}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </div>

          {/* Location Guide */}
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h3 className="font-[cursive] text-3xl text-[#7a4a16]">
                Location Guide
              </h3>
              <p className="text-[#5f4a3a]">Ceremony & Reception QR Code</p>
            </div>

            <motion.div
              className="bg-white p-3 shadow-md w-40 h-40 flex items-center justify-center rounded-xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                setSelectedQR("/assets/Google map - location.jpg")
              }>
              <Image
                src="/assets/Google map - location.jpg"
                alt="Location QR"
                width={150}
                height={150}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
