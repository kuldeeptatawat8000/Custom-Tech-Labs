import Image from "next/image";

export default function PeopleWork() {
    return (
        <>
            <section className="w-full mt-10 mb-26 flex md:justify-center md:items-center flex-col relative h-auto">
                <div className="caseStuies relative w-full h-35 text-white  border-[#eef430] bg-black ">
                    <h1 className="  relative left-2 top-20  md:top-10 w-1/2 md:left-20 text-[20px] sm:text-[25px] lg:text-[32px] font-semibold">The people behind the work</h1>
                </div>

                <div className="lg:w-[85%] w-full flex md:py-10 py-5 flex-col justify-center items-center gap-5 mx-auto ">
                    <div className='w-full min-h-73 flex justify-center items-center flex-col md:flex-row gap-8 '>
                        <div className="md:w-102 px-5 sm:px-20 md:px-0 w-full h-72.25">
                            <Image className="object-cover w-full h-full object-top" src={'/about/p1.jpg'} width={407} height={289} alt='Divakar...' />
                        </div>
                        <div className=" flex w-full px-5 text-center md:text-start  items-center justify-center md:w-1/2 md:justify-start md:pt-4 md:items-start flex-col">
                            <h4 className="text-[16px] text-[#979797] font-normal">Managing Director, Business Growth & Strategy</h4>
                            <h2 className="text-[24px] font-bold">Divakar Saini</h2>
                            <h6 className="font-normal text-xl md:text-[12px] lg:text-[16px]">Divakar leads business growth, partnerships, and strategic direction at CustomTech Labs. He brings a rare combination of business acumen and technical understanding, allowing him to see both the opportunity and the execution behind it. He works closely with clients to identify what’s actually holding their business back and translates that into clear, scalable technology solutions.
                                His strength lies in connecting the dots between business goals, user needs, and technical possibilities. From client acquisition to long-term partnerships, Divakar ensures every engagement is rooted in impact, not just delivery.
                            </h6>

                        </div>
                    </div>

                    <div className='w-full min-h-73 flex md:py-10 py-5 justify-center items-center flex-col md:flex-row-reverse gap-8 '>
                        <div className="md:w-102 px-5 sm:px-20 md:px-0 w-full h-72.25">
                            <Image className="object-cover w-full h-full object-top" src={'/about/p2.jpg'} width={407} height={289} alt='Divakar...' />
                        </div>
                        <div className=" flex w-full px-5 text-center md:text-start  items-center justify-center md:w-1/2 md:justify-start md:pt-4 md:items-end flex-col">
                            <h4 className="text-[16px] text-[#979797] font-normal">Managing Director & CTO, Technology & Engineering</h4>
                            <h2 className="text-[24px] font-bold">Harvindra Singh</h2>
                            <h6 className="font-normal  md:text-end text-xl md:text-[12px] lg:text-[16px]">Harvindra leads the engineering vision at CustomTech Labs, ensuring every product is built with precision, scalability, and long-term performance in mind. With deep expertise in system architecture and modern technologies, he turns complex business requirements into robust, high-performing solutions.

                                He takes a hands-on approach to development, guiding teams through clean architecture, efficient processes, and enterprise-grade execution. His focus is simple: build technology that not only works today, but continues to perform as the business grows.
                            </h6>

                        </div>
                    </div>

                    <div className='w-full min-h-73 flex md:py-0 py-5 justify-center items-center flex-col md:flex-row gap-8 '>
                        <div className="md:w-102 px-5 sm:px-20 md:px-0 w-full h-72.25">
                            <Image className="object-cover w-full h-full object-top" src={'/about/p3.jpg'} width={407} height={289} alt='Divakar...' />
                        </div>
                        <div className=" flex w-full px-5 text-center md:text-start  items-center justify-center md:w-1/2 md:justify-start md:pt-3 md:items-start flex-col">
                            <h4 className="text-[16px] text-[#979797] font-normal">Human-Centered Systems Architect</h4>
                            <h2 className="text-[24px] font-bold">Prati Kaufmani</h2>
                            <h6 className="font-normal text-xl md:text-[12px] lg:text-[16px]">Prati Kaufman leads strategy, user experience, and growth alignment at CustomTech Labs. With a strong foundation in marketing, business growth, and human behavior, she ensures that every product is not just built well but built right.
                                Her approach starts before the first line of code. She focuses on defining the why behind every build—who it is for, how it will be used, and how it will drive real business outcomes. By bridging strategy, user behavior, and execution, she ensures that technology feels intuitive, converts effectively, and integrates seamlessly into how businesses actually operate.
                                At her core, Prati believes that technology should simplify decisions, not complicate them and that the best systems are the ones people actually want to use.

                            </h6>

                        </div>
                    </div>
                </div>

            </section>
            <div className="border-2 border-[#e2dbdb] w-full mb-5"></div>
        </>
    )
}