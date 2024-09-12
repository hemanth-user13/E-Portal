import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownSection = styled.div`
  width: 200px;
  margin-top: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownButton = styled.button`
  display: block;
  width: 100%;
  background: #e2e8f0;
  border: 1px solid #cbd5e0;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #cbd5e0;
  }
`;
const DropdownContent = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const Activity = [
  {
    id: 1,
    activityname: "Table Tennis",
    numberofparticipants: 20,
  },
  {
    id: 2,
    activityname: "Basketball",
    numberofparticipants: 12,
  },
  {
    id: 3,
    activityname: "Chess",
    numberofparticipants: 4,
  },
];
const LatestActivity = Activity.map((items, index) => (
  <p key={index}>{items.activityname}</p>
));

const LeftBar = () => {
  const [isActivityOpen, setIsActivityOpen] = useState(true);
  const toggleActivityDropdown = () => setIsActivityOpen(!isActivityOpen);
  return (
    <div className="w-full sm:w-64 lg:h-[1400px] h-[700px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 sm:rounded-l-lg shadow-lg absolute right-0 p-6 flex flex-col items-center justify-center sm:justify-start">
      <div className="sm:absolute sm:top-3 sm:left-7 text-center sm:text-left">
        <p className="text-3xl sm:text-2xl mb-4">
          <Link
            to="e-portal/login"
            target="_blank"
            className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Login
          </Link>
        </p>
        <p className="text-3xl sm:text-2xl">
          <Link
            to="e-portal/register"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Register
          </Link>
        </p>

        <div className="mt-9">
          <DropdownSection className="mt-4">
            <DropdownButton onClick={toggleActivityDropdown}>
              Latest Weekly Fun Activity
            </DropdownButton>
            <DropdownContent isOpen={isActivityOpen}>
              {LatestActivity}
            </DropdownContent>
          </DropdownSection>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
