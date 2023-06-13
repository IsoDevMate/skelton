import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import Root from "./routes/root.jsx"
import ErrorPage from "./error-page.jsx"

//this willbe our "root route " it will serve as the root layout of the UI,
const router= createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElemnent:<ErrorPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
