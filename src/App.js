import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import First from "./pages/first";
import Dashboard from "./pages/dashboard";
import Selector from "./pages/selector";
import Navbar from "./pages/navbar";
import Home from "./pages/about";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="selector" element={<Selector />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="first" element={<First />} />
      </Routes>
    </Router>
  );
}

export default App;
