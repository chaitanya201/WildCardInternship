import React, { useState } from "react";
import pic from "../Images/instagram-icon.png";

import { Link } from "react-router-dom";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="py-4 static  left-2 ">
      <div className=" fixed  top-0  left-1/2">
        <img src={pic} alt="Logo" height={"40"} width={"40"} />
      </div>
      <nav
        className="flex flex-wrap
          items-center
          lg:flex
          justify-between
          w-full
          py-4
          top-100
          md:py-0
          px-4
          text-lg text-gray-700
          bg-green-400"
      >
        <svg
          xmlns="<http://www.w3.org/2000/svg>"
          id="menu-button"
          className="h-6 w-6 cursor-pointer "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {toggle ? (
          <div
            className="hidden w-full md:flex md:items-center md:w-auto "
            id="menu"
           >
            <ul
              className="
              text-base text-gray-700
              pt-4
              md:py-0
              md:flex-col
              md:justify-between
              md:pt-0"
            >
              <li>
                <Link
                  className="md:p-4 py-2 block hover:text-purple-400"
                  to="/albums"
                >
                  Albums
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 py-2 block hover:text-purple-400"
                  to="/posts"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  className="md:p-4 py-2 block hover:text-purple-400"
                  to="/users"
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
    </div>
  );
}
