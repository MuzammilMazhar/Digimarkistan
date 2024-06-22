"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3BottomLeftIcon, ArrowRightIcon ,HomeIcon, XMarkIcon, MoonIcon } from '@heroicons/react/16/solid';




function Navigation() {
  const [navigation, setNavigation] = useState(false);
  return (
    
    <div>
     
      <nav className="items-center w-full sticky  top-0 left-0 right-0 z-10 justify-around">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 items-center">
          <div>
            <div className="flex items-center justify-between py- md:py-1 py-3 md:block items-center">
              {/* LOGO */}
              
        <Link className=" md:text-[3vw] sm:text-[4vw] text-[6vw] font-bold " href="./">DigiMarkistan</Link>
            
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none "
                  onClick={() => setNavigation(!navigation)}
                >
                  {navigation ? (
                    <XMarkIcon className='w-8 h-8 text-black font-bold'/>
                 
                  ) : (
                    <Bars3BottomLeftIcon className='w-8 h-8 focus:border-none active:border-none color:black text-black '/>
                
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center items-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                navigation ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
         
             <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0   border-gray-900   md:hover:bg-transparent">
                  <Link href="./Services" onClick={() => setNavigation(!navigation)}>
                  Services
                  </Link>
                </li>
                <li className="pb-6 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0    border-gray-900   md:hover:bg-transparent">
                  <Link href="./product" onClick={() => setNavigation(!navigation)}>
                    Work
                  </Link>
                </li>
                <li className="pb-6 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0    border-gray-900   md:hover:bg-transparent">
                  <Link href="./About" onClick={() => setNavigation(!navigation)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0   border-gray-900   md:hover:bg-transparent">
                  <Link href="./Blog" onClick={() => setNavigation(!navigation)}>
                  Blog
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0   border-gray-900   md:hover:bg-transparent">
                  <Link href="./Contact" onClick={() => setNavigation(!navigation)}>
                  Contact
                  </Link>
                </li>
                <li className="group flex items-center pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0   border-gray-900   md:hover:bg-transparent  ">
                
<button className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-blue-500  text-white rounded-full" src="">Start a project</button>
<ArrowRightIcon className="text-white xl:w-[2vw] xl:h-[2vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
        </li>
      
              </ul>
           
           
          </div>
            </div>
          </div>
      </nav>
    </div>
  );
}

export default Navigation;