export default function Backend() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Backend (FastAPI)</h2>

      <p className="mb-4">
        O backend da aplicação PokéCrawler foi desenvolvido com <strong>FastAPI</strong>, uma framework moderna, assíncrona e de alto desempenho para construção de APIs RESTful em Python.
      </p>

      <p className="mb-4">
        A API está acessível através do endpoint base <code>/v1/pokemons</code> e permite a gestão completa dos registos de Pokémons na base de dados. O backend está modularizado e preparado para crescer facilmente com novas funcionalidades ou recursos.
      </p>

      <p className="font-semibold mb-2">📁 Estrutura de pastas:</p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`/backend/app
├── api/           # Ficheiros com as rotas (endpoints)
│   └── routes_pokemon.py
├── core/          # Configurações e autenticação
│   ├── auth.py
│   └── config.py
├── crud/          # Lógica de acesso a dados
│   └── pokemon.py
├── db/            # Ligação à base de dados e modelos
│   ├── database.py
│   └── models.py
├── schemas/       # Validação e estrutura dos dados com Pydantic
│   └── pokemon.py
└── main.py        # Ponto de entrada da aplicação FastAPI`}
      </pre>

      <p className="mb-4 font-semibold">🔌 Endpoints disponíveis:</p>

      <ul className="list-disc pl-6 mb-6">
        <li><code>GET /v1/pokemons</code> – Listar todos os Pokémons</li>
        <li><code>GET /v1/pokemons/{"{pokemon_id}"}</code> – Obter Pokémon por ID</li>
        <li><code>POST /v1/pokemons</code> – Criar novo Pokémon</li>
        <li><code>PUT /v1/pokemons/{"{pokemon_id}"}</code> – Actualizar Pokémon</li>
        <li><code>DELETE /v1/pokemons/{"{pokemon_id}"}</code> – Eliminar Pokémon</li>
        <li><code>GET /v1/pokemons/pokemon-types</code> – Listar tipos únicos</li>
      </ul>

      <p className="mb-4">
        Todos os dados são validados com <strong>Pydantic</strong> no módulo <code>schemas</code>. A resposta da API segue os modelos definidos, garantindo consistência e documentação automática via Swagger (<code>/docs</code>).
      </p>

      <p className="mb-4 font-semibold">🛠️ Lógica de dados:</p>
      <p className="mb-4">
        As funções que executam as operações sobre a base de dados estão concentradas em <code>crud/pokemon.py</code>. Estas são utilizadas nas rotas do <code>routes_pokemon.py</code> e recorrem ao SQLAlchemy assíncrono para interagir com a base de dados PostgreSQL.
      </p>

      <p className="mb-4 font-semibold">🔐 Autenticação:</p>
      <p className="mb-4">
        A autenticação e configuração da aplicação estão no módulo <code>core/</code>. O backend foi preparado para validar tokens do Keycloak, permitindo protecção de endpoints se necessário.
      </p>

      <p className="mb-4 font-semibold">📦 Docker:</p>
      <p className="mb-4">
        O backend é totalmente contenerizado, com um <code>Dockerfile</code> próprio que instala dependências a partir de <code>requirements.txt</code> e expõe o serviço na porta <code>8000</code>.
      </p>

      <p className="mb-4 font-semibold">📄 Documentação interativa:</p>
      <p className="mb-4">
        A API está documentada automaticamente e acessível através de <code>/docs</code> (Swagger UI) ou <code>/openapi.json</code> (OpenAPI 3.1), permitindo testes e exploração visual da estrutura.
      </p>
    </div>
  );
}
