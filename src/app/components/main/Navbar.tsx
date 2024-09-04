import React from 'react'
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
  RxInstagramLogo
} from "react-icons/rx";
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50
     bg-[#03001417] backdrop-blur-md z-50 px-10' >
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
            <img src="/NavLogo.png" alt="logo" width={70} height={70}
            className='cursor-pointer hover:animate-slowspin' />

            <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                Areesha Kainat
            </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 ">
      <Link href="https://www.linkedin.com/in/areesha-kainat/"> 
      <p className="flex flex-row items-center my-[15px] cursor-pointer h-16 w-11">
        <RxLinkedinLogo  className='size-9' color='blue'/> </p> </Link>
       <Link href={"https://www.instagram.com/areesha.__.kainat/"}>
       <p className="flex flex-row items-center my-[15px] cursor-pointer  h-16 w-11"> 
        <RxInstagramLogo  className='size-9' color='#E1306C'/> </p></Link>
       <Link href={"https://discordapp.com/users/1221024988841250826"}>
        <p className="flex flex-row items-center my-[15px] cursor-pointer h-16 w-11">
           <RxDiscordLogo  className='size-9' color='darkblue'/> </p></Link>
        </div>
       
          
        </div>
    </div>
  )
}

export default Navbar
