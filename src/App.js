import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';

function App() {
  return ( 
  <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/menu'  component={Menu}/>
        <Route path='/about'  component={About}/>
        <Route path='/contact-us'  component={ContactUs}/>
      </Switch>
    </Router>
  </>
  );
}

export default App;