import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './corses/Courses'
import Signup from './components/Signup'
import Contactus from './Contactus/Contactus'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

export default function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log("authUser", authUser);
  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to={"/signup"} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}
