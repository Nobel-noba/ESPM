import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({project}) => {
    return (
        <div id={project.id}>
            <MDBCard className='mt-2'>
                <MDBCardBody>
                    <MDBCardTitle style={{fontWeight:"700",fontSize:"50px",padding:"12px"}}>Project {project.id}</MDBCardTitle>
                    <MDBCardText>Assigned Develpers</MDBCardText>
                    <MDBCardText>
                        <ul>
                            <li>Nobel</li>
                            <li>Mikiyas</li>
                        </ul>
                    </MDBCardText>
                    <MDBCardText>DeadLine</MDBCardText>
                    <MDBCardText> 1/2/23
                    </MDBCardText>
                    <MDBCardText style={{position:"absolute",top:"5px",right:"80px"}}>priority:</MDBCardText>
                    <div>{project.title}</div>
                    <div>{project.body}</div>
                    <Link href="/editproject"><button style={{float:"right"}} onClick={() => localStorage.setItem("Pid",project.id)}className='btn btn-primary'>See more</button></Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default ProjectItem
