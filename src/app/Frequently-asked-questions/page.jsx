import React from "react";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
const Frequently = () => {
  return (
    <div>
    <div className="flex p-5 grid grid-cols-1 lg:grid-cols-2 ">
<div className="md:p-10 p-4 relative">
<div className="sticky top-0">
<div className="flex items-center space-x-4 ">
<div className="w-[8px] h-[8px] rounded-full bg-black"></div>
<p className="font-semibold">Frequently Asked Questions</p>
</div>
<div className="">
<p className="font-semibold text-[8vw] sm:text-[8vw] md:text-[4vw] lg:leading-[3vw] md:leading-[4vw] leading-[7vw] lg:text-[3vw]  xl:text-[3vw] pb-2">The answers to <br/>your questions. </p>
<div className="group flex items-center mt-5">
<Link className="group md:px-[3vw] md:py-[1vw] px-[6vw] py-[2vw] text-[14px] bg-blue-500  text-white rounded-full" href="">Get in touch now</Link>
<ArrowRightIcon className="text-white xl:w-[2.5vw] xl:h-[2.5vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3.5vw] md:h-[3.5vw] sm:w-[4.5vw] sm:h-[4.5vw] w-[6vw] h-[6vw] bg-blue-500 rounded-full lg:group-hover:translate-x-4 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-3 p-1"/>
</div>
</div>
</div>
</div>
<div className="">
 <div className="  p-3 pt-0 rounded-lg">
  <h1 className="lg:text-[3vw] md:text-[5vw] sm:text-[7vw] text-[8vw]  font-semibold mt-10">General</h1>
     <Accordion className="text-[2vw] "
        title="How long does a website project usually take to complete?"
        answer="Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks."
      />
      <Accordion
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks."
      />
      <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
  <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
  <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
  <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
  <h1 className="lg:text-[3vw] md:text-[5vw] sm:text-[7vw] text-[8vw]    font-semibold mt-10">Working with DigiMarkistan</h1>
 <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
 <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
 <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
 <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
  <h1 className="lg:text-[3vw] md:text-[5vw] sm:text-[7vw] text-[8vw]    font-semibold mt-10">Other questions</h1>
  <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
 <Accordion title="Firebase or Supabase?" answer="I am using Supabase! Timelines depend on the spec of the website project, but here's some guidelines...

- Shopify projects usually take around 4 weeks.

- Craft CMS projects usually take a minimum of 5 weeks.

- Craft Commerce projects usually take a minimum of 8 weeks.

- Branding projects usually take around 4 weeks." />
    </div>

</div>

</div>

    </div>

  );
};

export default Frequently;