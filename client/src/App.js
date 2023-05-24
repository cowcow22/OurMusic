import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AboutUs from "./component/AboutUs";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");

  return (
    <Router>
      <Routes>
        <Route path="/" element={code ? <Navigate to="/osic" /> : <Login />} />
        <Route
          path="/osic"
          element={code ? <Dashboard code={code} /> : <Login />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
