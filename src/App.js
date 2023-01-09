import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Users from "./Component/Users";
import Home from "./Component/Home";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/user">User</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/user" element={<Users />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
