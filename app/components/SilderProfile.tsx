'use client';
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { slideData } from './slideData';

export default function SilderProfile() {
  return (
    <div className="w-full py-10 px-4">

      {/* SLIDER */}
      <div className="flex scrollBar gap-5 md:gap-10 overflow-x-auto scroll-smooth no-scrollbar">

        {slideData.map((data, idx) => (
          <div
            key={idx}
            className="min-w-65 sm:min-w-75 md:min-w-87.5 bg-[#A6A6A6] flex flex-col gap-4 rounded-md p-4 md:p-6"
          >
            
            {/* PROFILE */}
            <div className="flex gap-4 items-center">
              <Image
                src={data.img}
                width={100}
                height={100}
                alt="profile"
                className="rounded-xl w-16 h-16 md:w-20 md:h-20 object-cover"
              />

              <h1 className="text-lg md:text-[24px] font-bold leading-tight">
                {data.fistName} <br />
                <span className="italic">{data.lastName}</span>
              </h1>
            </div>

            {/* RATING */}
            <div className="flex gap-1 text-[#f9b400] text-xl md:text-2xl">
              {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} />
              ))}
            </div>

            {/* DESCRIPTION */}
            <h3 className="text-sm md:text-[16px] italic leading-relaxed">
              {data.desc}
            </h3>

          </div>
        ))}

      </div>
    </div>
  );
}