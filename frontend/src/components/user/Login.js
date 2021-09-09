import React from "react";
import { Link } from "react-router-dom";
import cover from "../images/cover.png";
// import logo from "../images/logo.png";

const styles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Login = () => {
  return (
    <section className="vh-110" style={{ backgroundColor: "#20212C" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                  {/* Styles not working */}
                <div
                  className="col-md-6 col-lg-5 d-none d-md-block"
                  style={styles}
                >
                  <img
                    // src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                    src={cover}
                    alt="login form"
                    className="img-fluid"
                    style={{}}
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
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                        <label className="form-label">Email address</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          name="password"
                          placeholder="Enter your password"
                          required
                        />
                        <label className="form-label">Password</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-2 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link
                          to="/register"
                          style={{
                            color: "#393f81",
                            textDecoration: "underline",
                          }}
                        >
                          Register here
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

export default Login;
