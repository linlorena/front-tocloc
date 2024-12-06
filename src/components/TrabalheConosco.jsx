import React, { useState } from 'react';

export function TrabalheConosco() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [curriculo, setCurriculo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", { nome, email, mensagem, curriculo });
  };

  return (
    <div className="w-full bg-orange-200 p-4 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-3xl dark:bg-gray-900 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-orange-100 mb-2">Trabalhe Conosco</h1>
          <p className="text-gray-600 dark:text-orange-100">
            Quer contribuir com a TocLoc? Encaminhe seu currículo e vamos conversar.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="max-w-3xl mx-auto">
            <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">Nome Completo</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-orange-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Digite seu nome completo" />
          </div>

          <div className="max-w-3xl mx-auto">
            <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-orange-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Digite seu e-mail" />
          </div>

          <div className="max-w-3xl mx-auto">
            <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-orange-100 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Fale um pouco sobre você"
              rows="4" />
          </div>

          <div className="max-w-3xl mx-auto">
            <label className="block text-sm font-medium text-teal-800 dark:text-orange-100">Currículo (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setCurriculo(e.target.files[0])}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-orange-100 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
          </div>

          <div className="max-w-3xl mx-auto">
            <button type="submit" className="w-full bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 ease-in-out duration-150">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TrabalheConosco;
