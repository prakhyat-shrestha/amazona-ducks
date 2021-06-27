import React from "react";
import AccountLayout from "../layouts/AccountLayout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userSignin = useSelector((state) => state.userSignin);

  const {
    userInfo: { user },
  } = userSignin;

  return (
    <AccountLayout>
      <div className="mt-8 text-base text-gray-600 ">
        <p>
          Hello <span className="capitalize">{user.name}</span> ({user.email})
          (not User ?{" "}
          <Link to="/signout" className="text-blue-400">
            Log out
          </Link>
          )
        </p>
        <p className="mt-2">
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>
      </div>
    </AccountLayout>
  );
};

export default Dashboard;
