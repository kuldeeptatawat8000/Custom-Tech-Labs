import Image from "next/image";
import Link from "next/link";

const philosophyData = [
    {
        img: '/web/a1.png',
        title: "Built for Scale",
        description:
            "Platforms designed to grow with your business without performance limitations.",
    },
    {
        img: '/web/a2.png',
        title: "User-First Thinking",
        description:
            "Every interface is structured for clarity, usability and intuitive interaction.",
    },
    {
        img: '/web/a3.png',
        title: "Modern Architecture",
        description:
            "Flexible systems with clean development standards and future-ready foundations.",
    },
    {
        img: '/web/a4.png',
        title: "Performance Focused",
        description:
            "Fast-loading experiences optimized across desktop, tablet and mobile devices.",
    },
    {
        img: '/web/a5.png',
        title: "Structured Integrations",
        description:
            "Connected systems that streamline workflows and reduce operational friction.",
    },
    {
        img: '/web/a6.png',
        title: "Long-Term Reliability",
        description:
            "Stable platforms engineered for maintainability, security and continuous growth.",
    },
];

export default function WebDevelopmentPhilosophy() {
    return (
        <>
            <section className="w-full bg-[#f3f3f3] overflow-hidden">

                {/* Top Header */}
                <div className="w-full bg-black py-5 px-4">

                    <h1 className="text-white text-center text-[28px] sm:text-[38px] lg:text-[54px] font-bold leading-tight">
                        Our Web Development Philosophy
                    </h1>

                </div>

                {/* Main Content */}
                <div className="w-[95%] lg:w-[88%] mx-auto py-14 lg:py-20">

                    {/* Subtitle */}
                    <h2 className="text-black text-center italic text-[22px] sm:text-[30px] lg:text-[42px] leading-snug">
                        Built on the same principles that guide every platform we develop.
                    </h2>

                    {/* Grid Cards */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

                        {philosophyData.map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-black min-h-60 p-7 flex flex-col"
                            >

                                {/* Yellow Box */}
                                <div className="w-12 h-12 bg-[#EEF430]">
                                    <Image src={item.img} width={56} height={50} alt="Hello.." />
                                </div>

                                {/* Content */}
                                <div className="mt-8">

                                    <h3 className="text-black text-[24px] sm:text-[30px] font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-[#3a3a3a] text-[17px] sm:text-[20px] leading-relaxed">
                                        {item.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105" >
                            <Link href={'/'}> View our Protfolio </Link>
                        </button>

                        < button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105" >
                            <Link href={'/solutionservice'}> Work With Us </Link>
                        </button>

                    </div>

                </div>

            </section>
        </>
    );
}