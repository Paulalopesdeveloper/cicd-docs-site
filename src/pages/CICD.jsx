export default function CICD() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Integração Contínua e Deploy (CI/CD)</h2>
  
        <p className="mb-4">
          O pipeline CI/CD foi construído com o <strong>Jenkins</strong>, garantindo automatização do build, testes, publicação e deploy da aplicação.
        </p>
  
        <p className="mb-4">Funcionalidades implementadas na pipeline:</p>
  
        <ul className="list-disc pl-6 mb-6">
          <li>Build das imagens Docker do backend, frontend e crawler</li>
          <li>Push para o DockerHub com tags dinâmicas</li>
          <li>Deploy automatizado via Ansible</li>
          <li>Envio de e-mail em caso de falha na pipeline</li>
        </ul>
  
        <p className="mb-4 font-semibold">Trecho do Jenkinsfile:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`stage('Build and Publish Backend') {
    steps {
      dir('backend') {
        sh 'docker build -t user/backend:latest .'
        sh 'docker push user/backend:latest'
      }
    }
  }`}
        </pre>
  
        <p>
          O pipeline é executado sempre que há alterações no repositório, ou manualmente no Jenkins. É possível parametrizar o branch e a tag Docker.
        </p>
      </div>
    );
  }
  