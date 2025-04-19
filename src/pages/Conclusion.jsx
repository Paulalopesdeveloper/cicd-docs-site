export default function Conclusion() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Conclusão</h2>

      <p className="mb-4">
        O desenvolvimento da aplicação <strong>PokéCrawler</strong> foi realizado no âmbito da unidade curricular de <strong>Plataformas de Desenvolvimento</strong>. Este projeto permitiu aplicar na prática vários conceitos-chave do desenvolvimento moderno, tais como a integração de APIs REST, a contenerização de serviços, a autenticação de utilizadores e a automatização de processos com CI/CD.
      </p>

      <p className="mb-4">
        A aplicação está estruturada de forma modular, permitindo que qualquer programador — mesmo que não tenha participado na sua concepção inicial — consiga compreender o funcionamento, executar localmente, alterar a infraestrutura ou estender funcionalidades de forma autónoma.
      </p>

      <p className="mb-4">
        Esta documentação técnica foi elaborada com o objectivo de servir como um <strong>manual completo</strong> de utilização e manutenção do sistema. Todas as secções foram pensadas para guiar o utilizador de forma clara e progressiva.
      </p>

      <p className="mb-6">
        Acreditamos que o PokéCrawler representa um exemplo sólido de como construir uma aplicação moderna, segura, escalável e bem documentada, com potencial de adaptação a outros contextos semelhantes.
      </p>

      <p className="text-lg font-semibold mt-10 mb-2">Autores do Projeto:</p>
      <ul className="list-disc pl-6 text-sm">
        <li>Fabrício Moreira – <a href="mailto:a2011075131@isec.pt" className="text-blue-600 hover:underline">a2011075131@isec.pt</a></li>
        <li>Paula Lopes – <a href="mailto:a2009076370@isec.pt" className="text-blue-600 hover:underline">a2009076370@isec.pt</a></li>
      </ul>
    </div>
  );
}
