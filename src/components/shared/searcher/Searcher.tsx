'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5'

export const Searcher = () => {
  const [ inputValue, setInputValue ] = useState('');
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue !== '') {
      router.push(`?name=${inputValue}`)
    }
    if(e.key === 'Enter' && inputValue == ''){
      router.push(`?page=1`)
    }
  }

  return (
    <div className="relative mt-[40px]">
      <IoSearchOutline size={20} className="absolute top-2 left-2" />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        placeholder="Search"
        className="w-[280px] sm:w-full bg-transparent rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-[#1e1e1e]"
      />
    </div>
  )
}
