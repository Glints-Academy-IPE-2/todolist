import React from "react";
// import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import logo from "../components/images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { AuthService } from "./services/AuthServices";


const Navbar = () => {
  const currentUser = AuthService.getCurrentUser();
  const history = useHistory();

  const logOut = () => {
    AuthService.logout();
    history.push("/login");
    window.location.reload();
  };

  return (
    <>
      <MDBNavbar style={{ backgroundColor: "#272833" }} expand="lg">
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand href="#" className="text-light ms-5">
              <img
                src={logo}
                style={{ width: "45px", height: "45px" }}
                alt="logo"
              ></img>
            </MDBNavbarBrand>
          </Link>
          {currentUser ? (
            <>
              <MDBNavbarLink disabled tabIndex={-1} aria-disabled="true">
                {currentUser.nama}
              </MDBNavbarLink>
              {/* <MDBNavbarItem> */}
              <MDBBtn onClick={() => logOut()} color="primary">
                Signout
              </MDBBtn>
              {/* </MDBNavbarItem> */}
            </>
          ) : (
            // <MDBNavbarItem>
            <div className="ms-auto p-3">
              <Link to="/register">
                <MDBBtn color="dark">Register</MDBBtn>
              </Link>
              <Link to="/login">
                <MDBBtn color="primary">Login</MDBBtn>
              </Link>
            </div>
            // </MDBNavbarItem>
          )}
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
