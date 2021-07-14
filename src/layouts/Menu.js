import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/userActions";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ffffff" };
  } else {
    return;
  }
};

const Menu = ({ history }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(signout());
    history.push("/");
  };

  return (
    <nav className="menu-bg py-3">
      <div className="container flex ">
        {/* all category */}
        {/* <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
          <span className="text-white">
            <i className="fas fa-bars"></i>
          </span>
          <span className="capitalize ml-2 text-white">All Categories</span>
        </div> */}
        {/* all category ends*/}
        {/* navbar links */}
        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              className="text-gray-300 hover:text-white transition"
              to="/"
              style={isActive(history, "/")}
            >
              Cameras
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition"
              to="/"
              style={isActive(history, "/")}
            >
              Lenses
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition"
              to="/"
              style={isActive(history, "/")}
            >
              Camera Accessories
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition"
              to="/"
              style={isActive(history, "/")}
            >
              Lens Accessories
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition"
              to="/"
              style={isActive(history, "/")}
            >
              Lighting & Flashes
            </Link>
            <Link
              className="text-gray-300 hover:text-white transition"
              to="/"
              style={isActive(history, "/")}
            >
              Accessories
            </Link>

            <Link
              className="text-gray-300 hover:text-white transition"
              to="/shop"
              style={isActive(history, "/shop")}
            >
              Shop
            </Link>

            {/* <Link
            className="text-gray-300 hover:text-white transition relative"
            to="/cart"
            style={isActive(history, "/cart")}
          >
            Cart
            <span className="absolute -right-5 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              {itemTotal()}
            </span>
          </Link> */}

            {/* {isAuthenticated() && isAuthenticated().user.role === 0 && ( */}
            {userInfo && (
              <Link
                className="text-gray-300 hover:text-white transition"
                to="/user/dashboard"
                style={isActive(history, "/user/dashboard")}
              >
                Dashboard
              </Link>
            )}

            {!userInfo && (
              <Fragment>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  to="/signin"
                  style={isActive(history, "/signin")}
                >
                  Signin
                </Link>
                <Link
                  className="text-gray-300 hover:text-white transition"
                  to="/register"
                  style={isActive(history, "/register")}
                >
                  Register
                </Link>
              </Fragment>
            )}

            {userInfo && (
              <span
                className="text-gray-300 hover:text-white transition"
                style={{ cursor: "pointer" }}
                onClick={logoutHandler}
              >
                Log Out
              </span>
            )}
          </div>
        </div>
        {/* navbar links ends */}
      </div>
    </nav>
  );
};

export default withRouter(Menu);
