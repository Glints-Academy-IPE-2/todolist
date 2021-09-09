import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthService } from "../services/AuthServices";
import cover from "../images/cover.png";
// import logo from "../images/logo.png";

const Login = ({ history }) => {
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    AuthService.login(data)
      .then((res) => {
        history.push("/");
        window.location.reload();
      })
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <section className="vh-110" style={{ backgroundColor: "#20212C" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                {/* Styles not working */}
                <div
                  className="col-md-6 col-lg-5 d-md-flex justify-content-center align-content-center h-70 w-70"
                  style={{ height: "300px", width: "300px" }}
                >
                  <img
                    // src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                    src={cover}
                    alt="login form"
                    className="img-fluid"
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
                      <Form>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            {...register("email", { required: "Required" })}
                            isInvalid={errors.email}
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
                            {...register("password", { required: "Required" })}
                            isInvalid={errors.password}
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
                      </Form>
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
