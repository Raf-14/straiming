import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoritePagesProps } from '../types/interfaces';


const Barre:FC<FavoritePagesProps> = ({ title, buttonText, buttonLink }) => {
  return (
    <div className="flex items-center w-full h-10 gap-5 mt-5 md:justify-between">
      <h2 className="font-bold text-white text-md md:text-2xl">{title}</h2>
      <Link to={buttonLink} className="flex items-center justify-center w-24 h-10 text-sm text-white duration-300 bg-gray-600 rounded-full cursor-pointer md:text:md hover:bg-gray-500 transition-bg">
          {buttonText}
      </Link>
    </div>
  );
}

export default Barre;
