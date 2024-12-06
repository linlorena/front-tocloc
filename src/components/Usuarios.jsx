import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa Axios

const Usuarios = () => {
  const [users, setUsers] = useState([]); // Estado para armazenar usuários
  const [error, setError] = useState(null); // Estado para erros

  useEffect(() => {
    // Fazer requisição GET para listar usuários
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data); // Armazena os usuários no estado
      })
      .catch(error => {
        setError('Erro ao buscar usuários');
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.password} - {user.cpfCnpj} - {user.birthdate} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
