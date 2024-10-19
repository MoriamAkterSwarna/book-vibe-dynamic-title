import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar w-full lg:w-11/12 mx-auto rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border border-primary hover:bg-primary hover:text-white mr-2 text-primary font-bold"
                      : " bg-white  hover:border hover:border-gray-600 mr-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listedBooks"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border border-primary hover:bg-primary hover:text-white mr-2 text-primary font-bold"
                      : " bg-white  hover:border hover:border-gray-600 mr-2"
                  }
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pageToRead"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white border border-primary hover:bg-primary hover:text-white mr-2 text-primary font-bold"
                      : " bg-white  hover:border hover:border-gray-600 mr-2"
                  }
                >
                  Pages to Read
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl text-primary font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border border-primary hover:bg-primary hover:text-white mr-2 text-primary font-bold"
                    : " bg-white  hover:border hover:border-gray-600 mr-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listedBooks"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border border-primary hover:bg-primary hover:text-white mr-2 text-primary font-bold"
                    : " bg-white  hover:border hover:border-gray-600 mr-2"
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pageToRead"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white border border-primary hover:bg-primary hover:text-white mr-2 text-primary font-bold"
                    : " bg-white  hover:border hover:border-gray-600 mr-2"
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="btn bg-primary mr-3 text-white hover:bg-white hover:text-black hover:outline-1 hover:border-primary">
            Sign In
          </button>
          <button className="btn bg-secondary text-white hover:bg-white hover:text-black hover:outline-1 hover:border-secondary">
            Sign Up
          </button>
        </div>
      </div>
    );
};

export default Navbar;