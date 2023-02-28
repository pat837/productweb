import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Events from './Events';
import Logo from './Components/logo'

const Navbar = () => {
  return (
    <nav >
      <ul class="navProp">
        <li class="logo">
          <Logo className="logo" />
        </li>
        <li>
          <Link to="/Events"  >
            Events
          </Link>
        </li>
        <li>
          <Link to="/Careers" >Careers</Link>
        </li>
        <li>
          <Link to="/Gallery" >Gallery</Link>
        </li>
        <li>
          <Link to="/Blog" >Blog</Link>
        </li>
        <li class="sign-in-btn">
          <Link to="/">Sign in</Link>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar;