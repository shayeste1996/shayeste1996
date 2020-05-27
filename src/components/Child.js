import React from "react";

const Child = props => {
  console.log("child is re rendering");
  return (
    <div>
      <h1> hello {props.title} </h1>
    </div>
  );
};

export default Child;
