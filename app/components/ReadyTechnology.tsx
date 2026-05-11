'use client';
import Image from "next/image";
import Link from "next/link";

export default function ReadyTechnology() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-8 py-10 px-4 md:px-20">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-3 md:pl-16">

        <h1 className="text-xl md:text-[32px] font-bold text-[#034A27] leading-snug">
          Ready to build technology with purpose?
        </h1>

        <p className="text-sm md:text-[24px] font-normal">
          Let’s take the first step toward a smarter, <br className="hidden md:block" />
          more human-centered digital future.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button className="text-sm md:text-[14px] font-medium py-2 px-4 rounded-sm bg-black text-white">
            <Link href={'/'}>👉 DOWNLOAD OUR PORTFOLIO</Link>
          </button>

          <button className="text-sm md:text-[14px] font-medium py-2 px-4 rounded-sm bg-black text-white">
            <Link href={'/custom-app-developement'}>👉 CONTACT US TODAY</Link>
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Image
          src="/homeimg/readToBild.png"
          width={364}
          height={279}
          alt="Ready to Build"
          className="w-full max-w-87.5 h-auto object-contain"
        />
      </div>

    </div>
  );
}