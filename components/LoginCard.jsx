import { MDBContainer } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';
import router from 'next/router';

const LoginCard = ({isloggedin,setIsloggedIn}) => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [token,setToken]=useState("qwertyuiop")

   
    
    

    const handleLogin = async () => {
        localStorage.setItem("token",token)
        console.log(username,password)
        await axios.post("https://jsonplaceholder.typicode.com/users",{
            username: username,
            password:password
        }).then(responce => {
            // setUserSession(responce.data.token,responce.data.user)
            localStorage.setItem("isloggedin",isloggedin)
            setIsloggedIn("loggedin")
            console.warn("lela",isloggedin)
            router.push("./home")
        }).catch(error => {
            if(error.responce.status === 401 || error.responce.status === 400 ){
            // setError(error.responce.data.message)
                console.log("not loggred In")
            }
        })
    }
    
    return (
        <MDBContainer  className='w-75 mt-5' >
                  <form onSubmit={handleLogin}>

                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control form-control-lg mb-2" onChange={e => setUserName(e.target.value)} placeholder="Enter username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control form-control-lg " onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                        </div>

                        <button type="button" onClick={handleLogin} className="btn btn-lg btn-block mt-2" style={{backgroundColor:"#1BB581",color:"white"}}>Sign in</button>
                    </form>
        </MDBContainer>
    )
}

export default LoginCard
