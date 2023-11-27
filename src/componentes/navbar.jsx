import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  textTransform: "uppercase",
};

function Navbar() {
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
          Matemática
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
    </nav>
  );
}

export default Navbar;
