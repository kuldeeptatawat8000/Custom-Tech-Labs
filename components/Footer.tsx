import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className="w-full px-4 md:px-20 py-6 flex justify-center items-center">
        
        <div className="w-full bg-black text-white rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 px-4 md:px-10 py-6">
          
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/homeimg/logo.png"
              width={116}
              height={59}
              alt="Logo"
              className="w-22.5 md:w-29 h-auto"
            />
          </Link>

          {/* LINKS */}
          <ul className="w-full md:w-auto flex flex-col sm:flex-row flex-wrap gap-6 md:gap-10 text-sm">

            {/* ABOUT */}
            <li className="flex flex-col gap-1">
              <Link className="text-[14px] font-medium" href="/">About</Link>
              <Link className="text-[12px] text-[#EEF430]" href="/">Our Story</Link>
              <Link className="text-[12px] text-[#EEF430]" href="/">Careers</Link>
            </li>

            {/* QUICK LINKS */}
            <li className="flex flex-col gap-1">
              <Link className="text-[14px] font-medium" href="/">Quick Links</Link>
              <Link className="text-[12px] text-[#EEF430]" href="/">Home</Link>
              <Link className="text-[12px] text-[#EEF430]" href="/">Contact</Link>
            </li>

            {/* SERVICES */}
            <li className="flex flex-col gap-1">
              <Link className="text-[14px] font-medium" href="/">Our Services</Link>
              <Link className="text-[12px] text-[#EEF430]" href="/">Services</Link>
              <Link className="text-[12px] text-[#EEF430]" href="/">Services</Link>
            </li>

            {/* CONNECT */}
            <li className="flex flex-col gap-2 items-start md:items-center">
              <span className="text-[14px] font-medium">Let’s Connect</span>

              <Link
                className="text-[12px] bg-[#EEF430] text-black px-2 py-1 rounded-md"
                href="/"
              >
                Email Now
              </Link>

              <div className="flex gap-3 text-lg">
                <Link href="/"><TiSocialFacebook /></Link>
                <Link href="/"><IoLogoInstagram /></Link>
                <Link href="/"><FiTwitter /></Link>
                <Link href="/"><IoLogoLinkedin /></Link>
              </div>
            </li>

          </ul>
        </div>
      </footer>

      {/* BOTTOM TEXT */}
      <h1 className="text-center pb-6 text-sm md:text-[16px] font-medium">
        Developed by Custom Tech Labs
      </h1>
    </>
  );
}