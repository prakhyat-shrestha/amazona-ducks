import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const signInForm = () => (
    <div className="container py-16">
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="red">{error}</MessageBox>}
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are a returning customer
        </p>
        <form action>
          <div className="space-y-4">
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
                Remember Me
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={submitHandler}
              className="block w-full py-2 bg-primary border border-primary text-center text-white px-8 rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          New account{" "}
          <Link to="/" className="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );

  return <Layout>{signInForm()}</Layout>;
};

export default Signin;
