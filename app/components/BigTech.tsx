'use client';
import BigYourGrowth from './../../components/BigYourGrowth';
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs";
import { techData } from './bigtechdata';


export default function BigTechs() {
    return (
        <>

            <section className="w-full min-h-228.25">
                <BigYourGrowth />


                <div className="flex mt-10 flex-wrap  justify-center sm:px-20 items-center md:gap-10 gap-15 sm:my-14">

                    {techData.map((value, idx) => (
                        <div key={idx} className="w-119.25 mx-3 md:mx-0 flex flex-col justify-center items-start h-auto md:h-79 rounded-sm p-5 border">
                            <h2 className="text-[24px] font-bold">{value.title}</h2>
                            <h6 className="text-[16px] italic font-bold">{value.desc}</h6>
                            <Image src={value.img} width={223} height={139} alt="custom Website" className="w-55.75 h-34.75" />
                            <p className="text-[16px] font-normal">{value.explin}</p>
                            <Link href={value.link} className="bg-black text-white px-2 rounded-sm flex gap-1  items-center py-1">{value.textbtn} <BsArrowRight className="text-2xl " /> </Link>
                        </div>
                    ))}



                </div>
            </section>
        </>
    )
}