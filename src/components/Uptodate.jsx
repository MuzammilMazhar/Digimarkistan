import React from "react";
import { ArrowRightIcon, MapIcon } from "@heroicons/react/16/solid";


function Uptodate(){
    return(
        <div className="p-10 ">
            <div className="flex grid grid-cols-1 md:grid-cols-2 rounded-lg bg-slate-200">
<div className="p-10">
<div className="flex items-center space-x-4 ">
  <div className="w-[8px] h-[8px] rounded-full bg-black"></div>
  <p>Spam Free Newsletter</p>
</div>
{/* new */}
<h1 className="pt-5 md:text-[3.5vw] text-[5vw] font-semibold md:leading-[4vw] leading-[6vw]">Recieve the most up to date insights & strategies</h1>
<div className="group flex pt-5 items-center space-x-5">
    <input className="px-[2vw] w-[80%]  lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[10vw] border-2 border-gray-200 rounded-lg" type="email" placeholder="Email Address" />
    <ArrowRightIcon className="text-white xl:w-[4vw] xl:h-[4vw] lg:w-[3vw] lg:h-[3vw] md:w-[4vw] md:h-[4vw] sm:w-[6vw] sm:h-[6vw] w-[6vw] h-65vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
</div>
</div>
<div>
    <div className="">
        <div className="justify-center md:px-24 xl:pt-[10vw] lg:pt-[14vw] md:pt-[18vw] sm:px-16 px-8 float-center bottom-0 justify-center overflow-hidden">
            <h1 className="text-center bg-white  ml-4 md:w-[24vw] w-[36vw] p-4 rounded-[15px] xl:text-[3vw] md:text-[2vw] sm:text-[4vw] text-[5vw] font-bold">Marketing</h1>
            <h1 className="text-center bg-white -mt-2 ml-24 xl:w-[30vw]  md:w-[24vw] w-[40vw] p-4 rounded-[15px] xl:text-[3vw] md:text-[2vw] sm:text-[4vw] text-[5vw]  font-bold">Development</h1>
            <h1 className="text-center bg-white ml-0 px-0 md:w-[24vw] w-[36vw] -mt-2  p-4 rounded-t-[15px] xl:text-[3vw] md:text-[2vw] sm:text-[4vw] text-[5vw] font-bold">Branding</h1>
        </div>
    </div>
</div>

            </div>
        </div>
    )
}



export default Uptodate;