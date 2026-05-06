import { SiTradingview } from "react-icons/si";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaCottonBureau } from "react-icons/fa";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

export default function MakeTheBiggest() {
    return (
        <>
            <section className="w-full h-auto">
                <div className="md:w-[57%] flex justify-start gap-10 flex-col items-center w-full h-138.75  mx-auto">
                    <div className=" w-full  mt-10  flex justify-center items-center h-16.5 bg-black text-white rounded-xl">
                        <h1 className=" text-[17px] sm:text-[25px] font-bold">  Where We Make the <span className="text-[#eff430]">Biggest Impact</span></h1>
                    </div>

                    <h2 className="text-center w-full text-[24px] font-normal">We combine <span className="font-bold">e-commerce website design development</span> with smart systems to create real business results.</h2>
                    <div className="w-full pl-5 md:pl-0 h-auto flex flex-col justify-start items-start">
                        <h2 className=" flex justify-start text-[12px] md:text-[16px] font-bold italic items-center gap-4"><SiTradingview /> Turn traffic into consistent revenue</h2>
                        <h2 className=" flex justify-start text-[12px] md:text-[16px] font-bold italic items-center gap-4">< MdOutlineSettingsSuggest className="" /> Reduce operational bottlenecks with workflow automation software</h2>
                        <h2 className=" flex justify-start text-[12px] md:text-[16px] font-bold italic items-center gap-4"><FaCottonBureau className="" /> Automate repetitive workflows</h2>
                        <h2 className=" flex justify-start text-[12px] md:text-[16px] font-bold italic items-center gap-4"><TbDeviceMobileDollar className="" /> Create smooth mobile buying experiences</h2>
                    </div>
                    <h2 className="text-center text-[12px] md:text-[16px] italic font-normal">No matter your industry, the goal stays the same: <span className="font-bold"> Build a custom e-commerce system that supports how your business runs today—and how it grows tomorrow.</span></h2>
                    <div className="flex gap-3 justify-start items-start w-full">
                        <button className="text-sm md:text-[14px] font-bold px-5 flex gap-2 items-center py-2 bg-[#EEF430] rounded">
                            View our Portfolio <BsArrowRight />
                        </button>
                        <button className="text-sm md:text-[14px] font-bold px-5 flex gap-2 items-center py-2 bg-[#EEF430] rounded">
                            Work With Us <BsArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}