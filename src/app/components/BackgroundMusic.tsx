// Example: components/BackgroundMusic.tsx
"use client";

export function BackgroundMusic() {
  return (
    <audio autoPlay loop controls style={{ display: "none" }}>
      <source src="/assets/music/wedding-song.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
