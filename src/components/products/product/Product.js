import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/index";
import Heart from "../../UI/icons/Heart";
import ShoppingCart from "../../UI/icons/ShoppingCart";
const Product = props => {
  console.log("im from Product component");
  const { addToFavoriteCart, addToShoppingCart } = props;
  const { title, price, image, id } = props.product;

  return (
    <>
      <div className="relative w-1/4 hover:bg-gray-100 rounded overflow-hidden shadow-lg m-5">
        <img
          src={"http://localhost:1337" + image[0].url}
          alt="pic"
          className="w-full p-3"
          onClick={props.clicked}
        />
        <div className="px-6 py-4 text-right">
          <div className="font-bold text-xl mb-2">: {title}</div>
          <p className="text-gray-500 text-base">: {price} مشخصات محصول</p>
          <div className="flex">
            <Heart clicked={() => addToFavoriteCart(id)} />
            <ShoppingCart clicked={() => addToShoppingCart(id)} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToShoppingCart: id => dispatch(Actions.addToShoppingCart(id)),
    addToFavoriteCart: id => dispatch(Actions.addToFavoriteCart(id))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Product);
