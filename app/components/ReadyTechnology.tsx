'use client';

import Image from "next/image";
import Link from "next/link";

export default function ReadyTechnology() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-left">

          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#034A27] leading-tight">
            Ready to build technology with purpose?
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-[22px] text-gray-700 leading-relaxed">
            Let’s take the first step toward a smarter,
            more human-centered digital future.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">

            <Link
              href="/"
              className="w-full sm:w-auto text-center text-sm md:text-base font-medium py-3 px-6 rounded-md bg-black text-white hover:bg-[#034A27] transition-all duration-300"
            >
              👉 DOWNLOAD OUR PORTFOLIO
            </Link>

            <Link
              href="/custom-app-developement"
              className="w-full sm:w-auto text-center text-sm md:text-base font-medium py-3 px-6 rounded-md bg-black text-white hover:bg-[#034A27] transition-all duration-300"
            >
              👉 CONTACT US TODAY
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <Image
            src="/homeimg/readToBild.png"
            width={500}
            height={400}
            alt="Ready to Build"
            priority
            className="w-full max-w-105 h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}