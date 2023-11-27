import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Libros = () => {
  const [data, setData] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://archive.org/advancedsearch.php?q=subject:algebra&output=json'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const loadMoreBooks = () => {
    setVisibleBooks(visibleBooks + 10);
  };

  return (
    <div className="container mt-4">
      <h1>Libros</h1>
      <div className="row row-cols-1 row-cols-md-4">
        {data &&
          data.response &&
          data.response.docs &&
          data.response.docs.slice(0, visibleBooks).map((item, index) => (
            <div key={index} className="col mb-4">
              <div className="card">
                <img
                  src="https://th.bing.com/th/id/OIP.ZlP48UINATqUGH7awm0jXAHaHa?rs=1&pid=ImgDetMain"
                  alt={item.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <a
                    href={item.internet_archive_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Ver en Internet Archive
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      {data && data.response && data.response.docs && visibleBooks < data.response.docs.length && (
        <button onClick={loadMoreBooks} className="btn btn-secondary mt-3">
          Cargar más
        </button>
      )}
    </div>
  );
};

export default Libros;
