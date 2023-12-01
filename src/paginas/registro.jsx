import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { dbFirebase } from ".././db/firebase";
import axios from "axios";

const Registro = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
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
              Regístrate
            </Card.Title>
            <Button
              variant="light"
              className="w-100 mt-3 border"
              onClick={handleGoogleSignIn}
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png"
                  alt="Google Icon"
                  className="w-6 h-6"
                />
                <span className="ml-2">Regístrate con Google</span>
              </div>
            </Button>
            {error && <div className="text-danger mt-3">{error}</div>}
            {successMessage && (
              <div className="text-success mt-3">{successMessage}</div>
            )}
            <hr className="my-4" />
            <p className="mt-3 text-center">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-primary font-weight-bold">
                Ingresa
              </a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
