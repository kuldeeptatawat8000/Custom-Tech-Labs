'use client';
import Image from "next/image";
import UserExperienceStep from "./UserExperienceStep";

export default function UserExperience() {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      
      {/* HEADER */}
      <div className="bg-black w-full text-center flex justify-center items-center text-white rounded-xl py-6">
        <h1 className="text-lg md:text-3xl font-normal leading-snug">
          <span className="text-[#EEF430]">The Tech Blueprint for the</span>{" "}
          Best User Experience
        </h1>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <Image
            src="/homeimg/bestUser.png"
            width={600}
            height={400}
            alt="Best User"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          
          <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
            Custom websites, applications, and integrations designed with a
            &#34;people first&#34; mindset.
          </h2>

          <p className="text-sm md:text-base">
            Unlike most tech companies, we don’t start with a tech stack.
            We don’t tell you how good we know our tech and coding.
            Instead, we start with your end goal and reverse engineer the
            process to meet it.
          </p>

          <p className="text-sm md:text-base">
            Our approach ensures the final product isn’t just technically
            sound, but creates an experience that makes users want to
            return again and again.
          </p>
        </div>
      </div>


      <UserExperienceStep/>

    </section>
  );
}