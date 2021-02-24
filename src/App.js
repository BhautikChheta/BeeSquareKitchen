import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Menu from './components/pages/Menu';
import RecipesBlog from './components/pages/RecipesBlog';
import ContactUs from './components/pages/ContactUs';

function App() {
  return ( 
  //   <div className="App">
  //     <Navbar />
  //   </div>

  <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/menu'  component={Menu}/>
        <Route path='/recipes-blog'  component={RecipesBlog}/>
        <Route path='/contact-us'  component={ContactUs}/>
      </Switch>
    </Router>
  </>
  );
}

export default App;