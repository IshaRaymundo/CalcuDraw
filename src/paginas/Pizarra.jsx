import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const Pizarra = () => {
  const canvasRef = useRef(null);
  const [brushColor, setBrushColor] = useState("#000");
  const [brushRadius, setBrushRadius] = useState(4);

  const clearCanvas = () => {
    canvasRef.current.clear();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="pizarra-container p-4 border-4 border-[#358ed3] rounded-lg shadow-lg">
        <div>
          <h1 className="text-[#358ed3]">¡REALIZA TUS APUNTES AQUÍ!</h1>
        </div>
        <div className="flex justify-between mb-4">
          {" "}
          {/* Modificado */}
          <div className="flex items-center">
            {" "}
            {/* Modificado */}
            <label htmlFor="colorPicker" className="mr-1 font-bold text-[#358ed3]">
              COLOR:
            </label>
            <input
              id="colorPicker"
              type="color"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
              className="p-1 rounded-md border border-gray-300"
            />
          </div>
          <div className="flex items-center">
            {" "}
            {/* Modificado */}
            <label htmlFor="brushSize" className="mr-1 font-bold text-[#358ed3]">
              TAMAÑO:
            </label>
            <input
              id="brushSize"
              type="number"
              min="1"
              max="20"
              value={brushRadius}
              onChange={(e) => setBrushRadius(parseInt(e.target.value))}
              className="p-1 rounded-md border border-gray-300"
            />
          </div>
        </div>

        <CanvasDraw
          ref={canvasRef}
          canvasWidth={1000} // Modifica el ancho del lienzo
          canvasHeight={400} // Modifica la altura del lienzo
          brushColor={brushColor}
          brushRadius={brushRadius}
        />

        <button
          onClick={clearCanvas}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          LIMPIAR
        </button>
      </div>
    </div>
  );
};

export default Pizarra;