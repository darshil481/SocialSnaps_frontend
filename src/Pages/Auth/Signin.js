import { Formik, useFormik } from "formik";
import React from "react";
import { Link, unstable_usePrompt, useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};

const Signin = () => {
  const navigate = useNavigate();
  unstable_usePrompt({ when: true, message: "joijij" });
  const { values, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await fetch("http://localhost:8282/signin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " + btoa(values.email + ":" + values.password),
          },
        });

        if (res.ok) {
          const data = await res.json();
          const token = res.headers.get("Authorization");
          localStorage.setItem("token", token);
          console.log("token", token);
          navigate("/Home");
        } else {
          console.log("Authentication failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  return (
    <div>
      <div className="align-middle  flex justify-center mt-10">
        <div className="container border  rounded-xl w-1/5 pb-8">
          <div className="box">
            <div className="heading" />
            <h1 className=" pt-11 pb-5 text-center text-4xl font-billabong mb-3">
              Instagram
            </h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="field relative mb-4">
                <input
                  id="username"
                  type="name"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Phone number, username, or email"
                  className="w-64 py-2 px-3 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="field relative mb-4">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-64 py-2 px-3 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                className="w-64 login-button w-full py-2 bg-blue-500 text-white font-semibold text-sm border border-blue-500 rounded cursor-pointer"
                title="login"
                type="submit"
              >
                Log In
              </button>
              <div className=" flex justify-center separator flex items-center mt-2 text-gray-500">
                <div className="line h-px w-40 bg-gray-300" />
                <p className="mx-2">OR</p>
                <div className="line h-px w-40 bg-gray-300" />
              </div>
              <div className="other flex flex-col items-center">
                <button className="fb-login-btn my-4">
                  <i className="fa fa-facebook-official fb-icon text-blue-500 text-lg pr-1" />
                  <span className="text-blue-500 font-semibold">
                    Log in with Facebook
                  </span>
                </button>
                <a href="#" className="forgot-password text-gray-500 text-xs">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
          <div className="box">
            <p className="text-sm pt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="signup text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
