// Generate barebones navbar using mdb-react-ui-kit
import { useState } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBContainer, MDBRow, MDBTypography
} from "mdb-react-ui-kit";

const Navbar = (props) => {
    const toggleNav = () => setShowNav(!showNav);

    return (
        <MDBNavbar bgColor='light' expand='lg' className='d-flex flex-column p-0'>
            <div className="w-100">
                <MDBContainer className="py-3" style={{ maxWidth: "auto" }}>
                    <MDBNavbarBrand>
                        <MDBNavbarBrand>
                            <MDBTypography
                                tag="h1"
                                className="font-weight-bold text-uppercase m-0"
                                style={{ fontSize: "1.5rem", color: "black" }}
                                nogutter
                            >
                                {"{{cookiecutter.project_name}}"}
                            </MDBTypography>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            type='button'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={toggleNav}
                        ></MDBNavbarToggler>
                    </MDBNavbarBrand>
                </MDBContainer>
            </div>
            <div className="w-100" style={{ backgroundColor: "#113C4A", color: "white" }}>
                <MDBContainer style={{ maxWidth: "auto" }}>
                    <MDBNavbarNav style={{ justifyContent: "center" }}>
                        <MDBNavbarItem active>
                            <MDBNavbarLink href="#!">Home</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#!">Features</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </div>
        </MDBNavbar >
    );
};

export default Navbar;