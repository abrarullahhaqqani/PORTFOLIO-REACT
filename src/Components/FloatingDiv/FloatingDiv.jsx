import React, { useContext } from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../Context'

const FloatingDiv = ({image,txt1,txt2}) => {
    const theme=useContext(themeContext)
  const dark=theme.state.Darkmode 
  return (
    <div>
      <div className="floatingdiv">
        <img src={image} alt="" />
        <span style={dark?{color:'black'}:{color:''}}>
          {txt1}
           <br />
           {txt2}
        </span>
      </div>
    </div>
  )
}

export default FloatingDiv
