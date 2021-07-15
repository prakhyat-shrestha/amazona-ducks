import Axios from "axios";
import { API } from "../config";

import {
  WISHLIST_ADD_ITEM_REQUEST,
  WISHLIST_ADD_ITEM_SUCCESS,
  WISHLIST_ADD_ITEM_FAIL,
  WISHLIST_GET_REQUEST,
  WISHLIST_GET_SUCCESS,
  WISHLIST_GET_FAIL,
} from "../constants/wishlistConstants";

export const addToWishlist = (product) => async (dispatch, getState) => {
  console.log("add to wishlist actions");
  dispatch({ type: WISHLIST_ADD_ITEM_REQUEST });

  const {
    userSignin: { userInfo },
  } = getState();

  const { user } = userInfo;

  try {
    const { data } = await Axios.post(
      `${API}/user/wishlist/${user._id}`,
      product,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );

    dispatch({
      type: WISHLIST_ADD_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: WISHLIST_ADD_ITEM_FAIL, payload: message });
  }
};

export const getWishlist = () => async (dispatch, getState) => {
  const {
    userSignin: { userInfo },
  } = getState();

  const { user } = userInfo;

  dispatch({
    type: WISHLIST_GET_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${API}/user/wishlist/${user._id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log("response", data);
    dispatch({ type: WISHLIST_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: WISHLIST_GET_FAIL, payload: error.message });
  }
};
