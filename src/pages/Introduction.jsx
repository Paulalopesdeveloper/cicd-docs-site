export default function Introduction() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Introdução</h2>

      <p className="mb-4">
        O <strong>PokéCrawler</strong> é uma aplicação modular e escalável, desenvolvida no contexto da unidade curricular de Plataformas de Desenvolvimento. O principal objectivo é integrar uma <strong>API REST externa</strong> — neste caso, a <a href="https://pokeapi.co/" target="_blank" className="text-blue-600 hover:underline">PokéAPI</a> — e enriquecer os dados recolhidos com processamento adicional feito localmente.
      </p>

      <p className="mb-4">
        A aplicação cobre todas as etapas do ciclo de desenvolvimento moderno, incluindo:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Recolha e processamento de dados com um <strong>crawler</strong> desenvolvido em Python</li>
        <li>Armazenamento dos dados numa <strong>base de dados PostgreSQL</strong></li>
        <li>Exposição da informação através de uma <strong>API REST</strong> construída com FastAPI</li>
        <li>Visualização interactiva via uma <strong>interface web</strong> desenvolvida com React</li>
        <li>Controlo de acesso com <strong>autenticação através do Keycloak</strong></li>
        <li>Contenerização com <strong>Docker e Docker Compose</strong></li>
        <li>Automatização do ciclo de integração e deploy com <strong>Jenkins (CI/CD)</strong> e <strong>Ansible</strong></li>
      </ul>

      <p className="mb-4">
        Esta documentação técnica foi criada com o objectivo de servir como um <strong>manual de utilização e manutenção</strong> da aplicação, dirigida a utilizadores que estão a ter o seu primeiro contacto com o projecto, incluindo quem pretenda configurar ou modificar a infraestrutura sem ter sido o programador inicial.
      </p>
    </div>
  );
}
