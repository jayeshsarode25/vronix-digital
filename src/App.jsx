import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Internship from './pages/Internship'

const App = () => {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/internship" element={<Internship />} />
    </Routes>
  )
}

export default App