import * as Actions from "../actions/index";

const initialState = {
  product: [],
  shoppingCartProduct: [],
  favoriteCartProduct: [],
  isLoading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_PRODUCTS: {
      return {
        ...state,
        product: action.payload,
        isLoading: action.loading,
      };
    }
    case Actions.ADD_PRODUCT_TO_SHOPPING_CART: {
      let mainProducts = [...state.product];
      let updatedProduct = state.shoppingCartProduct;
      let findProduct = mainProducts.find((item) => item.id === action.id);
      let findIdInFavorite = updatedProduct.find(
        (item) => item.id === action.id
      );
      if (findIdInFavorite) {
        console.log("exists");
      } else {
        findProduct.count = 1;
        const price = findProduct.price;
        findProduct.total = findProduct.count * price;
        mainProducts = [...state.shoppingCartProduct, findProduct];
      }
      return {
        ...state,
        shoppingCartProduct: mainProducts,
      };
    }
    case Actions.ADD_PRODUCT_TO_FAVORITE_CART: {
      let mainProducts = [...state.product];
      let updatedProduct = state.favoriteCartProduct;
      let findProduct = mainProducts.find((item) => item.id === action.id);
      let findIdInFavorite = updatedProduct.find(
        (item) => item.id === action.id
      );
      if (findIdInFavorite) {
        console.log("exists favorite");
      } else {
        updatedProduct = [...updatedProduct, findProduct];
      }
      return {
        ...state,
        favoriteCartProduct: updatedProduct,
      };
    }
    case Actions.REMOVE_FROM_SHOPPING_CART: {
      let shopCart = [...state.shoppingCartProduct];
      let updatedShopCart = shopCart.filter((item) => item.id !== action.id);

      return {
        ...state,
        shoppingCartProduct: [...updatedShopCart],
      };
    }

    default: {
      return state;
    }
  }
};
export default productReducer;
