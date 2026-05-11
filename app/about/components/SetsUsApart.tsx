export default function SetsUsApart() {
    return (
        <>
            <div className="w-full h-auto">
                <div className="md:w-[88%] w-full md:mx-auto h-auto flex justify-center items-center gap-5 flex-col text-center px-3 py-10 bg-[#f5f5f5]">
                    <h1 className="lg:text-[24px] md:text-2xl text-2xl font-bold bg-black text-white py-3 px-15 rounded-2xl">What Sets Us Apart</h1>
                    <h3 className="text-[16px] font-semibold ">Most tech companies build what is <span className="text-[#c1c37e]">asked.</span> <br /> We build what is <span className='bg-[#eef430]'> needed.</span></h3>
                    <h4 className="text-[16px] font-normal italic">We start by understanding why something is being built and who it is for. By blending engineering with empathy, <br /> we design solutions that align with real user behavior, operational realities, and long-term business goals along with technical <br /> requirements.
                        <br />
                        We bridge the gap between <b>strategy and execution,</b> ensuring every product is as practical as it is powerful.
                    </h4>

                    <div className=" w-full md:w-[80%] h-auto py-2 rounded-2xl px-4 text-white text-center flex justify-between items-center bg-[#979797]">
                        <div className="w-1/3 border-r border-white">
                            <h3 className="text-[#eff430]">EMPATHY</h3>
                            <h3>User</h3>
                            <h3>Behavior First</h3>
                        </div>
                        <div className="w-1/3 md:text-[16px] text-[12px]">
                            <h3 className="text-[#eff430]">ENGINEERING</h3>
                            <h3>Enterprise-Grade</h3>
                            <h3>System </h3>
                        </div>
                        <div className="w-1/3 border-l border-white" >
                            <h3 className="text-[#eff430]">OUTCOMES</h3>
                            <h3>Real Business</h3>
                            <h3>Impact</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}