import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

function App() {

  return (
    <>
    
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  
    <Routes>
      <Route path="/" element={<Home/> }></Route>
      <Route path="/signup" element={<Signup/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
    </Routes>
    </>
  );
}

export default App;
