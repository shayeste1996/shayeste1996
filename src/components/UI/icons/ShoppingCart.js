import React from "react";
const ShoppingCart = props => {
  return (
    <svg
      className="h-5 w-5 m-3 fill-current cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      onClick={props.clicked}
    >
      <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
};

export default ShoppingCart;
