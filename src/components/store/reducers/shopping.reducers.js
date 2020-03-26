import * as Actions from "../actions/index";

const initialState = {};
const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_PRODUCTS: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};
export default shoppingReducer;
