'use client'

import { useState } from "react";
import Link from "next/link";

import { Character } from "@/interfaces"

import { IoHeart, IoPerson } from "react-icons/io5";
import { MdCake } from "react-icons/md";
import { GiDeathSkull } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { useFavoriteStore } from "@/store";

interface Props{
  character: Character;
}

export const CharacterItem = ({ character }:Props ) => {
  const { _id,race,gender,birth,death,name,wikiUrl='/' } = character

  const [ isOpen , setIsOpen ] = useState(false)
  const { addFavorite, favorites } = useFavoriteStore()
  const isFavorite = favorites.some(id => id._id === _id)

  return (
  <div className="mx-auto w-[300px] h-fit  bg-[#1e1e1e] rounded-lg shadow-md p-5 overflow-hidden">
    
    <h2 className="text-center text-2xl font-semibold mt-3 cursor-pointer hover:scale-x-110 transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>{name}</h2>
    <p className="text-center text-gray-600 mt-1">{race}</p>

    <div className={ isOpen ? "flex flex-col slide-bottom" : "hidden"}>
      <div className="flex justify-center mt-5">
        <div className="mx-3">
          <IoPerson className={gender === 'Male' ? 'text-blue-600' : 'text-pink-600' }/>
        </div>
        <div className="mx-3">
          <IoHeart onClick={() => addFavorite(character)} className={ isFavorite ? 'text-red-600' : 'text-gray-600' }/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 gap-5">
        <div className="flex mx-3 justify-center items-center">
          <MdCake className="w-6 h-6"/>:<span className="text-sm">{birth == '' ? 'No Info' : birth}</span>
        </div>
        <div className="flex justify-center items-center mx-3">
          <GiDeathSkull className="w-6 h-6"/>: <span className="text-sm">{death == '' ? 'No Info' : death}</span>
        </div>
        <div className="flex justify-center items-center mx-3">
          <Link href={wikiUrl}>
            <FaInfoCircle className="w-6 h-6"/>
          </Link>
        </div>
      </div>
    </div>


  </div>
  )
}
