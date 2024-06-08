import React from "react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Image from "next/image";
function Menu(){
    return(
        <div className="felx grid grid-cols-1 md:grid-cols-2 bg-black">
           <div className="">
            <h1 className="text-white p-10">Our Features</h1>
           </div>
           <div >
           <div className="flex grid grid-cols-1 md:grid-cols-2">
            <div className="p-10">
                <h1 className="text-white text-[2vw]">How to take Your Business to the next Level?</h1>
            </div>
            <div className="p-10">
                <h1 className="text-white text-[1vw]">How to take Your Business to the next Level?How to take Your Business to the next Level?How to take Your Business to the next Level?</h1>
                <div className="flex items-center pt-4">
  <button className="group flex  p-3 bg-blue-600 text-[3vw] md:text-[2vw] lg:text-[1vw] rounded-full text-bold text-white " href="">About DigiMarkistan
</button>
<ArrowRightIcon className="group-hover:translate-x-5 duration-300 w-8 h-8 bg-blue-600 p-2 rounded-full -mx-2 -rotate-90 text-white"/>
</div>
            </div>
            </div>
            <div className="group text-white space-y-2 ">
            <div className="group flex space-x-5 items-center overflow-hidden pt-5 pb-5 ">
                <Image className="md:-translate-x-[200px] md:group-hover:translate-x-0 duration-300 rounded-lg" src="/po5.jpeg" width={150} height={250}/>
                <Link className="text-[3vw]" href="">Brand Identity </Link>
            </div>
           </div>
           <div className="group text-white">
            <div className="group flex space-x-5 items-center overflow-hidden  pt-5 pb-5 ">
                <Image className="md:-translate-x-[200px] md:group-hover:translate-x-0 duration-300 rounded-lg" src="/po5.jpeg" width={150} height={150}/>
                <Link className="text-[3vw]" href="">Websites </Link>
            </div>
           </div>
           <div className="group text-white">
            <div className="group flex space-x-5 items-center overflow-hidden  pt-5 pb-5 ">
                <Image className="md:-translate-x-[200px] md:group-hover:translate-x-0 duration-300 rounded-lg" src="/po5.jpeg" width={150} height={150}/>
                <Link className="text-[3vw]" href="">SEO </Link>
            </div>
           </div>
           <div className="group text-white">
            <div className="group flex space-x-5 items-center overflow-hidden  pt-5 pb-5 ">
                <Image className="md:-translate-x-[200px] md:group-hover:translate-x-0 duration-300 rounded-lg" src="/po5.jpeg" width={150} height={150}/>
                <Link className="text-[3vw]" href="">Shopify </Link>
            </div>
           </div>
           
           </div>

          
        </div>
    )
}



export default Menu;