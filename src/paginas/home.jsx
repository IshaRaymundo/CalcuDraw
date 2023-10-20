import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  const cardData = [
    {
      image: "./img/img2.png",
      customText: "CALCULADORA CIENTIFICA",
      route: "/cientifica",
    },
    {
      image: "./img/img1.png",
      customText: "CALCULADORA DE DIVISAS",
      route: "/calculadora-divisas",
    },
    {
      image: "./img/img3.png",
      customText: "CALCULADORA DE MEDIDAS",
      route: "/calculadora-medidas",
    },
  ];

  return (
    <div className="bg-[#358ed3] min-h-screen">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">PÁGINA DE INICIO</h1>
      </header>

      <br></br>

      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">¡BIENVENIDO A CALCUDRAW!</h1>
        <p className="text-xl">
          ¡DESCUBRE LA MAGIA DE LOS NÚMEROS! ELIGE UNA CALCULADORA Y HAZ LAS
          MATEMÁTICAS DIVERTIDAS!
        </p>
      </div>

      <div className="container mx-auto mt-5">
        <div className="flex justify-center flex-wrap">
          {cardData.map((card, index) => (
            <div key={index}>
              <Link to={card.route}>
                {" "}
                {/* Enlace a la ruta correspondiente */}
                <Card
                  className="m-2"
                  style={{ width: "18rem", borderRadius: "15px" }}
                >
                  <Card.Body>
                    <Card.Img variant="top" src={card.image} />
                  </Card.Body>
                </Card>
              </Link>
              <div className="text-center mt-3">
                <p className="text-white font-bold">{card.customText}</p>
              </div>
            </div>
          ))}
        </div>

        <br></br>

        <div className="flex justify-center flex-wrap">
          {/* Tres cards sin imagen */}
          <Card
            className="m-2"
            style={{ width: "18rem", borderRadius: "100px" }}
          >
            <Card.Body>
              <Card.Text>
                <div className="text-center mt-3">
                  <p className="text-primary font-bold">FORMULARIOS</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="m-2"
            style={{ width: "18rem", borderRadius: "100px" }}
          >
            <Card.Body>
              <Card.Text>
                <div className="text-center mt-3">
                  <p className="text-primary font-bold">DIBUJO</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="m-2"
            style={{ width: "18rem", borderRadius: "100px" }}
          >
            <Card.Body>
              <Card.Text>
                <div className="text-center mt-3">
                  <p className="text-primary font-bold">NOTAS</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
