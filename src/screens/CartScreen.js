import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { getCart } from "../components/cartHelpers";

const Cart = () => {
  const [items, setItems] = useState([]);
  //const [count, setCount] = useState(product.count);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => {
    return (
      <div className="container">
        <div className="flex justify-between pb-16">
          <div className="w-3/5">
            <div className="pt-10">
              <h1 className="text-2xl pb-3 text-left">Cart Items</h1>
              <div className="pt-8">
                <div className="block">
                  <div className="flex justify-between border-b border-gray-darker">
                    <div className="w-1/2 pl-8 pb-2">
                      <span text-sm uppercase>
                        Product Name
                      </span>
                    </div>
                    <div className="w-1/4 pb-2 text-right mr-12">
                      <span text-sm uppercase>
                        Quantity
                      </span>
                    </div>
                    <div className="w-1/4 pb-2 text-right mr-12">
                      <span text-sm uppercase>
                        Price
                      </span>
                    </div>
                  </div>
                </div>

                {items.map((product, i) => (
                  <div className="py-3 border-b border-grey-300 flex flex-row justify-between items-center mb-0">
                    <i className="fas fa-times text-grey-300 text-xl mr-6 cursor-pointer"></i>
                    <div className="w-1/2 flex items-center border-b-0 border-grey-300 pt-0 pb-0 text-left">
                      <div className="w-20 mx-0 relative pr-0">
                        <div className="h-20 rounded flex items-center justify-center">
                          <div className="aspect-w-1 aspect-h-1 w-full">
                            <img
                              src="https://d33wubrfki0l68.cloudfront.net/be38c60bf34b2376b393e444d2da9a6b2dd54bf4/f1dfc/assets/img/unlicensed/shoes-3.png"
                              alt="product image"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="text-base mt-2 ml-4">
                        {product.name}
                      </span>
                    </div>

                    <div className="w-1/4 text-center border-b-0 border-grey-300 pb-0">
                      <div className="mx-auto mr-8 xl:mr-4">
                        <div className="flex justify-center">
                          <input
                            type="number"
                            id="quantity-form-desktop"
                            className="form-input form-quantity rounded-r-none w-16 py-0 px-2 text-center"
                            placeholder="1"
                          />
                          {/* <div className="flex flex-col">
                            <span className="px-1 bg-white border border-l-0 border-grey-darker flex-1 rounded-tr cursor-pointer">
                              <i className="fas fa-arrow-up text-xs text-primary pointer-events-none" />
                            </span>
                            <span className="px-1 bg-white flex-1 border border-t-0 border-l-0 rounded-br border-grey-darker cursor-pointer">
                              <i className="fas fa-arrow-down text-xs text-primary pointer-events-none" />
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="w-1/4 text-right pr-10  pb-4">
                      <span className="">$1045</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-gray-100 py-8 px-8">
              <h4 className="text-gray-600 text-2xl pb-3  ">Cart Totals</h4>

              <div className="mb-12 pt-4">
                <p className="text-gray-600 pt-1 pb-2">Cart Total</p>
                <div class="border-b border-gray-500 pt-2 pb-1 flex justify-between">
                  <span>Coupon applied</span>
                  <span>-$36</span>
                </div>
                <div class="pt-3 flex justify-between">
                  <span>Total</span>
                  <span>$200</span>
                </div>
              </div>

              <button class="block w-full py-2 bg-primary border border-primary text-center text-white px-8 rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const cartBreadcrumbs = () => (
    <div className="container py-4 flex items-center gap-3">
      <a href="/" className="text-primary text-base" alt="bread">
        <i className="fas fa-home" />
      </a>
      <span className="text-sm text-gray-400">
        <i className="fas fa-chevron-right" />
      </span>
      <p className="text-gray-600 font-medium">Cart</p>
    </div>
  );

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <Layout>
      {cartBreadcrumbs()}
      {items.length > 0 ? showItems(items) : noItemsMessage()}
    </Layout>
  );
};

export default Cart;
