import Link from "next/link"

import { IoHome } from "react-icons/io5"

interface Props{
  href: string;
  label: string;
  icon: JSX.Element;
}

export const SidebarItem = ({href, icon , label}: Props) => {
  return (
    <li>
      <Link 
        href={href}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
        {icon}
        <span className="ml-3 text-xl">{label}</span>
      </Link>
    </li>
  )
}
