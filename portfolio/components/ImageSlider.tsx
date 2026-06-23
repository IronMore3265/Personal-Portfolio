"use client";

import { useState } from "react";

interface ImageSliderProps {
  slides: string[];
  fit?: "cover" | "contain";
}

export default function ImageSlider({ slides, fit = "cover" }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-10">
      {/* Viewport */}
      <div className="relative overflow-hidden border border-outline-variant bg-surface-container aspect-video">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((src, i) => (
            <div key={i} className="relative w-full h-full shrink-0">
              {/\.(mp4|webm|ogg)$/i.test(src) ? (
                <video
                  src={src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                />
              ) : /\.pdf$/i.test(src) ? (
                <iframe
                  src={src}
                  title={`Slide ${i + 1}`}
                  className="w-full h-full bg-white"
                />
              ) : (
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  loading="lazy"
                  className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-background/80 border border-outline-variant text-on-surface hover:text-primary hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-background/80 border border-outline-variant text-on-surface hover:text-primary hover:border-primary transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </>
      )}

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 transition-all duration-300 ${
              i === index
                ? "w-6 bg-primary"
                : "w-2 bg-outline-variant hover:bg-outline"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
