import React, { useEffect, useState } from "react";
import Product from "./product/Product";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
import * as Actions from "../store/actions/index";
const override = css`
  margin:10% 0;
`;
const Products = props => {
  const { getProduct, productData, loading } = props;
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <FadeLoader
          css={override}
          size={20}
          color={"#D736CE"}
          loading={loading}
          height={45}
          margin={40}
          width={12}
          />
        ) : (
          productData.map(product => (
            <Product key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    productData: state.product,
    loading: state.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProduct: () => dispatch(Actions.getProducts())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
