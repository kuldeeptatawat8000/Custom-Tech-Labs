import Image from "next/image";
export default function SectorsWeBuild() {
    return (

        <>


            <section className="h-auto flex flex-col justify-center items-center gap-5  w-full ">
                <div className="md:w-[57%] w-full md:ml-10 lg:ml-0  flex justify-center items-center h-16.5 bg-[#eef430]">
                    <h1 className="md:text-[32px] text-[17px] sm:text-[25px] font-bold">Sectors We Build For</h1>
                </div>
                <h3 className="text-[12px] text-center md:text-[16px] font-normal"><span className="font-bold"> Different industries. Same friction. Same fix.</span> <br className=" hidden md:block" />

                    We connect what should never have been separate in the first place.

                </h3>


                <div className="md:w-[57%] flex justify-center md:justify-center  flex-wrap items-center gap-10 w-full ">
                    <div className="w-47.75 flex flex-col justify-center items-center h-29.5 bg-[#f5f5f5]">
                        <Image className="w-38 h-22.5 " src={'/web/d1.png'} width={152} height={80} alt="Support ..." />
                        <h1 className="font-semibold text-[16px] ">Healthcare</h1>
                    </div>
                    <div className="w-47.75 flex flex-col justify-center items-center h-29.5 bg-[#f5f5f5]">
                        <Image className="w-38 h-22.5 " src={'/web/d2.png'} width={152} height={80} alt="Support ..." />
                        <h1 className="font-semibold text-[16px] ">Retail</h1>
                    </div>
                    <div className="w-47.75 flex flex-col justify-center items-center h-29.5 bg-[#f5f5f5]">
                        <Image className="w-38 h-22.5 " src={'/web/d3.png'} width={152} height={80} alt="Support ..." />
                        <h1 className="font-semibold text-[16px] ">Education</h1>
                    </div>
                    <div className="w-47.75 flex flex-col justify-center items-center h-29.5 bg-[#f5f5f5]">
                        <Image className="w-38 h-22.5  " src={'/web/d4.png'} width={152} height={80} alt="Support ..." />
                        <h1 className="font-semibold text-[16px] "> Construction</h1>
                    </div>
                    <div className="w-47.75 flex flex-col justify-center items-center h-29.5 bg-[#f5f5f5]">
                        <Image className="w-38 h-22.5 " src={'/web/d5.png'} width={152} height={80} alt="Support ..." />
                        <h1 className="font-semibold text-[16px] ">Manufacturing</h1>
                    </div>


                </div>
                <h2 className="  font-normal text-[12px] md:text-[16px] w-full text-center md:w-1/2">The industries may differ, but the goal stays the same: <br className=" hidden md:block" />
                    Replace fragmented technology with connected digital ecosystems.</h2>

                <div className="w-full h-8.75 bg-black border-t-14 border-[#fee430]"></div>
            </section >



        </>
    )
}

