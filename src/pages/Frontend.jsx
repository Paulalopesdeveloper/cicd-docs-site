export default function Frontend() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Frontend (React)</h2>
  
        <p className="mb-4">
          A interface do utilizador foi construída com <strong>ReactJS</strong>, em conjunto com <strong>TailwindCSS</strong> para uma estilização moderna e responsiva. Utiliza <strong>React Router</strong> para a navegação entre páginas (SPA – Single Page Application).
        </p>
  
        <p className="mb-4">
          A aplicação apresenta os Pokémons numa grelha com cartões, permitindo pesquisa por nome, filtragem por tipo e visualização dos detalhes num modal. Os utilizadores autenticados podem também editar e remover registos.
        </p>
  
        <p className="mb-4 font-semibold">Componentes principais:</p>
        <ul className="list-disc pl-6 mb-6">
          <li><code>PokemonCard</code> – Cartão com info básica de cada Pokémon</li>
          <li><code>PokemonGrid</code> – Grelha de listagem</li>
          <li><code>Filters</code> – Filtros por tipo ou nome</li>
          <li><code>PokemonModal</code> – Detalhes de um Pokémon</li>
          <li><code>EditPokemonModal</code> – Modal para edição (apenas se autenticado)</li>
        </ul>
  
        <p>
          A autenticação está integrada com o Keycloak, e o token obtido é utilizado para aceder a rotas protegidas no backend.
        </p>
      </div>
    );
  }
  