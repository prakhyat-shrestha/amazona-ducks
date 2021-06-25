import { combineReducers } from "redux";

import { cartReducer } from "./cartReducers";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { userRegisterReducer, userSigninReducer } from "./userReducers";
import { orderCreateReducer } from "./orderReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
});

export default rootReducer;
