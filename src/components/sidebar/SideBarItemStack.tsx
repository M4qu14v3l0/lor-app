import Link from "next/link";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

interface Stack{
  src: string;
  label: string;
}

interface SideBarItemStackProps{
  title: string;
  stack: Stack[];
}



export const SideBarItemStack = ( {title , stack }:SideBarItemStackProps ) => {
  const [ isOpen , setIsOpen ] = useState(false)
  return (
    <li>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
      <span className="flex-1 ml-3 text-left whitespace-nowrap">{title}</span>
      <TiArrowSortedDown />
      </button>
      <ul className={`${isOpen && `hidden`} py-2 space-y-2`}>
        {
          stack.map( ( { src , label } , index) => (
						<li key={index}>
							<Link href={src}
								className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">{label}</Link>
						</li>
          ))
        }


					</ul>
    </li>
    )
}
