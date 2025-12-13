"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const WEDDING_DATE = new Date("2026-02-07T15:00:00");

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = WEDDING_DATE.getTime() - now;

  if (distance <= 0) {
    return null;
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export function WeddingCountdown({
  onStartMusic,
}: {
  onStartMusic?: () => void;
}) {
  const [timeLeft, setTimeLeft] =
    useState<ReturnType<typeof getTimeLeft>>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = timeLeft
    ? [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds, pulse: true },
      ]
    : [];

  return (
    <section
      onClick={onStartMusic}
      className="
        relative
        py-32
        px-6
        bg-gradient-to-b
        from-white
        via-rose-50
        to-white
        overflow-hidden
      ">
      {/* 🌸 Floral Divider */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4 text-rose-300">
          <span className="w-20 h-px bg-rose-200"></span>
          <span className="text-3xl">❀</span>
          <span className="w-20 h-px bg-rose-200"></span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          {timeLeft ? (
            <motion.div
              key="countdown"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}>
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
                Counting Down to Forever
              </h2>
              <p className="text-gray-600 mb-16 text-lg">
                With love, laughter, and happily ever after
              </p>

              {/* Countdown */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {countdownItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="
                      relative
                      bg-white/80
                      backdrop-blur-xl
                      rounded-3xl
                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                      p-8
                      flex
                      flex-col
                      items-center
                    ">
                    {/* 💖 Heart pulse for seconds */}
                    {item.pulse && (
                      <motion.div
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute -top-4 text-rose-400">
                        <Heart className="w-6 h-6 fill-rose-400" />
                      </motion.div>
                    )}

                    <span className="text-5xl font-semibold text-rose-700">
                      {item.value}
                    </span>
                    <span className="mt-3 uppercase tracking-[0.25em] text-xs text-gray-500">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-16 text-sm text-gray-400 italic">
                (Tap anywhere to enjoy the music 🎻)
              </p>
            </motion.div>
          ) : (
            /* 💍 Married Message */
            <motion.div
              key="married"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="py-32">
              <Heart className="w-16 h-16 mx-auto mb-6 text-rose-500 fill-rose-500" />
              <h2 className="text-5xl md:text-6xl font-serif text-rose-900 mb-6">
                We’re Married!
              </h2>
              <p className="text-xl text-gray-600">
                Thank you for being part of our love story 🤍
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Soft floating glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.12),transparent_70%)]" />
    </section>
  );
}
