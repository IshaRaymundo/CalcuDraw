import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Libros = () => {
  const [data, setData] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(4);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://archive.org/advancedsearch.php?q=subject:matematicas&output=json'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleExpandToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const loadMoreBooks = () => {
    setVisibleBooks(visibleBooks + 10);
  };

  const searchOnGoogle = (title, description) => {
    // Verifica que title y description tengan valores antes de construir la cadena de búsqueda
    const searchQuery = `${title || ''} ${description || ''}`.trim();

    // Verifica si la cadena de búsqueda está vacía antes de realizar la búsqueda
    if (searchQuery !== '') {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.open(googleSearchUrl, '_blank');
    } else {
      // Puedes mostrar un mensaje o simplemente no hacer nada si no hay nada que buscar
      console.warn('No se pudo realizar la búsqueda: Título o descripción indefinidos.');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Libros</h1>
      <div className="row row-cols-1 row-cols-md-4">
        {data && data.response && data.response.docs &&
          data.response.docs.slice(0, visibleBooks).map((item, index) => (
            <div key={index} className="col mb-4">
              <div className={`card ${expandedIndex === index ? 'bg-light' : ''}`}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/445/226/non_2x/cartoon-image-of-an-open-book-or-textbook-with-a-bookmark-back-to-school-sticker-kids-learning-and-educational-hobby-reading-free-vector.jpg"
                  alt={item.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  {expandedIndex === index ? (
                    <div>
                      <p className="card-text">{item.description}</p>
                      <button
                        onClick={() => searchOnGoogle(item.title, item.description)}
                        className="btn btn-primary" // Añadí la clase "btn-primary" para que tenga un estilo similar
                      >
                        Buscar en Google
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleExpandToggle(index)}
                      className="btn btn-light"
                      style={{ fontWeight: 'bold' }}
                    >
                      Ver más
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {data && data.response && data.response.docs && visibleBooks < data.response.docs.length && (
        <button onClick={loadMoreBooks} className="btn btn-primary mx-auto d-block mt-3">
          Cargar más
        </button>
      )}
      <br />
    </div>
  );
};

export default Libros;