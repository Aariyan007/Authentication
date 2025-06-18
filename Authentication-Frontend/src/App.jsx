import { Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
