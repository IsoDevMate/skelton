

import { useRouteError } from "react-router-dom";

const  ErrorPage=()=>{
const error= useRouteError()
 console.error(error)

return(
    <div  id="error-page">
        <h1>Ooops!</h1>
        <p>
            Sorry,an unexpected error occcured
        </p>
        <p>
           <i>{error?.statusText || error?.message}</i>
        </p>
    </div>
)
}
export default ErrorPage


/*mport Root from "./routes/root.jsx"
//import ErrorPage from "./error-page.jsx"
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
])*/ 