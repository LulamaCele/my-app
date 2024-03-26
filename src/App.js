import React from "react";
import "./App.css";
import { Nav } from "./components/nav/Nav";
import { Home } from "./pages/home/Home";
import { Services } from "./pages/services/Services";
import { Testimonials } from './pages/testimonials/Testimonials';
import { Gallery } from './pages/gallery/Gallery';
import { Contact } from './pages/contact/Contact';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/services" ><Services /></Route>
          <Route path="/testimonials" ><Testimonials /></Route>
          <Route path="/gallery" ><Gallery /></Route>
          <Route path="/contact" ><Contact /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
