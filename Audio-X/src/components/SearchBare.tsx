import { FC } from "react";
import { Input } from "./Input";
import { Link } from "react-router-dom";



export const SearchBarre:FC= () => {
    return(
        <div className="flex items-center justify-between w-full p-5 container-filtre">
         <div className="flex items-center h-12 p-5 border-2 border-gray-700 Search w-50 md:h-16 md:ml-8 md:w-4xl justity-between rounded-xl">
            <img src="https://img.icons8.com/color/48/000000/search.png" alt="recherche"
            className="size-10"
                />
          <Input 
            type="text" 
            name="query"
            placeholder="Rechercher...."
            className="font-sans font-semibold "
            onChange={(e)=>console.log(e.target.value)}
            
            />
          </div>
          <div className="flex items-center justify-center md:ml-20 cont-profile">
            <img src="../assets/notify.png" alt="notify icon" className="size-12" />
            {/* <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" /> */}
            <Link to="/pages/Profile">
                <img src="../assets/back1.jpg" alt="profile" className="rounded-full size-10" />
                {/* <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" /> */}
            </Link>
          </div>
        </div>
    )
}