import React from 'react';
import './App.css';

import Home from './pgs/Home';
import About from './pgs/About';
import Contact from './pgs/Contact';
import Service from './pgs/Service';
import Blog from './pgs/Blog';
import Navbar from './inc/Navbar';
import Footer from './inc/Footer';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <div className="content-wrap">
        <>
            <Router>
            
              <Navbar/>
              <Switch>
                <Route exact path='/'>
                  <Home/>          
                </Route>

                <Route path='/about'>
                  <About/>
                </Route>

                <Route path='/service'>
                  <Service/>
                </Route>

                <Route path='/blog'>
                  <Blog/>
                </Route>

                <Route path='/contact'>
                  <Contact/>
                </Route>
              
              </Switch>
                        
                         
            
              <Footer/>
          </Router>
          
        </>

      </div>

    </div>
  );
}

export default App;
