import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return ( 
    <div className="container">
      <div className="row">
        <Router>
          <Navbar />
          <Toaster position="bottom-right" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
