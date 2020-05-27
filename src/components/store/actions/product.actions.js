  import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT_TO_SHOPPING_CART = "ADD_PRODUCT_TO_SHOPPING_CART";
export const ADD_PRODUCT_TO_FAVORITE_CART = "ADD_PRODUCT_TO_FAVORITE_CART";
export const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";

export const getProducts = () => {
  return (dispatch) =>
    axios.get("http://localhost:1337/products").then((response) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
        loading: false,
      })
    );
};

export const addToShoppingCart = (id) => {
  return {
    type: ADD_PRODUCT_TO_SHOPPING_CART,
    id: id,
  };
};
export const addToFavoriteCart = (id) => {
  return {
    type: ADD_PRODUCT_TO_FAVORITE_CART,
    id: id,
  };
};
export const removeFromShoppingCart = (id) => {
  return {
    type: REMOVE_FROM_SHOPPING_CART,
    id: id,
  };
};
