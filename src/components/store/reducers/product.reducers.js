import * as Actions from "../actions/index";

const initialState = {
  product: []
};
const productReducer = (state = initialState, action) => {
    switch(action.type){
        case Actions.GET_PRODUCTS:{
            return {
                ...state,
                product:action.payload
            }
        }
        default:{
            return state
        }
    }
};
export default productReducer;
