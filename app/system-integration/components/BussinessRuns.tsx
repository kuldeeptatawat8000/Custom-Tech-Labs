import Image from "next/image";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";
export default function BussinessRuns() {
    return (
        <>
            <section className="w-full md:w-[87%] py-5 mx-auto gap-5 h-auto flex flex-col justify-start items-center md:items-start">

                <h1 className="md:pr-40 text-center md:pl-4 text-2xl font-bold md:text-[32px] py-6 rounded-xl px-2 md:text-start bg-[#eff430]">Built Around How Your Business Actually Runs</h1>

                <h2 className="font-bold text-[#034a27] text-2xl">For Your Team</h2>

                <Image
                    src={'/system/built.png'}
                    width={630}
                    height={349}
                    alt="Built..."
                />

                <div className="px-2 flex flex-col md:flex-row justify-center gap-10 items-start sm:pl-15 md:pl-0  ">

                    <div className="flex flex-col justify-start items-start gap-2">
                        <h3 className="text-base font-bold">Your systems should talk to each other.</h3>

                        <h3 className="text-base font-normal text-[#979797] italic">
                            If they don’t, your team fills the gaps manually.
                        </h3>

                        <h6 className="flex items-center text-[#979797] justify-center gap-3 "><ImCross className="font-extrabold  text-red-600" /> Copying orders between platforms.</h6>

                        <h6 className="flex items-center text-[#979797] justify-center gap-3 "><ImCross className="font-extrabold  text-red-600" /> Checking inventory across tools.</h6>

                        <h6 className="flex items-center text-[#979797] justify-center gap-3 "> <ImCross className="font-extrabold  text-red-600" /> Pulling reports from multiple sources.</h6>

                        <h6 className="text-base italic ">That’s not a workflow - it’s friction.</h6>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-2">
                        <h3 className="text-base font-bold">
                            Through our consulting and system integration
                            services, we <br /> connect your systems so data moves
                            automatically.
                        </h3>

                        <h6 className="flex items-center text-[#979797] justify-center gap-3 "><FaCheck className="bg-[#eef430] text-black rounded-full font-bold" /> Orders flow into fulfillment.</h6>

                        <h6 className="flex items-center text-[#979797] justify-center gap-3 "><FaCheck className="bg-[#eef430] text-black rounded-full font-bold" /> Inventory updates in real time.</h6>

                        <h6 className="flex items-center text-[#979797] justify-center gap-3 "> <FaCheck className="bg-[#eef430] text-black rounded-full font-bold" />Reports build themselves.</h6>
                        <h3 className="text-base font-bold italic">
                            Your team stops doing repetitive tasks…and focuses on work <br /> that actually drives growth.
                        </h3>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">

                    <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                        View our Portfolio
                    </button>

                    <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                        Work With Us
                    </button>

                </div>

            </section>
        </>
    );
}