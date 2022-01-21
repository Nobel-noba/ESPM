import { MDBContainer } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [Technology, setTechnology] = useState("")
    
    const handleLogin = () => {
        return;
    }
    return (
        <MDBContainer style={{padding:"5px"}} className='w-75 ' >
                  <form onSubmit={handleLogin}>

                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg mb-2" onChange={e => setName(e.target.value)} placeholder="Enter Name" />
                        </div>

                        <div className="form-group">
                            <input type="textarea" className="form-control form-control-lg mb-2" onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
                        </div>

                        <div className="form-group">
                            <label style={{float:"left"}}>Start Date</label>
                            <input type="date" className="form-control form-control-lg mb-2" onChange={e => setStartDate(e.target.value)} placeholder="Enter Start Date" />
                        </div>
                        
                        <div className="form-group">
                        <label style={{float:"left"}}>End Date</label>
                            <input type="date" className="form-control form-control-lg mb-2" onChange={e => setEndDate(e.target.value)} placeholder="Enter End Date" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg mb-2" onChange={e => setTechnology(e.target.value)} placeholder="Enter Technology used" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg mb-2" onChange={e => setPassword(e.target.value)} placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg mb-2" onChange={e => setPassword(e.target.value)} placeholder="confirm Password" />
                        </div>


                        <div className="form-group">
                        </div>

                        <button type="button" onClick={handleLogin} className="btn btn-lg btn-block mt-2" style={{backgroundColor:"#1BB581",color:"white"}}>Sign up</button>
                    </form>
        </MDBContainer>
    )
}

export default Signup
