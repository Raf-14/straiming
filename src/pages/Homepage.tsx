import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from '../components/Card';
import { BarreSong } from '../components/list-container-song';
import Barre from '../components/Barre';

const cards = [
    {
        title: 'Beetles',
        description: 'Beetles are small',
        image: '/assets/back1.jpg',
    },
    {
        title: 'Elephants',
        description: 'Elephants are the grains.',
        image: '/assets/image1.jpg',
    },
    {
        title: 'Giraffes',
        description: 'Giraffes are herbivores',
        image: '/assets/image2.jpg',
    },
    {
        title: 'Lions',
        description: 'Lions are the largest land animals',
        image: '/assets/profile.jpg',
    }
]

const cards2 = [
    {
        title: 'Beetles',
        description: 'Beetles are small',
        image: '/assets/back1.jpg',
    },
    {
        title: 'Elephants',
        description: 'Elephants are the grains.',
        image: '/assets/image1.jpg',
    },
    {
        title: 'Giraffes',
        description: 'Giraffes are herbivores',
        image: '/assets/image2.jpg',
    },
]

const ListContainerSong = [
    {
        artist: 'beatles',
        song: 'afro beate',
        image: '../../public/assets/profile.jpg'
    },
    {
        artist: 'elephants',
        song: 'animal',
        image: '../../public/assets/profile.jpg'
    },
    {
        artist: 'giraffes',
        song: 'herbivores',
        image: '../../public/assets/profile.jpg'
    },
    {
        artist: 'lions',
        song: 'lion',
        image: '../../public/assets/profile.jpg'
    },
    {
        artist: 'beetles',
        song: 'afro beate',
        image: '../../public/assets/profile.jpg'
    }
]

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <div className="container w-full h-full p-3 flex bg-black">
      {/* Menu burger */}
      <button onClick={toggleMenu} className="absolute top-0 left-0 p-4 cursor-pointer z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {/* Aside barre */}
      <div className={`Aside ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-1/4 h-screen bg-gray-700 text-white transition-transform duration-300 fixed top-0 left-0`}>
        <nav className="flex flex-col gap-5 h-full justify-between items-center px-6 py-4" role="navigation" aria-label="Global">
          <ul className="flex flex-col gap-5" role="menu" aria-label="Menu">
            <li><Link to="/pages/Homepage.tsx"><img src="../../assets/Home.png" alt="icon house" className="w-8" /></Link></li>
            <li><Link to="#"><img src="../../public/assets/search.png" alt="icon search" className="w-8" /></Link></li>
            <li><Link to="#"><img src="../../public/assets/Book.png" alt="icon book" className="w-8" /></Link></li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
      <div className="Main w-3/4 h-full bg-white rounded-xl px-8 py-4 ml-auto transition-transform transform-gpu ease-in-out duration-300">
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
            {ListContainerSong.map((item) => (
                <BarreSong
                key={item.artist}
                artist={item.artist}
                song={item.song}
                image={item.image}
                />
            ))

            }
            
        </div>
        
      </div>
     
    </div>
  );
};

export default HomePage;
