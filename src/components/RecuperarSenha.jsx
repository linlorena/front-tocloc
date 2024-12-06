import React from 'react';

export function RecuperarSenha() {
  return (
    <div className="flex justify-center align-middle mt-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Redefinição de Senha</h2>
        <form className="space-y-4">
          <div>
            <p className="block text-sm text-teal-800">Para redefinir sua senha, digite o e-mail ou nome de usuário cadastrado e encaminharemos um link.</p>
            <label className="block text-sm text-teal-800">E-mail ou Nome de usuário</label>
            <input type="text" className="text-orange-900 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Digite seu nome de usuário" />
          </div>
          <button type="submit" className="w-full text-semibold bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 ease-in-out duration-150">Enviar link de recuperação</button>
        </form>
      </div>
    </div>
  );
}

export default RecuperarSenha;