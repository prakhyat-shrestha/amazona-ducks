import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signout } from "../actions/userActions";

const AccountLayout = ({ className, children, history }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(signout());
    history.push("/");
  };

  const adminLinks = () => {
    return (
      <div className="fixed left-0 top-0 w-72 h-full bg-gray-800 shadow-md z-10">
        <div className="text-white font-bold text-base uppercase text-center py-5 bg-gray-900">
          admin
        </div>
        <div className="py-5">
          <Link
            to="/"
            className="flex items-center my-1 px-4 py-3 text-white border-l-4 border-blue-600 bg-gray-900"
          >
            <i className="fas fa-home w-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/create/category"
            className="flex items-center my-1 px-4 py-3 text-white border-l-4 border-trasparent hover:border-blue-600 hover:bg-gray-900 transition"
          >
            <i className="fas fa-layer-group w-5 mr-3" />
            category
          </Link>
          <Link
            to="/create/product"
            className="flex items-center my-1 px-4 py-3 text-white border-l-4 border-trasparent hover:border-blue-600 hover:bg-gray-900 transition"
          >
            <i className="fas fa-box  w-5 mr-3"></i>
            product
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center my-1 px-4 py-3 text-white border-l-4 border-trasparent hover:border-blue-600 hover:bg-gray-900 transition"
          >
            <i className="fas fa-box  w-5 mr-3"></i>
            mangage products
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center my-1 px-4 py-3 text-white border-l-4 border-trasparent hover:border-blue-600 hover:bg-gray-900 transition"
          >
            <i className="fas fa-box  w-5 mr-3"></i>
            mangage orders
          </Link>
          <span
            onClick={logoutHandler}
            className="flex items-center my-1 px-4 py-3 text-white border-l-4 border-trasparent hover:border-blue-600 hover:bg-gray-900 transition"
          >
            <i className="fas fa-user w-5 mr-3" />
            Log out
          </span>
        </div>
      </div>
    );
  };

  const topHeader = () => {
    return (
      <div className="h-16 bg-white shadow-sm pl-80 pr-8 fixed w-full top-0 left-0 flex items-center">
        <div className="relative">
          <span className="absolute left-2 top-2 w-6 text-gray-400">
            <i className="fas fa-search" />
          </span>
          <input
            type="text"
            className="block w-72 shadow border-none rounded-3xl focus:outline-none py-2 bg-gray-100 text-base text-gray-600 pl-11 pr-2"
          />
        </div>
        <div className="ml-auto flex items-center">
          <div>
            <span className="w-6 cursor-pointer text-gray-600 hover:text-gray-900">
              <i className="fas fa-bell "></i>
            </span>
          </div>
          <div className="ml-4 relative">
            <div>
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
                alt="ok"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-gray-100">
        {topHeader()}
        {adminLinks()}
      </div>
      <div className="pt-24 pr-8 pl-80">{children}</div>
    </div>
  );
};

export default AccountLayout;
