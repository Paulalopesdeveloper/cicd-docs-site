export default function Docker() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Contenerização com Docker</h2>
  
        <p className="mb-4">
          Todos os serviços da aplicação foram contenerizados utilizando <strong>Docker</strong>, e são orquestrados com <strong>Docker Compose</strong>.
        </p>
  
        <p className="mb-4">
          O ficheiro <code>docker-compose.yaml</code> define os seguintes serviços:
        </p>
  
        <ul className="list-disc pl-6 mb-6">
          <li><strong>backend</strong> – API FastAPI</li>
          <li><strong>frontend</strong> – Interface React</li>
          <li><strong>crawler</strong> – Script de recolha de dados</li>
          <li><strong>db</strong> – PostgreSQL</li>
          <li><strong>keycloak</strong> – Autenticação e gestão de utilizadores</li>
        </ul>
  
        <p className="mb-4 font-semibold">Exemplo de comando:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`docker-compose up --build`}
        </pre>
  
        <p>
          A rede Docker permite comunicação interna entre os serviços, e as portas necessárias são expostas no host local para acesso via browser.
        </p>
      </div>
    );
  }
  