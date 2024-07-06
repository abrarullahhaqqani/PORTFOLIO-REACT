import React, { useContext } from 'react'
import './Toggle.css'
import UilMoon from '@iconscout/react-unicons/icons/uil-moon'
import UilSun from '@iconscout/react-unicons/icons/uil-sun'
import { themeContext} from '../../Context'
const Toggle = () => {
  const theme=useContext(themeContext)
  const darkmode=theme.state.Darkmode
  const handleClick=()=>{
    theme.dispatch({type:'toogle'})
  }
  return (
    <div className='toogle' onClick={handleClick}>
     <UilMoon/>
     <UilSun/>
     <div className='t-button' style={darkmode?{left:'2px'}:{right:'2px'}} >

     </div>
    </div>
  )
}

export default Toggle
