import { useState } from "react";
import { Bell, User, Play, Rewind, FastForward, Volume2, ArrowLeft } from "lucide-react";
import { ListContainerSong } from '../utils/cards'
import Asisdebarre from '../components/Asisdebarre';
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
    return <h2 className="text-black mt-50 text-2xl text-center">Chanson non trouvée</h2>;
}
  return (
    <div className="flex h-screen bg-black text-white">
        {/* return to previews pages */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between p-8">
        {/* Background Image */}
        <div
          className="h-2/3 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('../../public/assets/back1.jpg')" }}
        ></div>
        
        {/* Music Controls */}
        <div className="p-4 bg-gradient-to-t from-black via-gray-900 to-transparent rounded-lg">
          <h2 className="text-2xl font-bold">{play.artist}</h2>
          <p className="text-gray-400">{play.song}</p>
          
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-700 rounded-full mt-4 relative">
            <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
          </div>
          <div className="flex justify-between text-sm mt-2 text-gray-400">
            <span>1:39</span>
            <span>2:47</span>
          </div>
          
          {/* Player Controls */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <Rewind className="cursor-pointer" size={28} />
            <button
              className="bg-purple-500 p-4 rounded-full cursor-pointer"
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
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <Bell className="text-gray-400 hover:text-white cursor-pointer" size={24} />
        <User className="text-gray-400 hover:text-white cursor-pointer" size={24} />
      </div>
      {/* Top left Icons */}
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <Link to={`/pages/PlayList/${id}`} className="flex items-center justify-center hover:bg-purple-400 size-12 bg-purple-500 rounded-full">
            <ArrowLeft color="#f6efef" strokeWidth={3} /> 
        </Link>
      </div>
    </div>
  );
};

export default MusicPlayer;
