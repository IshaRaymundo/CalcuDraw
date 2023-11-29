import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { dbFirebase } from ".././db/firebase";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8083/login", {
        email: email,
        password: password,
      });

      if (response.data.mensaje) {
        setSuccessMessage("Autenticación exitosa");
        setError(null);
        navigate("/Tabla");
      } else {
        setError("Credenciales incorrectas");
        setSuccessMessage("");
      }
    } catch (error) {
      setError("Error al iniciar sesión");
      setSuccessMessage("");
      console.error(error);
    }
  };

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
              Ingresa a tu cuenta
            </Card.Title>
            <Form onSubmit={handleSignIn}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu Email"
                  autoFocus
                  autoComplete="on"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  minLength="6"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Ingresa
              </Button>
            </Form>
            {error && <div className="text-danger mt-3">{error}</div>}
            {successMessage && (
              <div className="text-success mt-3">{successMessage}</div>
            )}
            <hr className="my-4" />
            <Button
              variant="light"
              className="w-100 mt-3 border"
              onClick={handleGoogleSignIn}
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/871/371/non_2x/google-search-icon-google-product-illustration-free-png.png" // Actualiza la ruta según la ubicación de tu imagen
                  alt="Google Icon"
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

export default LoginForm;
