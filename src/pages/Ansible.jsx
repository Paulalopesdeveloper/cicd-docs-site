export default function Ansible() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Orquestração com Ansible</h2>

      <p className="mb-4">
        A orquestração dos serviços do PokéCrawler é feita através do <strong>Ansible</strong>, garantindo um deployment automatizado e reprodutível em qualquer máquina que tenha o ambiente necessário.
      </p>

      <p className="mb-4">
        O projecto segue uma estrutura modular por <code>roles</code>, com tarefas específicas para cada componente da aplicação. Todas as configurações estão organizadas por ambiente (ex: <code>inventory/dev</code>).
      </p>

      <p className="font-semibold mb-2">📁 Estrutura de pastas:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`ansible/
├── ansible.cfg               # Configurações gerais do Ansible
├── inventory/
│   └── dev/
│       ├── hosts             # Hosts do ambiente de desenvolvimento
│       └── group_vars/       # Variáveis específicas por serviço
├── playbooks/
│   ├── backend.yml
│   ├── frontend.yml
│   ├── crawler.yml
│   ├── database.yml
│   ├── keycloak.yml
│   └── site.yml              # Playbook principal que chama todos os serviços
└── roles/
    ├── backend/
    ├── frontend/
    ├── crawler/
    ├── database/
    └── network/              # Criação da rede Docker`}
      </pre>

      <p className="font-semibold mb-2">📦 Como funciona:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Cada serviço tem uma <strong>role</strong> com um <code>main.yml</code> no seu interior</li>
        <li>As variáveis de configuração (ex: portas, imagens) são definidas em <code>group_vars</code></li>
        <li>O <code>site.yml</code> ou <code>playbook.yml</code> chama todas as roles necessárias por ordem</li>
      </ul>

      <p className="font-semibold mb-2">🛠️ Exemplo de comando de execução:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
ansible-playbook -i inventory/dev/hosts playbooks/site.yml
      </pre>

      <p className="mb-4">
        Ao executar este comando, o Ansible trata de iniciar os containers Docker, criar volumes e redes, e aplicar as configurações definidas para cada serviço (backend, frontend, base de dados, crawler e Keycloak).
      </p>

      <p>
        Esta abordagem permite um deployment rápido e previsível, especialmente útil em pipelines CI/CD ou para replicar o ambiente noutros servidores de forma controlada.
      </p>
    </div>
  );
}
