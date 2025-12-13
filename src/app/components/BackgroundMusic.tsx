"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function BackgroundMusic({ play }: { play: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!play || !audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0.3;
    audio.muted = false;

    audio.play().catch((err) => {
      console.warn("Autoplay blocked:", err);
    });
  }, [play]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <>
      <audio ref={audioRef} loop src="/assets/wedding-song.mp3" />

      <button
        onClick={toggleMute}
        className="
          fixed bottom-6 right-6 z-50
          rounded-full bg-white/80 backdrop-blur-md
          p-3 shadow-lg hover:scale-105 transition
        ">
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-rose-600" />
        ) : (
          <Volume2 className="w-6 h-6 text-rose-600" />
        )}
      </button>
    </>
  );
}
