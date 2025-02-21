import React, { useState } from 'react'
import { Link } from 'react-router-dom';



export default function Asisdebarre() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <div className="z-100">
          {/* Menu burger */}
            <button onClick={toggleMenu} className="absolute top-0 left-0 p-4 cursor-pointer z-20">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            {/* Aside barre */}
                <div className={`Aside ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-1/2 md:w-1/4 h-screen bg-gray-700 text-white transition-transform duration-300 fixed top-0 left-0`}>
                        <aside className={`Aside ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-1/4 h-screen bg-gray-700 text-white transition-transform duration-300 fixed top-0 left-0`}>
                            <nav className="flex flex-col mt-10 gap-5 h-full justify-between items-center px-6 py-4" role="navigation" aria-label="Navigation principale">
                                <ul className="flex flex-col gap-5 w-full" role="list" aria-label="Liste des liens">
                                    <li className="flex items-center w-full">
                                        <Link to="/pages/Homepage.tsx" className="flex items-center md:justify-around h-12">
                                            <img src="../../assets/Home.png" alt="Accueil" className="w-8" />
                                            <span className="text-white text-xl font-bold font-serif">Accueil</span>
                                        </Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Link to="/pages/Searchpage.tsx" className="flex items-center md:justify-around h-12">
                                            <img src="../../public/assets/search.png" alt="Recherche" className="w-8" />
                                            <span className="text-white text-xl font-bold font-serif">Recherche</span>
                                        </Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Link to="/pages/Bibliotehque.tsx" className="flex items-center md:justify-around h-12">
                                            <img src="../../public/assets/Book.png" alt="Bibliothèque" className="w-8" />
                                            <span className="text-white text-xl font-bold font-serif">Bibliothèque</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                    </aside>
                </div>
    </div>
  )
}
