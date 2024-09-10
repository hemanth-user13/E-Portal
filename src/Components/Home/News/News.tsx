import styled from "styled-components";

const Newsbody = styled.div`
  @media screen and (min-width: 1500px) {
    width: 100% !important;
    height: 190% !important;
  }
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

const employeeCount = employees.length;
console.log(employeeCount);

const LatestActivity = Activity.map((items, index) => (
  <div key={index}>
    <p>{items.activityname}</p>
  </div>
));

const News = () => {
  return (
    <Newsbody>
      <div className="w-full sm:w-64 h-full sm:h-[715px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 sm:rounded-r-lg shadow-lg absolute left-0 p-6 flex flex-col items-center justify-center sm:justify-start">
        <h3 className="text-3xl sm:text-2xl text-gray-800 font-bold mb-4">
          Latest News
        </h3>
        <p className="text-gray-700 text-lg sm:text-base text-center sm:absolute sm:top-24">
          Employee Count<strong>&nbsp;&nbsp;{employeeCount}</strong>
        </p>
        <div className="mt-20 ml-8">
          <p className="">
            newly joined employees<strong>&nbsp;&nbsp;Test</strong>
          </p>
          <br></br>
          <p className="">
            Employee of the month<strong>&nbsp;&nbsp;Test</strong>
          </p>
          <br></br>
          <p className="">Latest Weekly Fun Activity: {LatestActivity}</p>
        </div>
      </div>
    </Newsbody>
  );
};

export default News;
