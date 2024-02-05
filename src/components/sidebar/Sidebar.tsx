'use client'


import { useSidebarStore } from "@/store";

import { IoCloseOutline, IoHeart, IoHome, IoPerson } from "react-icons/io5";
import clsx from "clsx";

import { SidebarItem } from "./SidebarItem";
import { SideBarItemStack } from "./SideBarItemStack";

export const Sidebar = () => {

  const isSideMenuOpen = useSidebarStore((state) => state.isSideMenuOpen);
  const closeMenu = useSidebarStore((state) => state.closeSideMenu);

  const racesPages = [
    {src: `/characters/[Hobbit]`, label:'Hobbits'},
    {src: '/characters/[Human]', label:'Humans'},
    {src: '/characters/[Orc]', label:'Orcs'},
    {src: '/characters/[Elf]', label:'Elfs'},
    {src: '/characters/[Dwarves]', label:'Dwarves'},
    {src: '/characters/[Dragon]', label:'Dragons'},
    {src: '/characters/[Ent]', label:'Ent'},
  ]

  return (
    <div>
	<aside className="w-64" aria-label="Sidebar">
		<div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
			<ul className="space-y-2">
				<li>
					<a href="#"
						className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
						<span className="ml-3">Dashboard</span>
					</a>
				</li>
        <SideBarItemStack title="Characters" stack={racesPages}/>

			</ul>
		</div>
	</aside>
    </div>
  )
}
