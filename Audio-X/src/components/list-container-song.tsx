import { FC } from "react";
import { Link } from "react-router-dom";
import { BarreSongProps } from "../types/interfaces";



export const BarreSong:FC<BarreSongProps> = ({ id, song, artist, image }) => {
    return (
        <Link to={`/pages/PlayList/${id}`} className="block">
            <div className="w-full p-5 cursor-pointer container-barre rounded-2xl hover:bg-gray-700">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center cont-profile">
                        <img className="profile-img size-12 rounded-xl" src={image} alt="Profile" />
                        <div className="flex flex-col px-5 profile-name">
                            <span className="text-sm font-bold capitalize md:text:md text-zinc-50">{artist}</span>
                            <span className="text-sm font-bold capitalize md:text:md text-zinc-50">{song}</span>
                        </div>
                    </div>
                    <div className="container-song">
                        <img src="../assets/Play.png" alt="icon play" className="w-8" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
