import React, { useState } from 'react'
import Chips from './Chips'

function ProjectCard({ projectNo, projectImage, techStack, content, loginCredentials, projectName, color, link }) {
    const [displayButton, setDisplayButton] = useState(false)
    const [isOdd, setisOdd] = useState(projectNo % 2 == 1)
    return (
        <div>
            <div className={`lg:flex justify-between ${isOdd ? "" : "flex-row-reverse"}`}>
                <div className={`${isOdd ? "lg:border-r" : "lg:border-l"} border-[#f7d748] lg:w-[50%] lg:px-10 py-10 lg:py-20 relative grid place-items-center`}>
                    <div className={`relative overflow-hidden z-10 flex ${isOdd ? "justify-start" : "justify-end"}`}>
                        <div
                            className={`lg:w-[80%] dark:shadow-[#12d8fa] shadow-lg hover:scale-105 transition-all
                        duration-500 hover:duration-500 hover:transition-all cursor-pointer object-cover `}
                            onMouseEnter={() => setDisplayButton(true)}
                            onMouseLeave={() => setDisplayButton(false)}
                            onClick={() => window.location.href = link}
                        >
                            <img src="/frame.png" alt="frame" />
                            <img src={projectImage} alt="project" />
                        </div>
                    </div>
                    <div className={`hidden lg:block lg:absolute ${isOdd ? "right-0" : "left-0"} top-[50%] w-[50%] h-1 z-0 `} style={{ backgroundColor: color }}></div>

                    {/* TODO: do it later */}
                    {/* <div className={`${displayButton ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>say hii</div> */}
                </div>
                <div className={`${isOdd ? "lg:border-l" : "lg:border-r"} border-[#f7d748] lg:w-[50%] flex ${isOdd ? "justify-end" : "justify-start"}`}>
                    <div className="lg:w-[90%] text-gray-500 lg:py-20">
                        <h3 className='text-xl lg:text-3xl insta-text font-bold pb-2'>{projectName}</h3>
                        <p className='py-4'>{content}</p>
                        <div className="flex gap-4 flex-wrap">
                            {techStack.map((tech, index) => (
                                <Chips key={index} techStackName={tech} />
                            ))}
                        </div>
                        {
                            loginCredentials && (
                                <div className="italic py-2 text-black dark:text-gray-200 mb-10 lg:mb-0">
                                    Credentials: {loginCredentials}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard