import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { IoCodeSlash } from "react-icons/io5";
import Hero from './components/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import Footer from './components/Footer'
import About from './components/About'
import Team from './components/Team'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {

  return (
   
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
    </Router>
  )
}

export default App
