import React from 'react'
import '../css/Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <header>
      <nav>
      
        <li className="link"><Link to="Home" smooth={true} duration={500} offset={-50}>Home</Link></li>
        <li className="link"><Link to="About" smooth={true} duration={500} offset={-50}>About</Link></li>
        <li className="link"><Link to="Skills" smooth={true} duration={500} offset={-50}>Skills</Link></li>
        <li className="link"><Link to="Projects" smooth={true} duration={500} offset={-50}>Projects</Link></li>
        <li className='link'><Link to="Contact" smooth={true} duration={500} offset={-50}>Contact</Link></li>
        <li className='link'> <Link to="Resume" smooth={true} duration={500} offset={-50}>Resume</Link></li>
      </nav>
    </header>
  )
}

export default Navbar