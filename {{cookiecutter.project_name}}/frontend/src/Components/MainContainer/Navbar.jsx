// Generate barebones navbar using mdb-react-ui-kit
import { useState } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBContainer, MDBRow, MDBTypography
} from "mdb-react-ui-kit";
import { StyleSheet, css } from 'aphrodite';


const Navbar = (props) => {
    const toggleNav = () => setShowNav(!showNav);

    return (
        <MDBNavbar bgColor='light' expand='lg' className='d-flex flex-column p-0'>
            <div className="w-100">
                <MDBContainer className="py-3 w-auto">
                    <MDBNavbarBrand>
                        <MDBNavbarBrand>
                            <MDBTypography
                                tag="h1"
                                className={"font-weight-bold text-uppercase m-0 " + css(styles.navbarBrand)}
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
            <div className={"w-100 " + css(styles.navbarMenu)}>
                <MDBContainer fluid>
                    <MDBNavbarNav className="justify-content-center">
                        <MDBNavbarItem>
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

const styles = StyleSheet.create({
    navbarBrand: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black"
    },
    navbarMenu: {
        backgroundColor: "#113C4A",
        color: "white"
    },
    
});