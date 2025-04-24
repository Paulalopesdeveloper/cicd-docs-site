
export default function CICD() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Integração Contínua e Deploy (CI/CD)</h2>

      <div className="mb-6">
        <p className="font-semibold mb-2">Integração Contínua: GitHub → Jenkins → DockerHub</p>
        <img src="/cd.png" alt="Integração Contínua: GitHub → Jenkins → DockerHub" className="mx-auto block" />
      </div>

      <p className="mb-4">
        A aplicação <strong>PokéCrawler</strong> implementa uma pipeline completa de <strong>CI/CD</strong> (Integração Contínua e Entrega Contínua), com o objetivo de automatizar todos os passos desde o desenvolvimento até ao deploy final.
      </p>

      <p className="mb-4">
        Esta automação foi construída com as seguintes tecnologias:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li><strong>GitHub</strong> – Repositório de código-fonte monitorizado</li>
        <li><strong>DockerHub</strong> – Armazenamento das imagens Docker públicas/privadas</li>
        <li><strong>Jenkins</strong> – Motor de automação CI/CD</li>
        <li><strong>Ansible</strong> – Orquestração final dos serviços e containers</li>
      </ul>

      <p className="mb-4">
        Para integração contínua via webhooks, o serviço <strong>Ngrok</strong> pode ser usado para expor o Jenkins localmente e permitir triggers automáticos do GitHub.
      </p>

      <p className="font-semibold mb-2">🚀 Fluxo da pipeline:</p>
      <ol className="list-decimal pl-6 mb-6">
        <li>O Jenkins detecta alterações no repositório GitHub</li>
        <li>Faz pull do código e executa o <code>Jenkinsfile</code></li>
        <li>Constrói as imagens Docker (frontend, backend, crawler)</li>
        <li>Faz push para o DockerHub com a tag especificada</li>
        <li>Executa o playbook do Ansible para fazer o deploy</li>
        <li>Em caso de erro, envia email com detalhes do problema</li>
      </ol>

      <h3 className="text-xl font-semibold mb-2">🛠️ Jenkinsfile</h3>
      <p className="mb-4">
        O ficheiro <code>Jenkinsfile</code> está na raiz do projeto e define toda a lógica da pipeline. Está parametrizado com as variáveis:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li><code>BRANCH</code> – Branch a ser usada (default: <code>main</code>)</li>
        <li><code>TAG</code> – Tag usada nas imagens Docker (ex: <code>latest</code>, <code>v1.0</code>)</li>
      </ul>

      <p className="mb-4">Exemplo de etapa no Jenkinsfile:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`stage('Build and Publish Frontend') {
  steps {
    dir('frontend') {
      sh 'docker build -t user/frontend:\${params.TAG} .'
      sh 'docker push user/frontend:\${params.TAG}'
    }
  }
}`}
      </pre>

      <p className="mb-4">
        O login no DockerHub é feito com credenciais armazenadas de forma segura no Jenkins, através do <code>credentialsId</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2">📬 Notificação por e-mail em caso de erro:</h3>
      <p className="mb-4">
        A pipeline envia automaticamente um email com o erro caso alguma etapa falhe. O corpo do email inclui:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li>Nome da pipeline</li>
        <li>Número da build</li>
        <li>Stage onde ocorreu o erro</li>
        <li>Link para o log completo</li>
        <li>Commit e autor</li>
      </ul>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`post {
  failure {
    mail to: "\${EMAIL_TO}",
      subject: "🚨 Falha na Pipeline: \${env.JOB_NAME} #\${env.BUILD_NUMBER}",
      body: "Verifica os logs em: \${env.BUILD_URL}\nCommit: \${env.GIT_COMMIT}\nAutor: \${env.COMMIT_AUTHOR}"
  }
}`}
      </pre>

      <h3 className="text-xl font-semibold mb-2">📦 DockerHub</h3>
      <p className="mb-4">
        As imagens Docker são publicadas automaticamente com tags específicas por versão. Estão organizadas por serviço:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li><code>user/backend:latest</code></li>
        <li><code>user/frontend:latest</code></li>
        <li><code>user/crawler:latest</code></li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🧩 Deploy com Ansible</h3>
      <p className="mb-4">
        Após a publicação das imagens, o Jenkins executa automaticamente o <code>ansible-playbook</code> correspondente, atualizando os containers no servidor remoto.
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
ansible-playbook -i ansible/inventory/dev/hosts ansible/playbooks/site.yml
      </pre>

      <div className="mb-6">
        <p className="font-semibold mb-2">Entrega Contínua: Jenkins → Ansible → Containers</p>
        <img src="/ci.png" alt="Entrega Contínua: Jenkins → Ansible → Containers" className="mx-auto block" />
      </div>

      <p>
        Esta integração total garante que qualquer <strong>push no repositório pode disparar automaticamente</strong> o ciclo completo de build → publicação → deploy, com feedback imediato via email em caso de falha.
      </p>
    </div>
  );
}