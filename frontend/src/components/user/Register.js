import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {Form} from "react-bootstrap";
import cover from "../images/cover.png";
import { AuthService } from "../services/AuthServices";

const Register = () => {
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    AuthService.register(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  };

  return (
    <section className="vh-110" style={{ backgroundColor: "#20212C" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-md-flex justify-content-center align-content-center h-70 w-70" style={{height: "300px", width: "300px"}}>
                  <img
                    src={cover}
                    alt="login form"
                    // className="img-fluid"
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
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-outline mb-2">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            {...register("email", { required: "Required" })}
                            inValid={errors.email}
                            required
                          />
                          <label className="form-label">Email address</label>
                        </div>

                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder={"Enter your password"}
                            {...register("password", { required: "Required" })}
                            isInvalid={errors.password}
                            required
                          />
                          <label className="form-label">Password</label>
                        </div>

                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Re-enter your password"
                            {...register("confirmPassword", {
                              required: "Required",
                              validate: (value) =>
                                value === watch("password") ||
                                "Passwords don't match.",
                            })}
                            required
                          />
                          <label className="form-label">Confirm Password</label>
                        </div>

                        <div className="pt-1 mb-2">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </Form>

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
