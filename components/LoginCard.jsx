import loginStyle from '../styles/Home.module.css'
import { MDBInput ,MDBRow ,MDBBtn, MDBCol ,MDBContainer } from 'mdb-react-ui-kit';
const LoginCard = () => {
    return (
        <MDBContainer  className='w-75 mt-5' >
                  <form>

                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control form-control-lg mb-2" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control form-control-lg " placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                        </div>

                        <button type="submit" className="btn btn-lg btn-block mt-2" style={{backgroundColor:"#1BB581",color:"white"}}>Sign in</button>
                        
                        </form>
        </MDBContainer>
    )
}

export default LoginCard
