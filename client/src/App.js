// Imports
import React from 'react';
import Login from "./Components/Login/Login"
import { BrowserRouter , Route , Switch , Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/login">Login</Link>
        <Switch >
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
