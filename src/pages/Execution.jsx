export default function Execution() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Execução da Aplicação</h2>
  
        <p className="mb-4">
          Para executar a aplicação completa em ambiente de desenvolvimento local, basta garantir que o Docker está instalado e seguir os passos abaixo.
        </p>
  
        <ol className="list-decimal pl-6 mb-6">
          <li>Copiar o ficheiro <code>.env.example</code> e preencher os valores no <code>.env</code></li>
          <li>Executar o comando <code>docker-compose up --build</code></li>
          <li>Aceder ao frontend: <code>http://localhost:3000</code></li>
          <li>Explorar a API: <code>http://localhost:8000/docs</code></li>
          <li>Iniciar sessão no Keycloak: <code>http://localhost:8180</code></li>
        </ol>
  
        <p>
          A base de dados será inicializada automaticamente. O crawler pode ser executado manualmente ou ser incluído no arranque via Ansible/Jenkins.
        </p>
      </div>
    );
  }
  