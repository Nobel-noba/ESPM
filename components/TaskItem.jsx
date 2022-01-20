import { MDBCard } from 'mdb-react-ui-kit'
import React from 'react'

const TaskItem = ({Task}) => {
    return (
        <div>
            <MDBCard className='mt-2'>
                <div>{Task.name}</div>
                <div>{Task.username}</div>
            </MDBCard>
        </div>
    )
}

export default TaskItem
