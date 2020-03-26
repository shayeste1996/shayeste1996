import React from "react";

const Heart = (props) => {
  return (
    <>
    <svg
      className="h-5 w-5 m-3 fill-current cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      onClick={props.btn}
    >
      <path d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61z" />
    </svg>
    </>
  );
};

export default Heart;
