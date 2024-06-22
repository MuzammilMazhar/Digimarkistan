import React from "react"

function About(){
    return(
        <div>
            <h1 className="md:text-[7vw] sm:text-[8vw] text-[9vw] font-semibold text-center leading-[8vw] pt-5 pb-10">Good design <br/>
            makes life better.</h1>

            <div className="flex grid grid-cols-1 lg:grid-cols-2">
<div>
<div className="flex items-center space-x-4 md:pt-10 md:pl-10 pb-0 pt-10 pl-3">
  <div className="w-[8px] h-[8px] rounded-full bg-black"></div>
  <p>About Us</p>
</div>
    <h1 className="lg:text-[3vw] pb-5 md:pb-5 md:text-[4vw] text-[7vw]  leading-[7.5vw] md:leading-[42px] lg:leading-[35px] xl:leading-[45px] p-3 md:p-10 md:pt-0 pt-0">Expert web designers and web developers trained in the digital industry who offer a bespoke, professional and trustworthy service.</h1>
</div>
<div>
    <div className="md:p-10 p-3">
        <p className="lg:leading-[2.5vw] md:leading-[3vw] pb-5">We are an Award-Winning Branding and Web Design Agency based in Manchester, UK specialising in Web Design, Web Development, eCommerce and Organic SEO</p>
        <p className="lg:leading-[2.5vw] md:leading-[3vw] pb-5">With over a decade of experience, Shape is an energetic, fresh and vibrant team offering creative talent, industry knowledge and extremely high standards.</p>
       <p className="lg:leading-[2.5vw] md:leading-[3vw] pb-5">We work with ambitious start-up businesses through to large global organisations such as Blackberry, NHS and L'Occitane so we can tailor our services to suit your needs. Our preferred content management system of choice is Craft CMS.</p>
    </div>
</div>
            </div>
        </div>
    )
}


export default About;