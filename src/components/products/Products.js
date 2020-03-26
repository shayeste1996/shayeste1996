import React, { useEffect } from "react";
import Product from "./product/Product";
import { connect } from "react-redux";
import * as Actions from "../store/actions/index";
const Products = props => {
  // const { getProduct } = props;
  // useEffect(() => {
  //   getProduct();
  // }, [getProduct]);
  console.log(props.productData);
useEffect(()=>{
  console.log(props.productData);

},[props.productData])

  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-wrap justify-center">
        {props.productData.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    productData: state.product
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProduct: () => dispatch(Actions.getProducts())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Products));
