import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Comentarios = () => {
  const [com, setCom] = useState([]);
  const [visibleCom, setVisibleCom] = useState(5);

  useEffect(() => {
    const fetchCom = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setCom(data);
      } catch (error) {
        console.error("Error obteniendo comentarios:", error);
      }
    };

    fetchCom();
  }, []);

  const loadMoreComments = () => {
    setVisibleCom((prevVisibleCom) => prevVisibleCom + 5);
  };

  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <div className="container mt-4">
        <h1 className="mb-4 text-center text-primary display-4">Comentarios de Usuarios</h1>
        <p className="text-center text-secondary lead">
          ¡Bienvenido/a a nuestra aplicación! Aquí tienes algunas opiniones de otros usuarios sobre la aplicación.
        </p>
        {com.slice(0, visibleCom).map((com) => (
          <Card key={com.id} className="mb-3 shadow-lg">
            <div style={{ display: "flex" }}>
              <Card.Img
                variant="top"
                src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                alt="Foto de perfil"
                style={{ width: "50px", height: "100%", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  Usuario: {com.email}
                </Card.Subtitle>
                <Card.Title>{com.name}</Card.Title>
                <Card.Text>{com.body}</Card.Text>
              </Card.Body>
            </div>
          </Card>
        ))}
        {visibleCom < com.length && (
          <div className="d-flex justify-content-center mt-3 mb-4">
            <Button variant="primary" onClick={loadMoreComments}>
              Ver más
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comentarios;
