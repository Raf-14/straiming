import  { useState, useEffect } from "react";
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
        const likesData = storedLikes ? JSON.parse(storedLikes) : {};

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
        return <h2 className="text-center text-white">Chanson non trouvée</h2>;
    }

    return (
        <div className="relative h-screen max-w-full bg-gray-800">
            {/* Top Right Icons */}
            <div className="absolute flex items-center space-x-4 top-4 right-4">
                <div className="flex items-center justify-center ml-20 cont-profile">
                    <img src="/assets/notify.png" alt="notify icon" className="object-cover size-10 md:size-16" />
                    <Link to="/pages/Profile">
                        <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" className="object-cover size-8 md:size-12"/>
                    </Link>
                </div>
            </div>
            {/* Top Leftn Icons */}
            <div className="absolute flex items-center space-x-4 top-4 left-4">
                <Link to="/pages/Homepage" className="flex items-center justify-center bg-purple-500 rounded-full hover:bg-purple-400 size-12">
                    <ArrowLeft color="#f6efef" strokeWidth={3} />
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-between flex-1 h-screen max-w-full">
                {/* Background Image */}
                <div className="h-screen bg-center bg-cover rounded-lg" style={{ backgroundImage: "url('/assets/back1.jpg')" }}></div>

                {/* Section profile */}
                <div className="relative flex items-center justify-between mx-5 mb-10">
                    <div className="absolute flex flex-col items-center w-32 gap-1 left">
                        <h2 className="font-sans text-2xl font-extrabold text-white">John</h2>
                        <p className="text-gray-400 text-md md:text:xl">12k d'écoute</p>
                        <div className="flex items-center gap-2">
                            {/* Affichage du nombre de likes */}
                            <Heart
                                color={isLiked ? "blue" : "#490af5"}
                                strokeWidth={3}
                                size={30}
                                className="cursor-pointer sm:size-6"
                                onClick={handleLikeButton}
                            />
                            <span className="font-extrabold text-white text-md md:text-3xl">{likes}</span>
                        </div>
                    </div>

                    {/* Play button right */}
                    <div className="absolute right-0 rigth">
                        <img src="/assets/Play.png" alt="icon play" className="size-18"/>
                    </div>
                </div>

                {/* Section list of songs */}
                <div className="container flex items-center justify-between p-5 mx-auto text-white bg-gradient-to-t from-black via-gray-900 to-transparent">
                    <Link to={`/pages/playerMusic/${id}`} className="block">
                        <div className="flex items-center gap-5 left-div">
                            <img src={song.image} alt={song.song} className="mt-4 rounded-xl w-14" />
                            <div className="col">
                                <h1 className="text-xl font-bold">{song.song}</h1>
                                <h2 className="text-lg">{song.artist}</h2>
                            </div>
                        </div>
                    </Link>

                    {/* Bouton Like */}
                    <div className="flex items-center gap-2 right-div">
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
