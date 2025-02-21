import { useState } from "react";
import { Home, Search, BookOpen, Bell, User, Play, Rewind, FastForward, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import Asisdebarre from '../components/Asisdebarre';
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-full bg-gray-900 p-4 flex flex-col space-y-6 items-center"
      >
        {/* <Home className="text-gray-400 hover:text-white cursor-pointer" size={28} />
        <Search className="text-gray-400 hover:text-white cursor-pointer" size={28} />
        <BookOpen className="text-gray-400 hover:text-white cursor-pointer" size={28} /> */}
        <Asisdebarre />
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between p-8">
        {/* Background Image */}
        <div
          className="h-2/3 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('../../public/assets/back1.jpg')" }}
        ></div>
        
        {/* Music Controls */}
        <div className="p-4 bg-gradient-to-t from-black via-gray-900 to-transparent rounded-lg">
          <h2 className="text-2xl font-bold">Melbourne Sunset</h2>
          <p className="text-gray-400">3000 Days</p>
          
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
              className="bg-purple-500 p-4 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
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
    </div>
  );
};

export default MusicPlayer;
