import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/login/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/dashboard'
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
