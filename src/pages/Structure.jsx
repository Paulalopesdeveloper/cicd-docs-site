export default function Structure() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Estrutura do Projeto</h2>

      <p className="mb-4">
        A aplicação <strong>PokéCrawler</strong> está organizada de forma modular, seguindo uma separação clara entre responsabilidades: backend, frontend, crawler, orquestração e integração contínua.
      </p>

      <p className="mb-4">
        Esta estrutura facilita a escalabilidade, manutenção e colaboração em equipa, permitindo que diferentes partes do sistema sejam tratadas de forma independente.
      </p>

      <p className="mb-4 font-semibold">Estrutura geral:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        {`pokecrawler-ai/
        ├── ansible/
        │   ├── ansible.cfg
        │   ├── deploy.yml
        │   ├── inventory
        │   ├── playbooks/
        │   └── roles/
        ├── backend/
        │   ├── app/
        │   ├── tests/
        │   ├── Dockerfile
        │   ├── requirements.txt
        │   └── README.md
        ├── crawler/
        │   ├── crawler.py
        │   ├── Dockerfile
        │   └── requirements.txt
        ├── frontend/
        │   ├── src/
        │   ├── public/
        │   ├── node_modules/
        │   ├── Dockerfile
        │   ├── package.json
        │   ├── package-lock.json
        │   └── README.md
        ├── jenkins/
        │   ├── Dockerfile
        │   ├── Dockerfile_arm
        │   └── nohup.out
        ├── Jenkinsfile
        ├── docker-compose.yaml
        ├── estrutura.txt
        └── .env.example`}
      </pre>


      <p className="mb-4">
        A seguir, cada componente do projecto será descrito com mais detalhe nas suas respectivas páginas: <strong>Backend</strong>, <strong>Frontend</strong>, <strong>Crawler</strong>, <strong>Base de Dados</strong> e <strong>CI/CD</strong>.
      </p>

      <p>
        Esta estrutura segue boas práticas modernas e permite que qualquer utilizador consiga compreender o funcionamento da aplicação a partir de uma base comum e bem documentada.
      </p>
    </div>
  );
}
