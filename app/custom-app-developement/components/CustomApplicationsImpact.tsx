import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const applicationData = [
    "Operational platforms that replace manual processes.",
    "Customer portals that simplify engagement.",
    "Mobile tools that support service delivery.",
    "Modernized systems that scale with growth.",
];

export default function CustomApplicationsImpact() {
    return (
        <>
            <section className="w-full bg-[#f3f3f3] py-14 lg:py-20 overflow-hidden relative">

                {/* Top Lines */}
                <div className="absolute top-0 left-0 w-full">
                    <div className="w-full h-3 bg-black"></div>
                    <div className="w-full h-4 bg-[#EEF430] mt-1"></div>
                </div>

                <div className="w-[95%] lg:w-[88%] mx-auto pt-10">

                    {/* Heading */}
                    <div className="bg-[#EEF430] px-5 sm:px-8 py-5 w-full lg:w-fit">

                        <h1 className="text-black text-[26px] sm:text-[34px] lg:text-[48px] font-bold leading-tight">
                            Where Custom Applications Make the Greatest Impact
                        </h1>

                    </div>

                    {/* Cards */}
                    <div className="mt-10 flex flex-col gap-5">

                        {applicationData.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full lg:w-[75%] border-2 border-[#EEF430] px-5 sm:px-7 py-5 flex items-center gap-5 bg-transparent"
                            >

                                {/* Icon */}
                                <div className="min-w-8.5 h-8.5 rounded-full bg-[#EEF430] flex justify-center items-center">
                                    <FaCheck className="text-black text-[18px]" />
                                </div>

                                {/* Text */}
                                <h2 className="text-black text-[16px] sm:text-[20px] lg:text-[24px] font-semibold leading-relaxed">
                                    {item}
                                </h2>

                            </div>
                        ))}

                    </div>

                    {/* Bottom Box */}
                    <div className="mt-16 bg-[#d9d9d9] px-5 sm:px-8 lg:px-12 py-10 lg:py-16 flex flex-col items-center">

                        {/* Black Content Box */}
                        <div className="w-full lg:w-[85%] bg-black rounded-2xl px-6 sm:px-10 py-8 text-center">

                            <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[52px] font-bold leading-tight">
                                If your current tools create more work than they remove –
                                <span className="text-[#EEF430]">
                                    {" "}that’s the signal
                                </span>
                            </h2>

                        </div>

                        {/* Bottom Text */}
                        <p className="mt-8 text-black text-[16px] sm:text-[20px] text-center">
                            Let’s build something that moves your business forward
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">

                            <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105" >
                                <Link href={'/'}> View our Protfolio </Link>
                            </button>

                            < button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105" >
                                <Link href={'/solutionservice'}> Work With Us </Link>
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}