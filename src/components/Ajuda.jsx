import React, { useState, useEffect } from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Ajuda() {
  const [perguntas, setPerguntas] = useState([]);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  useEffect(() => {
    fetch('./data/perguntas.json')
      .then((response) => response.json())
      .then((data) => setPerguntas(data))
      .catch((error) => console.error('Erro ao carregar as perguntas:', error));
  }, []);

  return (
    <div className="w-full bg-orange-200 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-3xl dark:bg-gray-900 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-orange-100 mb-2">Ajuda</h1>
          <p className="text-gray-600 dark:text-orange-100">
            Dúvidas sobre suas reservas? Temos as respostas aqui.
          </p>
        </div>
        <div className="py-4">
          {perguntas.map((item, index) => (
            <div key={index} className="bg-orange-300 rounded-lg w-full max-w-3xl mx-auto mt-4">
              <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleQuestion(index)}>
                <span className="text-gray-800 font-semibold">{item.pergunta}</span>
                {openQuestion === index ? <CaretUp size={24} /> : <CaretDown size={24} />}
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openQuestion === index ? 'max-h-60 rounded-b-lg' : 'max-h-0'}`}>
                <div className="p-4 text-gray-800 bg-orange-200 rounded-lg">
                  {item.resposta}
                </div>
              </div>
            </div>
          ))}
          <p className="font-semibold text-center pt-7">Não encontrou sua dúvida aqui? <Link to={"mailto:faleconosco@tocloc.com.br"} className="text-teal-500 hover:text-teal-400 ease-in-out duration-150">Entre em contato conosco</Link> e responderemos o quanto antes.</p>
        </div>
      </div>
    </div>
  );
}

export default Ajuda;
