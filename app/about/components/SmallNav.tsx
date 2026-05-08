import Link from "next/link";
import { design } from "./smallNavData";

export default function SmallNav(){
    return(
        <>
         <div className="w-full h-19.75 mt-5 md:mt-0 pt-1">
                        <div className="w-full bg-black h-5.5 "></div>
                        <ul className="w-full min-h-10 flex justify-center overflow-x-scroll md:text-[14px] text-[10px]  scrollBar items-center gap-9">
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
        </>
    )
}