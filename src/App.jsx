import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateEvent from './pages/CreateEvent';
import './App.css'
import Login from './pages/Login';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createevent" element={<CreateEvent />}  />

      </Routes>
      
    </Router>
  )
}

export default App
