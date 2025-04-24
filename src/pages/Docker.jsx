
export default function Docker() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Contenerização com Docker</h2>

      <p className="mb-4">
        A aplicação <strong>PokéCrawler</strong> é composta por múltiplos serviços (backend, frontend, crawler, base de dados e autenticação), e cada um é empacotado num <strong>container Docker</strong> para garantir isolamento, portabilidade e reprodutibilidade.
      </p>

      <p className="mb-4">
        Embora anteriormente tenha sido utilizado um ficheiro <code>docker-compose.yaml</code> para orquestração local, esta abordagem foi substituída por um sistema mais robusto com <strong>Ansible</strong>. O Ansible permite gerir todos os serviços de forma modular e remota, utilizando a coleção <code>community.docker</code> para criar, iniciar e configurar os containers.
      </p>

      <h3 className="text-xl font-semibold mb-2">📦 Exemplo de Dockerfile (Backend)</h3>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        {`FROM python:3.11
        WORKDIR /app
        COPY . .
        RUN pip install -r requirements.txt
        CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`}
      </pre>

      <p className="mb-4">
        Cada serviço possui o seu próprio <code>Dockerfile</code> adaptado à stack tecnológica utilizada. Estes ficheiros são usados para construir as imagens Docker que são depois lançadas por Ansible ou Jenkins (via CI/CD).
      </p>

      <h3 className="text-xl font-semibold mb-2">🔗 Comunicação entre containers</h3>
      <p className="mb-4">
        Todos os containers comunicam entre si numa rede definida com o nome <code>pokecrawler_network</code>, onde os serviços são referenciados pelos seus aliases. Por exemplo, o backend pode aceder ao banco de dados usando <code>postgres</code> como hostname.
      </p>

      <h3 className="text-xl font-semibold mb-2">🗂️ Volumes e persistência</h3>
      <p className="mb-4">
        A base de dados PostgreSQL utiliza volumes Docker para garantir que os dados persistem entre reinicializações. O ficheiro de inicialização <code>init.sql</code> é montado no container em <code>/docker-entrypoint-initdb.d</code> via Ansible.
      </p>

      <p>
        A utilização de <strong>containers Docker</strong> foi essencial para garantir um ambiente de desenvolvimento e produção idêntico, facilitando também o deploy contínuo automatizado via Jenkins.
      </p>
    </div>
  );
}