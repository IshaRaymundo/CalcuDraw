import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  textTransform: "uppercase",
};

function Navbar() {
  return (
    <nav className="bg-white p-2 shadow-md">
      <div className="text-center">
        <Link to="/">
          <img
            src="https://media.istockphoto.com/id/1151590596/es/vector/icono-de-calculadora.jpg?s=612x612&w=0&k=20&c=nJ1JKLiL3T6D1Jcb-Ij8MOho0R_FFpoRpei2CokcH6c="
            alt="CalcuDraw"
            className="w-8 h-8 mx-auto mb-1"
          />
          <p className="bg-white text-[#358ed3] text-lg font-bold inline-block mt-1">CalcuDraw</p>
        </Link>
      </div>
      <div className="mt-1 text-center font-semibold">
        <Link
          to="/cientifica"
          style={linkStyle}
          className="inline-block text-sm">
          Calculadora Matemática
        </Link>
        <span className="ml-4"></span>
        <Link
          to="/jsonApi"
          style={linkStyle}
          className="inline-block text-sm">
          JSON API
        </Link>
        <span className="ml-4"></span>
        <Link
          to="/crud"
          style={linkStyle}
          className="inline-block text-sm">
          CRUD
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;