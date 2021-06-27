import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import { Link } from "react-router-dom";

const AccountLayout = ({ className, children }) => {
  const userLinks = () => {
    return (
      <div className="w-full divide-y divide-gray-200 divider-dashed tracking-wide">
        <Link className=" flex items-center px-1 py-3 " to="/user/dashboard">
          <span className="text-gray-600 text-base">Dashboard</span>
        </Link>
        <Link className="flex items-center px-1 py-3 " to="/">
          <span className="text-gray-600 text-base">Orders</span>
        </Link>
        <Link className="flex items-center px-1 py-3 " to="/profile/update">
          <span className="text-gray-600 text-base">Account Details</span>
        </Link>
        <Link className="flex items-center px-1 py-3 " to="/signout">
          <span className="text-gray-600 text-base">Log out</span>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="container grid grid-cols-6 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-2 bg-white px-4 pb-6 pt-6 overflow-hidden">
          {userLinks()}
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </div>
  );
};

export default AccountLayout;
