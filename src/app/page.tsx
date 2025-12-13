"use client";

import React, { useRef, useState, useEffect } from "react";
import { WeddingHero } from "./components/WeddingHero";
import { RSVPForm } from "./components/RSVPForm";
import { WeddingDetails } from "./components/WeddingDetails";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { WeddingCountdown } from "./components/WeddingCountdown";

export default function App() {
  const rsvpRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <BackgroundMusic />
      <WeddingHero rsvpRef={rsvpRef} />
      <WeddingCountdown />
      <WeddingDetails />
      <div ref={rsvpRef} id="rsvp">
        <RSVPForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
      </div>
    </div>
  );
}
