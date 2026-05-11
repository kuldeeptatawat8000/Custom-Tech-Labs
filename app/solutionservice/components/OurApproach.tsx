'use client';
import Link from "next/link";
import { apperData } from "./approachData";

export default function OurApproach() {
  return (
    <section className="w-full flex flex-col gap-4 justify-start items-center px-4 md:px-10 lg:px-28 py-10">

      <h1 className="rounded-xl px-6 py-1 bg-black text-[#eef430] font-bold text-lg md:text-[24px]">
        Our Approach
      </h1>

      <h1 className="font-semibold text-xl md:text-[32px] text-center">
        Our Approach to E-Commerce Development
      </h1>

      {apperData.map((group, groupIdx) => (
        <div
          key={groupIdx}
          className="w-full flex flex-col md:flex-row gap-4 md:gap-7 mt-5"
        >
          {group.items.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className="w-full md:w-1/2 flex flex-col gap-2 justify-center px-4 md:px-5 py-4 shadow-xl shadow-gray-300 border-l-[6px] md:border-l-25 border-[#eef430]"
            >
              <h1 className="text-lg md:text-[24px] font-bold text-[#034a27]">
                {item.title}
              </h1>

              <h3 className="text-sm md:text-[16px] font-normal leading-relaxed">
                {item.desc}
              </h3>
            </div>
          ))}
        </div>
      ))}

      <div className="flex flex-col sm:flex-row pt-6 gap-3 md:gap-4">
        <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]"><Link href={'/'}>View our Protfolio</Link></button>
        <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]"><Link href={'/solutionservice'}>Work With Us</Link></button>
      </div>
    </section>
  );
}