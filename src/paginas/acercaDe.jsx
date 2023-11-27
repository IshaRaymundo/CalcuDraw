import React from 'react';

const AcercaDe = () => {
    return (
        <div className="container mt-5">
          <img
            className="mb-6 w-full max-h-60 object-cover"
            src="https://multivende.com/wp-content/uploads/2022/11/sobre-nosotros-multivende.png"
            alt="Descripción de la imagen llamativa"
          />
      <h1 className="text-4xl font-bold mb-6 text-[#358ed3]">Acerca de Nosotros</h1>
      
      <p className="text-lg">
        ¡Bienvenido a CalcuDraw! Somos un equipo dedicado que se esfuerza por proporcionar
        una variedad de herramientas y recursos útiles para mejorar tu experiencia diaria. Nuestra misión es
        facilitar diversas tareas y proporcionar información valiosa. A continuación, te contamos más sobre lo que ofrecemos:
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-[#358ed3]">Nuestras Funcionalidades Principales</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8">
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Calculadora Científica</h3>
            <p>Realiza cálculos matemáticos avanzados de manera sencilla.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Calculadora de Divisas</h3>
            <p>Convierte entre diferentes monedas con tasas de cambio actualizadas.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Calculadora de Medidas</h3>
            <p>Realiza conversiones de unidades de medida de manera rápida y sencilla.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Pizarrón de Dibujo</h3>
            <p>Expresa tu creatividad con nuestro pizarrón de dibujo.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Página de Notas</h3>
            <p>Organiza tus pensamientos y toma notas fácilmente.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Comentarios</h3>
            <p>Comparte tus pensamientos y opiniones con la comunidad.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Libros de Álgebra</h3>
            <p>Explora nuestra colección de libros de álgebra para ampliar tus conocimientos.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Formularios</h3>
            <p>Simplifica la recopilación de datos con nuestra herramienta de formularios.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Videos de Estadística y Álgebra</h3>
            <p>Amplía tus conocimientos con nuestra colección de videos educativos.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AcercaDe;