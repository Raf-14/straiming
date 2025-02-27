import { useState } from "react";
import { Bell, User, Play, Rewind, FastForward, Volume2, ArrowLeft } from "lucide-react";
import { ListContainerSong } from '../utils/cards'
import { useParams } from 'react-router';
import { Link } from 'react-router';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams<{id: string}>();
  const play = ListContainerSong.find((s) => s.id === id)

  const handleChoice = () => {
    setIsPlaying(!isPlaying)
    console.log(isPlaying)
    alert('isPlaying')
  }
  if(!play){
    return <h2 className="text-2xl text-center text-black mt-50">Chanson non trouvée</h2>;
}
  return (
    <div className="flex h-screen text-white bg-black">
        {/* return to previews pages */}

      {/* Main Content */}
      <div className="flex flex-col justify-between flex-1 p-8">
        {/* Background Image */}
        <div
          className="bg-center bg-cover rounded-lg h-2/3"
          style={{ backgroundImage: "url('/assets/back1.jpg')" }}
        ></div>
        
        {/* Music Controls */}
        <div className="p-4 rounded-lg bg-gradient-to-t from-black via-gray-900 to-transparent">
          <h2 className="text-2xl font-bold">{play.artist}</h2>
          <p className="text-gray-400">{play.song}</p>
          
          {/* Progress Bar */}
          <div className="relative w-full h-1 mt-4 bg-gray-700 rounded-full">
            <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>1:39</span>
            <span>2:47</span>
          </div>
          
          {/* Player Controls */}
          <div className="flex items-center justify-center mt-4 space-x-6">
            <Rewind className="cursor-pointer" size={28} />
            <button
              className="p-4 bg-purple-500 rounded-full cursor-pointer"
              onClick={handleChoice}
            >
              <Play className="text-white" size={28} />
            </button>
            <FastForward className="cursor-pointer" size={28} />
            <Volume2 className="cursor-pointer" size={28} />
          </div>
        </div>
      </div>

      {/* Top Right Icons */}
      <div className="absolute flex items-center space-x-4 top-4 right-4">
        <Bell className="text-gray-400 cursor-pointer hover:text-white" size={24} />
        <Link to="/pages/Profile">
          <User className="text-gray-400 cursor-pointer hover:text-white" size={24} />
        </Link>
      </div>
      {/* Top left Icons */}
      <div className="absolute flex items-center space-x-4 top-4 left-4">
        <Link to={`/pages/PlayList/${id}`} className="flex items-center justify-center bg-purple-500 rounded-full hover:bg-purple-400 size-12">
            <ArrowLeft color="#f6efef" strokeWidth={3} /> 
        </Link>
      </div>
    </div>
  );
};

export default MusicPlayer;
