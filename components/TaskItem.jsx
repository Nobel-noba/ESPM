import { MDBCard,MDBCardBody,MDBCardTitle ,MDBCardText } from 'mdb-react-ui-kit'
import React from 'react'

const TaskItem = ({Task}) => {
    return (
        <div id={Task.id}>
            <MDBCard className='mt-2'>
                <MDBCardBody>
                    <MDBCardTitle style={{fontWeight:"700",fontSize:"50px",padding:"12px"}}>Task {Task.id}</MDBCardTitle>
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
                    <div>{Task.title}</div>
                    <div>{Task.body}</div>
                    <button style={{float:"right"}} className='btn btn-primary'>See more</button>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default TaskItem
