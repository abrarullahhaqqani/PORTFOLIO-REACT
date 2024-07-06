import React from 'react'
import './SkillCards.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const SkillCards = ({emoji,heading,detail}) => {
  const theme=useContext(themeContext);
  const dark=theme.state.Darkmode;
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span style={dark?{color:"white"}:{color:""}}>{heading}</span>
        <span style={dark?{color:"var(--orange)"}:{color:""}}>{detail}</span>
    </div>
  )
}

export default SkillCards
