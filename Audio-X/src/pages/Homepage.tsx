import { CardContainer, Card } from '../components/Card';
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
        <div className="mt-5 w-full">
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
        <div className="mt-5 flex justify-center items-center">
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
const CardSection = () => {
  return (
    <div className="mt-5">
      <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-48">
        {cardsData.map((card, index) => (
          <div className="flex flex-col justify-center items-center relative">
          <div className="card w-90 md:w-86 h-50 cursor-pointer">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <img className="object-cover w-full h-full" src={card.image} alt={card.title} />
            </div>
            <div className="rounded-2xl card-body absolute top-0 w-90 md:w-86 h-50 flex justify-center items-center flex-col bg-blue-700/50">
              <h5 className="card-title font-bold text-zinc-100 font-serif text-xl">{card.title}</h5>
              <p className="card-text font-thin text-white font-sans text-2xl">{card.description}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};
// Données des cartes pour tester
const cardsData: CardProps[] = [
  {
    title: "Carte 1",
    image: "/assets/profile.jpg",
    description: "Description 1",
  },
  {
    title: "Carte 2",
    image: "/assets/profile.jpg",
    description: "Description 2",
  },
  {
    title: "Carte 3",
    image: "/assets/profile.jpg",
    description: "Description 3",
  },
];