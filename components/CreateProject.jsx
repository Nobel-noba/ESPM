import React ,{useState} from 'react'
import { MDBCard, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit';

const CreateProject = () => {
    const [priority,setPriorities] = useState("Low")

    const handlePriority = (e) =>{
        setPriorities(e.target.value)
    }
    return (
        <div>
            <MDBContainer >
            <MDBCard className='mt-2'>
                <MDBCardBody >
                <form >

                    <h3>Create New Project</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control form-control-lg mb-2" placeholder="Enter Name" />
                    </div>

                    <div className="form-group">
                        <label>description</label>
                        <input type="textarea" className="form-control form-control-lg mb-2" placeholder="Enter description" />
                    </div>

                    <div className="form-group">
                        <label>Start Date</label>
                        <input type="date" className="form-control form-control-lg mb-2" placeholder="Enter Start Date" />
                    </div>

                    <div className="form-group">
                        <label>DeadLine</label>
                        <input type="date" className="form-control form-control-lg mb-2" placeholder="Enter deadline" />
                    </div>
                    <div className="form-group">
                        <label>Priority</label>
                        <select className="form-select" onChange={handlePriority} name="priority" id="pri">
                            <option value="high">High</option>
                            <option value="midium" selected>Midium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-lg btn-block mt-2" style={{backgroundColor:"#1BB581",color:"white"}}>Create New Project</button>

                </form>
                </MDBCardBody>
            </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default CreateProject
