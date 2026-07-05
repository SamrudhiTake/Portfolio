import React from 'react'
import Section1 from './components/Section1/Section1'

import {Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navbar from './components/Section1/Navbar'
import Section2 from './components/Section2/Section2'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Section1/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
     </div>
  )
}

export default App
