import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
  <div className="footer">
    <img src={Wave} alt="" style={{width:'100%'}}/>
    <div className="f-content">
      <div className="email">
       <a href="mailto:nikhil.b1216@gmail.com" style={{textDecoration:"none", color:"white"}}> <span>nikhil.b1216@gmail.com</span></a>
       </div>
        <div className="f-icons">
        <a href="https://www.instagram.com/nikhil_b_0088/" target='_blank'> <Insta color='white' size='3rem'/></a>
        <a href="https://github.com/Nikhil-0088" target='_blank'> <Github color='white' size='3rem'/></a>
        <a href="https://www.linkedin.com/in/nikhil-boob-b6941625b/" target='_blank'>   <LinkedIn color='white' size='3rem'/> </a>
        </div>
    </div>
  </div>
  )
}

export default Footer
