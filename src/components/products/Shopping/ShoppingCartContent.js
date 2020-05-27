import React from "react";

const ShoppingCartContent = props => {
  console.log("im from ShoppingCartContent component")
  const { title, price, count, image, total } = props.shoppingProducts;

  return (
    <tr>
      <td>
        <span onClick={props.remove}>
          <a href="#d" className="close-btn">
            {" "}
          </a>
        </span>
        <span>{title}</span>
        <img
          className="inline-block h-12 w-12 mr-5"
          src={"http://localhost:1337" + image[0].url}
          alt="pic"
        />
      </td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{total}</td>
    </tr>
  );
};

export default ShoppingCartContent;
