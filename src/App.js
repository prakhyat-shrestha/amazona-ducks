import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/checkout" component={CheckoutScreen}></Route>
        <Route path="/order-confirmed" component={OrderScreen}></Route>
        <Route path="/product/:productId" component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
