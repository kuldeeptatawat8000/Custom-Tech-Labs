"use client";

import Image from "next/image";
import { CgAdd } from "react-icons/cg";
import { buyData } from "./buyOnlineData";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function BuyingOnline() {
    const [sliderIdx, setSliderIdx] = useState<number>(0);

    // DESKTOP = 3
    // TABLET + MOBILE = 2
    const [slidePerView, setSlidePerView] = useState<number>(3);

    // RESPONSIVE SLIDE COUNT
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSlidePerView(2);
            } else {
                setSlidePerView(3);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // PREV
    const prevSlide = () => {
        setSliderIdx((prev) => (prev === 0 ? 0 : prev - 1));
    };

    // NEXT
    const nextSlide = () => {
        setSliderIdx((prev) =>
            prev >= buyData.length - slidePerView
                ? prev
                : prev + 1
        );
    };

    return (
        <>
            <div className="w-full relative min-h-158.5">

                {/* TOP */}
                <div className="w-full min-h-29.75 bg-black text-white flex flex-col justify-center pl-4 sm:pl-10 lg:pl-29">

                    <h2 className="text-[24px] font-medium">
                        For Your Customers
                    </h2>

                    <h1 className="text-[32px] font-semibold">
                        Buying online should feel{" "}
                        <span className="text-[#eef430]">
                            effortless
                        </span>
                    </h1>

                </div>

                {/* TEXT */}
                <div className="w-full h-auto pt-10 pb-5 md:pl-29 pl-10">

                    <h3 className="text-[16px] font-bold italic">
                        Fast pages. Clear paths. No confusion at checkout.
                    </h3>

                    <h3 className="text-[16px] font-normal">
                        Because when the experience feels hard,
                        customers don’t stay- they leave.
                        <br />
                        We focus on ecommerce website design
                        development that guides people naturally
                        from browsing to buying.
                    </h3>

                </div>

                {/* SLIDER */}
                <div className="md:w-full w-[80%] mx-auto  md:px-53.75 px-5 flex justify-center items-center">

                    <div className="w-full flex gap-4 md:gap-6 overflow-hidden py-4">

                        {buyData
                            .slice(
                                sliderIdx,
                                sliderIdx + slidePerView
                            )
                            .map((data, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[48%] lg:min-w-[30%] flex flex-col gap-2 items-start"
                                >

                                    <Image
                                        src={data.img}
                                        width={299}
                                        height={142}
                                        alt="buy"
                                        className="w-full h-35 md:h-40 object-cover rounded-xl"
                                    />

                                    <h1 className="text-sm md:text-[16px] font-normal flex gap-2 items-start">

                                        <CgAdd className="bg-[#eef430] rounded-full text-lg mt-1 shrink-0" />

                                        <span>
                                            {data.first}
                                            <br />
                                            {data.last}
                                        </span>

                                    </h1>
                                </div>
                            ))}
                    </div>
                </div>

                {/* ARROWS */}
                <div className="md:w-[80%] px-5 md:px-0 w-full md:top-84.25 top-87.25 md:mx-32 flex justify-between items-center absolute">

                    {/* LEFT */}
                    <FaArrowLeftLong
                        className={`text-4xl transition-all duration-300
                        
                        ${sliderIdx === 0
                                ? "text-gray-400 cursor-not-allowed"
                                : "cursor-pointer hover:scale-110"
                            }
                        
                        `}
                        onClick={
                            sliderIdx === 0
                                ? undefined
                                : prevSlide
                        }
                    />

                    {/* RIGHT */}
                    <FaArrowRightLong
                        className={`text-4xl transition-all duration-300
                        
                        ${sliderIdx >=
                                buyData.length - slidePerView
                                ? "text-gray-400 cursor-not-allowed"
                                : "cursor-pointer hover:scale-110"
                            }
                        
                        `}
                        onClick={
                            sliderIdx >=
                                buyData.length - slidePerView
                                ? undefined
                                : nextSlide
                        }
                    />
                </div>

                {/* BUTTONS */}
                <div className="pl-5 md:pl-28 pt-10">

                    <h2 className="text-[16px] font-bold">
                        The result?
                    </h2>

                    <h2 className="text-[12px] font-bold italic pb-3">
                        A store that feels easy to trust - and
                        even easier to buy from.
                    </h2>

                    <div className="flex gap-4">

                        <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2 bg-[#EEF430]">

                            <Link href={"/"}>
                                View our Protfolio
                            </Link>

                        </button>

                        <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2 bg-[#EEF430]">

                            <Link href={"/solutionservice"}>
                                Work With Us
                            </Link>

                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}