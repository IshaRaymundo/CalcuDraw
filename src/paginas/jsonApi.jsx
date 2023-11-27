import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const CommentsApp = () => {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const loadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 5);
  };

  return (
    <div className="" >
      <div className="container mt-4">
        <h1 className="mb-4 text-center">Comentarios de Usuarios</h1>
        <p className="text-center">
          Bienvenido/a a nuestra aplicación. A continuación, te mostramos las
          opiniones de otros usuarios acerca de la aplicación.
        </p>
        {comments.slice(0, visibleComments).map((comment) => (
          <Card key={comment.id} className="mb-3">
            <div style={{ display: "flex" }}>
              <Card.Img
                variant="top"
                src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg"
                alt="Foto de perfil"
                style={{ width: "50px", height: "100%", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Subtitle className="text-muted">
                  Usuario: {comment.email}
                </Card.Subtitle>
                <Card.Title>{comment.name}</Card.Title>
                <Card.Text>{comment.body}</Card.Text>
              </Card.Body>
            </div>
          </Card>
        ))}
        {visibleComments < comments.length && (
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

export default CommentsApp;
