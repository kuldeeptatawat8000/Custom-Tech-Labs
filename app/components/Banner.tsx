'use client';

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <>



      <section className=" md:bg-[url('/homeimg/herobanner.jpg')] px-5 py-2 w-full hfull md:h-112.5 md:pt-18.25 md:pl-28.5  flex flex-col gap-5 md:gap-2 text-center md:text-start bg-cover">
        <div className="md:hidden w-full h-52">
          <Image className="w-full h-full object-cover object-top" src={'/homeimg/herobanner.jpg'} width={100} height={100} alt="hero Banner" />
        </div>
        <h1 className=" text-2xl sm:text-5xl md:text-[32px] line font-extrabold">Technology Built  for the <br /> Way People Actually Work</h1>
        <p className="text-[16px] font-normal  sm:text-2xl">We bridge the gap between complex engineering and human <br className="md:block hidden" /> intuition to build tech that users actually enjoy using.</p>
        <div className="flex gap-4 justify-center items-center md:justify-start md:items-start">

          <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]"><Link href={'/'}>View our Protfolio</Link></button>
          <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]"><Link href={'/solutionservice'}>Work With Us</Link></button>
        </div>

      </section>
    </>
  );
}