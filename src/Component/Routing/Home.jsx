import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* I am a Home page */}
       <Outlet/>
    </div>
   
  )
}

export default Home