import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const points = [
    "No bottlenecks.",
    "No fragmented systems.",
    "No fragile builds that break under growth.",
];

export default function ForYourTeam() {
    return (
        <>
            <section className="w-full bg-[#f3f3f3] py-16 lg:py-24">

                <div className="w-[95%] lg:w-[88%] mx-auto">

                    {/* Top Heading */}
                    <div className="flex flex-col items-center text-center">

                        <h2 className="text-[#014421] text-[28px] sm:text-[34px] lg:text-[42px] font-bold">
                            For Your Team
                        </h2>

                        <h1 className="mt-5 text-black text-[24px] sm:text-[32px] lg:text-[46px] font-semibold italic leading-tight">
                            Your website shouldn’t create operational dependency
                        </h1>

                    </div>

                    {/* Main Content */}
                    <div className="mt-14 flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

                        {/* Left Image */}
                        <div className="w-full lg:w-[58%]">

                            <Image
                                src={"/web/same.jpg"}
                                width={700}
                                height={500}
                                alt="Team Image"
                                className="w-full h-auto object-cover"
                            />

                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-[42%]">

                            <p className="text-[#1f1f1f] text-[18px] sm:text-[20px] leading-relaxed">
                                If every update requires developer support,
                                momentum slows. If systems don’t connect, your team
                                compensates manually.
                            </p>

                            <h3 className="mt-8 text-black text-[22px] sm:text-[28px] font-bold leading-snug">
                                Well-structured custom website development restores control.
                            </h3>

                            <p className="mt-6 text-[#8d8d8d] text-[17px] sm:text-[19px] italic leading-relaxed">
                                We build custom websites that integrate your tools,
                                simplify workflows and give your team structured control.
                            </p>

                            {/* Points */}
                            <div className="mt-8 flex flex-col gap-5">

                                {points.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4"
                                    >
                                        <RxCross2 className="text-red-600 text-[30px] font-bold" />

                                        <h4 className="text-[#7a7a7a] text-[18px] sm:text-[22px] font-semibold">
                                            {item}
                                        </h4>
                                    </div>
                                ))}

                            </div>

                            {/* Result Box */}
                            <div className="mt-10 bg-black px-5 sm:px-7 py-5 rounded-xl">

                                <h3 className="text-[#EEF430] text-[20px] sm:text-[24px] font-bold">
                                    The result is simple:
                                </h3>

                                <p className="mt-2 text-white text-[17px] sm:text-[20px] leading-relaxed">
                                    You’ll gain clarity, efficiency and full autonomy.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}