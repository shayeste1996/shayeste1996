import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
  const requestData = axios.get("http://localhost:1337/products");
  return dispatch =>
    requestData.then(response =>
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      })
    );
};
