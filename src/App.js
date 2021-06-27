import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import AdminRoute from "./utils/AdminRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderScreen from "./screens/OrderScreen";
import Dashboard from "./screens/DashboardScreen";
import AdminDashboard from "./Admin/screens/AdminDashboard";
import AddCategory from "./Admin/screens/AddCategory";
import AddProduct from "./Admin/screens/AddProduct";
import UpdateProduct from "./Admin/screens/UpdateProduct";
import ManageProducts from "./Admin/screens/ManageProducts";

function App() {
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/cart/:id?" exact component={CartScreen}></Route>
        <Route path="/checkout" exact component={CheckoutScreen}></Route>
        <Route path="/order-confirmed" exact component={OrderScreen}></Route>
        <Route
          path="/product/:productId"
          exact
          component={ProductScreen}
        ></Route>
        <Route path="/signin" exact component={SigninScreen}></Route>
        <Route path="/register" exact component={RegisterScreen}></Route>
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
