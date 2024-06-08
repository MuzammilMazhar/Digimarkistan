
import React from "react";
import { ArrowRightIcon, MapIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/components/Profile";
function Contact(){
    return(
        <div>
            <div className="flex grid grid-cols-1 md:grid-cols-4 p-10">
<div className="flex col-span-3 item-center space-x-4 pt-10">

<h1 className=" font-bold lg:text-[8vw] md:text-[8vw] text-[10vw] leading-[8vw]">Its nice to meet ya
<span><ArrowRightIcon className="bg-blue-500 text-white ml-[2vw] space-x-4  sm:w-[8vw] sm:h-[8vw] h-[8vw] w-[8vw] inline md:p-5 sm:p-3 p-2 rounded-full rotate-45 hover:rotate-90 duration-300"/></span>
</h1>
</div>
<div>
<div className="pt-5 ">
<Image className="w-[100%] h-[30vw]" src="/po5.jpeg" width={100} height={100} />
</div>
</div>
 </div>
<form className="flex grid grid-cols-1 lg:grid-cols-2 p-10 pt-0">
    <div className="">
        <div className="lg:pr-32">
            <p>For general inquiries , please fill out the form to get in touch.Alternate,If you know your project details head over to our project planner for a more refined step-by-step process.</p>
        </div>
        <div className="group flex items-center mt-3">
<button className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-blue-500  text-white rounded-full" src="">Go to project planner</button>
<ArrowRightIcon className="text-white xl:w-[2vw] xl:h-[2vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
        </div>
   <div className="flex mt-3">
   <p>Hate contact form? &nbsp;<span><Link className="sm:px-3" href="">digimarkistan@gmail.com</Link></span></p>

   </div>
    </div>
    <div className="">
    <div className="flex grid grid-cols-1 lg:grid-cols-2">
        <div className="p-1">
        <input className="px-[2vw] w-[100%] lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[10vw] border-2 border-gray-200 rounded-lg" type="text" placeholder="Name"/>
        </div>
        <div className="p-1">
        <input className="px-[2vw] w-[100%]  lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[10vw] border-2 border-gray-200 rounded-lg" type="email" placeholder="Email Address"/>
        </div>
        </div>

         <div className="flex grid grid-cols-1 lg:grid-cols-2">
        <div className="p-1">
        <input className="px-[2vw] w-[100%] lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[10vw] border-2 border-gray-200 rounded-lg" type="contact" placeholder="Contact (Optional)"/>
        </div>
        <div className="p-1">
       <select className="border-2 border-gray-200 rounded-lg  w-[100%] lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[10vw]">
        <option className="">How do you hear about DigiMarkistan?</option>
        <option className="">Instagram</option>
        <option className="">LinkdIn</option>
        <option className="">Facebook</option>
       </select>
        </div>
        </div>
        <div className="flex grid col-span-2 grid-cols-1 pt-1">
            <input className=" w-[100%] lg:h-[12vw] md:h-[16vw] sm:h-[24vw] h-[28vw] border-2 border-gray-200 rounded-lg" type="text-area" placeholder="Tell us about your project"/>
        </div>
        <div>
            <div className="flex item-center mt-3 space-x-4">
                <input className="" type="checkbox" />
                <p className="text-[12px] ">Subscribe to our newsletter for all latest DigiMarkistan goes!</p>
            </div>
            <p className="text-[12px] px-7 pt-2">By submitting this for i accept <span><Link className="border-b-2 border-gray-200" href="">Privacy Policy</Link></span> of DigiMarkistan</p>
        
            <div className="group flex items-center mt-3">
<button className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-blue-500  text-white rounded-full" src="">Send Message</button>
<ArrowRightIcon className="text-white xl:w-[2vw] xl:h-[2vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
        </div>

        </div>
    </div>
</form>


{/* new section */}
<div className="p-10 ">
<div className="flex bg-gray-200 rounded-lg grid grid-cols-1 lg:grid-cols-2">
<div className="p-5">
   <div className="pt-3 md:pr-6">
   <h1 className="text-[4vw] font-bold">Our Lahore Studio</h1>
    <p className=" lg:pr-28">Just a short drive from Lahore city centre,Our studio is in a very convenient location,near Wapda Town Lahore near College Road.</p>
   </div>
<div className="flex grid grid-cols-1 md:grid-cols-2 pt-5">
<div>
    <p className="font-bold">Studio Address</p>
  <div className="flex md:pr-5 pt-3">
    <MapIcon className="w-[2vw] h-[2vw]"/>
    <p className="px-3 ">DigiMarkistan <br/> Punjab Housing Society near College road wapda town lahore</p>
  </div>
</div>
<div>
<div>
    <p className="font-bold">Follow Us</p>
</div>
</div>
</div>
<div className="group flex items-center mt-5">
<button className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-blue-500  text-white rounded-full" src="">Get Directions</button>
<ArrowRightIcon className="text-white xl:w-[2vw] xl:h-[2vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
        </div>
</div>
<Image  className="w-full h-full rounded-[25px] p-5 " src="/back.jpg" width={100} height={100} />
</div>
</div>
<Profile/>
        </div>
    )
}




export default Contact;