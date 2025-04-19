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
        <Link to="/" className="hover:text-pokeYellow transition-colors">Introdução</Link>
        <Link to="/structure" className="hover:text-pokeYellow transition-colors">Estrutura do Projeto</Link>
        <Link to="/backend" className="hover:text-pokeYellow transition-colors">Backend</Link>
        <Link to="/frontend" className="hover:text-pokeYellow transition-colors">Frontend</Link>
        <Link to="/crawler" className="hover:text-pokeYellow transition-colors">Crawler</Link>
        <Link to="/database" className="hover:text-pokeYellow transition-colors">Base de Dados</Link>
        <Link to="/environment" className="hover:text-pokeYellow transition-colors">Variáveis de Ambiente</Link>
        <Link to="/docker" className="hover:text-pokeYellow transition-colors">Docker</Link>
        <Link to="/ci-cd" className="hover:text-pokeYellow transition-colors">CI/CD</Link>
        <Link to="/ansible" className="hover:text-pokeYellow transition-colors">Ansible</Link>
        <Link to="/keycloak" className="hover:text-pokeYellow transition-colors">Keycloak</Link>
        <Link to="/Execution" className="hover:text-pokeYellow transition-colors">Execução</Link>
        <Link to="/conclusion" className="hover:text-pokeYellow transition-colors">Conclusão</Link>
      </nav>
    </aside>
  );
}
