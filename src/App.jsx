import React from 'react'
import Header from './components/Header'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App
