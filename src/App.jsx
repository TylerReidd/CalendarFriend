import React from 'react'
// import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CreateEvent from './pages/CreateEvent';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EventDetails from './pages/EventDetails';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login/>} />

        <Route path="/createevent" element={<CreateEvent/>} />

        <Route path="/register" element={<Register/>} />

        <Route path="/dashboard" element={<Dashboard/>} />

        <Route path="/eventdetails" element={<EventDetails/>} />

      </Routes>
    </Router>
  )
}

export default App
