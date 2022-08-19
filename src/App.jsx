import Home from "./pages/home/Home";
import React from 'react';
import "./App.scss"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, 
} from "react-router-dom";
import Login from "./pages/login/login";
import Watch from "./pages/watch/watch";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route exact path="/movies" element={<Home type="movies" />} />
        <Route exact path="/series" element={<Home type="series" />} />       
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/watch" element={<Watch/>} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />  
      </Routes>
    </Router>
  );
}

export default App;