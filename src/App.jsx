import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NewBlogPage from './pages/NewBlogPage';
import { Route, Routes,Link } from 'react-router-dom';

function App() {
  return (
    <>  
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/newblog">New Blog</Link>
        </li>
      </ul>
    </nav>
  
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/newblog" element={<NewBlogPage/>}/>
    </Routes>
    </>
  );
}

export default App;
