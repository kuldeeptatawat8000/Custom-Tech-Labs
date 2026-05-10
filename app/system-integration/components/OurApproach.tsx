


export default function OurApproach() {
    const apperData = [
        {
            items: [
                {
                    title: `We Start With Your Workflow`,
                    desc: `Before we build anything, we understand how your business operates today. Our consulting and system integration services focus on real processes, not assumptions.`,
                },
                {
                    title: `We Connect With Purpose`,
                    desc: `Every integration is designed to move data securely and reliably between systems.`,
                },
            ],
        },
        {
            items: [
                {
                    title: `We Build for What’s Next`,
                    desc: `Flexible architecture that supports new tools without needing to start over.`,
                },
                {
                    title: `We Prioritize Stability`,
                    desc: `No surprises. No downtime.Just systems you can depend on.

`,
                },
            ],
        },
        {
            items: [
                {
                    title: `We Improve Over Time`,
                    desc: `We track how your systems perform in real use, and refine where needed.`,
                }
            ],
        },
    ]
    return (
        <><section className="w-full flex mt-5 flex-col gap-4 justify-start items-center px-4 md:px-10 lg:px-28 py-10">

            <h1 className="rounded-xl px-6 py-1 bg-black text-[#eef430] font-bold text-lg md:text-[24px]">
                Our Approach To Integration
            </h1>

            <h1 className="font-semibold text-xl md:text-[32px] text-center">
                How We Build Systems That Work Together
            </h1>

            {apperData.map((group, groupIdx) => (
                <div
                    key={groupIdx}
                    className="w-full flex flex-col justify-center md:flex-row gap-4 md:gap-7 mt-5"
                >
                    {group.items.map((item, itemIdx) => (
                        <div
                            key={itemIdx}
                            className="w-full md:w-1/2 flex flex-col gap-2 justify-center px-4 md:px-5 py-4 shadow-xl shadow-gray-300 border-l-[6px] md:border-l-25 border-[#eef430]"
                        >
                            <h1 className="text-lg md:text-[24px] font-bold text-[#034a27]">
                                {item.title}
                            </h1>

                            <h3 className="text-sm md:text-[16px] font-normal leading-relaxed">
                                {item.desc}
                            </h3>
                        </div>
                    ))}
                </div>
            ))}

            <div className="flex flex-col sm:flex-row pt-6 gap-3 md:gap-4">
                <button className="text-sm md:text-[14px] font-bold px-4 py-2 bg-[#EEF430] rounded">
                    View our Portfolio
                </button>
                <button className="text-sm md:text-[14px] font-bold px-4 py-2 bg-[#EEF430] rounded">
                    Work With Us
                </button>
            </div>
        </section></>
    )
}
