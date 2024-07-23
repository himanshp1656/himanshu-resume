import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaSun } from "react-icons/fa";
import { socialLinks } from "../data.json"
import { SiLeetcode } from "react-icons/si";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

function Navbar({ thememode, setThememode }) {
    return (
        <div className='bg-[#202020] shadow-sm text-white font-open-sans'>
            <nav className='flex justify-between items-center py-5 w-11/12 mx-auto flex-wrap gap-4'>
                <div className="text-xl font-semibold">
                    Himanshu Pandey
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
                    <div className="">
                        {
                            thememode == "dark"
                                ? <>
                                    <IoSunnyOutline className='text-3xl text-white cursor-pointer' onClick={() => setThememode('light')} />
                                </>
                                : <>
                                    <IoMdMoon className='text-3xl text-white cursor-pointer' onClick={() => setThememode('dark')} />
                                </>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar