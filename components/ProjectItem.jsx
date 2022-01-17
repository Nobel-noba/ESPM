import { MDBCard } from 'mdb-react-ui-kit'
import React from 'react'

const ProjectItem = ({project}) => {
    return (
        <div>
            <MDBCard className='mt-2'>
                <div>{project.title}</div>
                <div>{project.body}</div>
            </MDBCard>
        </div>
    )
}

export default ProjectItem
