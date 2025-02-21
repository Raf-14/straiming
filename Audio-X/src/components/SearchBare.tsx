import React from "react";
import { Input } from "./Input";
import { Link } from "react-router-dom";



export const SearchBarre: React.FC= () => {
    return(
        <div className="md:w-full p-5 container-filtre flex md:justify-between md:items-center">
         <div className="Search w-70  h-12 md:h-16 md:ml-8 md:w-4xl flex md:jutsity-center md:items-center border-2 border-gray-700 p-5 rounded-xl">
            <img src="https://img.icons8.com/color/48/000000/search.png" alt="recherche"
            className="size-10"
                />
          <Input 
            type="text" 
            placeholder="Rechercher...."
            className="md:w-full  h-4  font-semibold  font-sans"
            onChange={(e)=>console.log(e.target.value)}
            
            />
          </div>
          <div className="cont-profile ml-20 flex justify-center items-center">
            <img src="../../public/assets/notify.png" alt="notify icon" className="size-16" />
            {/* <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" /> */}
            <Link to="/pages/Profile.tsx">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" />
            </Link>
          </div>
        </div>
    )
}