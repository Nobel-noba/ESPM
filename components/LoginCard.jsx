import loginStyle from '../styles/Home.module.css'
import { MDBInput ,MDBRow ,MDBBtn, MDBCol ,MDBContainer } from 'mdb-react-ui-kit';
const LoginCard = () => {
    return (
        <MDBContainer fluid>
             <MDBRow>
                <MDBCol md="6">
                <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                    <MDBInput label="Type your password" icon="lock" group type="password" validate />
                    </div>
                    <div className="text-center">
                    <MDBBtn>Login</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default LoginCard
