import Image from "next/image";

export default function OurPhilosophy() {
    return (
        <section className="w-full mt-20 py-10 px-5 md:px-10">

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">

                {/* Heading */}
                <h1 className="bg-[#eef430] px-10 w-3/4 rounded-md py-2 text-2xl md:text-4xl font-bold text-center">
                    Our Philosophy
                </h1>

                {/* Content */}
                <div className="flex px-10 flex-col lg:flex-row items-center gap-10 w-full">

                    {/* Left Text */}
                    <div className="flex-1 flex flex-col gap-5">

                        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                            Technology should never feel like a
                            burden. It should{" "}
                            <span className="italic border-b-4 border-[#eef430]">
                                empower, simplify,
                                and strengthen
                            </span>{" "}
                            human connection.
                        </h1>

                        <h3 className="text-base md:text-lg leading-relaxed">
                            That’s what we build at CustomTech Labs:
                            <br />
                            <br />

                            <span className="font-bold">
                                Technology with purpose.
                            </span>

                            <span className="text-[#a6a6a6]"> <br />
                                Powered by strategy.
                                <br />
                                Designed for people.</span>
                        </h3>
                    </div>

                    {/* Right Image */}
                    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%]">
                        <Image
                            className="w-full h-auto object-cover"
                            src="/about/like.png"
                            width={409}
                            height={307}
                            alt="Our Philosophy"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}