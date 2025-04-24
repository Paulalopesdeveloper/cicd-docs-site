
export default function Database() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Base de Dados (PostgreSQL)</h2>

      <p className="mb-4">
        A aplicação utiliza <strong>PostgreSQL</strong> como sistema de base de dados relacional. Todos os dados processados pelo crawler e modificados pelo utilizador (via frontend/backend) são armazenados nesta base.
      </p>

      <p className="mb-4">
        A base de dados é automaticamente provisionada através do <strong>Ansible</strong>, utilizando os módulos da coleção <code>community.docker</code>. A imagem oficial do Postgres é descarregada, e o container é iniciado com configuração definida em <code>group_vars</code> e <code>init.sql</code>.
      </p>

      <p className="mb-4 font-semibold">📦 Script de criação do container (Ansible):</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`- name: Pull Postgres image
  community.docker.docker_image:
    name: "{{ database_image }}"
    tag: "{{ dockerhub_tag }}"
    source: pull

- name: Run Postgres container
  community.docker.docker_container:
    name: postgres
    image: "{{ database_image }}"
    state: started
    restart_policy: always
    ports: "{{ database_ports }}"
    env: "{{ database_env }}"
    volumes:
      - "{{ role_path }}/files/init.sql:/docker-entrypoint-initdb.d/init.sql:ro"
    networks:
      - name: pokecrawler_network
        aliases:
          - postgres
    networks_cli_compatible: true`}
      </pre>

      <p className="mb-4">A estrutura principal da tabela é a seguinte:</p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`Tabela: pokemons

id               INTEGER (chave primária)
name             TEXT
type_primary     TEXT
type_secondary   TEXT (opcional)
url              TEXT
sprite           TEXT`}
      </pre>

      <p className="mb-4">
        O acesso à base de dados é feito de duas formas:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Backend</strong>: via <code>SQLAlchemy</code> em modo assíncrono</li>
        <li><strong>Crawler</strong>: via <code>psycopg2</code> para inserções diretas</li>
      </ul>

      <p>
        O ficheiro <code>init.sql</code> é utilizado para criar automaticamente a estrutura da base de dados na inicialização do container. Esse ficheiro encontra-se em <code>roles/database/files/init.sql</code> no diretório do Ansible.
      </p>
    </div>
  );
}