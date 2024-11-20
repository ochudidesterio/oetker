import React,{useState,useEffect}  from 'react'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/home/HomePage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Footer from './components/footer/Footer'


const App = () => {

  const [scrolled, setScrolled] = useState(false); // New state to track scroll

  // Update scroll state when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change state when user scrolls down
       
      } else {
        setScrolled(false); // Reset when the user scrolls up
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='h-screen'>
        <Navbar scrolled={scrolled}/>
        <Router>
            <Routes>
            <Route path='/' element={<HomePage scrolled={scrolled} />} />
  
            </Routes>
        </Router>
        <Footer/>
    </div>
  )
}

export default App