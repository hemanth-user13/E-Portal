import { useState } from "react";
import Features from "../../Helpers/Features";
import Leaveicon from "../../../assets/leave.png";
import PolicyIcon from "../../../assets/insurance.png";
import PaySlip from "../../../assets/payslip.png";
import Claim from "../../../assets/wallet.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const LeftBar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const projects = [
    { name: "Project Alpha", status: "Current" },
    { name: "Project Beta", status: "Pending" },
    { name: "Project Gamma", status: "Completed" },
    { name: "Project Delta", status: "Pending" },
  ];
  const percentage = 66;

  return (
    <div className="w-full sm:w-64 lg:h-[1390px] h-[700px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 sm:rounded-l-lg shadow-lg absolute right-0 p-6 flex flex-col items-center justify-center sm:justify-start">
      <div className="sm:absolute sm:top-3 sm:left-7 text-center sm:text-left">
        <div className="relative size-40 mt-10 ml-5">
          <svg
            className="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-200 dark:text-neutral-700"
              strokeWidth="2"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-blue-600 dark:text-blue-500"
              strokeWidth="2"
              strokeDasharray="140"
              strokeDashoffset="65"
              strokeLinecap="round"
            ></circle>
          </svg>
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">
              75%
            </span>
          </div>
          {/* <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>; */}
          <p className="text-3xl sm:text-2xl mb-4 flex items-center justify-center">
            Attendance
          </p>
        </div>

        <div className="relative mt-20">
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center gap-x-2 py-3 px-14  text-sm font-medium rounded-lg border border-gray-200 bg-sky-700 text-gray-800 shadow-sm focus:outline-none dark:text-white dark:hover:bg-neutral-70"
            aria-haspopup="menu"
            aria-expanded={isDropdownOpen}
            aria-label="Projects Dropdown"
          >
            Projects
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute mt-2 left-0 min-w-[220px] bg-white shadow-md rounded-lg p-2 space-y-1 divide-y divide-gray-200 dark:bg-neutral-100 dark:divide-neutral-700">
              <div className="py-2">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex justify-between items-center py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 dark:text-neutral-900"
                  >
                    <span>{project.name}</span>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        project.status === "Current"
                          ? "bg-green-200 text-green-800"
                          : project.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-[750px] left-3">
        <Features icon={Leaveicon} name="Leave" />
      </div>
      <div className="absolute bottom-[700px] left-3">
        <Features name="Policy" icon={PolicyIcon} />
      </div>
      <div className="absolute bottom-[700px] left-32">
        <Features name="Claims" icon={Claim} />
      </div>
      <div className="absolute bottom-[750px] left-32">
        <Features name="PaySlips" icon={PaySlip} />
      </div>
    </div>
  );
};

export default LeftBar2;
