//we will basically have two routes home and post route
//we will react router to basically create the routes
//import {router,route} from react-router-dom
import Home from './components/home'
import Posts from './components/posts'
import ErrorPage from "./error-page";
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Create a routes array with your components
const routes = [
    { path: "/", element: <Home /> },
    {  path:'/posts/:userId', element: <Posts /> },
    { path: "/error", element: <ErrorPage /> },
    // ...
  ]
// Create a data router using your routes
const router = createBrowserRouter({
  routes
});

const App=()=>{
    return(
        <div className='App'>
  <BrowserRouter>
       
    <RouterProvider router={router}>
     <Home />
     <Posts />
     <ErrorPage />
    </RouterProvider> 
    </BrowserRouter>
   
        </div>
         )
}

      
export default App