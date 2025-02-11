import { CardContainer } from '../components/Card';
import { BarreSong } from '../components/list-container-song';
import Barre from '../components/Barre';
import Asisdebarre from '../components/Asisdebarre';
import { cards, cards2, ListContainerSong } from '../utils/cards'

const HomePage = () => {
 

  return (
    <div className="container w-full h-full p-3 flex bg-gray-950">
        <Asisdebarre />
  
      {/* Main content */}
      <div className="Main  w-3/4 h-full bg-white rounded-xl px-8 py-4 ml-auto transition-transform transform-gpu ease-in-out duration-300">
      {/* Header */}
        <div className="cont-profile flex  justify-between items-center">
            <h1 className="text-2xl font-bold">Bonjour, <span>John Doe</span></h1>
            <div className="cont-img flex">
                <img src="../../public/assets/notify.png" alt="avatar" className="size-10 rounded-full object-cover" />
                <img src="../../public/assets/profile.jpg" alt="avatar" className="size-10 rounded-full object-cover" />
            </div>
        </div>
        {/* feature */}
        <Barre
         title= "Mes pages favorites"
         buttonText = "voir plus"
         buttonLink='/pages/inscrption.tsx'

        />
        {/* Card of feature */}
        <div className="mt-5">
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
            ))

            }
            
        </div>
        
      </div>
     
    </div>
  );
};

export default HomePage;
