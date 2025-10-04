import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AboutBox from './Components/AboutBox/AboutBox'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App

