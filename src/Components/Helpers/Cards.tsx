import React from "react";
import { CardProps } from "./type";
// import { Icon } from "@mui/material";

const Cards: React.FC<CardProps> = ({
  Cardicon,
  CardButtonName,
  OnCardClick,
}) => {
  const handleClick = () => {
    OnCardClick();
  };

  return (
    <div className="w-64 h-50 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mx-auto flex flex-col justify-between items-center">
      <div className="mb-4">
        {Cardicon}
      </div>
      <div>
        <button
          onClick={handleClick}
          className="text-indigo-600 font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out bg-transparent border-none cursor-pointer"
        >
          {CardButtonName}
        </button>
      </div>
    </div>
  );
};

export default Cards;
