import React from "react";
import Welcome from "./welcome";
import { Link } from "react-router-dom";
const HeaderAdminPage = () => {
  return (
    <>
      <div className="px-10 h-[80px] flex justify-between items-center bg-[#39c0ed]">
        <Link to="/">
          <div className="text-lg font-bold text-[#fff]">
            <img
              className="w-[150px]"
              src={`${process.env.PUBLIC_URL}/tech_over_flow.png`}
              alt=""
            />
          </div>
        </Link>
        <div className="">
          <Link to="/">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-transparent text-[#fff] font-semibold hover:font-semibold text-xs leading-tight uppercase rounded hover:text-[#39c0ed] active:text-[#39c0ed] focus:text-[#39c0ed] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            >
              HOME
            </button>
          </Link>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-transparent text-[#fff] font-semibold hover:font-semibold text-xs leading-tight uppercase rounded hover:text-[#39c0ed] active:text-[#39c0ed] focus:text-[#39c0ed] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            ADD JOBS
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-transparent text-[#fff] font-semibold hover:font-semibold text-xs leading-tight uppercase rounded hover:text-[#39c0ed] active:text-[#39c0ed] focus:text-[#39c0ed] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            MY JOBS
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-transparent text-[#fff] font-semibold hover:font-semibold text-xs leading-tight uppercase rounded hover:text-[#39c0ed] active:text-[#39c0ed] focus:text-[#39c0ed] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            EMPLOYEES
          </button>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-transparent text-[#fff] font-semibold hover:font-semibold text-xs leading-tight uppercase rounded hover:text-[#39c0ed] active:text-[#39c0ed] focus:text-[#39c0ed] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            PROFILE
          </button>
          <Link to="/Login">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-transparent text-[#fff] font-semibold hover:font-semibold text-xs leading-tight uppercase rounded hover:text-[#39c0ed] active:text-[#39c0ed] focus:text-[#39c0ed] hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            >
              LOGOUT
            </button>
          </Link>
        </div>
      </div>
      <Welcome />
    </>
  );
};

export default HeaderAdminPage;
