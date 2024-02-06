
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";


export const WithOutFavorites = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <p className="text-xl md:text-4xl">You don&apos;t have any favorite yet, add one</p>
      <FaRegHeart className="w-[140px] h-[140px] text-red-500"/>
      <Link href={'/characters/hobbit'} className="p-2 text-base font-normal rounded-lg text-white  hover:bg-gray-700">
        Go to Characters      
      </Link>
    </div>
  )
}
