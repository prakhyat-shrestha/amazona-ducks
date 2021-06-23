import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const signUpForm = () => (
    <div className="container py-16">
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Register</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Register here if you don't have account
        </p>
        <form action>
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 mb-2 block">Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="John Doe"
                value={name}
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Enter you email address"
                value={email}
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Enter you password"
                value={password}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="agreement"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                I have read and agree to the{" "}
                <Link to="/" className="text-primary">
                  {" "}
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={submitHandler}
              className="block w-full py-2 bg-primary border border-primary text-center text-white px-8 rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account{" "}
          <Link to="/" className="text-primary">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );

  return <Layout>{signUpForm()}</Layout>;
};

export default RegisterScreen;
