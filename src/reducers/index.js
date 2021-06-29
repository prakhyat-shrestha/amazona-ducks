import { combineReducers } from "redux";

import { cartReducer } from "./cartReducers";
import { productListReducer, productDetailsReducer } from "./productReducers";
import {
  userRegisterReducer,
  userSigninReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./userReducers";
import { orderCreateReducer, orderMineListReducer } from "./orderReducers";

// admin
import {
  categoryCreateReducer,
  categoryListReducer,
} from "../Admin/reducers/categoryReducers";
import {
  productCreateReducer,
  productDeleteReducer,
  adminProductDetailsReducer,
  adminProductListReducer,
  productUpdateReducer,
} from "../Admin/reducers/productReducers";

import { orderListReducer } from "../Admin/reducers/orderReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderMineList: orderMineListReducer,
  //admin
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  adminProductList: adminProductListReducer,
  adminProductDetails: adminProductDetailsReducer,
  orderList: orderListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

export default rootReducer;
