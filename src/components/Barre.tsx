import React from 'react';
import { Link } from 'react-router-dom';

interface FavoritePagesProps {
  title: string;
  buttonText: string;
  buttonLink: string;
}

const Barre: React.FC<FavoritePagesProps> = ({ title, buttonText, buttonLink }) => {
  return (
    <div className="flex justify-between items-center gap-5 mt-5">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <Link to={buttonLink} className="flex justify-center items-center w-24 h-10 cursor-pointer rounded-full text-white bg-gray-600 hover:bg-gray-500 transition-bg duration-300">
          {buttonText}
      </Link>
    </div>
  );
}

export default Barre;
