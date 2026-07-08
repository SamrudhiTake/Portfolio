import React from 'react'


import {Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navbar from './components/Section1/Navbar'
import Home from './components/Home/Home'


const App = () => {
  return (
    <div>
        <Navbar/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
         
     </div>
  )
}

export default App
