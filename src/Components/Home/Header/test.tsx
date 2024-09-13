import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Helpers/SearchBar";

const FixedNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #2d3748; 
  z-index: 1000; 
`;

const NavBarTitle = styled.div`
  margin-left: -125px;

  @media screen and (min-width: 1700px) {
    margin-left: -320px;
  }
`;

interface NavBarProps {
  pageName: string;
}

const Navbar: React.FC<NavBarProps> = ({ pageName }) => {
  const [UserModal, setUserModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("lastName");
    navigate("/");
  };

  const username = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  const UserAvatar = () => {
    return (
      <div>
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    );
  };

  const handleUserAvatarModal = () => {
    setUserModal((prev) => !prev);
  };

  return (
    <FixedNavbar>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-left">
                <NavBarTitle>
                  <p className="text-white text-2xl font-serif mr-96">
                    E-Portal {pageName ? pageName : ""}
                  </p>
                </NavBarTitle>
                <SearchBar />
                {username && (
                  <p className="text-white ml-[500px] mt-2">Welcome {username}</p>
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
            <div className="ml-24" onClick={handleUserAvatarModal}>
              <UserAvatar />
            </div>
          </div>
        </div>
      </nav>
      {UserModal && (
        <div className="w-36 absolute top-16 right-4 bg-white shadow-md rounded-md p-6">
          <ul>
            {username && <li className="py-2">{lastName}</li>}
            <li className="py-2">Dashboard</li>
            <li className="py-2">Settings</li>
            <li className="py-2" onClick={handleLogout}>
              Sign out
            </li>
          </ul>
        </div>
      )}
    </FixedNavbar>
  );
};

export default Navbar;
