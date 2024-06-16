
import Image from "next/image";
import React from "react";


function BlogSection(){
    return(
        <div className="flex grid grid-cols-4">
       <div className="bg-red-400 w-full h-[250px]">
<div className="float-right"> 
<Image className="float-bottom" src="/po5.jpeg" alt="Image" width={80} height={80} />
</div>
       </div>
       <div>01</div>
       <div>01</div>
       <div>01</div>
        </div>
    )
}


export default BlogSection;