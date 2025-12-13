"use client";

import { useEffect, useRef, useState } from "react";
import { Volume, VolumeX } from "lucide-react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.3;
    audio.muted = true;

    audio.play().catch(() => {
      console.log("Autoplay muted started");
    });

    const enableSound = () => {
      audio.muted = false;
      setIsMuted(false);
      audio.play().catch(() => {});
      document.removeEventListener("click", enableSound);
    };

    document.addEventListener("click", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/music/wedding-song.mp3" />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-white/80 backdrop-blur-md p-3 shadow-lg hover:scale-105 transition">
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-rose-600" />
        ) : (
          <Volume className="w-6 h-6 text-rose-600" />
        )}
      </button>
    </>
  );
}
