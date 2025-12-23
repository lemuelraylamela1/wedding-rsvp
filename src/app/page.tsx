"use client";

import { useRef, useState } from "react";
import { WeddingHero } from "./components/WeddingHero";
import { WeddingDetails } from "./components/WeddingDetails";
import { RSVPForm } from "./components/RSVPForm";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { InvitationLanding } from "./components/InvitationLanding";
import { WeddingCountdown } from "./components/WeddingCountdown";
import { WeddingAttire } from "./components/WeddingAttire";
import { PrenupGallery } from "./components/PrenupGallery";
import { EntourageImageSection } from "@/app/components/EntourageImageSection";
import { NinangNinongAttire } from "./components/NinangNinongAttire";
import { GuestsAttire } from "./components/Guests";

export default function App() {
  const rsvpRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const prenupImages = [
    { src: "/assets/prenup1.JPG", alt: "Prenup photo 1" },
    { src: "/assets/prenup2.JPG", alt: "Prenup photo 2" },
    { src: "/assets/prenup3.JPG", alt: "Prenup photo 3" },
    { src: "/assets/prenup4.JPG", alt: "Prenup photo 4" },
    { src: "/assets/prenup5.JPG", alt: "Prenup photo 5" },
    { src: "/assets/prenup6.JPG", alt: "Prenup photo 6" },
    { src: "/assets/prenup7.JPG", alt: "Prenup photo 7" },
    { src: "/assets/prenup8.JPG", alt: "Prenup photo 8" },
    { src: "/assets/prenup9.JPG", alt: "Prenup photo 9" },
    { src: "/assets/prenup10.jpg", alt: "Prenup photo 10" },
    { src: "/assets/prenup11.jpg", alt: "Prenup photo 11" },
    { src: "/assets/prenup12.jpg", alt: "Prenup photo 12" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {!opened && <InvitationLanding onOpen={() => setOpened(true)} />}

      {opened && (
        <>
          <BackgroundMusic play={opened} />
          <WeddingHero rsvpRef={rsvpRef} />
          <WeddingCountdown />
          <PrenupGallery images={prenupImages} />
          <WeddingDetails />
          <EntourageImageSection imageSrc="/assets/entourage-list.jpg" />
          <NinangNinongAttire />
          <GuestsAttire />
          <WeddingAttire />
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
