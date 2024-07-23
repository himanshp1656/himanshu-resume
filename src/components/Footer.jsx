import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaSun } from "react-icons/fa";
import { socialLinks, resumeLink } from "../data.json"
import { SiLeetcode } from 'react-icons/si';


function Footer() {
    return (
        <div className='bg-[#202020] shadow-sm text-white py-6'>
            <div className="w-11/12 mx-auto flex-col md:flex-row flex justify-between items-center gap-8">
                <div className="flex gap-4 items-center justify-center">
                    <div className="p-1 rounded-md bg-white ">
                        <img src="/h-bg.png" alt="logo" className='h-8 w-8' />
                    </div>
                    <a href={resumeLink} className='font-semibold underline text-gray-300 text-lg'>Resume</a>
                </div>
                <div className="flex gap-14">
                    <div className="flex gap-5">
                        <FaGithub className='text-3xl text-white cursor-pointer' onClick={() => {
                            window.location.href = socialLinks.github;
                        }} />
                        <FaLinkedin className='text-3xl text-[#2d64bd] bg-white cursor-pointer' onClick={() => {
                            window.location.href = socialLinks.linkedIn;
                        }} />
                        <SiLeetcode className='text-3xl text-orange-400 cursor-pointer' onClick={() => {
                            window.location.href = socialLinks.leetcode;
                        }} />
                        <FaInstagram className='text-3xl text-[#c229bf] cursor-pointer' onClick={() => {
                            window.location.href = socialLinks.instagram;
                        }} />
                    </div>

                </div>
                <div className="text-gray-600 font-sm hover:text-gray-500 cursor-default">
                    BUILT BY HIMANSHU PANDEY
                </div>
            </div>
        </div>
    )
}

export default Footer