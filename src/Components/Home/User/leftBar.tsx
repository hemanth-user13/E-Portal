import { Link } from "react-router-dom";

const LeftBar = () => {
    return (
      <div className="w-full sm:w-64 h-[700px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 sm:rounded-l-lg shadow-lg absolute right-0 p-6 flex flex-col items-center justify-center sm:justify-start">
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
        </div>
      </div>
    );
  };
  
  export default LeftBar;
  