import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { SidebarItem } from "./SidebarItem";
import clsx from "clsx";

interface Stack{
  href: string;
  label: string;
}

interface SideBarItemStackProps{
  title: string;
  stack: Stack[];
  icon?: JSX.Element;
}



export const SideBarItemStack = ( {title, icon , stack }:SideBarItemStackProps ) => {
  const [ isOpen , setIsOpen ] = useState(false)
  return (
    <li>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group text-white hover:bg-gray-700">
      {icon}
      <span className="flex-1 ml-3 text-left whitespace-nowrap">{title}</span>
      <TiArrowSortedDown />
      </button>

      <ul className={clsx(
        'py-2 space-y-2',
        {
          'hidden': !isOpen
        }
      )}>
        {
          stack.map( ( { href , label } , index) => (
            <SidebarItem href={href} label={label} key={index}/>
          ))
        }
					</ul>
    </li>
    )
}
