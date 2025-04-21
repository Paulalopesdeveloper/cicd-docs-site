export default function Introduction() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Introdução</h2>

      <p className="mb-4">
        O <strong>PokéCrawler</strong> é uma aplicação modular, escalável e <strong>baseada em containers</strong>, desenvolvida no contexto da unidade curricular de <strong>Plataformas de Desenvolvimento</strong>. ...
      </p>

      <p className="mb-4">
        Esta solução cobre todas as etapas de um pipeline moderno de desenvolvimento e entrega contínua, permitindo que os dados sejam tratados de forma automatizada desde a recolha até à sua disponibilização ao utilizador final.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Principais Funcionalidades</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Recolha de dados da PokéAPI com um <strong>crawler</strong> desenvolvido em Python</li>
        <li>Armazenamento estruturado em <strong>PostgreSQL</strong></li>
        <li>Exposição de dados através de uma <strong>API REST</strong> construída com FastAPI</li>
        <li>Interface web <strong>interativa em React</strong>, protegida com autenticação</li>
        <li>Gestão de utilizadores e autenticação via <strong>Keycloak</strong></li>
        <li>Todos os serviços são executados em <strong>containers Docker</strong> orquestrados com <strong>Docker Compose e Ansible</strong></li>
        <li>Automação do ciclo de vida com <strong>Jenkins (CI/CD)</strong> e <strong>Ansible</strong> para deploy remoto</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Público-Alvo da Documentação</h3>
      <p className="mb-4">
        Esta documentação destina-se a qualquer pessoa que pretenda <strong>entender, utilizar, manter ou evoluir</strong> a aplicação PokéCrawler. 
        Inclui informações tanto para <strong>utilizadores finais</strong> como para <strong>administradores e programadores</strong>, mesmo que não tenham participado no desenvolvimento inicial.
      </p>

      <p>
        Aqui encontrará instruções detalhadas sobre a arquitetura, instalação, configuração, utilização da interface e manutenção dos serviços — tudo com base em práticas modernas e tecnologias amplamente utilizadas.
      </p>
    </div>
  );
}
