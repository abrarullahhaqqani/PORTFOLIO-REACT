import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import { themeContext } from '../../Context'
import { useContext } from 'react'
function Navbar() {

  const theme = useContext(themeContext);
  const dark = theme.state.Darkmode;
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Nikhil</div>
        <Toggle />
      </div>
      <div className="n-right">
        <Link spy={true} smooth={true} to='Contact'>
          <button className="button n-button">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
