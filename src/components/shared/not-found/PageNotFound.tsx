import Image from 'next/image';
import Link from 'next/link';
import { FaFaceSadTear } from "react-icons/fa6";
export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        <h2 className={ `antialiased text-9xl` }>404</h2>
        <p className="font-semibold text-xl">Whoops! Not Found.</p>
        <p className="font-light">
          <span>Return to: </span>
          <Link
            href='/'
            className="font-normal hover:underline transition-all"
          >
            Home
          </Link>
        </p>
      </div>

      <div className="px-5 mx-5">
        <FaFaceSadTear className='w-[260px] h-[260px]'/>
      </div>


    </div>
  );
};