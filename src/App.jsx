import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AboutBox from './Components/AboutBox/AboutBox'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <main className="main-content">
        <section className="about-section">
          <AboutBox />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
