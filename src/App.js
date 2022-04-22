import logo from './logo.svg';
import React, { Component } from 'react';

import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Galleries from './Galleries';
import Gallery from './Gallery';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/galleries" exact>
            <Galleries />
          </Route>
          <Route path="/:id">
            <Gallery />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
