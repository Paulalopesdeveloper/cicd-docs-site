
export default function Frontend() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Frontend (React)</h2>

      <p className="mb-4">
        A interface do utilizador da aplicação <strong>PokéCrawler</strong> foi desenvolvida com <strong>React</strong>, com um layout moderno, modular e responsivo, adaptado a diferentes dispositivos.
      </p>

      <p className="mb-4">
        O frontend comunica com o backend através de chamadas REST, permitindo visualizar, pesquisar, filtrar, editar e eliminar Pokémons. A interface adapta-se a diferentes tamanhos de ecrã (desktop, tablet, telemóvel), garantindo uma experiência fluida em múltiplos dispositivos.
      </p>

      <p className="mb-4">
        A estrutura do código é <strong>modular e escalável</strong>, facilitando a adição de novas páginas, funcionalidades ou componentes sem impacto no restante sistema.
      </p>

      <p className="font-semibold mb-2">📁 Estrutura de pastas:</p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`frontend/src/
├── assets/          # Imagens e recursos visuais
├── components/      # Componentes reutilizáveis (cards, modals, filtros, etc.)
├── context/         # Estado global (ex: sessão do utilizador autenticado)
├── pages/           # Páginas da aplicação (ex: Home)
├── services/        # Comunicação com a API REST
├── App.jsx          # Componente principal com rotas, layout e autenticação
└── index.js         # Entrada da aplicação React`}
      </pre>

      <p className="font-semibold mb-2">🧱 Componentes principais:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><code>PokemonCard</code> – Card com imagem, nome e tipos</li>
        <li><code>PokemonGrid</code> – Grid de visualização dos Pokémons</li>
        <li><code>Filters</code> – Filtros dinâmicos por tipo e nome</li>
        <li><code>Contador</code> – Contagem do número de Pokémons ao filtrar por tipo</li>
        <li><code>PokemonModal</code> – Detalhes individuais do Pokémon</li>
        <li><code>AddPokemonModal</code> e <code>EditPokemonModal</code> – Criação e edição (restritas)</li>
        <li><code>LoginModal</code> – Autenticação via Keycloak</li>
      </ul>

      <p className="font-semibold mb-2">🔐 Autenticação com Keycloak:</p>
      <p className="mb-4">
        A aplicação requer autenticação para as ações de <strong>edição e remoção de Pokémons</strong>. Utilizadores não autenticados têm acesso apenas de leitura. O estado da sessão é gerido por um <code>AuthProvider</code> React Context.
      </p>

      <p className="font-semibold mb-2">🧪 Desenvolvimento e Deploy:</p>
      <p className="mb-4">
        O frontend é executado num <strong>container Docker</strong> criado a partir de um <code>Dockerfile</code>, o que garante um ambiente de execução consistente e facilmente integrável em pipelines CI/CD. 
        O ambiente inclui suporte a autenticação com Keycloak e consumo de API REST.
      </p>

      <p>
        O frontend foi desenhado para ser claro, eficiente e fácil de manter, com uma forte separação entre lógica, visual e comunicação com a API.
      </p>

      <p className="mt-4">
        A interface foi construída com foco na <strong>experiência do utilizador</strong>, seguindo boas práticas de desenvolvimento frontend e integração contínua com o backend e sistemas de autenticação.
      </p>
    </div>
  );
}