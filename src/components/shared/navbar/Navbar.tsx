'use client'

import Image from "next/image";
import Link from "next/link";

import { useSidebarStore } from "@/store";

export const Navbar = () => {

  const openSideMenu = useSidebarStore((state) => state.openSideMenu);

  return (
    <nav className="w-full bg-[#1e1e1e] text-white flex justify-around items-center z-20 h-20">
      <Link href={'/'}>
        <h1 className="text-yellow-400 text-2xl font-bold ">Lord of the Rings</h1>
      </Link>
      <button className="p-2 h-10 rounded-md transition-all hover:bg-gray-100 hover:text-black" onClick={openSideMenu}> Menu </button>
    </nav>
  )
}
