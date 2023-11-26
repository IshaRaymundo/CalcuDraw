import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  textTransform: "uppercase",
};

function Navbar() {
  return (
    <nav className="bg-white p-2 shadow-md d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Link to="/">
          <img
            src="https://media.istockphoto.com/id/1151590596/es/vector/icono-de-calculadora.jpg?s=612x612&w=0&k=20&c=nJ1JKLiL3T6D1Jcb-Ij8MOho0R_FFpoRpei2CokcH6c="
            alt="CalcuDraw"
            className="logo w-16 h-16 mx-4"
          />
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
        <Link to="/jsonApi" style={linkStyle} className="text-sm mx-4">
          JSON API
        </Link>
        <Link to="/crud" style={linkStyle} className="text-sm mx-4">
          CRUD
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
