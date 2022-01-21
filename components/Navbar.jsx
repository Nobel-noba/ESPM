import React from 'react'
import Link from 'next/link';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import Logo from '../public/Logo.png'
import LogComp from './LogComp';


const Navbar = ({li,setIsloggedIn}) => {
    return (
        <div>
        <MDBNavbar expand='lg' light style={{backgroundColor:"#1BB581"}}>
            <MDBContainer fluid >
            <MDBNavbarBrand href='#'>
                <MDBContainer className="rounded-circle" style={{backgroundColor:"#E9470B80"}}>
                    <img src="Logo.png" style={{maxWidth:"25px"}} alt="eagle" />
                </MDBContainer>
            </MDBNavbarBrand>
    
            <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
    
            <MDBCollapse navbar >
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#' style={{fontWeight:"Bold"}}>
                    Eagle Sight PM Tool
                    </MDBNavbarLink>
                </MDBNavbarItem>    
                </MDBNavbarNav>
                    <LogComp li={li} setIsloggedIn={setIsloggedIn}/>
            </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </div>
    )
}

export default Navbar
