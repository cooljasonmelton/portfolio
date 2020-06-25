import React from 'react';
import './App.css';
import Navbar from './Navbar'
import NavbarSmall from './NavbarSmall';
import Landing from './components/Landing'
import { Switch, Route } from 'react-router-dom'
import { Transition } from 'semantic-ui-react'
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';
import Projects from './components/Projects';




class App extends React.Component{
  state = { hide: 500, show: 500, visible: true }

  toggleVisibility = () => this.setState((prevState) => ({ visible: !prevState.visible }))

  render(){
    const { hide, show, visible } = this.state
    return (
      <div className="app">
        <Navbar />
        <NavbarSmall />
        <Transition duration={{ hide, show }} visible={visible}>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Transition>
      </div>
    );
  }
}

export default App;
