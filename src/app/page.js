
// import Linka from "@/components/Linka";
import Menu from "@/components/Menu";
import Profile from "@/components/Profile";
import Scroll from "@/components/Scroll";
import ServiceNav from "@/components/ServiceNav";
import ServiceSection from "@/components/ServiceSection";
import Textscroll from "@/components/Textscroll";
import { ArrowDownRightIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";




export default function Home() {
  return (
    <main className="mt-5">

      {/* <div className=" ">
        <h1 className="float-center justify-center text-black text-center text-[11vw] font-bold mt-0 pt-0 ">DIGIMARKISTAN</h1>
      </div>
      <div className="flex grid grid-cols-1 md:grid-cols-2">
<div>
  <h1 className="text-[3vw] px-10 leading-[4vw] font-semibold">The bold and creative design partner for ambitious startups & design agencies.</h1>
  <p className="px-10 pt-4">The bold and creative design partner for ambitious startups & design agencies.The bold and creative design partner for ambitious startups & design agencies.The bold and creative design partner for ambitious startups & design agencies.</p>
<div className="px-10 pt-4 flex items-center space-x-2 ">
<Link className="border-b-2 border-black" href="">View our pricing packages</Link>
<ArrowRightIcon className="w-[2vw] h-[2vw] border-b-2 border-black"/>
</div>
</div>
<div className="p-5">
  <Image className="w-full h-full" src="/po5.jpeg" width={100} height={100}/>
</div>
      </div> */}
     <div className="flex grid md:grid-cols-2 p-10">
    <div>
    <div className="flex items-center space-x-4 ">
  <div className="w-[8px] h-[8px] rounded-full bg-black"></div>
  <p>Who we are</p>
</div>
    </div>
<div className="">
  <p className="text-semibold text-[4vw] md:text-[3vw] lg:text-[2vw] pb-2">An independependent web design and branding agency in Pakistan setup in 2020 who care, build relationships, have industry experience, and win awaards  </p>
  <div className="group flex items-center mt-5">
<button className="group md:px-[2vw] md:py-[6px] px-[2vw] py-[1vw] text-[14px] bg-blue-500  text-white rounded-full" src="">About DigiMarkistan</button>
<ArrowRightIcon className="text-white xl:w-[2vw] xl:h-[2vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[3.5vw] sm:h-[3.5vw] w-[5vw] h-[5vw] bg-blue-500 rounded-full lg:group-hover:translate-x-3 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-2 p-1"/>
        </div>
</div>
     </div>
     {/* <Linka/> */}
     {/* <div className="group bg-red-500 w-[500px] overflow-hidden h-[500px] rounded-[25px] "> 
      <div className="float-right bg-orange-400 p-5 rounded-[25px] rounded-tl-[1px] gap-4 lg:-translate-y-16 group-hover:translate-y-0 hover:translate-y-0 duration-300">
<Link className="p-2 border-2 border-gray-400 bg-white rounded-full" href="">Website</Link>
<Link className="p-2 border-2 border-gray-400 bg-white rounded-full"  href="">Branding</Link>
      </div>
     </div>  */}
     <div className="flex grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 p-5">
<div>
<div className="p-2 md:p-5 justify-center">
<div className="group overflow-hidden  rounded-[20px] bg-[url(/po5.jpeg)] w-full h-[30vh] sm:h-[30vh] md:h-[25vh] lg:h-[35vh] 2xl:h-[40vh]">
<div className="float-right w-[60%] md:w-[50%] lg:w-[60%] space-x-2 2xl:-translate-y-24  group-hover:-translate-y-0 hover:-translate-y-2 -right-1 -py-1 duration-300 bg-white px-4 py-6  rounded-bl-[25px] justify-around">
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  {/* <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link> */}
</div>
<div className="inline-block w-[50px] h-[50px] bg-red-500 float-right rounded-tr-[25px] outline-tr-5"></div>
<div className="group-hover:bg-orange-500 duration-300 block w-[80px] h-[75px] bg-blue-500 "></div>
<div  className="group-hover:bg-white group-hover:-translate-y-1 group-hover:rounded-tr-lg  group-hover:border-tr-4  duration-300 block w-[80px] h-[75px] bg-blue-500 float-right  "></div>
<div className="block w-[80px] h-[75px] bg-blue-500 float-right "></div>
  </div>
  
</div>
<div className="p-2 md:p-5 justify-center">
<div className="group overflow-hidden  rounded-[20px] bg-[url(/po5.jpeg)] w-full h-[30vh] sm:h-[30vh] md:h-[25vh] lg:h-[35vh] 2xl:h-[40vh]">
<div className="float-right w-[60%] md:w-[50%] lg:w-[60%] space-x-2 2xl:-translate-y-24  group-hover:-translate-y-0 hover:-translate-y-2 -right-1 -py-1 duration-300 bg-white px-4 py-6  rounded-bl-[25px] justify-around">
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  {/* <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link> */}
</div>
<div className="inline-block w-[50px] h-[50px] bg-red-500 float-right rounded-tr-[25px] outline-tr-5"></div>
<div className="group-hover:bg-orange-500 duration-300 block w-[80px] h-[75px] bg-blue-500 "></div>
<div  className="group-hover:bg-white group-hover:-translate-y-1 group-hover:rounded-tr-lg  group-hover:border-tr-4  duration-300 block w-[80px] h-[75px] bg-red-500 float-right  "></div>
<div className="block w-[80px] h-[75px] rounded-tr-lg float-right "></div>
  </div>
  
</div>
</div>
<div>
<div>
<div className="p-2 md:p-5 justify-center">
<div className="group overflow-hidden  rounded-[20px] bg-[url(/po5.jpeg)] w-full h-[30vh] sm:h-[30vh] md:h-[25vh] lg:h-[35vh] 2xl:h-[40vh]">
<div className="float-right w-[60%] md:w-[50%] lg:w-[60%] space-x-2 2xl:-translate-y-24  group-hover:-translate-y-0 hover:-translate-y-2 -right-1 -py-1 duration-300 bg-white px-4 py-6  rounded-bl-[25px] justify-around">
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  {/* <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link> */}
</div>
<div className="inline-block w-[50px] h-[50px] bg-red-500 float-right rounded-tr-[25px] outline-tr-5"></div>
<div className="group-hover:bg-orange-500 duration-300 block w-[80px] h-[75px] bg-blue-500 "></div>
<div  className="group-hover:bg-white group-hover:-translate-y-1 group-hover:rounded-tr-lg  group-hover:border-tr-4  duration-300 block w-[80px] h-[75px] bg-blue-500 float-right  "></div>
<div className="block w-[80px] h-[75px] bg-blue-500 float-right "></div>
  </div>
  
</div>
</div>
<div>
<div className="p-2 md:p-5 justify-center">
<div className="group overflow-hidden  rounded-[20px] bg-[url(/po5.jpeg)] w-full h-[30vh] sm:h-[30vh] md:h-[25vh] lg:h-[35vh] 2xl:h-[40vh]">
<div className="float-right w-[60%] md:w-[50%] lg:w-[60%] space-x-2 2xl:-translate-y-24  group-hover:-translate-y-0 hover:-translate-y-2 -right-1 -py-1 duration-300 bg-white px-4 py-6  rounded-bl-[25px] justify-around">
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link>
  {/* <Link className="px-4 py-3 text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] 2xl:text-[1vw] bg-gray-200    text-bold rounded-full" href="">Website</Link> */}
</div>
<div className="inline-block w-[50px] h-[50px] bg-red-500 float-right rounded-tr-[25px] outline-tr-5"></div>
<div className="group-hover:bg-orange-500 duration-300 block w-[80px] h-[75px] bg-blue-500 "></div>
<div  className="group-hover:bg-white group-hover:-translate-y-1 group-hover:rounded-tr-lg  group-hover:border-tr-4  duration-300 block w-[80px] h-[75px] bg-blue-500 float-right  "></div>
<div className="block w-[80px] h-[75px] bg-blue-500 float-right "></div>
  </div>
  
</div>
</div>
</div>
     </div> 
     <Profile/>
     <Textscroll/>
<Scroll/>
     <ServiceNav/>
  <ServiceSection/>
  <Menu/>
  {/* <Button/> */}
 
    </main>
  
  );
}
