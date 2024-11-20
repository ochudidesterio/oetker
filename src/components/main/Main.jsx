import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomePage from '../../pages/home/HomePage'
import Navbar from '../navbar/Navbar'


const Main = () => {
  return (
    <div className='h-screen'>
        <Navbar/>
        <Router>
            <Routes>
            <Route path='/' element={<HomePage/>} />
  
            </Routes>
        </Router>
    
    </div>
  )
}

export default Main