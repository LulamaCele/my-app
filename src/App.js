import React from "react";
import "./App.css";
import { Nav } from "./components/nav/Nav";
import { Home } from "./pages/home/Home";
import { Services } from "./pages/services/Services";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/services" element={<Services />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
