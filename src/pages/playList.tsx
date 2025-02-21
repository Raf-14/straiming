import React from 'react'
import { Link } from 'react-router-dom'

const PlayList = () =>{
  return (
    <div className="bg-gray-800 max-w-full h-screen">
      <div className='bg-no-repeat bg-cover w-full h-[500px]' style={{backgroundImage: 'url(../../public/assets/back1.jpg)'}}>
          {/* Icon and image link to profile */}
          {/* Header */}
          <div className="cont-profile flex  justify-between items-center p-5">
            <div className="left"></div>
                <div className="cont-profile ml-20 flex justify-center items-center">
                <img src="../../public/assets/notify.png" alt="notify icon" className="size-16 object-cover" />
                {/* <img src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="dropdown" /> */}
                <Link to="/pages/Profile.tsx">
                    <img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="profile" />
                </Link>
              </div>
            </div>
            {/* Audio line counter */}
            <div className="container bg-black">
              <div className="name-title">
                <p>Name of artist</p>
                <p>Title of song</p>
              </div>
                <div className="timeLine"></div>
            </div>
      </div>
    </div>
  )
}


export default PlayList