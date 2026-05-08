import Image from "next/image";

export default function PeopleWork() {
    return (
        <>
            <section className="w-full mb-26 flex md:justify-center md:items-center flex-col relative h-auto">
                <div className="caseStuies relative w-full h-35 text-white  border-[#eef430] bg-black ">
                    <h1 className=" relative left-5 top-15  md:top-10 w-1/2 md:left-20 text-[20px] sm:text-[25px] lg:text-[32px] font-semibold">The people behind the work</h1>
                </div>

                <div className="lg:w-[80%] w-full mx-auto py-5">
                    <div className='w-full min-h-73 flex justify-center items-center flex-col md:flex-row gap-8 '>
                        <div className="md:w-102 px-10 md:px-0 w-full h-72.25">
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
                </div>

            </section>

        </>
    )
}