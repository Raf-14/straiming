 import React from "react";


 interface BarreSongProps {
     song: string;
     artist: string;
     image: string;
     onClick?: () => void;
 }


 export const BarreSong: React.FC<BarreSongProps> = ({ song, artist, image, onClick }) => {
     return (
        <div className="container-barre w-full p-5 cursor-pointer rounded-2xl hover:bg-zinc-100">
                  <div className="flex items-center justify-between">
                      <div className="cont-profile flex  justify-center items-center">
                      <img className="profile-img size-12 rounded-xl" src={image} alt="Profile"/>
                      <div className="profile-name flex flex-col px-5">
                        <span className="text-sm font-bold capitalize">{artist}</span>
                        <span className="text-sm font-bold capitalize">{song}</span>
                      </div>
                    </div>
                    <div className="container-song">
                        <button onClick={onClick} className="cursor-pointer">
                            <img src="../public/assets/Play.png" alt="icon play" className="w-8" />
                        </button>
                    </div>
                  </div>
              </div>
     );
 };