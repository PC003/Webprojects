import React, { Children } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import MainContextProvider from './Context/MainContexProvider.jsx'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'


import Cse from './pages/CSE/Cse.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
        { path:'/',
         element:<Home/>
        },
        {
          path:'cse',
          element:<Cse/>
        }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </StrictMode>,
)
