'use client';
import Image from "next/image";
import { CgAdd } from "react-icons/cg";
import { buyData } from './buyOnlineData';
import Link from "next/link";
export default function BuyingOnline() {
    return (
        <>
            <div className="w-full min-h-158.5 ">
                <div className="w-full min-h-29.75 bg-black text-white flex flex-col justify-center pl-4 sm:pl-10 lg:pl-29">
                    <h2 className="text-[24px] font-medium">For Your Customers</h2>
                    <h1 className="text-[32px] font-semibold">Buying online should feel <span className="text-[#eef430]">effortless</span></h1>
                </div>

                <div className="w-full h-auto pt-10 pb-5 md:pl-29 pl-10 ">
                    <h3 className="text-[16px] font-bold italic">Fast pages. Clear paths. No confusion at checkout.</h3>
                    <h3 className="text-[16px] font-normal " >Because when the experience feels hard, customers don’t stay- they leave. <br />
                        We focus on ecommerce website design development that guides people naturally from browsing to buying.
                    </h3>
                </div>

                <div className="w-full px-2 md:px-28 flex justify-center items-center">
                    <div className="w-full scrollBar flex gap-4 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4">

                        {buyData.map((data, idx) => (
                            <div
                                key={idx}
                                className="min-w-55 sm:min-w-65 md:min-w-75 shrink-0 flex flex-col gap-2 items-start"
                            >
                                <Image
                                    src={data.img}
                                    width={299}
                                    height={142}
                                    alt="buy"
                                    className="w-full h-35 md:h-40 object-cover rounded-xl"
                                />

                                <h1 className="text-sm md:text-[16px] font-normal flex gap-2 items-start">
                                    <CgAdd className="bg-[#eef430] rounded-full text-lg mt-1" />
                                    <span>
                                        {data.first} <br />
                                        {data.last}
                                    </span>
                                </h1>
                            </div>
                        ))}

                    </div>
                </div>

                <div className=" pl-5 md:pl-28 pt-10">
                    <h2 className=" text-[16px] font-bold">The result?</h2>
                    <h2 className=" text-[12px] font-bold italic pb-3">A store that feels easy to trust - and even easier to buy from.</h2>
                    <div className="flex  gap-4">

                        <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]"><Link href={'/'}>View our Protfolio</Link></button>
                        <button className="w-34.5 h-7.5 text-black text-[14px] font-bold rounded-[3px] cursor-pointer px-2  bg-[#EEF430]"><Link href={'/solutionservice'}>Work With Us</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}