import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Acerca de</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="/acercade"
                className="no-underline text-cyan-50 text-center"
              >
                Quiénes somos
              </a>
            </li>
            <li>
              <a
                href="/jsonApi"
                className="no-underline text-cyan-50 text-center"
              >
                Comentarios
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Contacto</h3>
          <ul className="flex flex-col gap-2">
            <li>Email: CalcuDraw@gmail.com</li>
          </ul>
          <div className="flex items-center justify-center md:justify-start mt-4">
            <input
              className="p-2 rounded-l-md text-black w-full"
              type="text"
              placeholder="Correo electrónico"
            />
            <button className="bg-blue-600 text-white rounded-r-md p-2">
              Enviar
            </button>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Redes Sociales</h3>
          <ul className="flex flex-row gap-4 justify-center md:justify-start">
            <li className="flex flex-col items-center">
              <p>Facebook</p>
              <a href="https://www.facebook.com/" className="no-underline">
                <FaFacebook className="text-3xl" />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <p>Instagram</p>
              <a href="https://www.instagram.com/" className="no-underline">
                <FaInstagram className="text-3xl" />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <p>Twitter</p>
              <a href="https://twitter.com/" className="no-underline">
                <FaTwitter className="text-3xl" />
              </a>
            </li>
            <li className="flex flex-col items-center">
              <p>YouTube</p>
              <a href="https://www.youtube.com/" className="no-underline">
                <FaYoutube className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
