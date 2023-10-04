import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { Routes, Route } from 'react-router-dom'
import Nomatch from './Nomatch'
const Navbar = () => {
  return (
    <div style={{fontSize: '25px', margin:'20px'}}>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Nomatch/>}/>
        </Routes>
    </div>
  )
}

export default Navbar