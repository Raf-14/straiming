import React from "react";
import { Input } from "./Input";



export const SearchBarre: React.FC= () => {
    return(
        <div className="md:w-full p-5 container-filtre flex md:justify-between md:items-center">
         <div className="Search w-68 md:w-4xl flex md:jutsity-center md:items-center border-2 border-zinc-100 rounded-xl">
            <img src="https://img.icons8.com/color/48/000000/search.png" alt="recherche"
            className="size-10"
                />
          <Input 
            type="text" 
            placeholder="Rechercher...."
            className="md:w-full h-10 p-4 font-semibold hover:border-2 hover:border-green-400 font-sans"
            onChange={(e)=>console.log(e.target.value)}
            
            />
          </div>
          <div className="cont-profile ml-20 flex justify-center items-center">
            <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" />
            <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" />
          </div>
        </div>
    )
}