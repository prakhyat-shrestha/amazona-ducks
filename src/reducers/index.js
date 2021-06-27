import { combineReducers } from "redux";

import { cartReducer } from "./cartReducers";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { userRegisterReducer, userSigninReducer } from "./userReducers";
import { orderCreateReducer } from "./orderReducers";

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

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  //admin
  categoryCreate: categoryCreateReducer,
  categoryList: categoryListReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  adminProductList: adminProductListReducer,
  adminProductDetails: adminProductDetailsReducer,
});

export default rootReducer;
