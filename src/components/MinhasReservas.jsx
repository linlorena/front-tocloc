import React, { useState } from 'react';

export function MinhasReservas() {
  const reservasMock = [
    {
      id: 1,
      nome: 'Quadra A',
      data: '2024-12-10',
      preco: '100,00',
      foto: '/image/quadra_tenis.png',
    },
    {
      id: 2,
      nome: 'Quadra B',
      data: '2024-12-15',
      preco: '120,00',
      foto: '/image/quadra_basquete.jpg',
    },
  ];

  const [reservas, setReservas] = useState(reservasMock);

  const handleCancelar = (id) => {
    setReservas(reservas.filter(reserva => reserva.id !== id));
    alert('Reserva cancelada com sucesso.');
  };

  const handleCheckin = (id) => {
    alert(`Check-in realizado para a reserva de ID: ${id}`);
  };

  return (
    <div className="max-w-4xl my-6 mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-orange-100 mb-6 text-center">
  Minhas Reservas
</h1>
      {reservas.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-orange-100">Você não possui reservas ativas.</p>
      ) : (
        <div className="space-y-6">
          {reservas.map(reserva => (
            <div key={reserva.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-700">
              <img src={reserva.foto} alt={reserva.nome} className="w-24 h-24 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 dark:text-orange-100">{reserva.nome}</h2>
                <p className="text-gray-600 dark:text-orange-100">Data: {reserva.data}</p>
                <p className="text-gray-600 dark:text-orange-100">Valor: R$ {reserva.preco}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleCheckin(reserva.id)}
                  className="bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700"
                >
                  Check-in
                </button>
                <button
                  onClick={() => handleCancelar(reserva.id)}
                  className="bg-red-600 text-white py-1 px-4 rounded-lg hover:bg-red-700"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
