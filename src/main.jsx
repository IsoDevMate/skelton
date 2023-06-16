import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import App from '/App.jsx'
import Root from "./routes/root.jsx"
import ErrorPage from "./error-page.jsx"
import Contact from './routes/contact'

//this willbe our "root route " it will serve as the root layout of the UI,
const router= createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElemnent:<ErrorPage />
  },  {
    path:"contacts/:contactId",
    element:<Contact />,
  
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
