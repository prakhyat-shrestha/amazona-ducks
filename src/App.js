import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./utils/PrivateRoute";
import AdminRoute from "./utils/AdminRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShopScreen from "./screens/ShopScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderScreen from "./screens/OrderScreen";
import Dashboard from "./screens/DashboardScreen";
import AdminDashboard from "./screens/admin/AdminDashboard";
import AddCategory from "./screens/admin/AddCategory";
import ManageCategory from "./screens/admin/ManageCategory";
import UpdateCategory from "./screens/admin/UpdateCategory";
import AddProduct from "./screens/admin/AddProduct";
import UpdateProduct from "./screens/admin/UpdateProduct";
import ManageProducts from "./screens/admin/ManageProducts";
import Orders from "./screens/admin/Orders";
import ProfileScreen from "./screens/ProfileScreen";
import WishlistScreen from "./screens/WishlistScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";

//other pages
import TermsScreen from "./screens/others/TermsScreen";

toast.configure();

function App() {
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
        <Route path="/shop" exact component={ShopScreen}></Route>
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/profile/:userId" exact component={ProfileScreen} />
        <PrivateRoute path="/wishlist/" exact component={WishlistScreen} />
        <PrivateRoute
          path="/user/orders"
          exact
          component={OrderHistoryScreen}
        />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/admin/categories" exact component={ManageCategory} />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/orders" exact component={Orders} />

        <Route path="/terms" exact component={TermsScreen} />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
