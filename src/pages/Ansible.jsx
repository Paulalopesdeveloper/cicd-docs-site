
export default function Ansible() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Orquestração com Ansible</h2>

      <p className="mb-4">
        A orquestração e automatização do deploy dos serviços da aplicação <strong>PokéCrawler</strong> são realizadas com o <strong>Ansible</strong>. 
        Esta abordagem permite provisionar o ambiente completo em servidores remotos de forma simples, repetível e controlada.
      </p>

      <p className="mb-4">
        O Ansible está configurado com <strong>roles modulares</strong> por serviço (backend, frontend, database, etc.) e utiliza um ficheiro de inventário que define os hosts de destino e variáveis específicas por ambiente.
      </p>

      <p className="font-semibold mb-2">📁 Estrutura de pastas:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        {`ansible/
        ├── ansible.cfg
        ├── inventory/
        │   └── dev/
        │       ├── hosts
        │       └── group_vars/
        ├── playbooks/
        │   ├── backend.yml
        │   ├── crawler.yml
        │   ├── frontend.yml
        │   ├── database.yml
        │   ├── keycloak.yml
        │   └── site.yml
        └── roles/
            ├── backend/
            ├── crawler/
            ├── frontend/
            ├── database/
            └── network/`}
      </pre>

      <p className="font-semibold mb-2">🧠 Funcionamento:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Cada <strong>role</strong> contém tarefas específicas num ficheiro <code>tasks/main.yml</code></li>
        <li>Variáveis são definidas em <code>group_vars</code> por serviço</li>
        <li>O playbook <code>site.yml</code> orquestra todos os serviços na ordem correta</li>
      </ul>

      <p className="font-semibold mb-2">🚀 Execução do Playbook:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
ansible-playbook -i ansible/inventory/dev/hosts ansible/playbooks/site.yml
      </pre>

      <p className="mb-4">
        Este comando inicia os seguintes serviços em containers: PostgreSQL, Backend (FastAPI), Frontend (React), Crawler (Python) e Keycloak (autenticação).
      </p>

      <p className="font-semibold mb-2">✅ Verificação após execução:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><code>docker container ls</code> – Verifica se os serviços estão ativos</li>
        <li><code>docker logs nome-do-container</code> – Verifica os logs</li>
        <li>Frontend: <code>http://localhost:3000</code></li>
        <li>API (Swagger): <code>http://localhost:8000/docs</code></li>
        <li>Keycloak: <code>http://localhost:8180</code></li>
      </ul>

      <p className="font-semibold mb-2">🐞 Problemas comuns:</p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Portas ocupadas:</strong> verifica com <code>lsof -i :PORTA</code></li>
        <li><strong>Erro no Keycloak:</strong> confirmar variáveis de ambiente</li>
        <li><strong>Serviço não arranca:</strong> consultar logs ou dependências no playbook</li>
      </ul>

      <p>
        O Ansible simplifica significativamente o processo de deploy, permitindo que qualquer pessoa execute o projeto completo com apenas um comando e obtenha um ambiente funcional e totalmente configurado.
      </p>
    </div>
  );
}