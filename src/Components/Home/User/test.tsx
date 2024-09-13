import React, { useState } from 'react';

const LeftBar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const projects = [
    { name: 'Project Alpha', status: 'Current' },
    { name: 'Project Beta', status: 'Pending' },
    { name: 'Project Gamma', status: 'Completed' },
    { name: 'Project Delta', status: 'Pending' }
  ];

  return (
    <div className="w-full sm:w-64 lg:h-[1120px] h-[700px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 sm:rounded-l-lg shadow-lg absolute right-0 p-6 flex flex-col items-center justify-center sm:justify-start">
      <div className="sm:absolute sm:top-3 sm:left-7 text-center sm:text-left">
        <div className="relative size-40 mt-10">
          <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset="65" strokeLinecap="round"></circle>
          </svg>
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">35%</span>
          </div>
          <p className="text-3xl sm:text-2xl mb-4 flex items-center justify-center">Attendance</p>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={toggleDropdown}
            className="bg-gray-800 text-white text-xl py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            Projects
          </button>
          {isDropdownOpen && (
            <div className="mt-4 bg-white shadow-lg rounded-lg p-4 absolute top-full left-0 w-full max-w-xs">
              <h3 className="text-lg font-semibold mb-2">Project List</h3>
              <ul className="space-y-2">
                {projects.map((project, index) => (
                  <li key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
                    <span>{project.name}</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${project.status === 'Current' ? 'bg-green-200 text-green-800' : project.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'}`}>
                      {project.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">Employee Details</h3>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-xl font-medium">Name: John Doe</p>
            <p className="text-xl font-medium">Position: Software Engineer</p>
            <p className="text-xl font-medium">Department: Development</p>
            <p className="text-xl font-medium">Employee ID: 123456</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBar2;
