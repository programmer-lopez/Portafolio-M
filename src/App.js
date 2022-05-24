import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <Home />
      <About />
      <Service />
    </div>
  );
}

export default App;
