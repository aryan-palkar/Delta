import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NewBlogPage from "./pages/NewBlogPage";
import { Route, Routes, Link } from "react-router-dom";
import navStyle from "./styles/nav.module.css";

function App() {
  return (
    <>
      <nav class={navStyle.nav}>
        <Link class={navStyle.logo} to="/">Home</Link>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/newblog">New Blog</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newblog" element={<NewBlogPage />} />
      </Routes>
    </>
  );
}

export default App;
