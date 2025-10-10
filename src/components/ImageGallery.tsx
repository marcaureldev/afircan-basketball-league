'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
}

export default function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative flex items-center gap-4 ${className}`}>
      {/* Images visibles */}
      <div className="flex gap-4">
        {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className="relative w-[300px] h-[300px] overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="180px"
            />
          </div>
        ))}
      </div>

      {/* Bouton Next */}
      <button
        onClick={goToNext}
        className="w-12 h-12 flex items-center justify-center"
        aria-label="Image suivante"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
