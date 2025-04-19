export default function Structure() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Estrutura do Projeto</h2>
  
        <p className="mb-4">
          O projecto <strong>PokéCrawler</strong> encontra-se organizado de forma modular, separando cada responsabilidade em pastas distintas. Esta estrutura facilita a manutenção, a escalabilidade e o trabalho em equipa, permitindo que diferentes partes do sistema sejam desenvolvidas ou actualizadas de forma independente.
        </p>
  
        <p className="mb-4">A estrutura principal do repositório é a seguinte:</p>
  
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`pokecrawler-ai/
  ├── backend/         # API REST com FastAPI
  │   ├── api/         # Rotas (endpoints)
  │   ├── crud/        # Operações de base de dados (Create, Read, Update, Delete)
  │   ├── db/          # Configuração e ligação à base de dados
  │   └── schemas/     # Validação de dados com Pydantic
  ├── frontend/        # Interface web React
  │   └── src/         # Componentes, páginas, contextos
  ├── crawler/         # Serviço Python que recolhe e processa dados da PokéAPI
  ├── db/              # Script SQL de inicialização do PostgreSQL
  ├── jenkins/         # Configurações e scripts de apoio ao Jenkins
  ├── ansible/         # Playbooks e inventário para deploy automatizado
  ├── docker-compose.yaml  # Orquestração dos serviços em containers
  ├── Jenkinsfile      # Definição da pipeline CI/CD
  └── .env.example     # Ficheiro de exemplo para configuração de variáveis de ambiente`}
        </pre>
  
        <p className="mb-4">
          Cada uma destas pastas será explicada em detalhe nas páginas seguintes, mas esta visão geral permite compreender de imediato onde estão localizadas as principais funcionalidades da aplicação.
        </p>
  
        <p>
          Esta organização segue as melhores práticas de desenvolvimento moderno, permitindo uma integração eficaz com ferramentas de automatização e ambientes de produção.
        </p>
      </div>
    );
  }
  