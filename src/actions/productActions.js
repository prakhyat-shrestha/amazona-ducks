import Axios from "axios";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

import { API } from "../config";

export const listProducts = (sortBy) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `${API}/products?sortBy=${sortBy}&order=desc&limit=6`
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

// list by products sold or sale
// export const listProductsBySale = () => async (dispatch) => {
//   dispatch({
//     type: PRODUCT_LIST_BY_SALE_REQUEST,
//   });
//   try {
//     const { data } = await Axios.get("/api/products");
//     dispatch({ type: PRODUCT_LIST_BY_SALE_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_LIST_BY_SALE_FAIL, payload: error.message });
//   }
// };

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`${API}/product/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
