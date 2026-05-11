import Image from "next/image";
import Link from "next/link";

export default function BannerPage() {
    return (
        <>
            <section className="w-full md:w-[95%] lg:w-[89%] mx-auto flex flex-col justify-center gap-5 md:gap-3 px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 lg:py-0 text-center md:text-start bg-no-repeat bg-right bg-contain lg:bg-cover md:bg-[url('/web/main.png')] min-h-screen md:min-h-125 lg:h-112.5 xl:h-130">

                {/* Mobile Image */}
                <div className="md:hidden w-full h-62.5 sm:h-80 relative">
                    <Image
                        src={"/web/main1.png"}
                        fill
                        priority
                        alt="hero Banner"
                        className="object-contain object-center"
                    />
                </div>

                {/* Heading */}
                <h1 className="md:w-1/2 text-[28px] sm:text-[42px] md:text-[22px] lg:text-[32px] xl:text-[42px] leading-tight font-extrabold">
                    Custom Website That Build
                    <br className="hidden md:block" />
                    Authority and Drive Action.
                </h1>

                {/* Paragraph 1 */}
                <p className="md:w-1/2 text-[15px] sm:text-[20px] md:text-[12px] lg:text-[15px] xl:text-[17px] leading-relaxed font-semibold">
                    High performance website or Strategic digital platforms engineered for clarity, usability and measurable growth.
                </p>



                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">

                    <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105" >
                        <Link href={'/'}> View our Protfolio </Link>
                    </button>

                    < button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105" >
                        <Link href={'/solutionservice'}> Work With Us </Link>
                    </button>

                </div>

            </section>
        </>
    );
}