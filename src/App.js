import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Crud from './paginas/crud';
import Home from './paginas/home';
import Cientifica from './paginas/cientifica';
import Posts from './paginas/jsonApi';

import Navbar from './componentes/navbar';
import Footer from './componentes/footer';


function App() {
  return (
    <div className="App">
      <>
      <Router>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/cientifica" element={<Cientifica />} /> 
          <Route path="/jsonApi" element={<Posts />} />
        </Routes>
      </div>

      
      <Footer />

    </Router>
      </>

    </div>
  );
}

export default App;


