import  { SkeletonTheme } from 'react-loading-skeleton';
import Home from './components/home';
import Posts from './components/posts';
import ErrorPage from "./error-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        {/* The Routes component will handle rendering the correct component based on the route */
        /* addskeleton themeing */
        }
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/posts/:userId" element={<Posts />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
      
      </SkeletonTheme>
      
    </div>
  );
}

export default App;
