import styles from '../styles/Home.module.css'
import LoginCard from '../components/LoginCard'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from '../components/Navbar'
import { MDBContainer,MDBCol,MDBRow, } from 'mdb-react-ui-kit'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react';



export default function login({users,project}) {
  const [isloggedin, setIsloggedin] = useState("loggedout");
  

  return (
    <>    
    <Navbar li={isloggedin} setIsloggedIn={setIsloggedin}/>
    <MDBContainer fluid style={{margin:"auto"}}>
              <div className={styles.outter} >
                <div className={styles.inner} >
                        <LoginCard isloggedin={isloggedin} setIsloggedIn={setIsloggedin} />
                </div>
              </div>        
    </MDBContainer>
    </>
    
  )
}

export const getStaticProps = async () => {
  const res1 = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=11")
  const res2 = await fetch("https://jsonplaceholder.typicode.com/users")
  const project = await res1.json()
  const users = await res2.json()
  return {props:{users,project}}
}