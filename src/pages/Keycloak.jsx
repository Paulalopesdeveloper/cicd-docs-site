
export default function Keycloak() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Autenticação com Keycloak</h2>

      <p className="mb-4">
        A aplicação PokéCrawler utiliza o <strong>Keycloak</strong> como sistema de autenticação e gestão de utilizadores. Trata-se de uma plataforma open source compatível com OpenID Connect e OAuth2.
      </p>

      <p className="mb-4">
        A autenticação é necessária para aceder a funcionalidades sensíveis como <strong>edição</strong> e <strong>remoção</strong> de Pokémons. Utilizadores não autenticados apenas têm acesso de leitura.
      </p>

      <p className="mb-4">
        Toda a configuração do Keycloak — incluindo o arranque do container, criação de realm, client, utilizadores e credenciais — é realizada de forma automatizada através do <strong>Ansible</strong>. Esta automação utiliza a API REST do Keycloak, garantindo consistência e reprodutibilidade entre ambientes.
      </p>

      <h3 className="text-xl font-semibold mb-2">🛠️ Exemplo de tarefas Ansible (resumo):</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Iniciar o container Keycloak com variáveis de ambiente e rede personalizada</li>
        <li>Esperar pela disponibilidade do serviço</li>
        <li>Gerar um token de administração via API</li>
        <li>Criar o realm <code>pokecrawler</code></li>
        <li>Criar o client <code>frontend</code> com suporte a redirect URIs e web origins</li>
        <li>Criar o utilizador <code>ash</code> com password definida</li>
      </ul>

      <p className="mb-4">
        No frontend, a autenticação é gerida com a biblioteca <code>keycloak-js</code> e mantida com um <code>AuthProvider</code> baseado em React Context.
      </p>

      <p>
        O backend está preparado para validar os tokens emitidos pelo Keycloak. Embora a proteção de endpoints ainda não esteja ativa, a infraestrutura está preparada para autenticação e autorização futura.
      </p>
    </div>
  );
}