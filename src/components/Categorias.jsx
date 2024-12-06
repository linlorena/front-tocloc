import { Basketball, BeachBall, Racquet, SneakerMove, SoccerBall, Sparkle, TennisBall, Volleyball } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Categorias() {
  const [quadras, setQuadras] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [quadraAtiva, setQuadraAtiva] = useState(null); // Estado para armazenar a quadra clicada

  useEffect(() => {
    const fetchQuadrasData = async () => {
      const response = await fetch('/data/quadras.json');
      const data = await response.json();
      setQuadras(data);
    };
    fetchQuadrasData();
  }, []);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const handleQuadraClick = (index) => {
    setQuadraAtiva(index); // Define a quadra ativa ao clicar
  };

  const quadrasFiltradas = categoriaSelecionada
    ? quadras.find((item) => item.categoria === categoriaSelecionada)?.quadras || []
    : [];

  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="w-full max-w-6xl m-4 bg-white p-6 rounded-3xl dark:bg-gray-900 shadow">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-orange-100 mb-2">Categorias</h1>
          <p className="text-gray-600 dark:text-orange-100">
            Consulte todos os espaços que disponibilizamos para a prática da sua atividade esportiva.
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-4 py-6">
          {[
            { nome: 'Futebol', Icon: SoccerBall },
            { nome: 'Futsal', Icon: SneakerMove },
            { nome: 'Vôlei', Icon: Volleyball },
            { nome: 'Vôlei de Praia', Icon: BeachBall },
            { nome: 'Basquete', Icon: Basketball },
            { nome: 'Tênis', Icon: TennisBall },
            { nome: 'Beach Tennis', Icon: Racquet },
            { nome: 'Outros esportes', Icon: Sparkle },
          ].map(({ nome, Icon }) => (
            <div
            key={nome}
            onClick={() => handleCategoriaClick(nome)}
            className={`w-28 h-28 rounded-xl flex flex-col justify-center items-center cursor-pointer duration-150 ease-in-out ${
            categoriaSelecionada === nome ? 'bg-orange-400' : 'bg-teal-400 hover:bg-teal-300'
            }`}>
          <Icon size={36} />
          <span className="font-semibold text-lg text-center mt-2 leading-tight">{nome}</span>
        </div>
          ))}
        </div>

        {categoriaSelecionada && quadrasFiltradas.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quadrasFiltradas.map((quadra, index) => (
              <div
                key={index}
                onClick={() => handleQuadraClick(index)}
                className={`p-4 rounded-xl duration-150 ease-in-out cursor-pointer ${
                  quadraAtiva === index ? 'bg-orange-400' : 'bg-teal-200 hover:bg-teal-300 dark:bg-gray-700'
                }`}
              >
                <img
                  src={quadra.foto}
                  alt={quadra.nome}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-start">
                  <div className="leading-tight space-y-1">
                    <h3 className="font-bold text-xl text-gray-800 dark:text-orange-100">{quadra.nome}</h3>
                    <p className="text-gray-600 dark:text-orange-100">{quadra.endereco}</p>
                    <p className="text-gray-600 dark:text-orange-100">{quadra.preco}</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <button className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-3xl">
                       <Link to="/reserva">Reservar</Link>
                    </button>
                    <button className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-3xl">
                      Ver mais detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Categorias;
