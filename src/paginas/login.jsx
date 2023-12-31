import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { dbFirebase } from ".././db/firebase";
import axios from "axios";

const FormularioInicioSesion = () => {
  const [error, setError] = useState(null);
  const [mensajeExito, setMensajeExito] = useState("");

  const navegar = useNavigate();

  const manejarInicioSesionConGoogle = () => {
    const proveedor = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(proveedor)
      .then((resultado) => {
        const usuario = resultado.user;
        navegar("/");
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  return (
    <Container className="h-100 d-flex align-items-center">
      <Row className="w-100 justify-content-center">
        <Col md={6}>
          <Card className="w-75 mx-auto p-4 my-5">
            <Card.Title as="h1" className="text-center mb-4">
              Ingresa a tu cuenta
            </Card.Title>

            <hr className="my-4" />

            <Button
              variant="light"
              className="w-100 mt-3 border"
              onClick={manejarInicioSesionConGoogle}
              justifyContent="center"
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png"
                  alt="Icono de Google"
                  className="w-6 h-6"
                />
                <span className="ml-2">Ingresa con Google</span>
              </div>
            </Button>

            <p className="mt-3 text-center">
              ¿Todavía no tienes una cuenta?{" "}
              <a href="/registro" className="text-primary font-weight-bold">
                Crea una cuenta
              </a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioInicioSesion;
