'use client'


import { useSidebarStore } from "@/store";

import { IoCloseOutline, IoHeart, IoHome, IoPeopleCircle, IoPerson } from "react-icons/io5";
import clsx from "clsx";

import { SidebarItem } from "./SidebarItem";
import { SideBarItemStack } from "./SideBarItemStack";

export const Sidebar = () => {

  const isSideMenuOpen = useSidebarStore((state) => state.isSideMenuOpen);
  const closeMenu = useSidebarStore((state) => state.closeSideMenu);

  const racesPages = [
    {href: `/characters/hobbit`, label:'Hobbits'},
    {href: '/characters/human', label:'Humans'},
    {href: '/characters/orc', label:'Orcs'},
    {href: '/characters/elf', label:'Elfs'},
    {href: '/characters/dwarves', label:'Dwarves'},
    {href: '/characters/dragon', label:'Dragons'},
    {href: '/characters/ent', label:'Ent'},
  ]

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <aside className={clsx(
        "fixed w-[320px] h-screen right-0 top-0 bg-[#1e1e1e] shadow-2xl z-20 transform transition-all duration-300",
        {
          "translate-x-full": !isSideMenuOpen,
        }
      )}>
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer text-white"
          onClick={() => closeMenu()}
        />
        <div className="mt-14 px-3 py-4 overflow-y-auto rounded ">
          <ul className="space-y-4">
            <SidebarItem href="/" label="Home" icon={<IoHome/>}/>
            <SidebarItem href="/favorites" label="Favorites" icon={<IoHeart/>}/>
            <SideBarItemStack title="Characters" icon={<IoPeopleCircle/>}  stack={racesPages}/>
          </ul>
        </div>
      </aside>
    </div>
  )
}
