import Image from "next/image";
import Link from "next/link";


export default function SameSystem() {
    return (

        <>
            <section className="w-full md:w-[87%] py-5 mx-auto gap-5 h-auto flex flex-col justify-start items-center md:items-start">
                <h1 className="md:pr-40 text-center md:pl-4 text-2xl font-bold md:text-[32px] py-6 rounded-xl px-2 md:text-start text-white bg-black">Two Sides of the Same System</h1>


                <div className="px-10 w-full h-full rounded-md flex flex-col py-10 justify-start items-start gap-4 bg-[#d9d9d9]">
                    <h2 className="font-bold text-[#034a27] text-2xl">For Your Team</h2>

                    <Image
                        src={'/appsimg/team.jpg'}
                        width={535}
                        height={277}
                        alt="Built..."
                    />

                    <h2 className="text-base font-medium italic">When operations rely on spreadsheets, disconnected tools, or manual workarounds, growth slows down. <br /> <br />
                        We build internal applications around how your business actually operates, turning technology from daily frustration into operational leverage. <br /> <br />
                        Let’s centralize workflows, connect systems, and give leadership real-time visibility  without overwhelming your team.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">

                        <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                            View our Portfolio
                        </button>

                        <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                            Work With Us
                        </button>

                    </div>
                </div>

                <div className="px-10 w-full h-full rounded-md flex flex-col py-10 justify-start items-start gap-4 bg-[#d9d9d9]">
                    <h2 className="font-bold text-[#034a27] text-2xl">For Your Customers</h2>

                    <Image
                        src={'/appsimg/customer.jpg'}
                        width={535}
                        height={277}
                        alt="Built..."
                    />

                    <h2 className="text-base font-medium italic">Your customers experience your brand through the systems they touch. <br /><br />
                        Client portals. Booking tools. Member platforms. Mobile apps. <br /> <br />
                        We design customer-facing applications around the customer journey to ensure experience feels intuitive from the first click making buying and engagement easy so your digital experience builds trust instead of confusion.
                        Because great software doesn’t just support operations, it shapes perception.

                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start">

                        <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                            <Link href={'/'}> View our Protfolio </Link>
                        </button>

                        <button className="w-full sm:w-40 h-11 bg-[#EEF430] text-black text-[14px] sm:text-[15px] font-bold rounded-md cursor-pointer transition-all duration-300 hover:scale-105">
                            <Link href={'/solutionservice'}> Work With Us </Link>
                        </button>

                    </div>
                </div>

            </section>
        </ >
    )
}
