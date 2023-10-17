import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Crud from './paginas/crud';
import Home from './paginas/home';
import Cientifica from './paginas/cientifica';
import Posts from './paginas/jsonApi';

function App() {
  return (
    <div className="App">
      <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/cientifica" element={<Cientifica />} /> 
          <Route path="/jsonApi" element={<Posts />} />
        </Routes>
      </div>
    </Router>
      </>

    </div>
  );
}

export default App;