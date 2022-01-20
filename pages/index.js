import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginCard from '../components/LoginCard'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from '../components/Navbar'
import ProjectsList from '../components/ProjectsList'
import SideBar from '../components/SideBar'
import { MDBContainer,MDBCol,MDBRow, } from 'mdb-react-ui-kit'
import Contents from '../components/Contents'


export default function Home({users}) {
  const isloggedin=false
  return (
    <>
    <MDBContainer fluid>
    <Navbar li={isloggedin}/>
    {isloggedin?
              <MDBRow>
                <MDBCol size='md-2' className='col-example'>
                        <SideBar />
                </MDBCol>
                <MDBCol size='md' className='col-example'>
                    <Contents users={users}/>
                </MDBCol>
            </MDBRow>
              :
              <div className='outter' >
                <div className='inner' >
                        <LoginCard />
                </div>
              </div>}
        
      {/* <ProjectsList projects={users}/> */}
    </MDBContainer>
    </>
    
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const users = await res.json()
  return {props:{users}}
}
