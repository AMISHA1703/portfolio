import { Routes,BrowserRouter,Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/experience" element={<Experience/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
       </BrowserRouter>

    </>
  )
}

export default App
