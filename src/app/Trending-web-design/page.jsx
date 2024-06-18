import React from "react";
import Image from "next/image";
import Link from "next/link";


function Trending(){
    return(
        <div>
          <div className="flex grid grid-cols-1 md:grid-cols-6 mt-10 mb-10">
<div className="relative grid col-span-2 md:order-first order-last ">
<div className="bg-ora-500 w-full h-[20vw] md:invisible visible p-5">
    <div className="bg-white">
    <div className="flex items-center space-x-4 pt-5">
  <div className="w-[8px] h-[8px] rounded-full bg-black"></div>
  <p>7 min read</p>
  
</div>
<h1 className="text-[6vw] leading-[6vw] font-bold">Web Design Trends 2024</h1>
    </div>
    <div className="w-[4vw] h-[4vw] border-l-8 border-t-8 border-white rounded-tl-[25px] -ml-[8px] -mt-[8px]"></div>
</div>
    <div className="flex space-x-4 items-center md:absolute md:bottom-0 md:pl-10 p-5 pt-10 mt-5">
    <Image className="lg:w-[6vw] lg:h-[6vw] md:h-[6vw] md:w-[6vw] sm:w-[10vw] sm:h-[10vw] w-[20vw] h-[20vw] md:rounded-[15px] rounded-[10px]" src="/profile.jpg" width={200} height={200} alt="Image"/>
<div className="leading-[18px]"> <p className="text-[12px] text-gray-500">Written by</p>
 <p className="text-[14px]">Muzammil Mazhar</p>
 <p className="text-[12px] text-gray-500">Web Designer</p></div>
    </div>

</div>
<div className="grid col-span-4 bg-[url(/trend.jpg)] w-full h-[45vw] bg-cover bg-center md:rounded-l-[25px] ">
<div className="bg-ora-500 w-full h-[20vw] mt-10 md:visible invisible">
    <div className="w-[4vw] h-[4vw]  border-l-8 border-b-8 border-white rounded-bl-[25px] -ml-[8px] -mb-[8px]"></div>
    <div className="w-[70%] -ml-[30vw] bg-white rounded-r-[25px]">
    <div className="flex items-center space-x-4 pt-5">
  <div className="w-[8px] h-[8px] rounded-full bg-black"></div>
  <p>7 min read</p>
  
</div>
<h1 className="text-[6vw] leading-[6vw] font-bold pb-5">Web Design Trends 2024</h1>
    </div>
    <div className="w-[4vw] h-[4vw] border-l-8 border-t-8 border-white rounded-tl-[25px] -ml-[8px] -mt-[8px]"></div>
</div>
</div>
          </div>



          <div className="flex grid grid-cols-1 md:grid-cols-6 mt-10 ">
<div className="grid col-span-2 ">
    <div className="relative">
        <div className="bg-gray-200 m-5 p-5 sticky top-[10vw] rounded-[25px]">
        <p className="text-gray-500 font-bold">Content</p>
      <Link className="block hover:underline hover:translate-x-2 duration-200 xl:text-[18px] md:text-[14px] text-[18px] font-semibold duration-200" href="#Immersive 3D Elements">Immersive 3D Elements</Link>
      <Link className="block hover:underline hover:translate-x-2 duration-200 xl:text-[18px] md:text-[14px] text-[18px] font-semibold"   href="#1">Enhanced Mobile-First Design</Link>
      <Link className="block hover:underline hover:translate-x-2 duration-200 xl:text-[18px] md:text-[14px] text-[18px] font-semibold"  href="#Sustainable Web Design">Sustainable Web Design</Link>
      <Link className="block hover:underline hover:translate-x-2 duration-200 xl:text-[18px] md:text-[14px] text-[18px] font-semibold"  href="#AI-Powered Personalization">AI-Powered Personalization</Link>
      <Link className="block hover:underline hover:translate-x-2 duration-200 xl:text-[18px] md:text-[14px] text-[18px] font-semibold"  href="#Dark Mode Dominance">Dark Mode Dominance</Link>

        </div>

    </div>
</div>
<div className="grid col-span-4">
    <div className="p-5">
        <h1 className="lg:text-[3vw] md:text-[4vw] sm:text-[5vw] text-[7vw] font-bold md:leading-[4vw] sm:leading-[5vw] leading-[7vw]">Web Design Trends 2024: Shaping the Future of Digital Experiences</h1>
        <p className="pb-5 pt-2">The landscape of web design continues to evolve rapidly, influenced by technological advancements, user preferences, and emerging design philosophies. As we step into 2024, several key trends are set to define how websites are crafted, enhancing both aesthetics and functionality. Let&apos;s explore the prominent web design trends for this year.
        </p>
        <h1 id="Dark Mode Dominance" className="text-gray-500 lg:text-[3vw] md:text-[4vw] sm:text-[5vw] text-[7vw] font-bold md:leading-[4vw] sm:leading-[5vw] leading-[7vw]">1.Dark Mode Dominance</h1>
        <p className="pt-2 pb-5">Dark mode isn&apos;t just a fleeting trend; it&apos;s becoming a standard in web design. Offering a sleek, modern look, dark mode reduces eye strain and conserves battery life on mobile devices. Many websites are now offering dark mode as a toggle option, allowing users to switch between light and dark themes based on their preferences or the time of day. 
        </p>
        <h2  id="AI-Powered Personalization" className="text-gray-500 pt-2 pb-2 lg:text-[3vw] md:text-[4vw] sm:text-[5vw] text-[7vw] font-bold md:leading-[4vw] sm:leading-[5vw] leading-[7vw]">2.AI-Powered Personalization</h2>
        <p className="pt-2 pb-5">Artificial intelligence is revolutionizing web design by enabling highly personalized user experiences. AI algorithms analyze user behavior to deliver tailored content, product recommendations, and adaptive interfaces. This level of personalization not only enhances user engagement but also increases conversion rates as websites become more relevant to individual users.
        </p>
        <h2 id="Sustainable Web Design" className="text-gray-500 pt-2 pb-2 lg:text-[3vw] md:text-[3vw] sm:text-[4vw] text-[5vw] font-bold md:leading-[4vw] sm:leading-[5vw] leading-[7vw]">3.Sustainable Web Design</h2>
        <p className="pt-2 pb-5">
        As environmental consciousness grows, sustainable web design is gaining traction. This trend focuses on creating energy-efficient websites that minimize digital carbon footprints. Techniques include optimizing images and code, reducing server load, and ensuring websites are fast and efficient. Sustainable web design not only benefits the environment but also improves website performance and user satisfaction.
        </p>
    <h2 id="Enhanced Mobile-First Design" className="text-gray-500 pt-2 pb-2 lg:text-[3vw] md:text-[3vw] sm:text-[4vw] text-[5vw] font-bold md:leading-[4vw] sm:leading-[5vw] leading-[7vw]">4.Enhanced Mobile-First Design</h2>
    <p className="pt-2 pb-5">With mobile traffic continuing to surpass desktop, mobile-first design remains a priority. Websites are being optimized for mobile devices from the outset, ensuring seamless performance and usability on smaller screens. Responsive design, fast load times, and touch-friendly interfaces are critical components of this trend.
    </p>
    
    <Image className="w-full md:h-[35vw] h-[60vw] p-2 rounded-[25px]" src="/responsive.jpg" width={200} height={200} alt="New" />
    <h2  className="text-gray-500 pt-2 pb-2 lg:text-[3vw] md:text-[3vw] sm:text-[4vw] text-[5vw] font-bold md:leading-[4vw] sm:leading-[5vw] leading-[7vw]">5.Minimalism and Maximalism</h2>
    <p className="pt-2 pb-5">Minimalist design continues to be a strong trend, focusing on simplicity, whitespace, and clean typography. However, 2024 also sees the rise of maximalism, characterized by bold colors, intricate patterns, and elaborate graphics. Both trends cater to different user preferences, with minimalism appealing to those who favor a clean, straightforward approach, and maximalism attracting users who enjoy vibrant and dynamic visuals.</p>
    
    <h2  id="Immersive 3D Elements" className="text-gray-500 pt-2 pb-2 lg:text-[3vw] md:text-[3vw] sm:text-[4vw] text-[5vw] font-bold md:leading-[4vw] sm:leading-[5vw] leading-[7vw] duration-200">6.Immersive 3D Elements</h2>
    <p className="pt-2 pb-5">Three-dimensional elements are making websites more engaging and interactive. With advancements in web technologies, incorporating 3D graphics, animations, and interactive elements has become more accessible. These features can captivate users, providing a memorable browsing experience and setting websites apart from competitors.</p>
    </div>
    <div className="flex grid grid-cols-1 sm:grid-cols-2">
    <div className="flex space-x-4 items-center p-5 ">
    <Image className="lg:w-[6vw] lg:h-[6vw] md:h-[6vw] md:w-[6vw] sm:w-[10vw] sm:h-[10vw] w-[20vw] h-[20vw] md:rounded-[15px] rounded-[10px]" src="/profile.jpg" width={200} height={200} alt="Image"/>
<div className="leading-[18px]"> <p className="sm:text-[12px] text-[16px] text-gray-500">Written by</p>
 <p className="sm:text-[14px] text-[18px]">Muzammil Mazhar</p>
 <p className="sm:text-[12px] text-gray-500 text-[16px]">Web Designer</p></div>
    </div>
    <div className="p-5 sm:pl-0">
        <p className="md:text-[1.5vw] sm:text-[2vw] text-[4vw] text-gray-500">Hey! I&apos;m Muzammil Mazhar. Web Designer at <br/>DigiMarkistan.</p>
    </div>
    </div>
</div>
          </div>
        </div>
    )
}


export default Trending;