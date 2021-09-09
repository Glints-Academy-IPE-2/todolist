import React, { useState } from "react";
import { Link } from "react-router-dom";
import cover from "../images/cover.png";

const Register = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      //   sendDetailsToServer
      
    } else {
      props.showError("Passwords do not match");
    }
  };

  return (
    <section className="vh-110" style={{ backgroundColor: "#20212C" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={cover}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-book fa-2x me-3"
                          style={{ color: "darkred" }}
                        />
                        <span className="h1 fw-bold mb-0">TodoList</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px", fontWeight: "bold" }}
                      >
                        Make a new account
                      </h5>

                      <div className="form-outline mb-2">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          placeholder="Enter your email"
                          value={state.email}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label">Email address</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="password"
                          placeholder={"Enter your password"}
                          value={state.password}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="confirmPassword"
                          placeholder="Re-enter your password"
                          required
                        />
                        <label className="form-label">Confirm Password</label>
                      </div>

                      <div className="pt-1 mb-2">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleSubmitClick}
                        >
                          Register
                        </button>
                      </div>

                      <p
                        className="mb-1 mt-3 pb-lg-2"
                        style={{ color: "#393f81" }}
                      >
                        Already have account?{" "}
                        <Link
                          to="/login"
                          style={{
                            color: "#393f81",
                            textDecoration: "underline",
                          }}
                        >
                          Login here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
