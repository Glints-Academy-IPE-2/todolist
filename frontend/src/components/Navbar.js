import React from "react";
// import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from "mdb-react-ui-kit";
import logo from "../components/images/logo.png";

export default function Navbar() {
  return (
    <>
      <MDBNavbar style={{ backgroundColor: "#272833" }} expand="lg">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" className="text-light ms-5">
            <img src={logo} style={{width: "45px", height: "45px"}}></img>
          </MDBNavbarBrand>
            <MDBBtn color="primary">Signout</MDBBtn>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
