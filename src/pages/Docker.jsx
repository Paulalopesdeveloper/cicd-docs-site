export default function Docker() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Serviços Docker para Orquestração</h2>

      <p className="mb-4">
        Todos os serviços que compõem a aplicação <strong>PokéCrawler</strong> foram preparados como containers Docker, utilizando <strong>Docker Compose</strong> para definir e estruturar os serviços de forma modular. 
      </p>

      <p className="mb-4">
        Estes containers são posteriormente orquestrados e lançados automaticamente através do <strong>Ansible</strong>, garantindo um processo de deployment simples e replicável.
      </p>

      <p className="mb-4">
        O ficheiro <code>docker-compose.yaml</code> define os seguintes serviços:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li><strong>backend</strong> – API REST com FastAPI</li>
        <li><strong>frontend</strong> – Interface web com React</li>
        <li><strong>crawler</strong> – Script Python que recolhe dados da PokéAPI</li>
        <li><strong>db</strong> – Base de dados PostgreSQL</li>
        <li><strong>keycloak</strong> – Sistema de autenticação e gestão de utilizadores</li>
      </ul>

      <p className="font-semibold mb-2">📄 Exemplo de serviço no <code>docker-compose.yaml</code>:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`backend:
  build: ./backend
  image: user/backend:latest
  ports:
    - "8000:8000"
  depends_on:
    - db
  environment:
    - DB_HOST=db
    - DB_PORT=5432
    - DB_USER=postgres
    - DB_PASSWORD=postgres
    - DB_NAME=pokecrawler`}
      </pre>

      <p className="mb-4">
        Cada serviço tem o seu próprio <code>Dockerfile</code> que define como a imagem é construída. Exemplo do Dockerfile do backend:
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`}
      </pre>

      <p className="font-semibold mb-2">📦 Volumes e persistência de dados:</p>
      <p className="mb-4">
        O serviço da base de dados utiliza volumes Docker para garantir que os dados persistem mesmo após o container ser desligado:
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`volumes:
  postgres_data:
    driver: local`}
      </pre>

      <p className="font-semibold mb-2">🔌 Comunicação entre containers:</p>
      <p className="mb-4">
        Todos os serviços comunicam entre si usando os nomes dos containers como hosts (ex: <code>db</code> em vez de <code>localhost</code>). O Docker Compose cria automaticamente uma rede interna para isso.
      </p>

      <p className="font-semibold mb-2">🚀 Comando principal de execução (local):</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`docker-compose up --build`}
      </pre>

      <p className="mb-4">
        Este comando cria e inicia todos os serviços definidos no <code>docker-compose.yaml</code>. As aplicações ficam acessíveis através de:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li><code>http://localhost:3000</code> – Frontend</li>
        <li><code>http://localhost:8000</code> – API backend</li>
        <li><code>http://localhost:8180</code> – Interface de administração do Keycloak</li>
      </ul>

      <p className="font-semibold mb-2">🛠️ Comandos úteis adicionais:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`docker-compose ps             # Ver serviços em execução
docker-compose logs -f         # Ver logs em tempo real
docker-compose down            # Parar e remover os containers
docker exec -it db psql -U postgres # Entrar no PostgreSQL`}
      </pre>

      <p>
        A utilização de Docker garante que todos os programadores e utilizadores do projeto têm o mesmo ambiente de execução, facilitando o desenvolvimento, testes, deploy e manutenção futura.
      </p>
    </div>
  );
}
