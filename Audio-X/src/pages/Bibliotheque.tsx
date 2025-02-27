import { Link } from 'react-router-dom'
import Asisdebarre from '../components/Asisdebarre'
import { CardContainer } from '../components/Card'
import { cards4 } from '../utils/cards'

export default function Bibliotheque() {
  return (
    <div className="flex flex-col max-w-full min-h-screen mx-auto bg-gray-800">
        {/* Aside Barre */}
       <Asisdebarre />

       {/* lateral barre  */}
       <div className="p-5 m-5">
             {/* Header */}
            <div className="flex items-center justify-between cont-profile">
                <h1 className="text-2xl font-bold text-white capitalize">Your librairy</h1>
                <div className="flex items-center justify-center ml-20 cont-profile">
                    <img src="../assets/notify.png" alt="notify icon" className="object-cover size-16" />
                    {/* <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" /> */}
                    <Link to="/pages/Profile">
                        <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" />
                    </Link>
                </div>
            </div>
       </div>
       {/* Main content */}
       <div className="relative flex-grow">
            <div className="flex flex-wrap gap-5 p-3">
                {/* Card */}
                <div 
                    className="relative w-full p-5 bg-white bg-no-repeat bg-cover shadow-md h-62 rounded-2xl" 
                    style={{ backgroundImage: 'url(../assets/image1.jpg)' }}
                >
                    {/* Blue overlay */}
                    <div 
                        className="absolute inset-0 bg-blue-800 opacity-50 rounded-2xl"
                    ></div>
                    {/* Content */}
                    <div className="flex items-center justify-between">
                        <div className="z-50 flex flex-col flex-grow gap-3">
                            <h2 className="text-xl font-bold text-white">Title of the song</h2>
                            <p className="text-sm text-white md:text:md">Artist - Album - Year</p>
                        </div>
                        {/* Play button */}
                        <div className="z-50 flex">
                            <button className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 bg-white rounded-full hover:text-gray-500">
                                <img src="../../public/assets/play.png" alt="play" className="w-6 cursor-pointer" onClick={() =>alert("yu clicked")} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       {/* card */}
       <div className="p-10 my-12 container-card">
       <CardContainer
        cards={cards4}
        />
       </div>
    </div>
  )
}

