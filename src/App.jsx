import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 h-screen text-white flex justify-center items-center">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/happy">Happy</Link>
            </li>
            <li>
              <Link to="/joy">Joy</Link>
            </li>
            <li>
              <Link to="/sadness">Sadness</Link>
            </li>
            <li>
              <Link to="/blue">Blue</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;