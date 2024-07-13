import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createHashRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home.jsx'
import Project from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'

const router =createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "project",
        element: <Project />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
