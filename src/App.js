import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/layout/users/User";
import Home from "./components/layout/pages/Home";
import Alert from "./components/layout/Alert";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import About from "./components/layout/pages/About";
import NotFound from "./components/layout/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/User/:login" element={<User />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
