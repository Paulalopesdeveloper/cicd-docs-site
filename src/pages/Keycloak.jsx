export default function Keycloak() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Autenticação com Keycloak</h2>
  
        <p className="mb-4">
          O sistema de autenticação da aplicação foi implementado com o <strong>Keycloak</strong>, um Identity Provider open source compatível com OpenID Connect.
        </p>
  
        <p className="mb-4">Foram criadas as seguintes entidades:</p>
  
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Realm:</strong> pokecrawler</li>
          <li><strong>Client:</strong> frontend (confidencial)</li>
          <li><strong>Utilizador de admin:</strong> definido por variáveis de ambiente</li>
        </ul>
  
        <p className="mb-4">
          O frontend utiliza o Keycloak JS Adapter para obter tokens de acesso. O backend valida esses tokens nas rotas protegidas.
        </p>
  
        <p>
          O Keycloak é iniciado via Docker e está acessível normalmente em:
          <code className="block mt-2">http://localhost:8180</code>
        </p>
      </div>
    );
  }
  