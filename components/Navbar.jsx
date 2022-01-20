import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';
const Navbar = ({li}) => {
    return (
        <div>
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
    
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
                    <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                    </MDBNavbarLink>
                </MDBNavbarItem>    
                </MDBNavbarNav>
               {li ? <MDBBtn color='danger' >logout</MDBBtn>
                    : <MDBBtn color='primary'>Signup</MDBBtn>
                }
            </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </div>
    )
}

export default Navbar
