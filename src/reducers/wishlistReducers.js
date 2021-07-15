import {
  WISHLIST_ADD_ITEM_REQUEST,
  WISHLIST_ADD_ITEM_SUCCESS,
  WISHLIST_ADD_ITEM_FAIL,
  WISHLIST_GET_REQUEST,
  WISHLIST_GET_SUCCESS,
  WISHLIST_GET_FAIL,
} from "../constants/wishlistConstants";

export const wishlistReducer = (
  state = { loading: true, categories: [] },
  action
) => {
  switch (action.type) {
    case WISHLIST_GET_REQUEST:
      return { loading: true };
    case WISHLIST_GET_SUCCESS:
      return { loading: false, wishlist: action.payload };
    case WISHLIST_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
