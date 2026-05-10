import Image from "next/image";

export default function BannerPage() {
    return (
        <>
            <section className="w-full md:w-[95%] lg:w-[89%] mx-auto flex flex-col justify-center gap-5 md:gap-3 px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-12 lg:py-0 text-center md:text-start bg-no-repeat bg-right bg-contain lg:bg-cover md:bg-[url('/appsimg/main.png')] min-h-screen md:min-h-125 lg:h-112.5 xl:h-130">

                {/* Mobile Image */}
                <div className="md:hidden w-full h-62.5 sm:h-80 relative">
                    <Image
                        src={"/appsimg/main.png"}
                        fill
                        priority
                        alt="hero Banner"
                        className="object-contain object-center"
                    />
                </div>

                {/* Heading */}
                <h1 className="md:w-1/2 text-[28px] sm:text-[42px] md:text-[22px] lg:text-[32px] xl:text-[42px] leading-tight font-extrabold">
                    Custom Apps That Teams Adopt
                    <br className="hidden md:block" />
                    And Customers Love Using
                </h1>

                {/* Paragraph 1 */}
                <p className="md:w-1/2 text-[15px] sm:text-[20px] md:text-[12px] lg:text-[15px] xl:text-[17px] leading-relaxed font-semibold">
                    Tech that removes friction, simplifies decisions, and becomes a natural extension of how people work and engage.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">

                    <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                        View our Portfolio
                    </button>

                    <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                        Work With Us
                    </button>

                </div>

            </section>
        </>
    );
}