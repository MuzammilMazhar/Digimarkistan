import { ArrowUpIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

function Footer1(){
    return(
    <div>
            <div className="flex grid grid-cols-1 md:grid-cols-2 bg-black ">
<div className="pt-10 pb-10 p-5 md:p-5 lg:px-10 border-b-2  border-t-2 border-white">
<ArrowUpIcon className="text-white w-[20vw] h-[20vw] hover:-translate-y-4 duration-300 "/>
</div>
<div className="flex grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:border-t-2  lg:border-t-0 border-white ">
<div className="text-white  lg:border-l-2 border-b-2 border-t-2 border-white ">
<div className="text-white block space-y-5 pt-20 pb-10 px-10">
    <Link href="" className="block text-bold">Services</Link>
    <Link href="" className="block">Work</Link>
    <Link href="" className="block">Blogs</Link>
    <Link href="" className="block">AboutUs</Link>
</div>
</div>
<div className="text-white border-t-2 border-b-2 border-white">
<div className="text-white block space-y-5 pt-20 pb-10 px-10">
    <Link href="" className="block text-bold">Instagram</Link>
    <Link href="" className="block">Facebook</Link>
    <Link href="" className="block">LinkdIn</Link>
    <Link href="" className="block">X</Link>
</div>
</div>
</div>
        </div>



        <div className="flex text-white bg-black grid grid-cols-1 lg:grid-cols-4 pt-10 pb-10">
           <div className=" col-span-3 leading-[13vw]">
           
            <h1 className="text-[12vw] px-10 font-bold">Branding</h1>
            <h1 className="block text-[12vw] px-10 font-bold">Agency</h1>
      
           </div>
           <div className="lg:pt-[100px] pb-2">
            <div className="text-white space-y-5 md:px-10 md:pt-5 sm:px-10 sm:pt-5 px-10 pt-5 lg:px-0">
                <p className="md:text-[3vw] lg:text-[18px] md:text-[2vw] text-[4vw] " >Designed By <Link className="lg:text-[2vw] font-bold hover:border-b-4 border-white duration-200" href="">Muzammil</Link></p>
                <p className="md:text-[3vw] lg:text-[18px] md:text-[2vw] text-[4vw]">Powered By <Link className="lg:text-[2vw] font-bold hover:border-b-4 border-white duration-200" href="">DigiMarkistan</Link></p>
               <p className="lg:text-[2vw] md:text-[3vw] text-[4vw] font-bold"> <Link className="hover:border-b-4 border-white duration-200" href="">Contact Now</Link></p>
            </div>
           </div>
        </div>
    </div>
    )
}

export default Footer1;