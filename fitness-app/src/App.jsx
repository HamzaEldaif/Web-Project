import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Fitness App</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/calculator">Calculator</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;