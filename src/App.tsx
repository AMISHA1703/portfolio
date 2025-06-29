import { Routes,BrowserRouter,Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
       </BrowserRouter>

    </>
  )
}

export default App
