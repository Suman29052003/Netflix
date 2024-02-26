import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './Components/Login.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "/Login",
    element : <Login/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
