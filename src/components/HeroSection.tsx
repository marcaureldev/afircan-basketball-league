import React from "react";
import { Header } from "./Header";
import ImageGallery from "./ImageGallery";
import Stack from "./Stack";
import TextCursor from "./TextCursor";

export const HeroSection = () => {
  const galleryImages = [
    {
      src: "/assets/images/gallery/basket-goal.jpeg",
      alt: "Basketball goal",
    },
    {
      src: "/assets/images/gallery/basketball-dunk.jpeg",
      alt: "Basketball dunk",
    },
  ];

  const images = [
    {
      id: 1,
      img: "/assets/images/gallery/basket-goal.jpeg",
    },
    {
      id: 2,
      img: "/assets/images/gallery/basketball-dunk.jpeg",
    },
    {
      id: 3,
      img: "/assets/images/gallery/basketball-ground.jpeg",
    },
    {
      id: 4,
      img: "/assets/images/gallery/basketball-training.jpeg",
    },
  ];

  return (
    <div
      className="absolute inset-0 min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/basketball-hero-league.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay plus sombre */}
      <div className="absolute inset-0 min-h-screen bg-black/70"></div>

      {/* TextCursor enveloppe toute la zone pour capturer les mouvements de souris */}
      <TextCursor
        text="🏀"
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 min-h-screen">
          <Header />
          
          {/* Conteneur principal avec layout responsive */}
          <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12 pb-12">
            
            {/* Section titre et description */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-white font-black leading-none tracking-tighter">
                {/* Ajout de text-shadow pour plus de contraste */}
                <span
                  className="block text-[clamp(2.5rem,10vw,7rem)] lg:text-[clamp(4rem,8vw,10rem)]"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
                >
                  AFRICAN
                </span>
                <span
                  className="block text-[clamp(2.5rem,10vw,7rem)] lg:text-[clamp(4rem,8vw,10rem)] text-orange-400"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.9)" }}
                >
                  BASKETBALL
                </span>
                <span
                  className="block text-[clamp(2.5rem,10vw,7rem)] lg:text-[clamp(4rem,8vw,10rem)]"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
                >
                  LEAGUE
                </span>
              </h1>
              <p className="text-white/90 text-base lg:text-lg max-w-md lg:max-w-lg mt-4 lg:mt-6 px-4 lg:px-0 leading-relaxed">
                Africa's premier basketball league showcasing elite talent.
              </p>
            </div>

            {/* Stack d'images avec overflow control */}
            <div className="flex-shrink-0 overflow-visible pr-8 lg:pr-16">
              <div className="hidden lg:block">
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 400, height: 500 }}
                  cardsData={images as any}
                />
              </div>
              
              {/* Version mobile : taille réduite */}
              <div className="block lg:hidden">
                <Stack
                  randomRotation={true}
                  sensitivity={150}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 280, height: 350 }}
                  cardsData={images as any}
                />
              </div>
            </div>
          </div>
        </div>
      </TextCursor>
    </div>
  );
};
