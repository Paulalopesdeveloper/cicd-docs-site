export default function Introduction() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Introdução</h2>

      <p className="mb-4">
        O <strong>PokéCrawler</strong> é uma aplicação modular, escalável e <strong>baseada em containers</strong>, desenvolvida no contexto da unidade curricular de <strong>Plataformas de Desenvolvimento</strong>. O objetivo do projeto é recolher dados de uma API pública externa (PokéAPI), enriquecer os dados com lógica local e disponibilizá-los numa aplicação web interativa.
      </p>

      <p className="mb-4">
        Esta solução cobre todas as etapas de uma pipeline moderna de CI/CD, permitindo que os dados sejam tratados automaticamente desde a recolha até à sua exibição, com deploy contínuo e controlado.
      </p>

      <p className="mb-4">
        📦 Código-fonte disponível em:{" "}
        <a href="https://github.com/fabricioLMoreira/pokecrawler-ai" target="_blank" className="text-blue-600 underline">
          github.com/fabricioLMoreira/pokecrawler-ai
        </a>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Principais Funcionalidades</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Recolha de dados da PokéAPI com um <strong>crawler</strong> desenvolvido em Python</li>
        <li>Armazenamento estruturado em <strong>PostgreSQL</strong></li>
        <li>Exposição de dados através de uma <strong>API REST</strong> construída com FastAPI</li>
        <li>Interface web <strong>interativa em React</strong>, protegida com autenticação</li>
        <li>Gestão de utilizadores e autenticação via <strong>Keycloak</strong></li>
        <li>Todos os serviços são executados em <strong>containers Docker</strong>, orquestrados com Docker Compose e Ansible</li>
        <li>Pipeline automatizada com <strong>Jenkins e Ansible</strong> para CI/CD</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Público Alvo da Documentação</h3>
      <p className="mb-4">
        Esta documentação é dirigida a utilizadores, administradores e programadores que pretendam <strong>compreender, instalar, manter ou evoluir</strong> a aplicação PokéCrawler — mesmo sem terem participado no seu desenvolvimento inicial.
      </p>

      <p>
        Contém instruções detalhadas sobre arquitetura, instalação, configuração, autenticação, deploy e troubleshooting, utilizando tecnologias modernas e práticas DevOps recomendadas.
      </p>
    </div>
  );
}
