import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

function Notas() {
  const [note, setNote] = useState('');
  const [noteHistory, setNoteHistory] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  useEffect(() => {
    const storedNotes = localStorage.getItem('noteHistory');
    if (storedNotes) {
      setNoteHistory(JSON.parse(storedNotes));
    }
  }, []);

  const clearNote = () => {
    setNote('');
    setSelectedNoteIndex(null);
  };

  const saveNote = () => {
    // Verificar que la nota no esté en blanco antes de guardar
    if (note.trim() === '') {
      // Puedes mostrar un mensaje de error o simplemente no hacer nada
      return;
    }

    // Si hay una nota seleccionada, actualiza esa nota; de lo contrario, guarda una nueva nota
    if (selectedNoteIndex !== null) {
      const updatedNoteHistory = [...noteHistory];
      updatedNoteHistory[selectedNoteIndex] = note;
      setNoteHistory(updatedNoteHistory);
      localStorage.setItem('noteHistory', JSON.stringify(updatedNoteHistory));
    } else {
      const newNoteHistory = [...noteHistory, note];
      setNoteHistory(newNoteHistory);
      localStorage.setItem('noteHistory', JSON.stringify(newNoteHistory));
    }

    // Limpia la nota actual y la selección después de guardar
    clearNote();
  };

  const deleteNote = (index) => {
    // Elimina la nota del historial y del localStorage
    const newNoteHistory = [...noteHistory];
    newNoteHistory.splice(index, 1);
    setNoteHistory(newNoteHistory);
    localStorage.setItem('noteHistory', JSON.stringify(newNoteHistory));

    clearNote();
  };

  const editNote = (index) => {
    setNote(noteHistory[index]);
    setSelectedNoteIndex(index);
  };

  const downloadNotes = () => {
    const notesText = noteHistory.join('\n');
    const blob = new Blob([notesText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notas.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  // ... (código posterior)
  
  return (
    <div className="bg-[#f7f7f8] min-h-screen">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-semibold text-center">NOTAS</h1>
      </header>
      <div className="container mx-auto mt-5">
        <div className="flex">
        <div className="w-1/2 p-4">
  <div className="calculator rounded-md bg-yellow-200 p-4 shadow">
    <textarea
      value={note}
      onChange={(e) => setNote(e.target.value)}
      className="form-control h-64 bg-white"
      placeholder="Toma tus notas aquí"
    />
    <div className="mt-3 d-flex justify-content-between">
      <button onClick={saveNote} className="btn btn-light">
        Guardar
      </button>
      <button onClick={clearNote} className="btn btn-light">
        Limpiar
      </button>
      <button onClick={downloadNotes} className="btn btn-light">
        Descargar
      </button>
    </div>
  </div>
</div>
          <div className="w-1/2 p-4">
          <div className="notes bg-white rounded-md p-4 shadow">
              <h2 className="text-2xl font-semibold mb-4">Historial de Notas</h2>
              <table className="table ">
                <thead>
                  <tr>
                    <th>Nota</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {noteHistory.map((savedNote, index) => (
                    <tr key={index}>
                      <td>{savedNote}</td>
                      <td className="text-center space-x-2">
                        <button onClick={() => editNote(index)}>
                          <FaEdit color="#ffc107" />
                        </button>
                        <button onClick={() => deleteNote(index)}>
                          <FaTrash color="#dc3545" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notas;