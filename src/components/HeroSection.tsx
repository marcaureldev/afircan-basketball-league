"use client";

import React from "react";
import { Header } from "./Header";
import Stack from "./Stack";

export const HeroSection = () => {
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
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/basketball-hero-league.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 min-h-screen">
        <Header />

        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12 pb-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-white font-black leading-none tracking-tighter">
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
    </div>
  );
};
