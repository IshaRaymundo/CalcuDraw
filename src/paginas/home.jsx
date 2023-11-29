import { Card, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const cardData = [
    {
      image: "./img/img2.png",
      customText: "CALCULADORA CIENTIFICA",
      route: "/cientifica",
    },
    {
      image: "./img/img1.png",
      customText: "CALCULADORA DE DIVISAS",
      route: "/divisas",
    },
    {
      image: "./img/img3.png",
      customText: "CALCULADORA DE MEDIDAS",
      route: "/medidas",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [formularioImage, setFormularioImage] = useState(null);

  const handleFormularioClick = () => {
    setFormularioImage("https://cdn-v1.udocz-assets.com/uploads/book/cover/287548/287548.jpg");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#358ed3] min-h-screen">
      <br></br>
<div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4 mt-5">
          ¡BIENVENIDO A CALCUDRAW!
        </h1>
        {user ? (
          <p className="text-xl">¡Hola, {user.displayName}!</p>
        ) : (
          <p className="text-xl">
            ¡Descubre la magia de los números! Elige una calculadora y haz las
            matemáticas divertidas!
          </p>
        )}
      </div>

      <div className="container mx-auto mt-5">
        <div className="flex justify-center flex-wrap">
          {cardData.map((card, index) => (
            <div key={index}>
              <Link to={card.route}>
              <Card
                  className="m-2"
                  style={{ width: "14rem", borderRadius: "15px" }}
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

        <div className="flex justify-center">
        <Button
            variant="light"
            className="m-2 rounded-pill"
            onClick={handleFormularioClick}
          >            <span className="text-primary font-bold">FORMULARIOS</span>
          </Button>
          <Button variant="light" className="m-2 rounded-pill" as={Link} to="/tutorials">
            <span className="text-primary font-bold">TUTORIALES</span>
          </Button>
          <Button variant="light" className="m-2 rounded-pill" as={Link} to="/pizarra">
            <span className="text-primary font-bold">DIBUJO</span>
          </Button>
          <Button variant="light" className="m-2 rounded-pill" as={Link} to="/notas">
            <span className="text-primary font-bold">NOTAS</span>
          </Button>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Imagen del formulario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {formularioImage && (
              <img
                src={formularioImage}
                alt="Formulario"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );  
}

export default Home;
