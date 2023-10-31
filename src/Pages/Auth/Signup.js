import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinSchema } from "../../Schema/Signin";
import axios from "axios";

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  cpassword: "",
};
const Signup = () => {
  const navigate = useNavigate();
  unstable_usePrompt({ when: true, message: "joijij" });
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues, // Corrected property name
    validationSchema: signinSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          `http://127.0.0.1:8282/signup?name=${values.name}&username=${values.username}&password=${values.password}&email=${values.email}`
        );
        navigate("/login");
        console.log("Signup successful:", response.data);
      } catch (error) {
        console.error("Signup error:", error);
      }
    },
  });
  return (
    <div>
      <div>
        <div className="align-middle  flex justify-center ">
          <div className="container border  rounded-xl w-1/5 pt-1 pb-10">
            <div className="box">
              <div className="heading" />
              <h1 className=" pt-6 text-center text-4xl font-billabong mb-3">
                Instagram
              </h1>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="field relative mb-4">
                  <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    className="w-64 py-2 px-3 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  {errors.name && touched.name ? (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  ) : null}
                </div>
                <div className="field relative mb-4">
                  <input
                    id="username"
                    type="name"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                    className="w-64 py-2 px-3 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  {errors.username && touched.username ? (
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  ) : null}
                </div>
                <div className="field relative mb-4">
                  <input
                    id="email"
                    type="name"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-64 py-2 px-3 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  ) : null}
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
                  {errors.password && touched.password ? (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  ) : null}
                </div>
                <div className="field relative mb-4">
                  <input
                    id="cpassword"
                    type="password"
                    name="cpassword"
                    value={values.cpassword}
                    onChange={handleChange}
                    placeholder="conform Password"
                    className="w-64 py-2 px-3 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  {errors.cpassword && touched.cpassword ? (
                    <p className="text-red-500 text-sm">{errors.cpassword}</p>
                  ) : null}
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
                Already have an account?{" "}
                <Link to="/login" className="signup text-blue-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
