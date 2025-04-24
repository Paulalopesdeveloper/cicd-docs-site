export default function Ansible() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Orquestração com Ansible</h2>

      <p className="mb-4">
        A orquestração e automação do ambiente da aplicação <strong>PokéCrawler</strong> é realizada com o <strong>Ansible</strong>, utilizando uma arquitetura modular baseada em <strong>roles</strong> reutilizáveis.
        Este sistema permite instalar dependências, configurar serviços e iniciar os containers com um único comando.
      </p>

      <p className="mb-4">
        A estrutura do Ansible está dividida em ficheiros de configuração, inventários, playbooks e roles, organizados para facilitar o deployment e a manutenção de cada componente da aplicação.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">📁 Estrutura de Pastas</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`ansible/
├── ansible.cfg
├── inventory/
│   └── dev/
│       ├── hosts
│       └── group_vars/
│           ├── all.yml
│           ├── backend.yml
│           ├── crawler.yml
│           ├── database.yml
│           ├── frontend.yml
│           ├── keycloak.yml
│           └── ngrok.yml
├── playbooks/
│   ├── backend.yml
│   ├── crawler.yml
│   ├── database.yml
│   ├── docker.yml
│   ├── frontend.yml
│   ├── keycloak.yml
│   ├── ngrok.yml
│   ├── setup.yml
│   └── site.yml
└── roles/
    ├── backend/
    ├── crawler/
    ├── database/      # inclui init.sql
    ├── docker/
    ├── frontend/
    ├── keycloak/
    ├── network/
    └── ngrok/`}
      </pre>

      <h3 className="text-xl font-semibold mb-2">🔁 Funcionamento por Camadas</h3>
      <ul className="list-disc pl-6 mb-6">
        <li><code>inventory/dev/group_vars</code>: define variáveis específicas por serviço (porta, imagem, etc.)</li>
        <li><code>playbooks/*.yml</code>: scripts de execução para cada serviço</li>
        <li><code>roles/</code>: conjunto de tarefas reutilizáveis por componente</li>
        <li><code>setup.yml</code>: playbook que instala dependências (Docker, módulos, Ngrok)</li>
        <li><code>docker.yml</code>: instala e ativa o Docker localmente</li>
        <li><code>vault</code>: armazenamento seguro de tokens sensíveis (ex: Ngrok)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🚀 Executar Deploy Completo</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
ansible-playbook -i ansible/inventory/dev/hosts ansible/playbooks/site.yml
      </pre>

      <p className="mb-4">
        Este comando orquestra o backend (FastAPI), frontend (React), crawler, base de dados (PostgreSQL) e Keycloak.
      </p>

      <h3 className="text-xl font-semibold mb-2">✅ Verificação</h3>
      <ul className="list-disc pl-6 mb-6">
        <li><code>docker ps</code> para ver os containers ativos</li>
        <li><code>http://localhost:3000</code> para aceder ao frontend</li>
        <li><code>http://localhost:8000/docs</code> para aceder à API</li>
        <li><code>http://localhost:8180</code> para aceder ao Keycloak</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🐞 Dicas de Troubleshooting</h3>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Porta ocupada:</strong> <code>lsof -i :PORT</code></li>
        <li><strong>Erro de autenticação:</strong> verificar <code>keycloak.yml</code> ou token de Ngrok</li>
        <li><strong>Serviço falha ao iniciar:</strong> verificar logs com <code>docker logs</code></li>
      </ul>

      <p>
        Com esta abordagem modular, o deploy pode ser reproduzido em qualquer ambiente compatível com apenas um comando, garantindo consistência e reduzindo falhas operacionais.
      </p>
    </div>
  );
}
