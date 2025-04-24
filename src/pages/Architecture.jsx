
export default function Architecture() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Arquitetura da Aplicação</h2>

      <p className="mb-4">
        A arquitetura da aplicação <strong>PokéCrawler</strong> foi concebida de forma <strong>modular e por responsabilidade</strong>, separando os diferentes componentes em serviços independentes que comunicam entre si.
        Esta abordagem favorece a escalabilidade, manutenibilidade e automação do deploy.
      </p>

      <div className="mb-6">
        <p className="font-semibold mb-2">Diagrama da arquitetura lógica da aplicação</p>
        <img src="/ci-cd-arquitectura-aplicacao.png" alt="Arquitetura geral da aplicação PokéCrawler" className="mx-auto block" />
      </div>

      <p className="mb-4 font-semibold">📁 Estrutura principal do projeto:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        {`pokecrawler-ai/
        ├── ansible/        # Orquestração e deploy automático
        ├── backend/        # API FastAPI (Python)
        ├── crawler/        # Recolha de dados da PokéAPI
        ├── frontend/       # Interface web em React
        ├── jenkins/        # Configuração do CI/CD
        └── Jenkinsfile     # Pipeline declarativa para o Jenkins`}
      </pre>

      <p className="mb-4">
        Cada um destes diretórios representa um serviço funcional da arquitetura. As suas funções e configurações serão descritas em detalhe nas respetivas secções da documentação técnica.
      </p>

      <p>
        Esta arquitetura define uma separação clara entre os componentes principais — frontend, backend, crawler, autenticação, e CI/CD — permitindo que cada serviço evolua de forma autónoma, mantendo a coesão do sistema como um todo.
      </p>
    </div>
  );
}