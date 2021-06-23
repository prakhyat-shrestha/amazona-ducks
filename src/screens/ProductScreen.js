import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import { detailsProduct } from "../actions/productActions";
import ShowImage from "../components/ShowImage";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="text-green-600">In Stock</span>
    ) : (
      <span className="text-red-600">Out of Stock </span>
    );
  };

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <Layout>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="red">{error}</MessageBox>
      ) : (
        <Fragment>
          {/* breadcrumbs */}
          <div className="container py-4 flex items-center gap-3">
            <Link to="/" className="text-primary text-base">
              <i className="fas fa-home" />
            </Link>
            <span className="text-sm text-gray-400">
              <i className="fas fa-chevron-right" />
            </span>
            <p className="text-gray-600 font-medium">Product view</p>
          </div>
          {/* breadcrumbs end */}

          <div className="container grid grid-cols-2 gap-6">
            <div>
              {/* <img
          src="/images/products/product9.jpg"
          className="w-full"
          alt="imag"
        /> */}
              <ShowImage item={product} url="product" />
            </div>

            <div>
              <h2 className="text-3xl font-medium uppercase mb-2">
                {product.name}
              </h2>
              <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 reviews)</div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                  <span>Availability:</span>
                  {showStock(product.quantity)}
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Brand:</span>
                  <span className="text-gray-600">Apex</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Category:</span>
                  <span className="text-gray-600">
                    {product.category && product.category.name}
                  </span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">SKU:</span>
                  <span className="text-gray-600">NFDFDI</span>
                </p>
              </div>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-2xl text-primary font-semibold">
                  ${product.price}
                </p>
                <p className="text-base text-gray-400 line-through">$55.00</p>
              </div>
              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia modi repellat asperiores debitis quas ea.
              </p>

              {/* size filter */}
              <div className="pt-4">
                <h3 className="text-sm text-gray-800 mb-1 uppercase font-medium">
                  Size
                </h3>
                <div className="flex items-center gap-2">
                  {/* single size */}
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xs"
                    />
                    <label
                      htmlFor="size-xs"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      XS
                    </label>
                  </div>
                  {/* single size end*/}
                  {/* single size */}
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-s"
                    />
                    <label
                      htmlFor="size-s"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      S
                    </label>
                  </div>
                  {/* single size end*/}
                  {/* single size */}
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-m"
                    />
                    <label
                      htmlFor="size-m"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      M
                    </label>
                  </div>
                  {/* single size end*/}
                  {/* single size */}
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-l"
                    />
                    <label
                      htmlFor="size-l"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      L
                    </label>
                  </div>
                  {/* single size end*/}
                  {/* single size */}
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xl"
                    />
                    <label
                      htmlFor="size-xl"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      XL
                    </label>
                  </div>
                  {/* single size end*/}
                </div>
              </div>
              {/* size filter end */}
              {/* quantity */}
              <div className="mt-4">
                <h3 className="text-sm text-gray-800 mb-1 uppercase font-medium">
                  Quantity
                </h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                  <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                    -
                  </div>
                  <div className="h-8 w-8 text-base flex items-center justify-center">
                    4
                  </div>
                  <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                    +
                  </div>
                </div>
              </div>
              {/* quantity end */}

              {/* cart button */}
              <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <a
                  href
                  className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
                >
                  <i className="fas fa-shopping-bag" />
                  Add to cart
                </a>
                <a
                  href
                  className=" border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2  hover:text-primary transition"
                >
                  <i className="fas fa-heart" />
                  Wishlist
                </a>
              </div>
              {/* cart button end */}
            </div>
          </div>

          {/* product details */}
          <div className="container pb-16">
            <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
              Description
            </h3>
            <div className="w-3/5 pt-6">
              <div className="text-gray-600 space-y-3">
                {product.description}
              </div>
              {/* table */}
              <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tbody>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Color
                    </th>
                    <td className="py-2 px-4 border border-gray-300 ">
                      Black, Brown, Red
                    </td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Material
                    </th>
                    <td className="py-2 px-4 border border-gray-300 ">
                      Artificial Leather
                    </td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Weight
                    </th>
                    <td className="py-2 px-4 border border-gray-300 ">55 kg</td>
                  </tr>
                </tbody>
              </table>
              {/* table end */}
            </div>
          </div>
        </Fragment>
      )}
    </Layout>
  );
};

export default ProductScreen;
