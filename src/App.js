import React, { useState } from 'react';

import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Galleries from './Galleries';
import Gallery from './Gallery';
import Modal from './Modal';
import './index.css';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
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
            <Gallery setSelectedImg={setSelectedImg} />
            {selectedImg && (
              <Modal
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
              />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
