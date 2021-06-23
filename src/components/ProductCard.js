import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import { addItem } from "./cartHelpers";

const ProductCard = ({ product }) => {
  const [redirect, setRedirect] = useState(false);

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      {/* product image */}
      <div className="relative">
        {shouldRedirect(redirect)}
        {/* <img src="images/products/product9.jpg" className="full" /> */}
        <ShowImage item={product} url="product" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link
            to={`/product/${product._id}`}
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          >
            <i className="fas fa-search" />
          </Link>
          <a
            href
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          >
            <i className="far fa-heart" />
          </a>
        </div>
      </div>
      {/* product image end */}
      {/* product content */}
      <div className="pt-4 pb-3 px-4">
        <a href>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product.name}
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
          <p className="text-xl text-primary font-semibold">
            $ {product.price}
          </p>
          <p className="text-gray-400 line-through">$55.000</p>
        </div>
        <div className="flex flex-center">
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
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <button
        onClick={addToCart}
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
      >
        Add to cart
      </button>
      {/* product content end */}
    </div>
  );
};

export default ProductCard;
