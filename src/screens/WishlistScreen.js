import React, { Fragment, useEffect } from "react";
import { getWishlist } from "../actions/wishlistActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ShowImage from "../components/ShowImage";

const Wishlist = () => {
  const wishList = useSelector((state) => state.userWishlist);

  const { loading, error, wishlist } = wishList;

  const dispatch = useDispatch();

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    dispatch(getWishlist());
  };

  console.log("wishlist user", wishlist);

  const textTruncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };

  return (
    <Layout>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="red">{error}</MessageBox>
      ) : (
        <Fragment>
          {/* Headings and Sub headings */}
          <div className="container py-5 px-5">
            <h2 className="text-2xl font-normal  mb-2">My Wishlist</h2>
            <h2 className="text-base font-light border-b border-gray-300 pb-3 mb-2">
              Manage your Wishlist
            </h2>
          </div>
          {/* Headings and Sub headings end */}

          {/* wishlist items */}

          {wishlist &&
            wishlist.wishlist.map((p) => (
              <div className=" container border border-gray-100 shadow rounded mb-2 p-2">
                <div className="container grid grid-cols-6">
                  <div className="col-span-1 ">
                    <ShowImage item={p} url="product" />
                  </div>
                  <div className="col-span-5 pl-2 ml-5">
                    <h2 className="text-base font-medium capitalize mb-1">
                      {p.name}
                    </h2>
                    <h2 className="text-base font-normal mb-5">
                      {textTruncate(p.description)}
                    </h2>
                    <h2 className="text-sm font-normal text-gray-400 mb-3">
                      $ {p.price}
                    </h2>

                    <a
                      href
                      className="bg-primary border border-primary text-white px-4 py-2 text-xs font-medium rounded uppercase  gap-2 hover:bg-transparent hover:text-primary transition"
                    >
                      Remove from Wishlist
                    </a>
                  </div>
                </div>
              </div>
            ))}

          {/* wishlist items end */}
        </Fragment>
      )}
    </Layout>
  );
};

export default Wishlist;
