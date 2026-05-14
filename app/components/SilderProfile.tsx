'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { slideData } from './slideData';

export default function SliderProfile() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.firstElementChild as HTMLElement;
      if (!card) return;

      const moveDistance = (card.offsetWidth + 40) * 2; // Card width + gap * 2 units

      container.scrollBy({
        left: direction === 'left' ? -moveDistance : moveDistance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full py-10 px-4 bg-white">
      <div className="relative group max-w-7xl mx-auto">

        {/* CONTAINER */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-hidden scroll-smooth no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {slideData.map((data, idx) => (
            <div
              key={idx}
              className="w-115 h-85.25 md:min-w-[calc(50%-20px)] bg-[#A6A6A6] flex flex-col gap-5 rounded-lg p-6 md:p-8 snap-start shadow-lg shrink-0"
            >
              {/* PROFILE SECTION */}
              <div className="flex gap-4 items-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
                  <Image
                    src={data.img}
                    alt={data.fistName}
                    fill
                    className="rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-black leading-tight">
                    {data.fistName}
                  </h2>
                  <p className="text-lg md:text-xl italic text-black/80">
                    {data.lastName}
                  </p>
                </div>
              </div>

              {/* RATING */}
              <div className="flex gap-1 text-[#f9b400] text-xl">
                {[...Array(data.rating)].map((_, i) => (
                  <IoIosStar key={i} />
                ))}
              </div>

              {/* DESCRIPTION */}
              <div className="text-black text-sm md:text-base leading-relaxed">
                <p className="italic">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-xl text-black p-3 rounded-full hidden  z-10 hover:scale-110 transition-transform"
        >
          ←
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-xl text-black p-3 rounded-full hidden  z-10 hover:scale-110 transition-transform"
        >
          →
        </button>
      </div>

      {/* NAVIGATION DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {/* We divide by 2 because we show 2 items per "page" */}
        {Array.from({ length: Math.ceil(slideData.length / 2) }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const container = scrollRef.current;
              const card = container?.firstElementChild as HTMLElement;
              if (container && card) {
                container.scrollTo({
                  left: i * (card.offsetWidth + 40) * 2,
                  behavior: 'smooth'
                });
              }
            }}
            className="w-3 h-3 rounded-full border border-gray-400 focus:bg-gray-600 transition-colors"
          />
        ))}
      </div>
    </div>
  );
}