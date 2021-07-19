import Axios from "axios";
import { toast } from "react-toastify";

import {
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
} from "../constants/categoryConstants";
import { API } from "../config";

export const createCategory = (category) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();

  const { user } = userInfo;

  try {
    const { data } = await Axios.post(
      `${API}/category/create/${user._id}`,
      category,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    console.log("data after category post", data);
    dispatch({
      type: CATEGORY_CREATE_SUCCESS,
      payload: data.data,
    });
    toast.dark("Category Created Successfully!");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_CREATE_FAIL, payload: message });
    toast.error("Category Created Successfully!");
  }
};

export const getCategories = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${API}/categories`);
    console.log("response", data);
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
  try {
    const { data } = await Axios.get(`${API}/category/${categoryId}`);
    dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCategory =
  (categoryId, category) => async (dispatch, getState) => {
    dispatch({ type: CATEGORY_UPDATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();

    const { user } = userInfo;

    try {
      const { data } = await Axios.put(
        `${API}/category/${categoryId}/${user._id}`,
        category,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      console.log("data after category update", data);
      dispatch({
        type: CATEGORY_UPDATE_SUCCESS,
        payload: data.data,
      });
      toast.dark("Category Updated Successfully!");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CATEGORY_UPDATE_FAIL, payload: message });
      toast.error("Category update failed!");
    }
  };

//deleteCategory

export const deleteCategory = (categoryId) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_DELETE_REQUEST, payload: categoryId });
  const {
    userSignin: { userInfo },
  } = getState();

  const { user } = userInfo;
  try {
    const { data } = Axios.delete(`${API}/category/${categoryId}/${user._id}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CATEGORY_DELETE_SUCCESS });
    toast.dark("Category deleted Successfully!");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_DELETE_FAIL, payload: message });
    toast.error("Category delete failed!");
  }
};
