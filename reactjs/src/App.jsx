import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/login/Index'
import Dashboard from './views/dashboard/Index'
import { ThemeProvider } from '@mui/material'
import { Theme } from './providers/Theme'
import { AppContextProvider } from './providers/AppContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Login />}
            />
            <Route
              path='/dashboard'
              element={<Dashboard />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer />
    </AppContextProvider>
  )
}

export default App
