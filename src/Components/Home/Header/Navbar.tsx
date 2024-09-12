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

const NavBarTitle=styled.div`
  margin-left:-125px;

  @media screen and (min-width: 1700px) {
    margin-left:-320px;

  }
  
`

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
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-left">
               <NavBarTitle>
               <p className="text-white text-2xl font-serif mr-40">
                  E-Portal {pageName ? pageName : ""}
                </p>
               </NavBarTitle>
                {username && (
                  <p className="text-white ml-[710px]">Welcome {username}</p>
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
