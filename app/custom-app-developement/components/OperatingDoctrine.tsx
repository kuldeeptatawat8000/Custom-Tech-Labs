import Link from "next/link"

export default function OperatingDoctrine() {
    const apperData = [
        {
            items: [
                {
                    title: `We Start with friction`,
                    desc: `If the workflow isn’t clear, the app won’t fix it.`,
                },
                {
                    title: `We design for real behavior`,
                    desc: `Not ideal behavior. Not assumed behavior.`,
                },
            ],
        },
        {
            items: [
                {
                    title: `We Build for longevity`,
                    desc: `No shortcuts. No tech debt traps.`,
                },
                {
                    title: `We launch without chaos`,
                    desc: `If adoption requires force, the system is wrong.`,
                },
            ],
        },
        {
            items: [
                {
                    title: `We refine in reality`,
                    desc: `Usage tells the truth. We follow it.`,
                },
            ]
        },
    ]
    return (
        <><section className="w-full flex mt-5 flex-col gap-4 justify-start items-center px-4 md:px-10 lg:px-28 py-10">

            <h1 className="rounded-xl px-6 py-1 bg-black text-[#eef430] font-bold text-lg md:text-[24px]">
                Our Operating Doctrine
            </h1>

            <h1 className="font-semibold text-xl md:text-[32px] text-center">
                We follow the same philosophy outlined across our platform
            </h1>

            {apperData.map((group, groupIdx) => (
                <div
                    key={groupIdx}
                    className="w-full flex flex-col justify-center md:flex-row gap-4 md:gap-7 mt-5"
                >
                    {group.items.map((item, itemIdx) => (
                        <div
                            key={itemIdx}
                            className="w-full md:w-1/2 flex flex-col gap-2 justify-center px-4 md:px-5 py-4 shadow-xl shadow-gray-300 "
                        >
                            <h1 className="text-lg bg-[#eff430] md:w-3/4 md:text-[24px] font-bold text-[#034a27]">
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
                <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                    <Link href={'/'}> View our Protfolio </Link>
                </button>

                <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                    <Link href={'/solutionservice'}> Work With Us </Link>
                </button>
            </div>
        </section></>
    )
}

