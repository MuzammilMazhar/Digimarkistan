"use client"
import React from "react";
import { ArrowRightIcon, MapIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import FAQ from "@/components/FAQ";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';




function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_qfdevwd', 'template_wd18gai', form.current, {
          publicKey: 'FSaJkJ045Z5sI44gr',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return(
        <div>
            <div className="flex grid grid-cols-2 md:grid-cols-4 p-2 pb-5  border-b-[2px] border-gray-100">
                
<div className=" md:col-span-3 item-center space-x-4 pt-">
    <div className=" block">
    <div className="flex items-center space-x-4 p-5 md:pl-10 pl-3">
  <div className="w-[8px] h-[8px] rounded-full bg-black"></div>
  <p className="font-bold">Contact </p>
</div>
    </div>
<h1 className="float-left md:pl-10  font-bold lg:text-[8vw] md:text-[8vw] text-[10vw] leading-[8vw]">Its nice to meet ya
<span><ArrowRightIcon className="bg-blue-500 text-white ml-[2vw] space-x-4  sm:w-[8vw] sm:h-[8vw] h-[8vw] w-[8vw] inline md:p-5 sm:p-3 p-2 rounded-full rotate-45 hover:rotate-90 duration-300"/></span>
</h1>
</div>
<div className=" p-3">
<div className="p-0 rounded-lg w-[90%] lg:h-[30vw] md:h-[35vw] sm:h-[50vw] h-[60vw] bg-[url(/group.jpg)]  bg-cover bg-center">
{/* <Image className="w-[100%] h-[30vw]" src="/group.jpg" width={100} height={100} /> */}
</div>
</div>
 </div>


<form ref={form} onSubmit={sendEmail} className="flex grid grid-cols-1 lg:grid-cols-2 p-3 md:p-10 pt-10 pb-5">
    <div className="lg:order-first order-last lg:pt-0 pt-10">
        <div className="lg:pr-32">
            <p>For general inquiries , please fill out the form to get in touch.Alternate,If you know your project details head over to our project planner for a more refined step-by-step process.</p>
        </div>
        <div className="group flex items-center mt-3">
<button className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-blue-500  text-white rounded-full" src="">Go to project planner</button>
<ArrowRightIcon className="text-white xl:w-[2.5vw] xl:h-[2.5vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-1 p-1"/>
        </div>
   <div className="flex grid sm:grid-cols-2  grid-cols-1 mt-10">
    <div>   <p>Hate contact form?</p></div>
    <div>   <Link className=" hover:underline" href="">digimarkistan@gmail.com</Link></div>

   </div>
    </div>
    <div className="">
    <div className="flex grid grid-cols-1 lg:grid-cols-2">
        <div className="p-1">
        <input className="px-[2vw] w-[100%] lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[15vw] border-2 border-gray-200 rounded-lg" type="text" name="user_name"  placeholder="Name"/>
        </div>
        <div className="p-1">
        <input className="px-[2vw] w-[100%]  lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[15vw] border-2 border-gray-200 rounded-lg" type="email" name="user_email" placeholder="Email Address"/>
        </div>
        </div>

         <div className="flex grid grid-cols-1 lg:grid-cols-2">
        <div className="p-1">
        <input className="px-[2vw] w-[100%] lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[15vw] border-2 border-gray-200 rounded-lg" type="contact" name="user_contact" placeholder="Contact (Optional)"/>
        </div>
        <div className="p-1">
       <select className="border-2 px-[2vw] border-gray-200 rounded-lg  w-[100%] lg:h-[4vw] md:h-[6vw] sm:h-[8vw] h-[15vw]">
        <option className="">How do you hear about us?</option>
        <option className="">Instagram</option>
        <option className="">LinkdIn</option>
        <option className="">Facebook</option>
       </select>
        </div>
        </div>
        <div className="flex grid col-span-2 grid-cols-1 pt-1">
            <input className=" w-[100%] lg:h-[12vw] md:h-[16vw] sm:h-[24vw] h-[28vw] border-2 border-gray-200 rounded-lg" name="message" placeholder="Tell us about your project"/>
        </div>
        <div>
            <div className="flex item-center mt-3 space-x-4">
                <input className="" type="checkbox" />
                <p className="text-[15px] ">Subscribe to our newsletter for all latest DigiMarkistan goes!</p>
            </div>
            <p className="text-[15px] px-7 pt-2">By submitting this for i accept <span><Link className="underline cursor-pointer" href="">Privacy Policy</Link></span> of DigiMarkistan</p>
        
            <div className="group flex items-center mt-3">
<button type="submit" value="Send"  className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-black  text-white rounded-full" src="">Send Message</button>
<ArrowRightIcon className="text-white xl:w-[2vw] xl:h-[2vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-black rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
        </div>

        </div>
    </div>
</form>


{/* new section */}
<div className="p-4 md:p-10">
<div className="flex bg-gray-100 rounded-lg grid grid-cols-1 lg:grid-cols-2">
<div className="p-5 ">
   <div className="pt-3 md:pr-6">
   <h1 className="text-[4vw] font-bold">Our Lahore Studio</h1>
    <p className=" lg:pr-28">Just a short drive from Lahore city centre,Our studio is in a very convenient location,near Wapda Town Lahore near College Road.</p>
   </div>
<div className="flex grid grid-cols-1 md:grid-cols-2 pt-5">
<div>
    <p className="font-bold">Studio Address</p>
  <div className="flex md:pr-5 mt-3">
  <FaMapMarkerAlt />
    <p className="px-3 ">DigiMarkistan <br/> Punjab Housing Society near College road wapda town lahore</p>
  </div>
</div>
<div>
<div>
    <p className="font-bold">Follow Us</p>
    <div className="flex space-x-4 pt-5">
        <a className="bg-blue-500 p-2 text-white rounded-full " href="https://www.instagram.com/digimarkistan/?igsh=a2gwY2w4cGFsZjRt"><LuInstagram  /></a>
        <Link className="bg-blue-500 p-2 text-white rounded-full " href="AQHsNbHVMvCHYAAAAZAfrtVw3CBphI2mnw8AInexbErQ6lNkrrA0h4tj2UYCnDFvbE4Xa2EsY36ChdI2L8PPv7d5SWDUdxcRUUBIzyXiAn_9F7R2uurkPbyxAgr3sRG3ZPBkRhg">  <FaLinkedinIn /></Link>
        <a className="bg-blue-500 p-2 text-white rounded-full " href="https://www.facebook.com/digimarkistan?mibextid=ZbWKwL"><FaFacebookSquare /></a>
        <a  className="bg-blue-500 p-2 text-white rounded-full " href=""><FaXTwitter /> </a>
      

    </div>
</div>
</div>
</div>
<div className=" flex items-center mt-5">
<button className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-blue-500  text-white rounded-full" src="">Get Directions</button>
<ArrowRightIcon className="text-white xl:w-[2vw] xl:h-[2vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
        </div>
</div>
<div className="p-5 "><div className="w-full lg:h-full h-[50vw] bg-[url(/office.jpg)] bg-center bg-cover  rounded-lg"></div></div>
{/* <Image  className="w-full h-full rounded-[25px] p-5 " src="/office.jpg" width={100} height={100} /> */}
</div>
</div>
<FAQ/>

        </div>
    )
}




export default Contact;