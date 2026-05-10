import { GoArrowUpRight } from "react-icons/go";
export default function WhatWeDo() {


    const services = [
        {
            name: "Custom Websites",
            desc: "Built for performance, clarity, and conversion",
        },
        {
            name: "Custom Applications",
            desc: "Tailored to your workflows and users",
        },
        {
            name: "Custom Websites",
            desc: "Built for performance, clarity, and conversion",
        },
        {
            name: "Custom Applications",
            desc: "Tailored to your workflows and users",
        },
    ];
    return (
        <>
            <section className="flex px-5 md:px-10 py-5 justify-center flex-col items-center w-full md:w-[90%] mx-auto gap-10">
                <h1 className="font-bold text-[32px] py-2 md:px-90 w-full md:w-auto text-center bg-[#eef430]">What We Do</h1>
                <h1 className="text-[24px] w-3/4 font-semibold">We design and build custom enterprise solutions for small to mid-sized businesses, combining innovation with real-world usability.
                    <br /><br />
                    <span className="font-normal italic">
                        Our services include:
                    </span>
                </h1>

                <div className="flex w-full flex-wrap flex-col md:flex-row gap-10 justify-center items-center">
                    {
                        services.map((item, idx) => (
                            <div key={idx} className="md:w-107.5 flex flex-col justify-between items-start py-5 w-full px-5 shadow-2xl shadow-gray-400 h-39.5 border-l-14 border-[#eff430] ">
                                <GoArrowUpRight className=" self-end text-4xl font-bold" />
                                <div>
                                    <h3 className=" text-[16px] font-semibold">{item.name}</h3>
                                    <h4 className=" text-[16px] font-normal">{item.desc}</h4>
                                </div>
                            </div>
                        ))
                    }
                    <h3 className="text-[16px]">Every solution is built specifically for your business. No templates, No shortcuts.</h3>
                </div>
            </section>
        </>
    )
}