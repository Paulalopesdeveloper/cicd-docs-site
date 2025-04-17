import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <aside className="w-64 h-screen bg-darkBg text-white fixed top-0 left-0 p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <img src="/pokeball.svg" alt="Pokébola" className="w-8 h-8" />
        <h1 className="text-2xl font-bold tracking-wide text-pokeYellow font-poppins">
          PokéDocs CI/CD
        </h1>
      </div>
      <nav className="flex flex-col gap-3 text-sm font-poppins">
        <Link to="/" className="hover:text-pokeYellow transition-colors">Início</Link>
        <Link to="/architecture" className="hover:text-pokeYellow transition-colors">Arquitetura</Link>
        <Link to="/crawler" className="hover:text-pokeYellow transition-colors">Crawler</Link>
        <Link to="/backend" className="hover:text-pokeYellow transition-colors">Backend</Link>
        <Link to="/frontend" className="hover:text-pokeYellow transition-colors">Frontend</Link>
        <Link to="/database" className="hover:text-pokeYellow transition-colors">Base de Dados</Link>
        <Link to="/cicd" className="hover:text-pokeYellow transition-colors">CI/CD</Link>
        <Link to="/guide" className="hover:text-pokeYellow transition-colors">Guia</Link>
      </nav>
    </aside>
  );
}
