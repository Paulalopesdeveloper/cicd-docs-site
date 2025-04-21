
export default function Instalacao() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Instalação e Configuração</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">📥 Clonar o Repositório</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`git clone https://github.com/fabricioLMoreira/pokecrawler-ai.git
cd pokecrawler-ai/ansible`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">⚙️ Requisitos</h3>
      <p className="mb-2 font-semibold">🐍 Python & Docker:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`sudo apt install -y python3 python3-pip python3-docker`}
      </pre>

      <p className="mb-2 font-semibold">🤖 Instalar Ansible:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`sudo apt-add-repository ppa:ansible/ansible
sudo apt update
sudo apt install ansible`}
      </pre>

      <p className="mb-2 font-semibold">📦 Instalar Módulos Docker para Ansible:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-galaxy collection install community.docker`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">📁 Configuração</h3>
      <p className="mb-2 font-semibold">🔧 Variáveis Obrigatórias:</p>
      <p className="mb-4">As variáveis estão localizadas em <code>ansible/inventory/&lt;env&gt;/group_vars/</code>:</p>

      <table className="min-w-full bg-white border border-gray-300 rounded shadow mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">📌 Variável</th>
            <th className="py-2 px-4 border-b text-left">📁 Ficheiro</th>
            <th className="py-2 px-4 border-b text-left">📄 Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">database_env</td>
            <td className="py-2 px-4 border-b">group_vars/all.yml</td>
            <td className="py-2 px-4 border-b">Variáveis específicas da base de dados</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">dockerhub_user</td>
            <td className="py-2 px-4 border-b">group_vars/all.yml</td>
            <td className="py-2 px-4 border-b">Utilizador DockerHub (para pull ou rebuild)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">ngrok_domain</td>
            <td className="py-2 px-4 border-b">group_vars/ngrok.yml</td>
            <td className="py-2 px-4 border-b">Domínio público usado com Ngrok</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">keycloak_username</td>
            <td className="py-2 px-4 border-b">group_vars/keycloak.yml</td>
            <td className="py-2 px-4 border-b">Utilizador para login na aplicação</td>
          </tr>
          <tr>
            <td className="py-2 px-4">keycloak_pass</td>
            <td className="py-2 px-4">group_vars/keycloak.yml</td>
            <td className="py-2 px-4">Palavra-passe para login na aplicação</td>
          </tr>
        </tbody>
      </table>


      <h3 className="text-xl font-semibold mt-6 mb-2">🐳 Instalar Docker via Ansible</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-playbook playbooks/docker.yml`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">🌐 Instalar Ngrok (Opcional)</h3>
      <p className="mb-2">Ngrok permite expor Jenkins publicamente para usar Webhooks do GitHub.</p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-playbook playbooks/ngrok.yml`}
      </pre>

      <p className="mb-2 font-semibold">🔐 Armazenar Token do Ngrok com Vault:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-vault create secrets.yml`}
      </pre>

      <p className="mb-2">Conteúdo do ficheiro <code>secrets.yml</code>:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ngrok_auth_token: "YOUR_TOKEN"`}
      </pre>

      <p className="mb-2 font-semibold">Executar com Vault:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-playbook playbooks/ngrok.yml --ask-vault-pass`}
      </pre>

      <p className="mb-2 font-semibold">Setup completo com tudo incluído:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-playbook -v playbooks/setup.yml --ask-vault-pass`}
      </pre>

      <h3 className="text-xl font-semibold mt-6 mb-2">🚀 Deployment</h3>
      <p className="mb-2 font-semibold">🧰 Deploy completo:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-playbook playbooks/site.yml`}
      </pre>

      <p className="mb-2 font-semibold">🔩 Deploy de um serviço específico:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`ansible-playbook playbooks/database.yml`}
      </pre>

      <p className="mb-2">Para criar novos ambientes: duplicar <code>ansible/inventory/dev/</code> e editar <code>hosts</code> e <code>group_vars</code>.</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">✅ Validação</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Aceder ao frontend: <code>http://localhost:3000</code></li>
        <li>Clicar em Login</li>
        <li>Utilizar as credenciais:</li>
        <ul className="list-disc pl-6">
          <li><strong>Username:</strong> {'{ keycloak_username }'}</li>
          <li><strong>Password:</strong> {'{ keycloak_pass }'}</li>
        </ul>
      </ul>
    </div>
  );
}