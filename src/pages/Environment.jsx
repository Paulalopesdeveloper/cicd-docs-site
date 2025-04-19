export default function Environment() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Variáveis de Ambiente</h2>

      <p className="mb-4">
        Toda a configuração sensível da aplicação (como palavras-passe, nomes de utilizador, hosts e segredos do Keycloak) é feita através de variáveis de ambiente, definidas num ficheiro <code>.env</code> na raiz do projecto.
      </p>

      <p className="mb-4 font-semibold">Exemplo de .env:</p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`# Base de Dados
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=pokecrawler
DB_HOST=db
DB_PORT=5432

# Keycloak
KEYCLOAK_URL=http://keycloak:8080
KEYCLOAK_REALM=pokecrawler
KEYCLOAK_CLIENT_ID=frontend
KEYCLOAK_CLIENT_SECRET=...

# Frontend (build)
REACT_APP_KEYCLOAK_URL=http://localhost:8180
REACT_APP_KEYCLOAK_REALM=pokecrawler
REACT_APP_KEYCLOAK_CLIENT_ID=frontend`}
      </pre>

      <p>
        É importante nunca versionar o ficheiro <code>.env</code>. Em alternativa, deve ser incluído um <code>.env.example</code> com os campos necessários, sem valores sensíveis.
      </p>
    </div>
  );
}
