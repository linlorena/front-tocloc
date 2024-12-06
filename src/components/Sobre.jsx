import React from 'react';

export function Sobre() {
  return (
    <div className="flex justify-center items-center space-x-6">
      <div className="w-full max-w-3xl m-4 bg-white p-6 rounded-3xl dark:bg-gray-900 shadow">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-orange-100 mb-2">Sobre Nós</h1>
        </div>
        <div className="flex space-x-2 py-4 flex-wrap justify-center">
          <p className="text-justify">A TocLoc é uma plataforma web projetada para facilitar a criação e o gerenciamento de locação de quadras esportivas. 
            Nosso propósito é conectar clientes que desejam alugar espaços para práticas esportivas a proprietários que oferecem esses locais.
            Com uma interface intuitiva e funcionalidades dinâmicas, a TocLoc permite que proprietários listem suas quadras, definam horários disponíveis e gerenciem reservas, enquanto os clientes podem buscar espaços, agendar locações e realizar pagamentos de forma prática e segura.</p>
          <img src="/image/sobrenos.png" className="rounded-3xl mt-6 w-full" />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
