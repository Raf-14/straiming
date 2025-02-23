import { CardContainer } from '../components/Card';
import { BarreSong } from '../components/list-container-song';
import Barre from '../components/Barre';
import Asisdebarre from '../components/Asisdebarre';
import { cards, cards2, ListContainerSong } from '../utils/cards'
import { Link } from 'react-router-dom';

const HomePage = () => {
 

  return (
    <div className="container max-w-full h-full p-3 flex bg-gray-800">
        <Asisdebarre />
  
      {/* Main content */}
      <div className="Main h-full w-full rounded-xl px-8 py-4 ml-auto transition-transform transform-gpu ease-in-out duration-300">
      {/* Header */}
        <div className="cont-profile flex  justify-between items-center p-3">
            <h1 className="text-2xl font-bold text-white">Bonjour , <span> John Doe</span></h1>
            <div className="cont-profile ml-20 flex justify-center items-center">
            <Link to="">
              <img src="../../public/assets/notify.png" alt="notify icon" className="size-10 md:size-16 object-cover" />
              {/* <span className="bg-red-500 rounded-full text-white">0</span> */}
            </Link>
            {/* <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" /> */}
            <Link to="/pages/Profile.tsx">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" />
            </Link>
          </div>
        </div>
        {/* feature */}
        <Barre
         title= "Mes pages favorites"
         buttonText = "voir plus"
         buttonLink='/pages/inscrption.tsx'

        />
        {/* Card of feature */}
        <div className="mt-5 w-full">
            <CardContainer
            cards={cards}
            />
        </div>
        {/* propose */}
        <Barre
         title= "Recommandations"
         buttonText = "voir plus"
         buttonLink='/pages/inscrption.tsx'

        />
        {/* card propose */}
        <div className="mt-5">
            <CardContainer
            cards={cards2}
            />
        </div>

         {/* Populare song */}
         <Barre
         title= "Chansons populaires"
         buttonText = "voir plus"
         buttonLink='/pages/inscrption.tsx'

        />
        {/* List popular song */}
        <div className="mt-5">
            {ListContainerSong.map((song) => (
                <BarreSong
                key={song.artist}
                artist={song.artist}
                song={song.song}
                image={song.image}
                onClick={() => alert(`yu clicked for ${song.artist}`)}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
