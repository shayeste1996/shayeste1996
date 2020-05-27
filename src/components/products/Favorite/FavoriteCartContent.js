import React from "react";

const FavoriteCartContent = props => {
  const { title, price, description } = props.item;
  return <div>{title}</div>;
};

export default FavoriteCartContent;
