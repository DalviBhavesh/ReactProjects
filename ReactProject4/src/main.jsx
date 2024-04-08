import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import ContactMe from './components/ContactMe/ContactMe.jsx'
import User from './components/User/User.jsx'
import Profile, { githubInfoApiData } from './components/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
                {
                  path: "",
                  element: <Home />
                },
                {
                  path: "about",
                  element: <AboutMe />
                },
                {
                  path: "contact",
                  element: <ContactMe />
                },
                {
                  path: "user/:userid",
                  element: <User />
                },
                {
                  // NOTE: dont use '{}' curly brackets in loader to assign a function
                  // just import the function and use it, as shown below

                  loader: githubInfoApiData,
                  path:"profile",
                  element: <Profile />
                  
                }
              ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path='/' element={<Layout />}>
//         <Route path='' element={<Home />} />
//         <Route path='about' element={<AboutMe />} />
//         <Route path='contact' element={<ContactMe />} />
//         <Route path='user/:userid' element={<User />} />
//         <Route 
//           loader={githubInfoApiData}
//           path='profile' 
//           element={<Profile />}
//          />
//       </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
