import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const login = () => {
  return (
    <>
      <Header />
      <div className="mx-auto my-20 h-[auto] w-[25%] block p-[60px] rounded-lg drop-shadow-2xl bg-white max-w-sm">
        <form class>
          <h1 className="text-[3rem] text-[#39c0ed] text-center">Login</h1>
          <div className="form-group ">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              {/* Email address */}
            </label>
            <input
              type="email"
              className="form-control
              h-[50px]
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              {/* Password */}
            </label>
            <input
              type="password"
              className="form-control block
              h-[50px]
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
            ></input>
          </div>
          {/* <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              ></input>
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
          </div> */}
          <Link to="/userPage">
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-[#39c0ed]
      text-white
      font-semibold
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-[#39c0ed] hover:shadow-lg hover:text-[#39c0ed] hover:bg-[#fff] hover:border-grey-300 hover:border-[1px] focus:bg-gray-100 focus:outline-none
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-[#39c0ed]
      active:text-[#fff] active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              log in
            </button>
          </Link>
          {/* <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </a>
          </p> */}{" "}
          {/* <button
            type="submit"
            className="
            flex
            justify-center
            items-center
            gap-5
      w-full
      px-6
      mt-5
      py-2.5
      bg-[#fff]
      text-[#39c0ed]
      font-semibold
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-[#39c0ed] hover:shadow-lg hover:text-[#fff] hover:border-grey-300 hover:border-[1px] focus:bg-gray-100 focus:outline-none
      focus:bg-[#39c0ed] focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-[#39c0ed]
      active:text-[#fff] active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            <FcGoogle size={20} /> Sign in with Google
          </button> */}
        </form>
      </div>
    </>
  );
};

export default login;
