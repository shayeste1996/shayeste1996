import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/index";
import FavoriteCartContent from "./FavoriteCartContent";
const FavoriteCart = props => {
  return (
    <>
      {props.favoriteProduct.map(item => (
        <FavoriteCartContent key={item.id} item={item} />
      ))}
    </>
  );
};
const mapStateToProps = state => {
  return {
    favoriteProduct: state.favoriteCartProduct
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToFavoriteCart: () => dispatch(Actions.addToFavoriteCart)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCart);
