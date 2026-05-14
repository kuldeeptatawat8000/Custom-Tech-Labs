"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

type SlideType = {
    id: number;
    img: string;
    title: string;
    desc: string;
    width: number;
    height: number;
};

const Data: SlideType[] = [
    {
        id: 1,
        img: "/servicesolimg/caseStudio.png",
        title: "Industries We Transform",
        desc: "We’ve built systems for healthcare operations, retail platforms, educational ecosystems, construction workflows, and manufacturing environments helping them replace inefficient processes with systems that reduce errors and improve visibility.",
        width: 994,
        height: 388,
    },

    {
        id: 2,
        img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=994&h=388&fit=crop",
        title: "Smart Business Automation",
        desc: "Our automation solutions streamline repetitive workflows, improve productivity, and allow teams to focus on strategic business growth instead of manual operational tasks.",
        width: 994,
        height: 388,
    },

    {
        id: 3,
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=994&h=388&fit=crop",
        title: "Digital Product Development",
        desc: "We create scalable digital platforms, custom applications, and cloud-based systems designed to support long-term growth, security, and seamless user experiences.",
        width: 994,
        height: 388,
    },

    {
        id: 4,
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=994&h=388&fit=crop",
        title: "Modern Team Collaboration",
        desc: "Our collaborative solutions help organizations improve communication, project management, and team coordination across distributed and in-office environments.",
        width: 994,
        height: 388,
    },

    {
        id: 5,
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=994&h=388&fit=crop",
        title: "Technology Driven Innovation",
        desc: "We help businesses adopt modern technologies, optimize digital infrastructure, and create future-ready systems that improve operational efficiency and customer satisfaction.",
        width: 994,
        height: 388,
    },
];

export default function CaseStudies() {
    const [sliderIdx, setSliderIdx] = useState<number>(0);

    // PREV BUTTON
    const prevButton = () => {
        setSliderIdx((prev) => (prev === 0 ? 0 : prev - 1));
    };

    // NEXT BUTTON
    const nextButton = () => {
        setSliderIdx((prev) =>
            prev === Data.length - 1 ? prev : prev + 1
        );
    };

    return (
        <section className="w-full mt-16 mb-26 flex md:justify-center md:items-center flex-col relative h-auto overflow-hidden">

            {/* TOP TITLE */}
            <div className="caseStuies relative w-full h-35 text-white border-[#eef430] bg-black">

                <h1 className="relative top-10 w-1/2 md:left-20 text-[20px] sm:text-[25px] lg:text-[32px] font-semibold">
                    Case Studies
                </h1>

            </div>

            {/* SLIDER CONTENT */}
            <div className="w-full flex">

                <div className="md:w-[80%] shrink-0 md:pl-10 relative -top-12 md:left-52 w-full h-auto">

                    {/* IMAGE */}
                    <Image
                        className="md:w-[82%] md:h-97 object-center object-cover w-full h-97 rounded-[10px]"
                        src={Data[sliderIdx].img}
                        width={Data[sliderIdx].width}
                        height={Data[sliderIdx].height}
                        alt={Data[sliderIdx].title}
                    />

                    {/* CONTENT */}
                    <div className="md:w-[82%] py-10 flex flex-col gap-3 items-start justify-start w-full bg-[#d9d9d9] px-5">

                        <h2 className="text-[16px] italic font-bold">
                            {Data[sliderIdx].title}
                        </h2>

                        <h2 className="text-[16px] font-normal">
                            {Data[sliderIdx].desc}
                        </h2>

                        <button className="text-sm md:text-[14px] font-bold px-5 flex gap-2 items-center py-2 bg-[#EEF430] rounded hover:scale-105 transition-all duration-300">

                            <Link href={"/"} className="flex items-center gap-2">
                                View our Portfolio <BsArrowRight />
                            </Link>

                        </button>
                    </div>
                </div>
            </div>

            {/* ARROWS */}
            <div className="w-[90%] absolute h-auto flex bottom-0 justify-evenly md:justify-between md:items-center ">

                {/* LEFT */}
                <BiSolidLeftArrow
                    className={`text-5xl transition-all duration-300
          
          ${sliderIdx === 0
                            ? "text-[#d9d9d9] cursor-not-allowed"
                            : "text-[#a8a8a8] hover:scale-110 cursor-pointer"
                        }
          
          `}
                    onClick={sliderIdx === 0 ? undefined : prevButton}
                />

                {/* RIGHT */}
                <BiSolidRightArrow
                    className={`text-5xl transition-all duration-300
          
          ${sliderIdx === Data.length - 1
                            ? "text-[#d9d9d9] cursor-not-allowed"
                            : "text-[#a8a8a8] hover:scale-110 cursor-pointer"
                        }
          
          `}
                    onClick={
                        sliderIdx === Data.length - 1
                            ? undefined
                            : nextButton
                    }
                />
            </div>
        </section>
    );
}