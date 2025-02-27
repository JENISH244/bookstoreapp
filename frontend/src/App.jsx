import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './corses/Courses'
import Signup from './components/Signup'
import Contactus from './Contactus/Contactus'

export default function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </>
  )
}
