"use client";

import { useRef, useState } from "react";
import { WeddingHero } from "./components/WeddingHero";
import { WeddingDetails } from "./components/WeddingDetails";
import { RSVPForm } from "./components/RSVPForm";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { InvitationLanding } from "./components/InvitationLanding";
import { WeddingCountdown } from "./components/WeddingCountdown";

export default function App() {
  const rsvpRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {!opened && <InvitationLanding onOpen={() => setOpened(true)} />}

      {opened && (
        <>
          <BackgroundMusic play={opened} />
          <WeddingHero rsvpRef={rsvpRef} />
          <WeddingCountdown />
          <WeddingDetails />
          <div ref={rsvpRef} id="rsvp">
            <RSVPForm
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
            />
          </div>
        </>
      )}
    </div>
  );
}
