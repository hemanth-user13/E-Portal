import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Helpers/SearchBar";
import { RiApps2Fill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbReceiptTax } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { LuBaggageClaim } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

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

const UserLargeModal = styled.div`
   @media screen and (min-width: 1700px) {
   position: absolute;
   left: 160px;
   top: -20px;
  }
`

const AppFeatures = styled.div`
   @media screen and (min-width: 1700px) {
   position: absolute;
   left: 1390px;
   top: -0px;
  }
`
const AppStyle = styled.div`
  position: absolute;
  top: 15px;
  right: -20px;
  color: #9e9c9c;

  svg {
    width: 30px;  
    height: 40px; 
  }
`;

const DarknLightModeStyle = styled.div`
  position: absolute;
  top: 15px;
  right: -65px;
  color: #9e9c9c;

  svg {
    width: 30px;  
    height: 40px; 
  }
`
const NotificationStyle = styled.div`
   position: absolute;
  top: 15px;
  right: 20px;
  color: #9e9c9c;

  svg {
    width: 30px;  
    height: 40px; 
  }
`

const AppIconsStyle = styled.div`
  svg{
    width: 60px;  
    height: 40px; 
  }
`



interface NavBarProps {
  pageName: string;
}


const Navbar: React.FC<NavBarProps> = ({ pageName }) => {
  const [UserModal, setUserModal] = useState(false);
  const [AppModal, setAppModal] = useState(false)
  const [Mode,SetMode]=useState(false)

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    navigate("/");
  };

  const username = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  const UserAvatar = () => {
    return (
      <UserLargeModal>
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
      </UserLargeModal>

    );
  };

  const handleUserAvatarModal = () => {
    setUserModal((prev) => !prev);
  };

  const handleAppModal = () => {
    setAppModal((prev) => !prev)
  }
  const handledarknLight=()=>{
    return (
      <div>
        {Mode?<MdLightMode/>:<MdLightMode/>}
      </div>
    )
  }

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
              </div>
            </div>
            <AppFeatures>
              <NotificationStyle>
                <IoIosNotifications />
              </NotificationStyle>
              <div onClick={handleAppModal}>
                <AppStyle>
                  <RiApps2Fill />
                </AppStyle>
              </div>
             <div onClick={handledarknLight}>
             <DarknLightModeStyle>
                <MdDarkMode />
              </DarknLightModeStyle>
             </div>
            </AppFeatures>
            <div className="absolute right-[-120px]" onClick={handleUserAvatarModal}>
              <UserAvatar />
            </div>
          </div>
        </div>
      </nav>

      {UserModal && (
        <div className="w-36 absolute top-16 right-4 bg-white shadow-md rounded-md p-6">
          {username ? (
            <ul>
              <li className="py-2">{lastName}</li>
              <li className="py-2">Dashboard</li>
              <li className="py-2">Settings</li>
              <button
                onClick={handleLogout}
                className="mr-1 py-2 bg-slate-50 hover:bg-slate-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                Sign Out
              </button>
            </ul>
          ) : (<p className="">Please Login</p>)}
        </div>
      )}

      {AppModal && (
        <div className="w-[350px] h-[300px] absolute top-16 right-4 bg-white shadow-md rounded-md p-6">
          <div className="grid grid-cols-3 gap-7">
            <AppIconsStyle>
              <Link to="e-portal/UserAccount">
              <div className="flex flex-col items-center">
                <RiAccountCircleFill />
                <span>Account</span>
              </div>
              </Link>
            </AppIconsStyle>
            <AppIconsStyle>
              <div className="flex flex-col items-center">
                <MdHolidayVillage />
                <span>Leaves</span>
              </div>
            </AppIconsStyle>
            <AppIconsStyle>
              <div className="flex flex-col items-center">
                <MdPayment />
                <span>PaySlips</span>
              </div>
            </AppIconsStyle>
            <AppIconsStyle>
             <Link to="e-portal/postData">
             <div className="flex flex-col items-center">
                <IoShareSocialOutline />
                <span>Posts</span>
              </div>
             </Link>
            </AppIconsStyle>
            <AppIconsStyle>
              <div className="flex flex-col items-center">
                <TbReceiptTax />
                <span>Tax</span>
              </div>
            </AppIconsStyle>
            <AppIconsStyle>
              <div className="flex flex-col items-center">
                <MdOutlinePolicy />
                <span>Policies</span>
              </div>
            </AppIconsStyle>
            <AppIconsStyle>
              <div className="flex flex-col items-center">
                <IoIosSettings />
                <span>Settings</span>
              </div>
            </AppIconsStyle>
            <AppIconsStyle>
              <div className="flex flex-col items-center">
                <LuBaggageClaim />
                <span>Claims</span>
              </div>
            </AppIconsStyle>
            <AppIconsStyle>
              <div className="flex flex-col items-center">
                <SlCalender />
                <span>Calendar</span>
              </div>
            </AppIconsStyle>
          </div>
        </div>
      )}

    </FixedNavbar>
  );
};

export default Navbar;
