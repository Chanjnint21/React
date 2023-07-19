import "./App.css";
import Navigate from "./components/Navigate";
import HomePage from "./components/HomePage";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
