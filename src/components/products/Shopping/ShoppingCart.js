import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/index";
import "./Shopping.css";
import ShoppingCartContent from "./ShoppingCartContent";
import EmptyShopCart from "./EmptyShopCart";
import CheckoutBill from "./CheckoutBill";
const ShoppingCart = (props) => {
  return (
    <>
      {props.product.length === 0 ? (
        <EmptyShopCart />
      ) : (
        <div className="flex container mt-10 mx-auto">
          <div className="w-3/4 h-12 text-right">
            <table className="w-full table">
              <thead>
                <tr className="table-border p-5">
                  <th>محصول</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>جمع جزء</th>
                </tr>
              </thead>
              <tbody className="tbody-padding">
                {props.product.map((item) => (
                  <ShoppingCartContent
                    shoppingProducts={item}
                    key={item.id}
                    remove={() => props.removeFromShoppingCart(item.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-1/4 rounded shadow-lg p-5 m-5">
            <CheckoutBill />
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.shoppingCartProduct,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromShoppingCart: (id) =>
      dispatch(Actions.removeFromShoppingCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
