import { ArrowUpIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

function Footer1(){
    return(
    <div>
            <div className="flex grid grid-cols-1 md:grid-cols-2 bg-black ">
<div className="pt-10 pb-10 p-5 md:p-5 lg:px-10 border-b-2  border-t-2 border-white">
<ArrowUpIcon className="text-white w-[20vw] h-[20vw] hover:-translate-y-4 duration-300 "/>
</div>
<div className="flex grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:border-t-2  lg:border-t-0 border-white ">
<div className="text-white  lg:border-l-2 border-b-2 border-t-2 border-white ">
<div className="text-white block md:space-y-5 pt-10 pb-10 px-10">
    <Link href="./Services" className="block font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">Services</Link>
    <Link href="./Work" className="block  font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">Work</Link>
    <Link href="./Blog" className="block  font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">Blogs</Link>
    <Link href="./Contact" className="block  font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">ContactUs</Link>
</div>
</div>
<div className="text-white border-t-2 border-b-2 border-white">
<div className="text-white block md:space-y-5 pt-10 pb-10 px-10">
<div className="flex items-center space-x-4">
<FiInstagram />
<Link href="https://www.instagram.com/digimarkistan/?igsh=a2gwY2w4cGFsZjRt" className="block font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">Instagram</Link>
</div>
<div className="flex items-center space-x-4">
<FaFacebookF />
<Link href="https://www.facebook.com/digimarkistan?mibextid=ZbWKwL" className="block font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">Facebook</Link>
</div>
<div className="flex items-center space-x-4">
<LuLinkedin />
<Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFTXdWjQK5B2AAAAZAfsx8YTsl_Cq2RGY1lsrtAYfWbAgwF_-2sZREcSEq6_bYaA1_3aeaYfNFfTnos05uicMyDPoFh_KcB-DelZV4icmdhDqoU3eYOO8JGtefMEv878wHT3AA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdigimarkistan%2F" className="block font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">Linkedin</Link>
</div>
<div className="flex items-center space-x-4">
<FaXTwitter />
<Link href="" className="block font-bold md:text-[2vw] sm:text-[4vw] text-[8vw]">X - Twitter</Link>
</div>
</div>
</div>
</div>
        </div>



        <div className="flex text-white bg-black grid grid-cols-1 lg:grid-cols-4 pt-10 pb-10">
           <div className=" col-span-3 leading-[13vw]">
           
            <h1 className="text-[12vw] px-10 font-bold">Branding</h1>
            <h1 className="block text-[12vw] px-10 font-bold">Agency</h1>
      
           </div>
           <div className="lg:pt-[100px] pt-5 pb-2">
            <div className="text-white space-y-5 md:px-10 md:pt-5 sm:px-10 sm:pt-5 px-10 pt-5 lg:px-0">
                <p className="md:text-[3vw] lg:text-[18px] md:text-[2vw] text-[4vw] " >Designed By : <Link className="lg:text-[2vw] font-bold hover:border-b-4 border-white duration-200" href="">Muzammil</Link></p>
                <p className="md:text-[3vw] lg:text-[18px] md:text-[2vw] text-[4vw]">Powered By : <Link className="lg:text-[2vw] font-bold hover:border-b-4 border-white duration-200" href="">DigiMarkistan</Link></p>
               <p className="lg:text-[2vw] md:text-[3vw] text-[4vw] font-bold"> <Link className="hover:border-b-4 border-white duration-200" href="">Contact Now</Link></p>
            </div>
           </div>
        </div>
    </div>
    )
}

export default Footer1;