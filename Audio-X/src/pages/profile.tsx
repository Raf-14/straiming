import { Link } from 'react-router-dom';
import Asisdebarre from '../components/Asisdebarre';
import { ListContainerSong } from '../utils/cards';
import { BarreSong } from '../components/list-container-song';


const Profile = () =>{
  return (
    <div className="flex flex-col bg-gray-800 min-h-screen relative">
       {/* Sidebar */}
      <Asisdebarre />
      {/* header */}
      <div className="header">
        {/* Top bottom right */}
        <div className="p-10 flex items-center gap-8">
          <img src="../../public/assets/image1.jpg" alt="image user" className="object-cover size-22 md:size-62 rounded-full" />
         <div className="left-div">
              {/* name and Edit profile link */}
              <div className="flex items-center justify-between w-62 mt-8">
                <h2 className="text-white font-serif font-extrabold">John</h2>
                <Link to="" className="flex justify-center w-32 text-white font-sans font-bold rounded-full bg-gray-700 p-2">Edit Profile</Link>
              </div>
              {/* Followers and Following */}
              <div className="flex items-center gap-5 mt-5">
                <p className="text-zinc-100 text-md font-thin"><span>9000</span> Following</p>
                <p className="text-zinc-100 text-md font-thin"><span>555</span> Following</p>
              </div>
         </div>
        </div>
         {/* Top Right Icons */}
        <div className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="cont-profile ml-20 flex justify-center items-center">
            <img src="../../public/assets/notify.png" alt="notify icon" className="size-10 md:size-16 object-cover" />
            <Link to="/pages/Profile.tsx">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" className="size-8 md:size-16 object-cover"/>
            </Link>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="container flex flex-col justify-center p-5">
        {/* link on verticale line */}
        <div className="flex justify-between">
          <Link to="" className="text-white font-serif font-semibold">PlayList</Link>
          <Link to="" className="text-zinc-50 font-serif font-semibold">Download</Link>
          <Link to="" className="text-zinc-50 font-serif font-semibold">Liked</Link>
        </div>
        {/* line link verticale line */}
        <div className="verticale-line-link w-full h-px bg-gray-700"></div>

        {/* song list */}
        <div className="list-song">
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
  )
}

export default Profile