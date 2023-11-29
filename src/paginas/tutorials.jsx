import React, { useState } from "react";
import YouTube from "react-youtube";
import {
  FaCalculator,
  FaChartBar,
  FaShapes,
  FaBook,
  FaChartLine,
} from "react-icons/fa";

const YoutubeRepository = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  const videoIds = {
    algebra: [
      "EKeMeKv8c-I",
      "_6uyQISZvBc",
      "DV3C_RawfBg",
      "EwpYzJRVOf4",
      "UNWFLuUfiX4",
      "FboTr4foiJE",
      "hWBbq__YNYY",
      "kp1wogn-KwI",
      "n46kqcHQ1oo",
      "W18vskI3Tyw",
    ],
    calculus: [
      "Ll_qHUG6OWs",
      "rvE1QRZuK0I",
      "B5oxL1AQpLo",
      "ZSYQ13iMbYA",
      "0opaDVgBzQA",
      "E3ECQskKyrU",
      "FHLsTqxW9uc",
      "pUfQ1kCuRjY",
      "pMYdSjgzrys",
      "U7onW7mMzLM",
    ],
    geometry: [
      "CPkarPw0-P4",
      "u25vkjeCrF4",
      "RWwJ7NGpdQQ",
      "LpyprokHF3k",
      "TO-cXk8UckA",
      "GGTf7Dw1EXE",
      "dRv6f7Y2l6U",
      "Xu5RI6I9v2o",
      "l6mcVTGW7JE",
      "dMuws75fmHk",
    ],
    statistics: [
      "CWDYwZ_c1lI",
      "nFB-1Y1yMdo",
      "0_ybaigJd1s",
      "nCszHELuwxk",
      "fOuRqk1nzgY",
      "oZRaDwnpXkY",
      "JtB2w0QLRZ4",
      "gaiYQddOF7M",
      "V9Zx1qJ9-EE",
      "hODwSUX0kT4",
    ],
    trigonometry: [
      "gmivrUZD_cE",
      "bBBcKPEx0N4",
      "CRg5jQRj1Hg",
      "ZyLz5SUMzNY",
      "ab5zraZ-4q8",
      "WdfWMMrsCLo",
      "WNvV1kXMbPE",
      "fbK-wwfeSyM",
    ],
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
    height: "400",
    width: "700",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">TUTORIALES</h1>
      </header>
      <div className="container mx-auto my-8">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => changeCategory("algebra")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center"
            style={{ fontSize: "18px" }} // Tamaño del texto
          >
            <FaBook style={{ marginRight: "8px", fontSize: "20px" }} /> Álgebra
          </button>
          <button
            onClick={() => changeCategory("calculus")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center"
            style={{ fontSize: "18px" }} // Tamaño del texto
          >
            <FaCalculator style={{ marginRight: "8px", fontSize: "20px" }} />{" "}
            Cálculo
          </button>
          <button
            onClick={() => changeCategory("geometry")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center"
            style={{ fontSize: "18px" }} // Tamaño del texto
          >
            <FaShapes style={{ marginRight: "8px", fontSize: "20px" }} />{" "}
            Geometría
          </button>
          <button
            onClick={() => changeCategory("trigonometry")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center"
            style={{ fontSize: "18px" }} // Tamaño del texto
          >
            <FaChartLine style={{ marginRight: "8px", fontSize: "20px" }} />{" "}
            Trigonometría
          </button>

          <button
            onClick={() => changeCategory("statistics")}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 flex items-center"
            style={{ fontSize: "18px" }} // Tamaño del texto
          >
            <FaChartBar style={{ marginRight: "8px", fontSize: "20px" }} />{" "}
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
            className="mx-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-blue-600"
          >
            Anterior
          </button>
          <button
            onClick={nextVideo}
            className="mx-2 px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-blue-600"
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default YoutubeRepository;
