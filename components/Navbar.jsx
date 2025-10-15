"use client"

import { useState, useEffect } from "react"
import MobileMenu from "@/app/_components/MobileMenu"
import Image from "next/image"
import Link from "next/link"
import { navItems } from "@/lib/navItems"

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // scroll eşiği
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full bg-black transition-all duration-300 ${
        isSticky
          ? "sticky top-0 shadow-md p-2 z-50 xl:px-24 md:px-12 sm:px-6"
          : "relative xl:px-48 md:px-24 sm:px-12 p-4"
      }`}
    >
      <div className="flex items-center justify-between transition-all duration-300">
        <Link href={"/"}>
          <Image 
            src={"/logo.png"} 
            width={1000} 
            height={1000} 
            className="w-36 h-18 rounded-full transition-all duration-300" 
            alt="Logo" 
          />        
        </Link>
        <nav className="flex items-center text-white">
      <ul className="xl:flex hidden items-center gap-5 font-semibold uppercase">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link href={item.href} className="group-hover:text-main duration-200">
              {item.title}
            </Link>
            <div className="absolute h-1 group-hover:w-full w-0 bg-main opacity-0 group-hover:opacity-100 duration-200"></div>
          </li>
        ))}
      </ul>
    </nav>
        <MobileMenu />
      </div>
    </header>
  )
}

export default Navbar
