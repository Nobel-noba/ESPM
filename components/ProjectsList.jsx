import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectsList = ({projects}) => {
    return (
        <div>
            {projects.map(project =>(
                <ProjectItem project={project}/>
            ))}
        </div>
    )
}

export default ProjectsList

