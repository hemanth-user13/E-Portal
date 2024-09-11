// import React, { useState } from 'react';
import styled from "styled-components";
import Employeeicon from '../../../assets/noun-employee-5763079.png';
import Developericon from '../../../assets/icons8-developer-64.png';

const Newsbody = styled.div`
  @media screen and (min-width: 1500px) {
    width: 100% !important;
    height: 10% !important;
  }
`;

const DropdownSection = styled.div`
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
  margin-top: 5px;

  &:hover {
    background: #cbd5e0;
  }
`;

const DropdownContent = styled.div`
  padding: 10px;
 
`;

const employees = [
  {
    id: 1,
    name: "Hemanth",
    designation: "Software Developer",
    age: 22,
    town: "Hyderabad",
  },
  {
    id: 2,
    name: "Aisha",
    designation: "Project Manager",
    age: 29,
    town: "Bangalore",
  },
  {
    id: 3,
    name: "Rohan",
    designation: "Data Analyst",
    age: 26,
    town: "Pune",
  },
  {
    id: 4,
    name: "Neha",
    designation: "UI/UX Designer",
    age: 24,
    town: "Mumbai",
  },
  {
    id: 5,
    name: "Ankit",
    designation: "Backend Developer",
    age: 28,
    town: "Delhi",
  },
  {
    id: 6,
    name: "Priya",
    designation: "Frontend Developer",
    age: 25,
    town: "Chennai",
  },
  {
    id: 7,
    name: "Aman",
    designation: "Quality Analyst",
    age: 27,
    town: "Kolkata",
  },
  {
    id: 8,
    name: "Riya",
    designation: "Human Resources Manager",
    age: 30,
    town: "Hyderabad",
  },
  {
    id: 9,
    name: "Varun",
    designation: "DevOps Engineer",
    age: 31,
    town: "Bangalore",
  },
  {
    id: 10,
    name: "Isha",
    designation: "Business Analyst",
    age: 26,
    town: "Mumbai",
  },
  {
    id: 11,
    name: "Kunal",
    designation: "Software Architect",
    age: 34,
    town: "Delhi",
  },
  {
    id: 12,
    name: "Megha",
    designation: "Cloud Engineer",
    age: 27,
    town: "Pune",
  },
  {
    id: 13,
    name: "Arjun",
    designation: "Tech Lead",
    age: 32,
    town: "Chennai",
  },
  {
    id: 14,
    name: "Simran",
    designation: "Marketing Manager",
    age: 28,
    town: "Kolkata",
  },
  {
    id: 15,
    name: "Siddharth",
    designation: "Database Administrator",
    age: 29,
    town: "Hyderabad",
  },
];

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
  {
    id: 4,
    activityname: "Football",
    numberofparticipants: 22,
  },
  {
    id: 5,
    activityname: "Badminton",
    numberofparticipants: 10,
  },
  {
    id: 6,
    activityname: "Cricket",
    numberofparticipants: 24,
  },
  {
    id: 7,
    activityname: "Yoga",
    numberofparticipants: 15,
  },
  {
    id: 8,
    activityname: "Volleyball",
    numberofparticipants: 12,
  },
  {
    id: 9,
    activityname: "Swimming",
    numberofparticipants: 8,
  },
  {
    id: 10,
    activityname: "Hiking",
    numberofparticipants: 10,
  },
  {
    id: 11,
    activityname: "Cycling",
    numberofparticipants: 20,
  },
  {
    id: 12,
    activityname: "Tennis",
    numberofparticipants: 4,
  },
  {
    id: 13,
    activityname: "Running",
    numberofparticipants: 30,
  },
  {
    id: 14,
    activityname: "Skiing",
    numberofparticipants: 8,
  },
  {
    id: 15,
    activityname: "Dance",
    numberofparticipants: 25,
  },
];

const LatestActivity = Activity.map((items, index) => (
  <p key={index}>{items.activityname}</p>
));

const News = () => {

  return (
    <Newsbody>
      <div className="w-full lg:h-[1120px] sm:w-64 h-full sm:h-[715px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 sm:rounded-r-lg shadow-lg absolute left-0 p-6 flex flex-col items-center justify-center sm:justify-start">
        <h3 className="text-3xl sm:text-2xl text-gray-800 font-bold mb-4">
          Latest News
        </h3>
        <img src={Employeeicon} alt="Employee Icon" className="w-36 h-32 mr-2"/>
        <div className="flex items-center">
         
          <p className="text-gray-700 text-lg sm:text-base text-center">
            Employee Count<strong>&nbsp;&nbsp;{employees.length}</strong>
          </p>
        </div>

        <DropdownSection>
          <DropdownButton >
            Newly Joined Employees
          </DropdownButton>
          <DropdownContent>
            {employees.slice(0, 5).map((employee) => (
              <div key={employee.id} className="flex items-center mb-2">
                <img src={Developericon} alt="Developer Icon" className="w-8 h-8 mr-2"/>
                <p>{employee.name} - {employee.designation}</p>
              </div>
            ))}
          </DropdownContent>
        </DropdownSection>

        <DropdownSection className="mt-4">
          <DropdownButton >
            Latest Weekly Fun Activity
          </DropdownButton>
          <DropdownContent>
            {LatestActivity}
          </DropdownContent>
        </DropdownSection>
      </div>
    </Newsbody>
  );
};

export default News;
