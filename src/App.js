import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Crud from './paginas/crud';
import Home from './paginas/home';
import Cientifica from './paginas/cientifica';
import Divisas from './paginas/divisas';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Pizarra from './paginas/Pizarra';
import Libros from './paginas/libros';
import YoutubeRepository from './paginas/tutorials'
import Medidas from './paginas/medidas';
import Notas from './paginas/notas';
import AcercaDe from './paginas/acercaDe';
import Login from './paginas/login';
import LoginForm from './paginas/login';
import Registro from './paginas/registro';
import Comentarios from './paginas/jsonApi';


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
          <Route path="/divisas" element={<Divisas />} /> 
          <Route path="/pizarra" element={<Pizarra />} />
          <Route path="/jsonApi" element={<Comentarios />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/tutorials" element={<YoutubeRepository />} />
          <Route path="/medidas" element={<Medidas/>} />
          <Route path="/notas" element={<Notas/>} />
          <Route path="/acercade" element={<AcercaDe/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/registro" element={<Registro/>} />
        </Routes>
      </div>

      
      <Footer />

    </Router>
      </>

    </div>
  );
}

export default App;


