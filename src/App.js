import React from 'react';
import './App.css';
import Posts from './paginas/jsonApi';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-semibold">Aplicación JSONPlaceholder</h1>
      </header>
      <Posts/>
    </div>
  );
}

export default App;
