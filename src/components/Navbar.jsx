import { NavLink } from "react-router-dom";

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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow transition-colors"
          }
        >
          Introdução
        </NavLink>
        <NavLink to="/architecture" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Arquitetura
        </NavLink>
        <NavLink to="/crawler" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Crawler
        </NavLink>
        <NavLink to="/database" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Base de Dados
        </NavLink>
        <NavLink to="/backend" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Backend
        </NavLink>
        <NavLink to="/frontend" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Frontend
        </NavLink>
        <NavLink to="/docker" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Docker
        </NavLink>
        <NavLink to="/ci-cd" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          CI/CD
        </NavLink>
        <NavLink to="/jenkins" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Jenkins
        </NavLink>
        <NavLink to="/ansible" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Ansible
        </NavLink>
        <NavLink to="/keycloak" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Keycloak
        </NavLink>
        <NavLink to="/setup" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Setup
        </NavLink>
        <NavLink to="/conclusion" className={({ isActive }) => isActive ? "text-pokeYellow font-semibold" : "hover:text-pokeYellow"}>
          Conclusão
        </NavLink>
      </nav>
    </aside>
  );
}
