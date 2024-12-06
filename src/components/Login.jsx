import React, { useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [senha, setSenha] = useState("");

  const toggleVisibilidadeSenha = () => { setMostrarSenha(!mostrarSenha); };

  return (
    <div className="flex justify-center align-middle my-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 dark:text-white">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-teal-800 dark:text-white">Nome de Usuário</label>
            <input type="text" className="text-orange-900 w-full px-4 py-2 border rounded-lg dark:text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700" placeholder="Digite seu nome de usuário" />
          </div>
          <div>
            <label className="block text-sm font-medium text-teal-800 dark:text-white">Senha</label>
            <div className="relative">
              <input type={mostrarSenha ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} className="w-full dark:text-orange-100 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 focus:ring-orange-500 text-orange-900" placeholder="Digite sua senha" />
              <span onClick={toggleVisibilidadeSenha} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                {mostrarSenha ? <EyeSlash size={20} className="text-teal-400 hover:text-teal-500 ease-in-out duration-150" /> : <Eye size={20} className="text-gray-400 hover:text-gray-500 ease-in-out duration-150" />}
              </span>
            </div>
          </div>
          <div className="text-teal-400 hover:text-teal-500 ease-in-out duration-150 font-semibold text-center text-sm"><Link to={"/recuperar-senha"}>Esqueceu sua senha?</Link></div>
          <button type="submit" className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 ease-in-out duration-150">Entrar</button>
          <button type="submit" className="w-full bg-teal-400 text-white py-2 px-4 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 ease-in-out duration-150"><Link to={"/cadastro"}>Cadastrar</Link></button>
        </form>
      </div>
    </div>
  );
};

export default Login;
