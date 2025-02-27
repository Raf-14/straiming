import { Link } from 'react-router-dom';
import Asisdebarre from '../components/Asisdebarre';
import { ListContainerSong } from '../utils/cards';
import { BarreSong } from '../components/list-container-song';


const Profile = () =>{
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-800">
       {/* Sidebar */}
      <Asisdebarre />
      {/* header */}
      <div className="mt-10 header">
        {/* Top bottom right */}
        <div className="flex items-center justify-center gap-8 p-10 md:justify-between">
          <img src="/assets/image1.jpg" alt="image user" className="object-cover rounded-full size-22 md:size-62" />
         <div className="left-div">
              {/* name and Edit profile link */}
              <div className="flex items-center justify-between mt-8 w-62">
                <h2 className="font-serif font-extrabold text-white">John</h2>
                <Link to="/" className="flex justify-center w-32 p-2 font-sans font-bold text-white bg-gray-700 rounded-full">Edit Profile</Link>
              </div>
              {/* Followers and Following */}
              <div className="flex items-center gap-5 mt-5">
                <p className="font-thin text-zinc-100 text-md"><span>9000</span> Following</p>
                <p className="font-thin text-zinc-100 text-md"><span>555</span> Following</p>
              </div>
         </div>
        </div>
         {/* Top Right Icons */}
        <div className="absolute flex items-center mt-8 space-x-4 top-4 right-4">
        <div className="flex items-center justify-center ml-20 cont-profile">
            <img src="/assets/notify.png" alt="notify icon" className="object-cover size-10 md:size-16" />
            <Link to="/pages/Profile">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" className="object-cover size-8 md:size-16"/>
            </Link>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="container flex flex-col justify-center p-5">
        {/* link on verticale line */}
        <div className="flex justify-between">
          <Link to="" className="font-serif text-sm font-semibold text-white md:text:md">PlayList</Link>
          <Link to="" className="font-serif text-sm font-semibold text-zinc-50 md:text:md">Download</Link>
          <Link to="" className="font-serif text-sm font-semibold text-zinc-50 md:text:md">Liked</Link>
        </div>
        {/* line link verticale line */}
        <div className="w-full h-px bg-gray-700 verticale-line-link"></div>

        {/* song list */}
        <div className="list-song">
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
  )
}

export default Profile