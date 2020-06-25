import React from 'react';
import './App.css';
import Navbar from './Navbar'
import NavbarSmall from './NavbarSmall';
import Landing from './components/Landing'
import { Switch, Route } from 'react-router-dom'
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';



function App() {
  return (
    <div className="app">
      <Navbar />
      <NavbarSmall />
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
