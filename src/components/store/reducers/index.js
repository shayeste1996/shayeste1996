import { combineReducers } from "redux";
import favoriteReducer from "./favorite.reducers";
import shoppingReducer from "./shopping.reducers";
import productReducer from "./product.reducers";
const reducer = combineReducers({
  favoriteReducer,
  productReducer,
  shoppingReducer
});

export default reducer;
