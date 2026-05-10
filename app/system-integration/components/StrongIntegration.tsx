import Image from "next/image";

const integrationData = [
    "Systems that share data instantly- not overnight.",
    "Information that stays consistent across every platform.",
    "Infrastructure that’s ready for whatever comes next.",
    "Workflows that run on their own.",
];

export default function StrongIntegration() {
    return (
        <>
            <section className="w-full bg-[#f3f3f3] py-12 md:py-20 overflow-hidden">

                <div className="w-[95%] lg:w-[88%] mx-auto bg-[#e9e9e9] px-5 sm:px-8 lg:px-14 py-10 md:py-16 relative">

                    {/* Heading */}
                    <h1 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold text-black leading-tight">
                        What Strong Integrations Deliver
                    </h1>

                    {/* Main Section */}
                    <div className="relative mt-12">

                        {/* Full Width Black Background */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-12 w-screen h-45 md:h-57.5  z-0">
                            <Image className="w-full h-45" src={'/system/black.png'} alt="Black.." width={1480} height={180} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-6 items-center lg:items-start">

                            {/* Left Image */}
                            <div className="w-full lg:w-[45%] flex justify-center">
                                <Image
                                    src={"/system/strong.png"}
                                    width={500}
                                    height={420}
                                    alt="Strong Integration"
                                    className="w-full max-w-125 h-auto object-cover"
                                />
                            </div>

                            {/* Right Cards */}
                            <div className="w-full lg:w-[55%] flex flex-col gap-5">

                                {integrationData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-[#f8f8f8] shadow-md px-5 sm:px-7 py-6 text-black text-[16px] sm:text-[18px] font-semibold"
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="mt-14 lg:mt-10 relative z-20">

                        <p className="text-[#8b8b8b] text-[18px] sm:text-[20px]">
                            That’s the difference system integration makes.
                        </p>

                        <h2 className="text-black text-[24px] sm:text-[30px] lg:text-[38px] font-medium leading-snug mt-1 max-w-212.5">
                            Let’s build the integration layer that powers your growth.
                        </h2>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">

                            <button className="px-7 h-12 bg-[#EEF430] text-black text-[15px] font-bold hover:scale-105 transition-all duration-300">
                                View Our Portfolio →
                            </button>

                            <button className="px-7 h-12 bg-[#EEF430] text-black text-[15px] font-bold hover:scale-105 transition-all duration-300">
                                Work With Us →
                            </button>

                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}