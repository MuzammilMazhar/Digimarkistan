import React from "react";
import Accordion from "./Accordion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
const FAQ = () => {
  return (
    <div>
    <div className="flex grid grid-cols-1 lg:grid-cols-4 ">
<div className="p-10 relative">
<div className="sticky top-20">
<div className="flex items-center space-x-4 ">
<div className="w-[8px] h-[8px] rounded-full bg-black"></div>
<p className="font-semibold">Anything else</p>
</div>
<div className="">
<p className="font-semibold text-[8vw] sm:text-[8vw] md:text-[4vw] lg:leading-[3vw] md:leading-[4vw] leading-[7vw] lg:text-[2vw]  xl:text-[2.5vw] pb-2">The answers to <br/>your questions. </p>
<div className="group flex items-center mt-5">
<Link className="group md:px-[3vw] md:py-[1vw] px-[6vw] py-[2vw] text-[14px] bg-blue-500  text-white rounded-full" href="./Frequently-asked-questions">View all faq</Link>
<ArrowRightIcon className="text-white xl:w-[2.5vw] xl:h-[2.5vw] lg:w-[2.5vw] lg:h-[2.5vw] md:w-[3.5vw] md:h-[3.5vw] sm:w-[4.5vw] sm:h-[4.5vw] w-[6vw] h-[6vw] bg-blue-500 rounded-full lg:group-hover:translate-x-4 lg:group-hover:rotate-0 duration-300 -rotate-45 -ml-3 p-1"/>
</div>
</div>
</div>
</div>
<div className="flex grid lg:col-span-3 grid-cols-1">
 <div className="lg:pl-[18vw]  md:p-10 p-3 pt-0 rounded-lg">
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
    </div>

</div>

</div>

    </div>

  );
};

export default FAQ;