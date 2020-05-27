import React from "react";

const EmptyShopCart = () => {
  return (
    <div className="flex container justify-center mt-10">
      <div className="w-2/4  rounded  shadow-lg m-5">
          <img className="w-2/5 mx-auto" src="/dlt.png" alt=""/>
          <div className="mx-auto my-5 w-1/4">سبد خرید شما خالی است!</div>
      </div>
    </div>
  );
};

export default EmptyShopCart;
