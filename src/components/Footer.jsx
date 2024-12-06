import { Link } from 'react-router-dom';

export function Footer () {
    return (
      <footer className="bg-teal-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} | <span className="font-semibold">Tocloc</span>. Todos os direitos reservados.
          </p>
          <div className="mt-2">
            <Link to={"/"} className="text-orange-400 hover:text-orange-300 mx-2 ease-in-out duration-150">Home</Link> ✶
            <Link to={"/login"} className="text-orange-400 hover:text-orange-300 mx-2 ease-in-out duration-150">Login</Link> ✶
            <Link to={"/cadastro"} className="text-orange-400 hover:text-orange-300 mx-2 ease-in-out duration-150">Cadastro</Link> ✶
            <Link to={"mailto:faleconosco@tocloc.com.br"} className="text-orange-400 hover:text-orange-300 mx-2 ease-in-out duration-150">Fale conosco</Link>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
  