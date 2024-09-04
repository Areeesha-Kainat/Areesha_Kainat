import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link"



const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Email:</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     <FaEnvelope/>
                        <a className="text-[15px] ml-[6px]">areeshakainat03@gmail.com</a> 
                        <br />    
                    </p>
                </div>
            </div>
            <div className="text-[10px]">
                    <a href="">©AreeshaKainat, All rights reserved</a>
                </div>
        </div>
    </div>
    
  )
}

export default Footer