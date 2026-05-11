import Link from "next/link";
import { design } from "./smallNavData";

export default function SmallNav() {
    return (
        <>
            <div className="w-full h-19.75 mt-0 md:mt-0 pt-1">

                <ul className="w-full min-h-10 bg-black py-5 text-white flex justify-center overflow-x-scroll md:text-[14px] text-[10px]  scrollBar items-center gap-9">
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