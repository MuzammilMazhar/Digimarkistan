import React from "react";
import { motion , animation} from "framer-motion";




export default function AnimatedLink({title}){
    return(
        <div className="relative cursor-pointer">
<AnimatedWord title={title} animation={letterAnimation} />
<div className="absolute top-0">
<AnimatedWord title={title} animation={letterAnimationTwo}/>
</div>
        </div>
    )
}

const titleAnimation ={
rest:{
    transition:{
        staggerChildren:0.003,
    },
},
hover:{
    transition:{
        staggerChildren:0.003,
    },
},
}   



const letterAnimation ={
    rest:{
        y:0
    }, hover:{
        y:-25,
        transition:{
            duration:0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween"
        }
    }
}
const letterAnimationTwo ={
    rest:{
        y:25
    }, hover:{
        y:0,
        transition:{
            duration:0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "tween"
        }
    }
}



const AnimatedWord = ({title}) =>{
    return(
        <motion.span variants={titleAnimation}
        initial="rest"
        animate="hover"
         className="whitespace-nowrap relative" >
    {title.split("").map((character, i) => 
    character === "" ? (<span >&nbsp;</span>) :
    <motion.span 
    variants={animation}
    className="relative inline-block whitespace-nowrap">
{character}
    </motion.span>
    )}
        </motion.span>
    )
}