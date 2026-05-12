export default function WhatDesign() {
    const services = [
        {
            id: "01",
            name: "Strategy Meets Engineering",
            title: `Why Before How`,
            desc: `Every project begins with understanding the “why” before building the “how.”`,
        },
        {
            id: " 02",
            name: "User-Friendly by Design",
            title: `Complex Made Simple`,
            desc: `We turn complex systems into simple, intuitive experiences for teams and customers alike.`,
        },
        {
            id: "03",
            name: "Global Strength, Local Insight",
            title: `100+ Engineers, U.S. Strategy`,
            desc: `Backed by 100+ engineers in India and a strategic leadership team in the U.S., we deliver world-class execution with market-smart strategy.`,
        },


    ];
    return (
        <>

            <section className="flex bg-[#f5f5f5] px-5 mb-10 pb-20 md:px-10 py-5 justify-center flex-col items-center w-full md:w-full pt-10 mt-10 mx-auto gap-10">
                <h1 className="font-bold text-[32px] py-2 md:px-50 w-full md:w-auto text-center bg-black text-white rounded-sm">What We Do</h1>


                <div className="flex w-full flex-wrap flex-col md:flex-row gap-10 justify-center items-center">
                    {services.map((item, idx) => (
                        <div key={idx} className="w-73.75 sm:w-80  relative flex-col flex justify-start items-center px-10 py-5 h-83.75 border  rounded-md bg-[#d9d9d9] ">
                            <div className="py-4 px-5 rounded-full bg-[#eef430] text-center  text-xl absolute -top-7 left-5">{item.id}</div>
                            <div className="py-10 flex flex-col gap-4">
                                <h3 className="text-[16px] font-semibold">{item.name}</h3>
                                <h2 className="text-[24px] font-normal">{item.title}</h2>
                                <h6 className="text-[16px] font-normal">{item.desc}</h6>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </>
    )
}