import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListContainerSong } from "../utils/cards";
import { Heart, ArrowLeft } from "lucide-react";

const PlayList = () => {
    const { id } = useParams<{ id: string }>();
    const song = ListContainerSong.find((s) => s.id === id);

    // Gestion du like et du compteur
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    // Fonction pour gérer le like
    const handleLikeButton = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1); // Décrémentation si déjà liké
        } else {
            setLikeCount(likeCount + 1); // Incrémentation sinon
        }
        setIsLiked(!isLiked); // Toggle de l’état
    };

    if (!song) {
        return <h2 className="text-white text-center">Chanson non trouvée</h2>;
    }

    return (
        <div className="bg-gray-800 max-w-full h-screen relative">
            <Link to="/pages/Homepage" className="flex items-center justify-center hover:bg-purple-400 size-12 bg-purple-500 rounded-full">
                <ArrowLeft color="#f6efef" strokeWidth={3} />
            </Link>

            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex items-center space-x-4">
                <div className="cont-profile ml-20 flex justify-center items-center">
                    <img src="../../public/assets/notify.png" alt="notify icon" className="size-10 md:size-16 object-cover" />
                    <Link to="/pages/Profile.tsx">
                        <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" className="size-8 md:size-12 object-cover"/>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-between max-w-full h-screen">
                {/* Background Image */}
                <div className="h-screen bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: "url('../../public/assets/back1.jpg')" }}>
                </div>

                {/* Section profile */}
                <div className="flex justify-between items-center mx-5 mb-10 relative">
                    <div className="left flex flex-col gap-1 items-center absolute w-32">
                        <h2 className="text-2xl font-extrabold font-sans text-white">John</h2>
                        <p className="text-gray-400">12k d'écoute</p>
                        <div className="flex items-center gap-2">
                            {/* Affichage du nombre de likes */}
                            <Heart
                                color={isLiked ? "blue" : "#490af5"}
                                strokeWidth={3}
                                size={30}
                                className="cursor-pointer"
                                onClick={handleLikeButton}
                            />
                            <span className="font-extrabold text-3xl text-white">{likeCount}</span>
                        </div>
                    </div>

                    {/* Play button right */}
                    <div className="rigth absolute right-0">
                        <img src="../../public/assets/Play.png" alt="icon play" className="size-18"/>
                    </div>
                </div>

                {/* Section list of songs */}
                <div className="container mx-auto p-5 text-white flex justify-between items-center bg-gradient-to-t from-black via-gray-900 to-transparent via-gray-900">
                    <Link to={`/pages/playerMusic/${id}`} className="block">
                        <div className="left-div flex items-center gap-5">
                            <img src={song.image} alt={song.song} className="rounded-xl mt-4 w-14" />
                            <div className="col">
                                <h1 className="text-xl font-bold">{song.song}</h1>
                                <h2 className="text-lg">{song.artist}</h2>
                            </div>
                        </div>
                    </Link>
                    <div className="right-div">
                        <Heart
                            color={isLiked ? "blue" : "white"}
                            size={28}
                            className="cursor-pointer"
                            onClick={handleLikeButton}
                        />
                        <span className="ml-2">{likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayList;
