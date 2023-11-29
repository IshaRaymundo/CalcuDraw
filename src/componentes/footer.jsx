import React from "react";

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
          <ul className="flex flex-row gap-4">
            <li>
              <p>Facebook</p>
              <a href="#" className="no-underline">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </li>
            <li>
              <p>Instagram</p>
              <a href="#" className="no-underline">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </li>
            <li>
              <p>Twitter</p>
              <a href="#" className="no-underline">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </li>
            <li>
              <p>YouTube</p>
              <a href="#" className="no-underline">
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
