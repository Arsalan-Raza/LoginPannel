import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
const SignUp = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const SignUp = async () => {
    let item = { Name, Email, Password };
    console.warn(item);

    let result = await fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn("this is result", result);
  };
  return (
    <>
      <Header />
      <div className="mx-auto my-20 w-[25%] h-[auto] block p-[60px] rounded-lg drop-shadow-2xl bg-white max-w-sm">
        <form className>
          <h1 className="text-[3rem] text-[#39c0ed] text-center">Sign Up</h1>
          <div className="flex justify-center">
            <div className="mt-3 w-full">
              <select
                className="form-control
                 h-[50px]
           block
           w-full
           px-5
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="1">User</option>
                <option value="2">Admin</option>
              </select>
            </div>
          </div>
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
              placeholder="Enter Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

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
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
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
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <Link to="/adminPage">
            <button
              type="submit"
              className="
      w-full
      px-6
      mt-5
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
              onClick={SignUp}
            >
              Sign in
            </button>
          </Link>
          <button
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
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
