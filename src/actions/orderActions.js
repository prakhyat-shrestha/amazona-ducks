import Axios from "axios";

import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants";

import { API } from "../config";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
  try {
    const {
      userSignin: { userInfo },
    } = getState();

    const { user } = userInfo;

    console.log("user info token", userInfo.token);

    const { data } = await Axios.post(
      `${API}/order/create/${user._id}`,
      order,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    console.log("i triggered");
    // dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cart");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
