import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen } from "lucide-react";
import { motion } from 'framer-motion';


export default function Asisdebarre() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <div className="z-100">
         {/* Sidebar */}
      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}>
          {/* Menu burger */}
        
        <button onClick={toggleMenu} className="absolute top-0 left-0 z-20 p-4 mt-10 cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

            {/* Aside barre */}
            <div className={`Aside ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-1/2 md:w-1/4 h-screen bg-gray-700 text-white transition-transform duration-300 fixed top-0 left-0`}>
                <nav className="flex flex-col items-center justify-between h-full gap-5 px-6 py-4 mt-30" role="navigation" aria-label="Navigation principale">
                    <ul className="flex flex-col w-full gap-5" role="list" aria-label="Liste des liens">
                        <li className="flex items-center w-full">
                            <Link to="/pages/Homepage" className="flex items-center h-12 md:justify-around">
                                <Home className="text-gray-400 cursor-pointer hover:text-white" size={28} />
                                <span className="font-serif text-xl font-bold text-white">Accueil</span>
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link to="/pages/Searchpage" className="flex items-center h-12 md:justify-around">
                                <Search className="text-gray-400 cursor-pointer hover:text-white" size={28} />
                                <span className="font-serif text-xl font-bold text-white">Recherche</span>
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <Link to="/pages/Bibliotehque" className="flex items-center h-12 md:justify-around">
                                <BookOpen className="text-gray-400 cursor-pointer hover:text-white" size={28} />
                                <span className="font-serif text-xl font-bold text-white">Bibliothèque</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.aside>
    </div>
  )
}
