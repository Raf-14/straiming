import React from 'react'

 const Profile = () =>{
  return (
    <div className="flex flex-col bg-gray-800 min-h-screen">
      {/* header */}
      <div className="header"></div>

      {/* main content */}
      <div className="container">
        {/* line link verticale line */}
        <div className="verticale-line-link"></div>

        {/* song list */}
        <div className="list-song"></div>
      </div>
    </div>
  )
}

export default Profile