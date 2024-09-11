import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FixedNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2d3748; 
  z-index: 1000; 
`;

interface NavBarProps {
  pageName: string;
}

const Navbar: React.FC<NavBarProps> = ({ pageName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const username = localStorage.getItem("firstName");

  return (
    <FixedNavbar>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-left">
                <p className="text-white text-2xl font-serif mr-72">
                  E-Portal {pageName ? pageName : ""}
                </p>
                {username && (
                  <p className="text-white ml-[600px]">Welcome {username}</p>
                )}
              </div>
            </div>
            <div className="">
              {username && (
                <button
                  onClick={handleLogout}
                  className="ml-[200px] rounded-md p-2 bg-slate-500 hover:bg-slate-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </FixedNavbar>
  );
};

export default Navbar;
