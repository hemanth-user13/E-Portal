import React from 'react';
import { CardProps } from './type';

const Cards: React.FC<CardProps> = ({ Cardname, CardDetails, CardButtonName }) => {
  return (
    <div className="w-64 h-50 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mx-auto flex flex-col justify-between">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{Cardname}</h2>
      <p className="text-gray-600 mb-6 flex-grow">
        {CardDetails}
      </p>
     <div>
     <a 
        href="#" 
        className="text-indigo-600 font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out"
      >
        {CardButtonName}
      </a>
     </div>
    </div>
  );
};

export default Cards;
