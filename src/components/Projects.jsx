import React from 'react'
import ProjectCard from './ProjectCard'
import data from "../data.json"

function Projects() {
    return (
        <div>
            <div className="flex justify-center">
                <h2 className='moving-border text-4xl px-6 py-3 font-semibold text-black '>Latest works</h2>
            </div>
            <div className="">
                {
                    data.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            projectNo={index + 1}
                            color={project.color}
                            projectImage={project.image}
                            content={project.content}
                            techStack={project.techStack}
                            loginCredentials={project.credentials}
                            projectName={project.name}
                            link={project.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects