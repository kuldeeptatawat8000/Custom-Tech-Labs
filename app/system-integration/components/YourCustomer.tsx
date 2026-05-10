import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";



export default function YourCustomer() {
    return (
        <>
            <section className=" w-full h-full flex-col gap-4 flex justify-center items-center">
                <h1 className="py-2 w-full font-bold bg-black text-white text-3xl text-center">For Your Customers</h1>
                <div className="w-[80%] mx-auto flex gap-7 flex-col justify-center items-center">
                    <h2 className="text-2xl italic font-medium text-center">Customers only see the front end. <br className=" hidden md:block" /> But their experience depends on everything behind it.
                    </h2>

                    <div className="flex gap-7 justify-center items-start  md:flex-row flex-col">
                        <Image src={'/system/customer.jpg'} alt="Customer.. " width={417} height={626} />
                        <div className="flex flex-col gap-3">
                            <h3 className=" text-base font-medium text-[#979797]">When systems aren’t connected, things break:</h3>
                            <div className="flex flex-col gap-3">
                                <h3 className="py-3 flex  items-center rounded-md  gap-4 text-base font-bold pl-3 pr-10 bg-[#fee6e5]"><GoDotFill className="text-[#ef4444]" /> Delays</h3>
                                <h3 className="py-3 flex  items-center rounded-md  gap-4 text-base font-bold pl-3 pr-10 bg-[#fee6e5]"><GoDotFill className="text-[#ef4444]" />Inaccurate information</h3>
                                <h3 className="py-3 flex  items-center rounded-md  gap-4 text-base font-bold pl-3 pr-10 bg-[#fee6e5]"><GoDotFill className="text-[#ef4444]" />Missed expectations</h3>
                            </div>
                            <h3 className=" text-base font-medium text-[#979797]">With the right system integration,everything stays aligned.</h3>
                            <div className="flex flex-col gap-3">
                                <h3 className="py-3 flex  items-center rounded-md  gap-4 text-base font-bold pl-3 pr-10 bg-[#f7fbce]"><MdOutlineSecurity className="text-[#757a34]" />Accurate data</h3>
                                <h3 className="py-3 flex  items-center rounded-md  gap-4 text-base font-bold pl-3 pr-10 bg-[#f7fbce]"><FaBoltLightning className="text-[#757a34]" />Faster responses</h3>
                                <h3 className="py-3 flex  items-center rounded-md  gap-4 text-base font-bold pl-3 pr-10 bg-[#f7fbce]"><IoMdStopwatch className="text-[#757a34]" />Consistent service</h3>
                            </div>
                            <h3 className="font-bold text-base">The result? An experience your customers <br className=" hidden md:block" />
                                can trust-every time.</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

