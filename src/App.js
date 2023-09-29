// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import 'Routes'

import Login from "./components/Login";
import Register from "./components/register";
import Welcome from "./components/welcome";

function App() {
  

  return (
    <Router>
      <div className="App">
        

        {/* Replace <Route> with <Routes> */}
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
