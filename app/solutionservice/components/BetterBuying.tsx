'use client';
import { BiError } from "react-icons/bi";
export default function BetterBuying() {
    return (
        <>
            <section className="w-full flex flex-col justify-start items-center gap-10 h-auto  z-50">
                <div className="w-full h-auto py-10 bg-black text-white flex flex-col gap-3 justify-center py:10 sm:py-7 items-start pl-5 sm:pl-10 md:pl-20 lg:pl-36 rounded-xl">
                    <h1 className="lg:text-[32px] text-[20px] md:text-[25px] font-semibold ">The Foundation of a <span className="text-[#eef430]">Better Buying Experience</span></h1>
                    <h3 className="text-[16px] font-medium">Custom e-commerce solutions designed around real workflows, real customers, and real growth.</h3>
                    <h4 className="text-[16px] font-normal">Most platforms start with features. <br /> We start with how your business actually operates-and how your customers actually buy.</h4>
                </div>


                <div className="w-[85%] md:pl-10 pt-2 shadow-xl bg-white border-l-25 border-[#eef430] h-24.5">

                    <h2 className="lg:text-[24px] md:text-[18px] sm:text-[14px] text-[12px] font-bold text-[#034a27]">For Your Team</h2>
                    <p className="lg:text-[24px] md:text-[18px] sm:text-[14px] text-[12px] font-normal italic">E-commerce shouldn’t feel like constant maintenance.</p>
                </div>

                <div className=" flex flex-col pl-5 lg:pl-20 gap-3 justify-start items-start w-[85%]">
                    <h3 className=" font-semibold text-[16px] text-[#979797]">If you’re:</h3>
                    <ul >
                        <li className=" pl-2 flex justify-start gap-3 items-center text-[16px] font-normal"> < BiError className="text-2xl  text-[#eef430]" /> Managing inventory in multiple places</li>
                        <li className=" pl-2 flex justify-start gap-3 items-center text-[16px] font-normal"> < BiError className="text-2xl  text-[#eef430]" /> Waiting on updates to go live</li>
                        <li className=" pl-2 flex justify-start gap-3 items-center text-[16px] font-normal "> < BiError className="text-2xl  text-[#eef430]" /> Jumping between tools to track orders and customers</li>
                    </ul>
                    <h3 className=" font-semibold text-[16px] text-[#979797]" >That’s not a system. That’s friction.</h3>
                </div>
            </section>
        </>
    )
}