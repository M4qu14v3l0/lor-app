import Link from "next/link"

import { IoHome } from "react-icons/io5"

interface Props{
  href: string;
  label: string;
  icon?: JSX.Element;
}

export const SidebarItem = ({href, icon , label}: Props) => {
  return (
    <li>
      <Link 
        href={href}
        className="flex items-center p-2 text-base font-normal rounded-lg text-white  hover:bg-gray-700"
        >
        {icon}
        <span className="ml-3">{label}</span>
      </Link>
    </li>
  )
}
