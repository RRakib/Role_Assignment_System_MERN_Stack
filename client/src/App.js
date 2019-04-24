// Imports
import React from 'react';
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import { BrowserRouter , Route , Switch , Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" style={{margin: 15}}>Home</Link>
        <Link to="/login" style={{margin: 15}}>Login</Link>
        <Link to="/register" style={{margin: 15}}>Register</Link>
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
