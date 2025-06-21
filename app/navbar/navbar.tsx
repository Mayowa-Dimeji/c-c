import React, { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isBreadcrumbsVisible, setIsBreadcrumbsVisible] = useState(false);

  return (
    <nav className="relative bg-white text-black p-4">
      {/* Full navbar for large screens */}
      <section className="hidden lg:flex justify-between">
        <section className="text-xl font-bold">
          <img
            className="w-20"
            src="https://img1.wsimg.com/isteam/ip/0ab55911-5fb7-43f7-88f1-d2a1e8a6409a/C%26C%20Consluting%20Logo.png/:/rs=w:262,h:262,cg:true,m/cr=w:262,h:262/qt=q:95"
            alt="candclogo"
          />
        </section>
        <section className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-400">
            Jobs
          </NavLink>
        </section>
      </section>

      {/* Breadcrumbs for small screens */}
      <section className="lg:hidden flex justify-between">
        <section className="text-xl font-bold">
          <img
            className="w-14"
            src="https://img1.wsimg.com/isteam/ip/0ab55911-5fb7-43f7-88f1-d2a1e8a6409a/C%26C%20Consluting%20Logo.png/:/rs=w:262,h:262,cg:true,m/cr=w:262,h:262/qt=q:95"
            alt="candclogo"
          />
        </section>
        <button
          // className="text-gray-300"
          onClick={() => setIsBreadcrumbsVisible(!isBreadcrumbsVisible)}
        >
          {/* {isBreadcrumbsVisible ? "Hide Breadcrumbs" : "Show Breadcrumbs"} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </section>

      {/* Breadcrumbs display */}
      {isBreadcrumbsVisible && (
        <section className="absolute inset-0 bg-white bg-opacity-50 z-10">
          <section className="flex justify-between items-center p-4">
            <section className="text-xl text-white">
              <NavLink to="/" className="text-gray-300">
                Home
              </NavLink>
              <span className="text-gray-300"> / </span>
              <NavLink to="/about" className="text-gray-300">
                Jobs
              </NavLink>
            </section>
          </section>
        </section>
      )}
    </nav>
  );
}

export default Navbar;
