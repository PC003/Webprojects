import React from 'react'
import { StrictMode } from 'react'
import { createRoot,ReactDom } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/contact.jsx'
import User from './component/User/User.jsx'
import GitHub from './component/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },{
        path:"contact",
        element:<Contact/>
      },{
        path:"user/:userid",
        element:<User/>
      },{
        path:"github",
        element:<GitHub/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
