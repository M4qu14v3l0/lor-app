'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


interface PaginationControlsProps {
  totalItems: number
  itemPerPage: number
}


export const Pagination = ( {totalItems , itemPerPage}:PaginationControlsProps ) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'

  const totalPages = Math.ceil( totalItems / itemPerPage)


  return (
    <div className='fixed justify-center w-full bottom-16  flex items-center gap-2'>
        {
          Number(page) > 1
          ?
          <button
          className=' text-white p-1'
          onClick={() => {
            router.push(`?page=${Number(page) - 1}`)
          }}>
          <IoIosArrowBack />
        </button>
            :
            <button
            className='text-gray-400 p-1'
            disabled
              >
            <IoIosArrowBack />
          </button>
        }
        <div>
          {page} / {totalPages}
        </div>
        {
          Number(page) < totalPages
          ?
          <button
          className='text-white p-1'
          onClick={() => {
            router.push(`?page=${Number(page) + 1}`)
          }}>
          <IoIosArrowForward />
        </button>
          :
          <button
          className='text-gray-400 p-1'
          disabled
            >
          <IoIosArrowForward />
        </button>
        }
    </div>
  )
}
