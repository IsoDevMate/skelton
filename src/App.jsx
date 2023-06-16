//we will basically have two routes home and post route
//we will react router to basically create the routes
//import {router,route} from react-router-dom
import Home from './components/home'
import Posts from './components/posts'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App=()=>{
    return(
        <div className='App'>
  <BrowserRouter>
        <Routes>
            <Route
             path='/'
             element={<Home />}
            />
            <Route
             path='/posts/:userId'
             element={<Posts />}
            />
        </Routes>
        
        </BrowserRouter>
   
        </div>
         )
}

      
export default App