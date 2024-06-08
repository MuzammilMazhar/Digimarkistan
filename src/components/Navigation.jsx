"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightIcon, Bars3BottomLeftIcon, HomeIcon, XMarkIcon } from '@heroicons/react/16/solid';




function Navigation() {
  const [navigation, setNavigation] = useState(false);
  return (
    <div className=' '>
      <nav className="  bg-red-300 blur-1xl  lg:w-full  sticky  top-0 left-0 right-0 z-10 items-center justify-around">
        <div className="  justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 items-center">
          <div >
            <div className="flex items-center justify-between py-3 md:py-5 md:block items-center w-[95%]">
              {/* LOGO */}
             
        <div className='flex items-center space-x-2'>
               
        <Link className="text-[4vw] md:text-[3vw] lg:text-[2vw] text-black font-bold px-5 " href="./">DigiMarkistan</Link>
   
        </div>
             
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none duration-300"
                  onClick={() => setNavigation(!navigation)}
                >
                  {navigation ? (
                    <XMarkIcon className='w-5 h-5 text-white font-bold'/>
                 
                  ) : (
                    <Bars3BottomLeftIcon className='w-[5vw] h-[5vw] focus:border-none active:border-none color:white text-white '/>
                
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className=' flex items-center space-x-5 absolute w-[100%] md:w-[] md:relative z-10 shadow-lg ring-1 bg-gray-400 backdrop-blur-[15px]  '>
            <div
              className={` flex-1 justify-self-center  justify-between items-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                navigation ? 'px-5 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className=" space-x-4 h-[50%] md:h-auto items-center justify-center md:flex leading-[6vw]">
               <div className=' md:hidden flex items-center space-x-2'> 
               <div className='w-[1vw] h-[1vw] bg-black rounded-full'></div>
                <p className='text-black md:hidden'>Have a look around..</p>
               </div>
                <li className="pb-2 text-[7vw] md:text-[2vw] lg:text-[18px] text-black py-2 text-left   md:hover:bg-transparent">
                  <Link href="./Services" onClick={() => setNavigation(!navigation)}>
                  Services
                  </Link>
                </li>
                <li className="pb-2  text-[7vw] md:text-[2vw] lg:text-[18px]  text-black py-2 text-left   md:hover:bg-transparent">
                  <Link href="./product" onClick={() => setNavigation(!navigation)}>
                    Work
                  </Link>
                </li>
               
                <li className="pb-2 text-[7vw] md:text-[2vw] lg:text-[18px]  text-black py-2 text-left     md:hover:bg-transparent">
                  <Link href="./about" onClick={() => setNavigation(!navigation)}>
                  About
                  </Link>
                </li>
                <li className="pb-2  text-[7vw] md:text-[2vw] lg:text-[18px]   text-black py-2  text-left     md:hover:bg-transparent">
                  <Link href="./Blog" onClick={() => setNavigation(!navigation)}>
                  Blog
                  </Link>
                </li>
                <li className="pb-2   text-[7vw] md:text-[2vw] lg:text-[18px]  text-black py-2 text-left     md:hover:bg-transparent">
                  <Link href="./Contact" onClick={() => setNavigation(!navigation)}>
                  Contact
                  </Link>
                </li>
             
               {/* <div className='pt-20 md:hidden'>
               <p className='text-white'>Instagram</p>
               <p className='text-white'>LinkdIn</p> 
               <p className='text-white'>X</p>
               </div> */}
             
              </ul>
          
            </div>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;