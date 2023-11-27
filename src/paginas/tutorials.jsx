import React, { useState } from "react";
import YouTube from "react-youtube";

const YoutubeRepository = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  const videoIds = {
    algebra: ["bphsXpEbbF8", "DV3C_RawfBg", "EwpYzJRVOf4"],
    calculus: ["pUfQ1kCuRjY", "pMYdSjgzrys", "U7onW7mMzLM"],
    geometry: ["GGTf7Dw1EXE", "Xu5RI6I9v2o", "l6mcVTGW7JE"],
    statistics: ["nCszHELuwxk", "fOuRqk1nzgY", "oZRaDwnpXkY"],
    // Agrega más categorías y videos según sea necesario
  };

  const [selectedCategory, setSelectedCategory] = useState("algebra");

  const changeCategory = (category) => {
    setSelectedCategory(category);
    setVideoIndex(0); // Reiniciar el índice del video al cambiar la categoría
  };

  const previousVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex(videoIndex - 1);
    }
  };

  const nextVideo = () => {
    const videos = videoIds[selectedCategory];
    if (videoIndex < videos.length - 1) {
      setVideoIndex(videoIndex + 1);
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">
          TUTORIALES
        </h1>
      </header>
      <div className="container mx-auto my-8">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => changeCategory("algebra")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Álgebra
          </button>
          <button
            onClick={() => changeCategory("calculus")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Cálculo
          </button>
          <button
            onClick={() => changeCategory("geometry")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Geometría
          </button>
          <button
            onClick={() => changeCategory("statistics")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Estadística
          </button>
          {/* Agrega más botones para otras categorías */}
        </div>

        <div className="flex justify-center">
          <YouTube
            videoId={videoIds[selectedCategory][videoIndex]}
            opts={opts}
          />
        </div>
        <br></br>
        <div className="flex justify-center mb-4">
          <button
            onClick={previousVideo}
            className="mx-2 px-4 py-2 bg-[#bb2d3b] text-white rounded-md hover:bg-[#b70101] focus:outline-none focus:bg-blue-600"
          >
            Anterior
          </button>
          <button
            onClick={nextVideo}
            className="mx-2 px-4 py-2 bg-[#5eb30d] text-white rounded-md hover:bg-[#0f9a33] focus:outline-none focus:bg-blue-600"
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default YoutubeRepository;
