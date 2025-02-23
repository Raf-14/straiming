import Asisdebarre from '../components/Asisdebarre';
import { Link } from 'react-router-dom';
import { ListContainerSong } from '../utils/cards';
import { BarreSong } from '../components/list-container-song';

const PlayList = () =>{
  return (
    <div className="bg-gray-800 max-w-full h-screen relative">
        {/* Assidbare */}
        <Asisdebarre />

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
        <div className="flex-1 flex flex-col justify-between w-full h-screen">
                {/* Background Image */}
            <div
            className="h-2/3 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('../../public/assets/back1.jpg')" }}
            ></div>

                {/* Section profile */}
            <div className="flex justify-between items-center mx-5">
                <div className="left flex flex-col gap-1 items-center">
                    <h2 className="text-2xl font-extrabold font-sans text-white">John</h2>
                    <p className="text-gray-400">12k d'écoute</p>
                    <div className="flex items-center gap-2">
                        <img src="../../public/assets/heart.png" alt="icon heart" className='size-8'/>
                        <span className="font-extrabold text-2xl text-white">...</span>
                    </div>
                </div>
                {/* Play button rigth */}
                <div className="rigth">
                    <img src="../../public/assets/Play.png" alt="icon play" className="size-18" />
                </div>
            </div>
            {/* Section list of song */}
            <div>
            {ListContainerSong.map((song) => (<BarreSong key={song.artist} artist={song.artist} song={song.song} image={song.image} onClick={() => alert(`yu clicked for ${song.artist}`)}/>))}
            </div>
        </div>
    </div>
  )
}

export default PlayList;