import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Detect from './pages/Detect';


function App() {
  return (
    <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/detect" element={<Detect/>}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App