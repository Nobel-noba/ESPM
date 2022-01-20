import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginCard from '../components/LoginCard'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from '../components/Navbar'
import ProjectsList from '../components/ProjectsList'
import SideBar from '../components/SideBar'
import { MDBContainer,MDBCol,MDBRow, } from 'mdb-react-ui-kit'
import ProjectContents from '../components/ProjectContents'
import TaskContents from '../components/TaskContents'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useState } from 'react';



export default function Home({users,project}) {
  const [activebar, setActivebar] = useState('project');

  const isloggedin=true
  return (
    <>    <Navbar li={isloggedin}/>
    <MDBContainer fluid style={{backgroundColor:"#D9ECD0",margin:"auto"}}>
    {isloggedin?
              <MDBRow >
                <MDBCol size='md-2' className='col-example'>
                        <SideBar active={activebar} setActive={setActivebar}/>
                </MDBCol>
                <MDBCol  size='md' className='col-example'>
                    {activebar==="project" ? <ProjectContents projects={project}/>: <TaskContents users={users}/>}
                </MDBCol>
            </MDBRow>
              :
              <div className={styles.outter} >
                <div className={styles.inner} >
                        <LoginCard />
                </div>
              </div>}
        
      {/* <ProjectsList projects={users}/> */}
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