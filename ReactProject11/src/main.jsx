import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Err from './components/Err.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Err />,
    children: [
      {
        path:"",
        element: <Home />,
      },
      {
        path:"about",
        element: <About />,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
