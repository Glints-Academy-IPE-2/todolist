import { MDBFooter } from "mdb-react-ui-kit";
import React from "react";

const Footer = () => {
  return (
    <MDBFooter>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#C04546" }}
      >
        <a className="text-dark" href="https://mdbootstrap.com/">
        &copy; {new Date().getFullYear()}{" "}
          Copyright by IPE-2 Team. All Right Serve. 
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
