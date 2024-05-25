import React from "react";


function Footer(){
    return(
        <section className="bg-black rounded-t-lg">
            <div className="p-10 ">
                <h1 className="border-b-2 border-gray-100 pb-10 flex text-[14vw] text-bold justify-center text-white">DigiMarkistan</h1>
            </div>
<div className="flex grid grid-cols-1 md:grid-cols-2 lg-:grid-cols-2">
<div className="p-10">
 <button className="bg-blue-800 rounded-full px-20 py-28 text-white text-bold" href="">Get Free Trial</button>
</div>
<div className="flex grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-5">
<div>

    <h1 className="text-gray-500 text-semibold pb-5">Learn</h1>
    <p className="text-white pb-2 text-bold">About</p>
    <p className="text-white pb-2 text-bold">Culture</p>
    <p className="text-white pb-2 text-bold">Testimonial</p>
    <p className="text-white pb-2 text-bold">Work</p>
    <p className="text-white pb-2 text-bold">Processes</p>
    <p className="text-white pb-2 text-bold">Blog</p>

</div>
<div>
<h1 className="text-gray-500 text-semibold pb-5">Explore</h1>
    <p className="text-white pb-2 text-bold">About</p>
    <p className="text-white pb-2 text-bold">Culture</p>
    <p className="text-white pb-2 text-bold">Testimonial</p>
    <p className="text-white pb-2 text-bold">Work</p>
    <p className="text-white pb-2 text-bold">Processes</p>
    <p className="text-white pb-2 text-bold">Blog</p>
</div>

</div>
</div>

<div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white pt-10 pb-10 rounded-t-lg">
   <div>
   <h1 className="text-black text-[4.5vw] p-10 text-bold">Your story will be the next big thing?</h1>
   </div>
   <div>
   <h1 className="text-black text-[4.5vw] p-10 text-bold">Follow Us</h1>
<div className="gap-4 grid grid-cols-2 m-5">
<button class="btn-31  ">
  <span class="text-container">
    <span class="text ">Instagram</span>
  </span>
</button>
<button class="btn-31">
  <span class="text-container">
    <span class="text">LinkdIn</span>
  </span>
</button>
<button class="btn-31">
  <span class="text-container">
    <span class="text">Facebook</span>
  </span>
</button>
<button class="btn-31">
  <span class="text-container">
    <span class="text">Whatsapp</span>
  </span>
</button>
</div>
   </div>
</div>
        </section>
    )
}



export default Footer;