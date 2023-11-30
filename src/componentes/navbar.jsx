import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  textTransform: 'uppercase',
};

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <nav className="bg-light-blue p-2 shadow-md d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Link to="/">
          <p className="bg-white text-[#358ed3] text-lg font-bold inline-block mx-4">
            CalcuDraw
          </p>
        </Link>
      </div>
      <div className="text-center font-semibold">
        <Link to="/cientifica" style={linkStyle} className="text-sm mx-4">
          Científica
        </Link>
        <Link to="/divisas" style={linkStyle} className="text-sm mx-4">
          Divisas
        </Link>
        <Link to="/medidas" style={linkStyle} className="text-sm mx-4">
          Medidas
        </Link>
        <Link to="/tutorials" style={linkStyle} className="text-sm mx-4">
          Tutoriales
        </Link>
        <Link to="/libros" style={linkStyle} className="text-sm mx-4">
          Libros
        </Link>
      </div>
      <div>
        {isAuthenticated ? (
          <button
            onClick={handleSignOut}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Salir
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Ingresa
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
