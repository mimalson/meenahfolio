import React, {useState, useEffect} from 'react'
import loading from './components/Loading/loading'
import Header from "./components/Header/header"
import Nav from "./components/Nav/nav"
import About from "./components/About/about"
import Experience from "./components/Experience/experience"
import Services from "./components/Services/services"
import Portfolio from "./components/Portfolio/portfolio"
import Testimonials from "./components/Testimonials/testimonials"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])


  return (
    <div>
      {isLoading == true ?
      <loading/> 
      :
      <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
}
    </div>
      
    
  )
  }

export default App