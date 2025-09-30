import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
import About from './pages/about'
import Skills from './pages/skill'
import Project from './pages/project'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App
