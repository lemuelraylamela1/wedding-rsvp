import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Music, Palette } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";

export function WeddingDetails() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const details = [
    {
      icon: Clock,
      title: "Ceremony",
      info: "3:00 PM",
      description: "Please arrive 15 minutes early",
    },
    {
      icon: MapPin,
      title: "Venue",
      info: "Narciso's Garden Restaurant & Events Place",
      description: "Lot 4, B2 Aguinaldo Hwy, Brgy. Luksuhin, Silang, Cavite",
    },
    {
      icon: Music,
      title: "Reception",
      info: "4:00 PM",
      description: "Dinner, dancing & celebration",
    },
    {
      icon: Palette,
      title: "Motif",
      info: "Boho/Dark Brown",
      description: "Wear something comfortable and stylish",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl text-rose-900 mb-6 font-serif">
          Celebration Details
        </h2>
        <div className="w-24 h-px bg-rose-400 mx-auto"></div>
      </motion.div>

      {/* Venue Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 rounded-lg overflow-hidden shadow-2xl cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={() => setSelectedImage("/assets/venue.jpg")}>
        <Image
          src="/assets/venue.jpg"
          alt="Wedding venue"
          width={1200}
          height={700}
          className="w-full h-96 object-cover"
        />
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-xl p-4 max-w-3xl w-full">
            <Image
              src={selectedImage}
              alt="Venue enlarged"
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
              <detail.icon className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-rose-900 mb-2">{detail.title}</h3>
            <p className="text-rose-600 mb-2">{detail.info}</p>
            <p className="text-gray-600 text-sm">{detail.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Love Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center max-w-3xl mx-auto">
        <h3 className="text-4xl text-rose-900 mb-6 font-serif">
          Our Love Story Timeline
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          August 9, 2019 The day we said yes — officially boyfriend &
          girlfriend. A simple start to a love that would grow deeper with time.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          December 30, 2023 He asked, she said YES 💍 A promise made to choose
          each other forever.
        </p>
        <p className="text-gray-700 leading-relaxed">
          February 7, 2026 The day we will say “I do” Two hearts, one love, one
          lifetime together.
        </p>
      </motion.div>
    </section>
  );
}
