import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function CaseStudio() {
    return (
        <>


            <><section className="w-full mb-26 flex md:justify-center md:items-center flex-col relative h-auto">
                <div className="caseStuies relative w-full h-35 text-white  border-[#eef430] bg-black ">
                    <h1 className=" relative top-10 w-1/2 md:left-20 text-[20px] sm:text-[25px] lg:text-[32px] font-semibold">Case Studies</h1>
                </div>

                <div className="md:w-[80%] md:pl-10 relative -top-12 md:left-20 w-full h-auto">
                    <Image className="md:w-[82%] w-full" src={'/appsimg/case.jpg'} width={994} height={388} alt="Case Studio..." />
                    <div className="md:w-[82%] py-10 flex flex-col gap-3 items-start justify-start w-full bg-[#d9d9d9] px-5">
                        <h2 className="text-[16px] italic font-bold">Industries We Transform</h2>
                        <h2 className="text-[16px]  font-normal">We’ve built systems for healthcare operations, retail platforms, educational ecosystems, construction workflows, and manufacturing environments helping them replace inefficient processes with systems that reduce errors and improve visibility.
                        </h2>
                        <button className="text-sm md:text-[14px] font-bold px-5 flex gap-2 items-center py-2 bg-[#EEF430] rounded">
                            <Link href={'/'}>View our Portfolio <BsArrowRight /> </Link>
                        </button>
                    </div>
                </div>

            </section></ >


        </>
    )
}
