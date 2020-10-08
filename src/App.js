import React from 'react';

// router
import { Switch, Route } from 'react-router-dom'

// styling
import './App.css';

// components 
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Landing from './components/Landing'
import Navbar from './Navbar'
import NavbarSmall from './NavbarSmall';
import Projects from './components/Projects';

const App = () => {
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
