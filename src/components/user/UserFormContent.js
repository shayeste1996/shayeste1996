import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { connect } from "react-redux";
import * as Actions from "../store/actions/index";
import axios from "axios";
const UserFormContent = (props) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  const submitHandler = (data) => {
    // console.log(data.email, data.password);
    // props.onAuth(data.email, data.password);
    const authData = {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    };
    let myData = new FormData();
    myData.set("username", "admin");
    myData.set("password", "ehllow");
    axios({
      method: "post",
      url:
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHyyAO8yz_op-wB9Nc1Iipow90F_REAYg",
      data: myData,
      config: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    // const headers = { "Content-Type": " application/json" };

    // axios
    //   .post(
    //     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHyyAO8yz_op-wB9Nc1Iipow90F_REAYg  ",

    //     authData,
    //     { headers: headers }
    //   )
    //   .then((response) => {
    //     // Handle success.
    //     console.log("Well done!");
    //     console.log("User profile", response.data.user);
    //     console.log("User token", response.data.jwt);
    //   })
    //   .catch((error) => {
    //     // Handle error.
    //     console.log("An error occurred:", error);
    //   });
  };
  return (
    <form
      className="w-full max-w-sm text-right"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="md:flex md:items-center mb-6">
        <label
          className="w-full block text-gray-500 font-bold md:text-right mt-3 mb-1 md:mb-0 
              pr-4"
          htmlFor="email"
        >
          ایمیل یا شماره موبایل
        </label>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-full">
          <StyledInput
            className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded
               w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
                "
            name="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "ایمیل یا شماره موبایل نامعتبر است",
              },
            })}
            isError={errors.email}
          />
          {errors.email && (
            <div className="text-red-600">{errors.email.message}</div>
          )}
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <label
          className="w-full block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="inline-username"
        >
          رمز عبور
        </label>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-full">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 
              rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
              focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="******************"
            name="password"
            ref={register({ required: true })}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <span className="text-sm">مرا به خاطر داشته باش</span>
          <Checkbox
            className="mr-2 leading-tight form-checkbox"
            type="checkbox"
          />
        </label>
      </div>
      <div className="md:flex md:items-center justify-center">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 
                focus:shadow-outline focus:outline-none text-xl text-white font-bold py-2
                px-4 rounded"
          type="submit"
        >
          ورود
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(Actions.auth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(UserFormContent);

const StyledInput = styled.input`
  border: 2px solid ${(props) => (props.isError ? "red" : "transparent")};
  &:focus {
    border: 2px solid ${(props) => (props.isError ? "red" : "#9f7aea")};
  }
`;
const Checkbox = styled.input`
  border: 2px solid red;
`;
