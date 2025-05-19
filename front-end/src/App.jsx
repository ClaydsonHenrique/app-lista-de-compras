import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Listas from './pages/Listas'
import NavBar from './components/NavBar'


function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lista/:id' element={<Listas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
