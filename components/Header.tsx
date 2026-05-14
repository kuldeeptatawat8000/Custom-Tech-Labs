'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="w-full relative text-white md:py-7 md:px-20">

      {/* NAVBAR */}
      <nav className="flex w-full md:h-14 bg-black px-3 justify-between items-center rounded-2xl p-4 md:p-7 relative z-50">

        <Link href="/">
          <Image src="/homeimg/logo.png" width={97} height={50} alt="Logo" />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-[14px] items-center">
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/solutionservice">What we do</Link></li>
          <li><Link href="/system-integration">Our Results</Link></li>
          <li><Link href="/custom-website-developement">Insight</Link></li>
          <button className="px-3 py-1 text-black rounded bg-[#EEF430]">
            <Link href={'/custom-app-developement'}>Contact Us</Link>
          </button>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-10 bg-black flex flex-col items-center justify-center gap-6 text-2xl transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* CLOSE BUTTON INSIDE */}
        <button
          className="absolute top-5 right-5 text-3xl"
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </button>

        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
        <Link href="/solutionservice" onClick={() => setOpen(false)}>What we do</Link>
        <Link href="/system-integration" onClick={() => setOpen(false)}>Our Results</Link>
        <Link href="/custom-website-developement" onClick={() => setOpen(false)}>Insight</Link>

        <button
          onClick={() => setOpen(false)}
          className="px-5 py-2 text-black rounded bg-[#EEF430]"
        >
          <Link href={'/custom-app-developement'}>Contact Us</Link>
        </button>
      </div>
    </header>
  );
}