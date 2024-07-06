
import { useContext } from 'react'
import './App.css'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import { themeContext } from './Context'
function App() {
  const theme = useContext(themeContext)
  const darkmode = theme.state.Darkmode
  return (
    <div className="App" style={{ background: darkmode ? 'black' : '', color: darkmode ? 'white' : '' }}>
        <Navbar />
        <Intro/>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
