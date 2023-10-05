import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigte = useNavigate();
  return (
    <>
    <div className='Navbar'>
           {/* Using NavLink tag page is not reload and Link tag internally behaves like a Anchor tag */}
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
    </div>
    </>
  )
}

export default Navbar



 {/* Using anchor tag page is reload  */}
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}

        {/* Using Link tag page is not reload and Link tag internally behaves like a Anchor tag */}
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> */}

        {/* Using NavLink tag page is not reload and Link tag internally behaves like a Anchor tag */}
        // <NavLink to='/'>Home</NavLink>
        // <NavLink to='/about'>About</NavLink>
        // <NavLink to='/contact'>Contact</NavLink>