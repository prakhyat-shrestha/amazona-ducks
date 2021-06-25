import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/orderActions";
import Layout from "../layouts/Layout";
import { getCart } from "../utils/cartHelpers";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

const CheckoutScreen = (props) => {
  const [items, setItems] = useState([]);

  const userSignin = useSelector((state) => state.userSignin);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const getTotal = () => {
    let total = items.reduce((a, c) => a + c.price * c.count, 0);

    return total;
  };

  const { userInfo } = userSignin;

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!userInfo) {
    props.history.push("/signin");
  }

  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log("place order button clicked");

    const createOrderData = {
      products: items,
      amount: getTotal(),
      address: address,
    };

    console.log("create order data", createOrderData);

    dispatch(createOrder({ order: createOrderData }));
  };

  const checkoutInfo = () => (
    <div className="container">
      <div className="flex justify-between pb-16 mt-10">
        <div className="w-3/5">
          <h1 className="text-2xl pb-3 text-left font-bold">
            Shipping Address
          </h1>
          <form action="" className="w-full mx-auto ">
            <div className="flex flex-col space-y-4">
              <div className="block mt-5">
                <label
                  htmlFor="fullname"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Full Name *
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder=""
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                ></input>
              </div>
              <div className="block">
                <label
                  htmlFor="address"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Address *
                </label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  type="text"
                  id="address"
                  name="address"
                  placeholder=""
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                ></input>
              </div>
              <div className="flex gap-3">
                <div className="w-full w-1/2">
                  <label
                    htmlFor="city"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    City/Town *
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    type="text"
                    id="city"
                    name="city"
                    placeholder=""
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  ></input>
                </div>
                <div className="w-full w-1/2">
                  <label
                    htmlFor="postalCode"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Postcode *
                  </label>
                  <input
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    placeholder=""
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  ></input>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-full w-1/2">
                  <label
                    htmlFor="phone"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Phone/Mobile *
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder=""
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  ></input>
                </div>
                <div className="w-full w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Email *
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/3">
          <h1 className="text-2xl mb-6 text-left font-bold">Your Order</h1>
          <div className="flex items-center justify-between py-4 border-b border-gray-300 text-sm px-3 w-full font-semibold ">
            <div>Subtotal</div>
            <div>${getTotal()}</div>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-gray-300 text-sm px-3 w-full font-semibold ">
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <div className="flex items-center justify-between py-4  text-sm px-3 w-full font-semibold ">
            <div className="text-2xl">Total</div>
            <div className="text-2xl">${getTotal()}</div>
          </div>

          <div className="flex mx-6 my-5">
            <button
              onClick={submitHandler}
              className="block flex-grow  py-2 bg-black border border-black text-center text-white text-sm  px-8  rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    setItems(getCart());
  }, []);

  useEffect(() => {
    if (success) {
      props.history.push("/order-confirmed");
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return <Layout>{checkoutInfo()}</Layout>;
};

export default CheckoutScreen;
