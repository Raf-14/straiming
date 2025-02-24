import React from "react";
import { Link } from "react-router-dom";

interface BarreSongProps {
    id: string;
    song: string;
    artist: string;
    image: string;
}

export const BarreSong: React.FC<BarreSongProps> = ({ id, song, artist, image }) => {
    return (
        <Link to={`/pages/PlayList/${id}`} className="block">
            <div className="container-barre w-full p-5 cursor-pointer rounded-2xl hover:bg-gray-700">
                <div className="flex items-center justify-between">
                    <div className="cont-profile flex justify-center items-center">
                        <img className="profile-img size-12 rounded-xl" src={image} alt="Profile" />
                        <div className="profile-name flex flex-col px-5">
                            <span className="text-sm font-bold text-zinc-50 capitalize">{artist}</span>
                            <span className="text-sm font-bold text-zinc-50 capitalize">{song}</span>
                        </div>
                    </div>
                    <div className="container-song">
                        <img src="../public/assets/Play.png" alt="icon play" className="w-8" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
