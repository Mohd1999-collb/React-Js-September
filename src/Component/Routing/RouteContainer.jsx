import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { Routes, Route } from 'react-router-dom'
import Nomatch from './Nomatch'
import Navbar from './Navbar'



const RouteContainer = () => {
  return (
    <div style={{ fontSize: '25px', margin: '20px' }}>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Nomatch />} />
      </Routes>
    </div>
  )
}

export default RouteContainer