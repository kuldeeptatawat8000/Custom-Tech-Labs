import Image from "next/image";
import Link from "next/link";
import { design } from "./smallNavData";

export default function MainPage() {
    return (
        <>
            <section className="w-full  relative lg:px-20 mb-0 sm:mb-10  lg:mb-15 px-5  md:h-100">
                <div className="md:flex justify-end items-end">
                    <Image
                        src="/about/main.png"
                        width={1200}
                        height={800}
                        className="md:w-[70%] w-full h-full xl:h-full"
                        alt="Banner Image"
                    />
                </div>

                <div className="w-full mb-0 mt-5 md:mt-0   md:absolute top-0 xl:top-5 left-0 h-full ">
                    <div className="flex flex-col text-center md:text-start  gap-3 justify-center md:justify-start md:pt-5 md:pl-5 items-start  lg:w-1/2 h-full md:w-[70%] lg:pl-40">
                        <h1 className="lg:text-[32px] text-3xl sm:text-4xl  font-extrabold">Strategic. Human-Centered. Tech That Works for People.</h1>
                        <h2 className="text-[16px] font-semibold">CustomTech Labs is a joint venture between Laxmaya Technologies, a global technology and enterprise engineering company, and Small Biz Marketing (SBM), a U.S.-based strategy and growth marketing agency.</h2>
                        <h3 className="text-[16px] font-normal ">Together, we combine deep technical expertise with strategic business intelligence to create technology that doesn’t just function—it feels intuitive, efficient, and natural to the people who use it.</h3>
                        <div className="flex gap-4">
                            <button className=" h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]"><Link href={'/'}>Download Portfolio</Link></button>

                        </div>
                    </div>
                </div>
                <div className="w-full  h-19.75 mt-0 md:mt-0 pt-1">

                    <ul className="w-full min-h-10 bg-black py-5 text-white flex justify-center overflow-x-scroll md:text-[14px] text-[10px]  scrollBar items-center gap-9">
                        {design.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full bg-[#EEF430] h-4.25 "></div>
                </div>
            </section>
        </>
    )
}