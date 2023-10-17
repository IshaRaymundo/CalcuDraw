import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Crud() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editing, setEditing] = useState(false);
  const [editUser, setEditUser] = useState({ id: null, name: '', email: '' });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleEditInputChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', newUser).then((response) => {
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
    });
  };

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const editUserForm = (user) => {
    setEditing(true);
    setEditUser(user);
  };

  const updateUser = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, editUser).then(() => {
      setEditing(false);
      setEditUser({ id: null, name: '', email: '' });
      setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">CRUD de Usuarios</h1>
      <div className="mb-4">
        {editing ? (
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Editar Usuario</h2>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                value={editUser.name}
                onChange={handleEditInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Correo Electrónico"
                name="email"
                value={editUser.email}
                onChange={handleEditInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              onClick={updateUser}
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
              Actualizar
            </button>
          </div>
        ) : (
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Agregar Usuario</h2>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Correo Electrónico"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              onClick={addUser}
              className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
            >
              Agregar
            </button>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Lista de Usuarios</h2>
        {users.map((user) => (
          <div key={user.id} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div>
              <strong>{user.name}</strong> ({user.email})
            </div>
            <div className="mt-2">
              <button
                onClick={() => editUserForm(user)}
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white rounded p-2 hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crud;

