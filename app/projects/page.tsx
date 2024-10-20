import React from 'react'
import { PROJECT_DETAILS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage= () => {
  return (
    <div className='w-[80%] mx-auto'>
        <p className='text-3xl font-bold mb-6'>Projects</p>
        <div className='flex flex-col gap-10'>
        {
            PROJECT_DETAILS.map((project)=>(
                <ProjectCard key={project.projectName} {...project}/>
            ))
        }
        </div>
    </div>
  )
}

export default ProjectsPage;