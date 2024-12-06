import React, { useState } from 'react';
import { MapPin } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Reserva() {
  const quadraMock = {
    nome: 'Quadra A',
    endereco: 'Rua X, 123',
    preco: '100,00',
    foto: '/image/quadra_tenis.png',
    descricao: 'Quadra de futebol society com grama sintética e iluminação noturna.',
  };

  const [dias, setDias] = useState(1);
  const [data, setData] = useState('');

  const calcularValor = () => {
    const preco = parseFloat(quadraMock.preco.replace(',', '.'));
    return (preco * dias).toFixed(2).replace('.', ',');
  };

  const handleReserva = () => {
    alert(`Reserva confirmada para ${dias} dia(s) no valor de R$ ${calcularValor()}.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <img src={quadraMock.foto} alt={quadraMock.nome} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-orange-100">{quadraMock.nome}</h1>
      <div className="flex items-center mt-2 text-gray-600 dark:text-orange-100">
        <MapPin size={24} className="mr-2" />
        <span>{quadraMock.endereco}</span>
      </div>
      <p className="mt-4 text-gray-700 dark:text-orange-100">{quadraMock.descricao}</p>
      <div className="mt-6">
        <label className="block text-teal-800 dark:text-orange-100">Data da Reserva</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-700"
        />
        <label className="block text-teal-800 dark:text-orange-100 mt-4">Quantidade de Dias</label>
        <input
          type="number"
          min="1"
          value={dias}
          onChange={(e) => setDias(e.target.value)}
          className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-700"
        />
        <p className="mt-4 text-lg">
          Valor Total: <span className="font-bold">R$ {calcularValor()}</span>
        </p>
        <button
          onClick={handleReserva}
          className="mt-6 w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
        >
          <Link to="/minhas-reservas">Confirmar Reserva</Link>
        </button>
      </div>
    </div>
  );
}
