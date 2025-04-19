export default function Keycloak() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Autenticação com Keycloak</h2>

      <p className="mb-4">
        A aplicação PokéCrawler utiliza o <strong>Keycloak</strong> como sistema de autenticação. Trata-se de uma plataforma open source de gestão de identidade e acesso, compatível com OpenID Connect e OAuth2.
      </p>

      <p className="mb-4">
        O Keycloak permite autenticar utilizadores, proteger endpoints e gerir permissões de forma centralizada. A autenticação é obrigatória para aceder às funcionalidades de <strong>edição</strong> e <strong>remoção</strong> de Pokémons.
      </p>

      <p className="font-semibold mb-2">🔧 Como configurar o Keycloak:</p>

      <ol className="list-decimal pl-6 mb-6">
        <li>
          Aceder ao painel de administração em <code>http://localhost:8180</code> com o utilizador e palavra-passe definidos nas variáveis de ambiente:
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mt-2">
{`KEYCLOAK_ADMIN=admin
KEYCLOAK_ADMIN_PASSWORD=admin`}
          </pre>
        </li>

        <li>
          Criar um novo <strong>Realm</strong> com o nome <code>pokecrawler</code>.
        </li>

        <li>
          Criar um novo <strong>Client</strong> com o ID <code>frontend</code>:
          <ul className="list-disc pl-6 mt-2 mb-2">
            <li>Tipo: <strong>Confidential</strong></li>
            <li>Access Type: <code>confidential</code></li>
            <li>Root URL: <code>http://localhost:3000</code></li>
            <li>Valid Redirect URIs: <code>http://localhost:3000/*</code></li>
            <li>Web Origins: <code>+</code> (usar wildcard)</li>
          </ul>
        </li>

        <li>
          Guardar o <strong>Client Secret</strong> gerado, e colocá-lo no ficheiro <code>.env</code>:
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`KEYCLOAK_URL=http://localhost:8180
KEYCLOAK_REALM=pokecrawler
KEYCLOAK_CLIENT_ID=frontend
KEYCLOAK_CLIENT_SECRET=colocar_o_secret_aqui`}
          </pre>
        </li>

        <li>
          Criar um ou mais <strong>utilizadores</strong> (ex: <code>admin</code>, <code>user</code>), e associar-lhes palavra-passe:
          <ul className="list-disc pl-6 mt-2">
            <li>Menu: <strong>Users → Add User</strong></li>
            <li>Após criar, aceder ao separador <strong>Credentials</strong> para definir a palavra-passe</li>
            <li>Activar a opção <code>Set as temporary: OFF</code></li>
          </ul>
        </li>
      </ol>

      <p className="mb-4">
        No frontend, o Keycloak é configurado com a biblioteca <code>keycloak-js</code> e o estado de autenticação é gerido pelo componente <code>AuthProvider</code>.
      </p>

      <p>
        O backend está preparado para validar os tokens emitidos pelo Keycloak, permitindo futuramente proteger os endpoints mais críticos com autenticação e autorização baseada em funções.
      </p>
    </div>
  );
}
