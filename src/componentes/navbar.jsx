import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fcriticl%2Fart%2FRandom-Logo-448008908&psig=AOvVaw2YuZfMMx2v9ynquIXm0cKr&ust=1697592790705000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDv4Yr4-4EDFQAAAAAdAAAAABAh" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-semibold">Mi Aplicación</span>
        </div>
      </Link>
      <Link to="/jsonApi" className="ml-4">JSON API</Link>
      <Link to="/CalculadoraMatematica" className="ml-4">Calculadora Matematica</Link> 
    </nav>
  );
}

export default Navbar;
