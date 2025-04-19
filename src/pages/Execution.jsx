export default function Execution() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Execução da Aplicação</h2>

      <p className="mb-4">
        A execução completa da aplicação <strong>PokéCrawler</strong> é feita de forma automatizada através do <strong>Ansible</strong>. 
        Todo o ambiente — incluindo rede, containers, variáveis e volumes — é criado e iniciado com um único comando.
      </p>

      <p className="font-semibold mb-2">📋 Pré-requisitos:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Ansible instalado</li>
        <li>Docker instalado e ativo na máquina</li>
        <li>Ficheiro <code>.env</code> devidamente preenchido</li>
        <li>Acesso ao inventário e playbook (<code>ansible/</code>)</li>
      </ul>

      <p className="font-semibold mb-2">🚀 Execução com Ansible:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
ansible-playbook -i ansible/inventory/dev/hosts ansible/playbooks/site.yml
      </pre>

      <p className="mb-4">
        Este comando executa todos os papéis definidos no playbook principal, iniciando os seguintes serviços:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>PostgreSQL (base de dados)</li>
        <li>Backend (FastAPI)</li>
        <li>Frontend (React)</li>
        <li>Crawler (Python)</li>
        <li>Keycloak (autenticação)</li>
      </ul>

      <p className="font-semibold mb-2">✅ Verificação de funcionamento:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><code>docker container ls</code> – Verificar se os serviços estão ativos</li>
        <li><code>docker logs nome-do-container</code> – Verificar logs de execução</li>
        <li>Aceder ao frontend: <code>http://localhost:3000</code></li>
        <li>Aceder à API: <code>http://localhost:8000/docs</code></li>
        <li>Aceder ao Keycloak: <code>http://localhost:8180</code></li>
      </ul>

      <p className="font-semibold mb-2">🛠️ Para parar e limpar:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
docker compose down
      </pre>
      <p className="mb-4">
        Ou, se tiveres usado volumes e quiseres limpar completamente:
      </p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
docker system prune -a
      </pre>

      <p className="font-semibold mb-2">🐞 Problemas comuns:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Portas ocupadas:</strong> verificar com <code>lsof -i :PORTA</code></li>
        <li><strong>Erro no Keycloak:</strong> confirmar variáveis no <code>.env</code></li>
        <li><strong>Serviço não arranca:</strong> consultar os logs ou verificar dependências no playbook</li>
      </ul>

      <p>
        O Ansible simplifica significativamente o processo de deploy, permitindo que qualquer pessoa execute o projeto completo com apenas um comando e obtenha um ambiente funcional e totalmente configurado.
      </p>
    </div>
  );
}
