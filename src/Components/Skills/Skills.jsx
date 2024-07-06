import React, { useContext } from 'react'
import './Skills.css'
import Glasses from '../../img/glasses.png'
import Crown from '../../img/crown.png'
import Humble from '../../img/humble.png'
import SkillCards from '../SkillCards/SkillCards'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'
const Skills = () => {
  const transition = { duration: 1, type: 'spring' }
  const theme = useContext(themeContext);
  const darkmode = theme.state.Darkmode;
  return (
    <div className="skills" id='Skills'>
      {/* left side */}
      <div className="text">
        <span style={darkmode ? { color: "white" } : { color: "" }}>My Array of </span>
        <span>Skills </span>
        <span style={darkmode ? { color: "white" } : { color: "" }}>
          I have an Extesnive Set of skills in Computer programming.I have been learning the fundamentals of computer programming and DSA as a part of my coursework from University
          <br />
          And I also Learnt Web Development from various Sources and have had hands on experience on many projects including personal and college related ones.
        </span>
        <Link spy={true} smooth={true} to='Projects'>
        <button className='button s-button' >
          Explore Projects
        </button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side  */}
      <div className="cards">
        <motion.div
          whileInView={{ left: '14rem' }}
          initial={{ left: '25%' }}
          transition={transition}
         className='s1'>
          <SkillCards emoji={Crown} heading="Web Development" detail="HTML, CSS, Javascript, React, Bootstrap, Ruby on Rails" />
        </motion.div>
        <div style={{ top: "12rem", left: "-4rem" }} className='s2'>
          <SkillCards emoji={Humble} heading="Problem Solving And Computer Programming" detail="Applying concepts Like OOPS,DSA to Solve real Life Problems Using Programming Languages like C++, Ruby" />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>

    </div>
  )
}

export default Skills
