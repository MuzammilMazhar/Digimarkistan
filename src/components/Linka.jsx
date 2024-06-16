"use client"
import React from "react"
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";


const navLinks = [
    {title: "Services" , href: "/"},
    {title: "Work" , href: "/"},
    {title: "Blog" , href: "/"},
    {title: "Contact" , href: "/"},
    {title: "Contact" , href: "/"},
    {title: "Contact" , href: "/"},
];
export default function Linka(){
    return(
        <>
        <div className="flex items-start pt-32 h-screen uppercase justify-between text-md w-full">
    {navLinks.map((link, i) =>{
        return(
            <div className="border relative overflow flex flex-col">
            <AnimatedLink title={link.title}/>
            </div>
        )
    })}
        </div>
        </>
    )
}