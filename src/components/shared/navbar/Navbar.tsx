'use client'

import Image from "next/image";
import Link from "next/link";

import { useSidebarStore } from "@/store";

export const Navbar = () => {

  const openSideMenu = useSidebarStore((state) => state.openSideMenu);

  return (
    <nav className="bg-[#1e1e1e] text-white flex justify-around items-center h-20">
      <Link href={'/'}>
        <Image 
          src={'/logo/logo_lor.webp'}
          alt={'Loogo Lord of the rings'}
          height={80}
          width={80}
          priority
        />
      </Link>
      <button className="p-2 h-10 rounded-md transition-all hover:bg-gray-100 hover:text-black" onClick={openSideMenu}> Menu </button>
    </nav>
  )
}
