import React  from 'react'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/home/HomePage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Footer from './components/footer/Footer'


const App = () => {


  return (
    <div className='h-screen'>
        <Navbar />
        <Router>
            <Routes>
            <Route path='/' element={<HomePage />} />
  
            </Routes>
        </Router>
        <Footer/>
    </div>
  )
}

export default App