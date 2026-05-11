'use client';
import Image from "next/image";
import Link from "next/link";
import { CgAdd } from "react-icons/cg";

export default function AutoMation() {
  return (
    <div className="w-full my-16 md:my-20 lg:my-10 py-8 flex justify-center items-center">

      <div className="w-full max-w-300 bg-[#D9D9D9] border-2 border-[#eef430] px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-10">

        <h1 className="font-medium text-sm md:text-[16px] pb-5 leading-relaxed">
          We build connected commerce ecosystems powered by workflow automation software—so everything works
          <br className="hidden md:block" /> together without manual effort.
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <Image
              src={"/servicesolimg/viewOur.png"}
              width={500}
              height={300}
              alt="Auto Mation"
              className="w-full h-50 sm:h-65 md:h-75 object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 items-start">

            <h3 className="flex gap-2 items-center text-sm md:text-[16px] italic font-bold">
              <CgAdd className="bg-[#eef430] rounded-full p-1 text-lg" />
              Inventory stays aligned
            </h3>

            <h3 className="flex gap-2 items-center text-sm md:text-[16px] italic font-bold">
              <CgAdd className="bg-[#eef430] rounded-full p-1 text-lg" />
              Orders move seamlessly.
            </h3>

            <h3 className="flex gap-2 items-center text-sm md:text-[16px] italic font-bold">
              <CgAdd className="bg-[#eef430] rounded-full p-1 text-lg" />
              Updates happen in one place—everywhere
            </h3>

            <h3 className="text-sm md:text-[16px] font-normal leading-relaxed">
              So your team spends less time fixing problems…
              <br className="hidden md:block" />
              and more time growing the business.
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button className="text-sm md:text-[14px] font-bold px-4 py-2 bg-[#EEF430] rounded">
                <Link href={'/'}>View our Portfolio</Link>
              </button>
              <button className="text-sm md:text-[14px] font-bold px-4 py-2 bg-[#EEF430] rounded">
                <Link href={'/solutionservice'}> Work With Us</Link>

              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}