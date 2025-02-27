import { CardContainer, CardSection } from '../components/Card';
import { BarreSong } from '../components/list-container-song';
import Barre from '../components/Barre';
import Asisdebarre from '../components/Asisdebarre';
import { cards, ListContainerSong } from '../utils/cards'
import { Link } from 'react-router-dom';

const HomePage = () => {
 

  return (
    <div className="container flex h-full max-w-full p-3 bg-gray-800">
        <Asisdebarre />
  
      {/* Main content */}
      <div className="w-full h-full px-8 py-4 mt-10 ml-auto transition-transform duration-300 ease-in-out Main rounded-xl transform-gpu">
      {/* Header */}
        <div className="flex items-center justify-between p-3 cont-profile">
            <h1 className="text-2xl font-bold text-white">Bonjour , <span> John Doe</span></h1>
            <div className="flex items-center justify-center ml-20 cont-profile">
            <Link to="">
              <img src="../../public/assets/notify.png" alt="notify icon" className="object-cover size-10 md:size-16" />
              {/* <span className="text-white bg-red-500 rounded-full">0</span> */}
            </Link>
            {/* <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" /> */}
            <Link to="/pages/Profile">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" />
            </Link>
          </div>
        </div>
        {/* feature */}
        <Barre
         title= "Mes pages favorites"
         buttonText = "voir plus"
         buttonLink='/pages/inscrption'

        />
        {/* Card of feature */}
        <div className="w-full mt-5">
            <CardContainer
            cards={cards}
            />
        </div>
        {/* propose */}
        <Barre
         title= "Recommandations"
         buttonText = "voir plus"
         buttonLink='/pages/inscrption'

        />
        {/* card propose */}
        <div className="flex items-center justify-center mt-5">
          <CardSection />
        </div>

         {/* Populare song */}
         <Barre
         title= "Chansons populaires"
         buttonText = "voir plus"
         buttonLink='/pages/inscrption'

        />
        {/* List popular song */}
        <div className="mt-5">
          {ListContainerSong.map((song) => (
            <BarreSong
              key={song.id}
              id={song.id}
              artist={song.artist}
              song={song.song}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
