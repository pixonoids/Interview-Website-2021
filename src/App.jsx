import { useState } from 'react'
import './App.css'
import College from './Components/college/College'
import Contact from './Components/contact/Contact'
import Dept from './Components/dept/Dept'
import Main from './Components/main/Main'
import Navbar from './Components/navbar/Navbar'
import User from './Components/user/User'

function App() {
  

  return (
    <>
    <Navbar />
    <Main></Main>
    <User />
    <College />
    <Contact /> 
    <Dept />
     </>
  )
}

export default App
