import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import { Link } from "react-router-dom";

const TopNav = () => (
  <div className="nav bg-light d-flex justify-content-betweens">
    <Link className="nav-link" to="/"></Link>
    <Link className="nav-link" to="/login">
      Login
    </Link>
    <Link className="nav-link" to="/register">
      Register
    </Link>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
