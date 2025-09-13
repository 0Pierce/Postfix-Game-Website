import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Homepage from "./pages/HomePage.tsx"
import AboutUsPage from "./pages/AboutUsPage.tsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const mainRouter = createBrowserRouter([

  
  {
    path: "/",
    element: <Homepage/>
  },

  {
    path: "/AboutUs",
    element: <AboutUsPage/>
  }




])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={mainRouter}/>
  </StrictMode>,
)
