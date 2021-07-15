import { combineReducers } from "redux";

import { cartReducer } from "./cartReducers";
import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productDeleteReducer,
  productUpdateReducer,
} from "./productReducers";
import {
  userRegisterReducer,
  userSigninReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./userReducers";
import { wishlistReducer } from "./wishlistReducers";
import {
  orderCreateReducer,
  orderMineListReducer,
  orderListReducer,
} from "./orderReducers";

// admin
import { categoryCreateReducer, categoryListReducer } from "./categoryReducers";

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
  orderList: orderListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userWishlist: wishlistReducer,
});

export default rootReducer;
