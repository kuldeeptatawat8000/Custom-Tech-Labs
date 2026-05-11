import Image from "next/image";
import Link from "next/link";

export default function ForYourCustomers() {
    return (
        <>
            <section className="w-full bg-[#f3f3f3] py-16 lg:py-24">

                <div className="w-[95%] lg:w-[88%] mx-auto bg-[#ebebeb] rounded-[20px] px-5 sm:px-8 lg:px-10 py-10 lg:py-14">

                    {/* Heading */}
                    <div className="flex justify-center">
                        <h2 className="text-[#014421] text-[28px] sm:text-[34px] lg:text-[42px] font-bold text-center">
                            For Your Customers
                        </h2>
                    </div>

                    {/* Top Section */}
                    <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-6 items-start">

                        {/* Left Image */}
                        <div className="w-full lg:w-[52%]">

                            <Image src={"/web/customer.jpg"} width={650} height={450} alt="Customer Experience"
                                className="w-full h-auto object-cover" />

                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-[48%]">

                            <h1 className="text-black text-[28px] sm:text-[36px] lg:text-[48px] font-bold italic leading-tight">
                                Your website is often the first experience someone has with your brand.
                            </h1>

                            <p className="mt-6 text-black text-[18px] sm:text-[22px] leading-relaxed">
                                Every interaction shapes perception.
                            </p>

                            {/* Highlight Text */}
                            <div className="mt-1 inline-block bg-black px-3 py-1">

                                <h3 className="text-[#EEF430] text-[18px] sm:text-[22px] font-bold">
                                    Speed. Navigation. Structure. Flow.
                                </h3>

                            </div>

                        </div>

                    </div>

                    {/* Bottom Content */}
                    <div className="mt-10">

                        <p className="text-black text-[18px] sm:text-[22px] italic leading-relaxed">
                            We build custom digital environments that guide users with clarity–
                            whether that means <span className="font-bold not-italic">
                                custom ecommerce website development
                            </span>, service pages, booking systems, advanced integrations or modern
                            <span className="font-bold not-italic">
                                {" "}AI features in website experiences
                            </span> or integrated portals.
                        </p>

                        <h3 className="mt-8 text-black text-[22px] sm:text-[28px] font-bold italic leading-snug">
                            We build platforms that guide users through information and action.
                        </h3>

                        <div className="mt-6">

                            <h3 className="text-black text-[22px] sm:text-[28px] font-bold leading-snug">
                                Because a well-built website doesn’t just function.
                            </h3>

                            <div className="inline-block bg-black px-3 py-1 mt-2">

                                <h3 className="text-[#EEF430] text-[20px] sm:text-[26px] font-bold">
                                    It builds confidence.
                                </h3>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

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