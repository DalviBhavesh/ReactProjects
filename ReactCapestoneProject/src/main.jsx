import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './components/Login.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import AllPost from './pages/AllPost.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication ={false}>
              <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication ={false}>
              <Signup />
          </AuthLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
              {" "}
              <AllPost />
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          // this is another way of writing authentication ={true} 
           <AuthLayout authentication>
              {" "}  
              <EditPost />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
