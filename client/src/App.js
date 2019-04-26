// Imports
import "./App.css"
import React from 'react';
import Home from "./Components/Home/Home"
import Logo from "./Image/ogo.webp"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import { BrowserRouter , Route , Switch , Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <div className="headerContainer">
            <div className="logo">
              <img src={Logo} alt="logo"/>
              <small>A Global Experience Design Company</small>
            </div>
            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
