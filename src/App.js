import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WebDev from "./components/WebDev";
import Design from "./components/Design";
import Contact from "./components/Contact";
import './recoveredStyles.css';
import './extraStyles.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/web_dev" component={WebDev} />
        <Route path="/design" component={Design} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
