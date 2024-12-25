import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = ({ user }) => {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img
              className="w-auto h-6 sm:h-7"
              src={logo}
              alt="Logo"
            />
          </NavLink>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                className={`w-6 h-6 ${!isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>

              <svg
                className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink
              exact
              to="/"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              activeClassName="text-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/colleges"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              activeClassName="text-blue-500"
            >
              Colleges
            </NavLink>
            <NavLink
              to="/admission"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              activeClassName="text-blue-500"
            >
              Admission
            </NavLink>
            <NavLink
              to="/my-college"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              activeClassName="text-blue-500"
            >
              My College
            </NavLink>
          </div>

          {/* User Profile / Cart Icon */}
          <div className="flex justify-center md:block">
            <NavLink
              to="/profile"
              className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12c2.20914 0 4-1.79086 4-4s-1.79086-4-4-4-4 1.79086-4 4 1.79086 4 4 4zM12 14c-2.67528 0-8 1.34315-8 4v2h16v-2c0-2.65685-5.32472-4-8-4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
