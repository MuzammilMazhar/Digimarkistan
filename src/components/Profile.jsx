import { XCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

function Profile(){
    return(
        <div>
            <div className="flex grid grid-cols-4 p-10 gap-8">
<Link className="pt-20" href="/Hassan-Ali">
<div className="w-full h-[35vw] bg-[url(/profile.jpg)] bg-cover bg-center  relative rounded-r-[25px] rounded-tl-[25px]">

<div  className="absolute top-0 right-0 m-4">
<FaLinkedinIn className="w-[3vw] h-[3vw] bg-blue-500 rounded-full p-3 text-white"/>
</div>

<div className="absolute bottom-0 left-0">
<div className="w-[3vw] h-[3vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -mb-2 -ml-2"></div>
<div className="flex">
    <div className="bg-white px-0 pr-3 py-2 rounded-tr-[25px]">
        <h1>Hassan Ali</h1>
        <p className="text-gray-400">Copy Writting</p>
    </div>
    <div className="relative">
    <div className="bg--500 w-[4vw]  absolute -bottom-[8px] left-0 h-[4vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -ml-[8px] -pb-[38px]"></div>
  </div>
</div>
</div>
</div></Link>



<Link href="/Mohsin-Ali">
<div className="w-full h-[50vh] bg-[url(/Mohsin.jpg)] bg-cover bg-center  relative rounded-r-[25px] rounded-tl-[25px]">

<div  className="absolute top-0 right-0 m-4">
<FaLinkedinIn className="w-[3vw] h-[3vw] bg-blue-500 rounded-full p-3 text-white"/>
</div>

<div className="absolute bottom-0 left-0">
<div className="w-[3vw] h-[3vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -mb-2 -ml-2"></div>
<div className="flex">
    <div className="bg-white px-0 pr-6 py-2 rounded-tr-[25px]">
        <h1>Mohsin Ali</h1>
        <p className="text-gray-400">Marketing</p>
    </div>
    <div className="relative">
    <div className="bg--500 w-[4vw]  absolute -bottom-[8px] left-0 h-[4vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -ml-[8px] -pb-[38px]"></div>
  </div>
</div>
</div>
</div></Link>



<Link className="pt-20" href="/Zain-Ali">
<div className="w-full h-[50vh] bg-[url(/Zain.jpg)] bg-cover bg-center  relative rounded-r-[25px] rounded-tl-[25px]">

<div  className="absolute top-0 right-0 m-4">
<FaLinkedinIn className="w-[3vw] h-[3vw] bg-blue-500 rounded-full p-3 text-white"/>
</div>

<div className="absolute bottom-0 left-0">
<div className="w-[3vw] h-[3vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -mb-2 -ml-2"></div>
<div className="flex">
    <div className="bg-white px-0 pr-6 py-2 rounded-tr-[25px]">
        <h1>Zain Ali</h1>
        <p className="text-gray-400">Content Creation</p>
    </div>
    <div className="relative">
    <div className="bg--500 w-[4vw]  absolute -bottom-[8px] left-0 h-[4vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -ml-[8px] -pb-[38px]"></div>
  </div>
</div>
</div>
</div></Link>



<Link href="/Muzammil-Mazhar">
<div className="w-full h-[50vh] bg-[url(/Muzammil1.jpg)] bg-cover bg-center  relative rounded-r-[25px] rounded-tl-[25px]">

<div  className="absolute top-0 right-0 m-4">
<FaLinkedinIn className="w-[3vw] h-[3vw] bg-blue-500 rounded-full p-3 text-white"/>
</div>

<div className="absolute bottom-0 left-0">
<div className="w-[3vw] h-[3vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -mb-2 -ml-2"></div>
<div className="flex">
    <div className="bg-white px-0 pr-6 py-2 rounded-tr-[25px]">
        <h1>Muzammil Mazhar</h1>
        <p className="text-gray-400">Web Developer</p>
    </div>
    <div className="relative">
    <div className="bg--500 w-[4vw]  absolute -bottom-[8px] left-0 h-[4vw] border-l-8 border-b-8 border-white rounded-bl-[25px] -ml-[8px] -pb-[38px]"></div>
  </div>
</div>
</div>
</div></Link>
            </div>
        </div>
    )
}



export default Profile;