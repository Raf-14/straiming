import { Link } from 'react-router-dom'
import Asisdebarre from '../components/Asisdebarre'
import { CardContainer } from '../components/Card'
import { cards4 } from '../utils/cards'

export default function Bibliotheque() {
  return (
    <div className="flex flex-col bg-gray-800 min-h-screen">
        {/* Aside Barre */}
       <Asisdebarre />

       {/* lateral barre  */}
       <div className="m-5 p-5">
             {/* Header */}
            <div className="cont-profile flex  justify-between items-center">
                <h1 className="text-2xl font-bold capitalize text-white">Your librairy</h1>
                <div className="cont-profile ml-20 flex justify-center items-center">
                    <img src="../../public/assets/notify.png" alt="notify icon" className="size-16 object-cover" />
                    {/* <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" /> */}
                    <Link to="/pages/Profile.tsx">
                        <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" />
                    </Link>
                </div>
            </div>
       </div>
       {/* Main content */}
       <div className="flex-grow relative">
            <div className="flex flex-wrap gap-5 p-3">
                {/* Card */}
                <div 
                    className="w-full h-62 bg-white rounded-2xl shadow-md p-5 bg-no-repeat bg-cover relative" 
                    style={{ backgroundImage: 'url(../../public/assets/image1.jpg)' }}
                >
                    {/* Blue overlay */}
                    <div 
                        className="absolute inset-0 bg-blue-800 opacity-50 rounded-2xl"
                    ></div>
                    {/* Content */}
                    <div className="flex justify-between items-center">
                        <div className="flex-grow flex flex-col gap-3 z-50">
                            <h2 className="text-xl font-bold text-white">Title of the song</h2>
                            <p className="text-sm text-white">Artist - Album - Year</p>
                        </div>
                        {/* Play button */}
                        <div className="flex z-50">
                            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-white hover:text-gray-500 transition-all duration-300">
                                <img src="../../public/assets/play.png" alt="play" className="w-6 cursor-pointer" onClick={() =>alert("yu clicked")} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       {/* card */}
       <div className="container-card my-12">
       <CardContainer
        cards={cards4}
        />
       </div>
    </div>
  )
}

