import Image from "next/image";

export default function OurMission() {
    return (
        <>
            <section className="w-full flex flex-col justify-center items-center gap-10 text-center h-auto py-20">
                <div className="">
                    <h1 className="md:px-40 px-30 rounded-xl py-4 bg-[#eef430] text-center text-3xl md:text-[32px] font-bold">Our Mission</h1>
                </div>
                <div>
                    <h3 className=" text-xl md:text-[24px] font-normal">To make technology human, simple, and smart—for both businesses and the <br/> people they serve.
                    </h3>
                    <Image src={'/about/mission.png'} width={942} height={500} alt='Mission.......' />
                </div>
            </section>
        </>
    )
}