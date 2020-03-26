import React from "react";
import Heart from "../../UI/icons/Heart";
import ShoppingCart from "../../UI/icons/ShoppingCart";

const Product = props => {
  const { title, price, image } = props.product;
  const onFavoriteBtn = () => console.log("favorite btn");
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
            <Heart btn={onFavoriteBtn} />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
