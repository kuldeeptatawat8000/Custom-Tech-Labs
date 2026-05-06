'use client';
import Image from "next/image";

export default function MainBanner() {
    return (
        <>
            <section className="w-full relative lg:px-20 mb-5 sm:mb-10  lg:mb-15 px-5  md:h-100">
                <div className="md:flex justify-end items-end">
                    <Image
                        src="/servicesolimg/bannerImg.png"
                        width={1200}
                        height={600}
                        className="md:w-[60%] w-full h-auto xl:h-full"
                        alt="Banner Image"
                    />
                </div>

                <div className="w-full mt-10 md:mt-0   md:absolute top-0 left-0 h-full ">
                    <div className="flex flex-col text-center md:text-start  gap-3 justify-center md:justify-start md:pt-5 md:pl-5 items-start  lg:w-1/2 h-full md:w-[70%] lg:pl-40">
                        <h1 className="lg:text-[32px] text-3xl sm:text-4xl  font-extrabold">E-comerce That Works The Way Your Business Actually Runs</h1>
                        <h2 className="text-[16px] font-semibold">At Custom Labs, we deliver e-commerce development services that feel simple to use, easy to manage, and built to grow with you.</h2>
                        <h3 className="text-[16px] font-normal ">Your e-commerce system shouldn’t slow you down- it should move your business forward.</h3>
                        <div className="flex gap-4">
                            <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]">View our Protfolio</button>
                            <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]">Work With Us</button>
                        </div>
                    </div>
                </div>

            </section>



        </>
    )
}