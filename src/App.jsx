import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEvent from './pages/CreateEvent';
import './App.css'
import Login from './components/Login';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="./components/Login" element={<Login />} />
        <Route path="./pages/CreateEvent" element={<CreateEvent />}  />

      </Routes>
      
    </Router>
  )
}

export default App
