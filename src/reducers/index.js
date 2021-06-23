import { combineReducers } from "redux";

import { cartReducer } from "./cartReducers";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { userRegisterReducer, userSigninReducer } from "./userReducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
