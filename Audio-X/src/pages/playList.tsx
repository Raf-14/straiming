import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ListContainerSong } from "../utils/cards";
import { Heart, ArrowLeft } from "lucide-react";

const PlayList = () => {
    const { id } = useParams<{ id: string }>();
    const song = ListContainerSong.find((s) => s.id === id);

    // État pour stocker les likes
    const [likes, setLikes] = useState<number>(0);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    // Charger les likes depuis localStorage
    useEffect(() => {
        const storedLikes = localStorage.getItem("likes");
        const likesData = storedLikes ? JSON.parse(storedLikes) : {};

        if (likesData[id]) {
            setLikes(likesData[id]);
            setIsLiked(true);
        }
    }, [id]);

    // Gérer le clic sur le bouton Like
    const handleLikeButton = () => {
        const storedLikes = localStorage.getItem("likes");
        let likesData = storedLikes ? JSON.parse(storedLikes) : {};

        if (isLiked) {
            // Si déjà liké, on enlève le like mais on évite les valeurs négatives
            likesData[id] = Math.max(0, (likesData[id] || 0) - 1);
            setLikes((prev) => Math.max(0, prev - 1));
        } else {
            // Sinon, on ajoute un like
            likesData[id] = (likesData[id] || 0) + 1;
            setLikes((prev) => prev + 1);
        }

        // Mise à jour du localStorage
        localStorage.setItem("likes", JSON.stringify(likesData));
        setIsLiked(!isLiked);
    };

    if (!song) {
        return <h2 className="text-white text-center">Chanson non trouvée</h2>;
    }

    return (
        <div className="bg-gray-800 max-w-full h-screen relative">
            {/* Top Right Icons */}
            <div className="absolute top-4 right-4 flex items-center space-x-4">
                <div className="cont-profile ml-20 flex justify-center items-center">
                    <img src="/assets/notify.png" alt="notify icon" className="size-10 md:size-16 object-cover" />
                    <Link to="/pages/Profile">
                        <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" className="size-8 md:size-12 object-cover"/>
                    </Link>
                </div>
            </div>
            {/* Top Leftn Icons */}
            <div className="absolute top-4 left-4 flex items-center space-x-4">
                <Link to="/pages/Homepage" className="flex items-center justify-center hover:bg-purple-400 size-12 bg-purple-500 rounded-full">
                    <ArrowLeft color="#f6efef" strokeWidth={3} />
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-between max-w-full h-screen">
                {/* Background Image */}
                <div className="h-screen bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/assets/back1.jpg')" }}></div>

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
                            <span className="font-extrabold text-3xl text-white">{likes}</span>
                        </div>
                    </div>

                    {/* Play button right */}
                    <div className="rigth absolute right-0">
                        <img src="/assets/Play.png" alt="icon play" className="size-18"/>
                    </div>
                </div>

                {/* Section list of songs */}
                <div className="container mx-auto p-5 text-white flex justify-between items-center bg-gradient-to-t from-black via-gray-900 to-transparent">
                    <Link to={`/pages/playerMusic/${id}`} className="block">
                        <div className="left-div flex items-center gap-5">
                            <img src={song.image} alt={song.song} className="rounded-xl mt-4 w-14" />
                            <div className="col">
                                <h1 className="text-xl font-bold">{song.song}</h1>
                                <h2 className="text-lg">{song.artist}</h2>
                            </div>
                        </div>
                    </Link>

                    {/* Bouton Like */}
                    <div className="right-div flex items-center gap-2">
                        <Heart
                            className={`cursor-pointer ${isLiked ? "text-blue-500" : "text-gray-400"}`}
                            size={28}
                            onClick={handleLikeButton}
                        />
                        <span>{likes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayList;
