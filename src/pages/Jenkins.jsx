
export default function Jenkins() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Servidor de Integração Contínua (Jenkins)</h2>
  
        <p className="mb-4">
          O <strong>Jenkins</strong> é o motor de automação da pipeline de integração contínua (CI/CD) da aplicação <strong>PokéCrawler</strong>. Ele é responsável por monitorizar o repositório GitHub, executar as etapas de build, fazer push das imagens Docker e acionar o deploy via Ansible.
        </p>
  
        <h3 className="text-xl font-semibold mb-2">📦 Jenkins em container Docker</h3>
        <p className="mb-4">
          O Jenkins é executado num <strong>container Docker</strong> personalizado com suporte a Docker CLI e Ansible. A imagem é construída a partir do seguinte <code>Dockerfile</code> localizado em <code>/jenkins</code>:
        </p>
  
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`FROM jenkins/jenkins:lts
  USER root
  
  RUN mkdir -p /tmp/download && \
      curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download && \
      rm -rf /tmp/download/docker/dockerd && \
      mv /tmp/download/docker/docker* /usr/local/bin/ && \
      rm -rf /tmp/download && \
      groupadd -g 999 docker && \
      usermod -aG staff,docker jenkins
  
  RUN apt-get update && \
      apt-get install -y python3-pip python3-venv python3-docker && \
      python3 -m venv /opt/ansible-venv && \
      /opt/ansible-venv/bin/pip install ansible && \
      /opt/ansible-venv/bin/ansible-galaxy collection install community.docker && \
      ln -s /opt/ansible-venv/bin/ansible /usr/local/bin/ansible && \
      ln -s /opt/ansible-venv/bin/ansible-playbook /usr/local/bin/ansible-playbook && \
      apt-get clean
  
  USER jenkins`}
        </pre>
  
        <p className="mb-4">
          Para iniciar o container Jenkins, é utilizado o script <code>start_jenkins.sh</code> com os seguintes parâmetros:
        </p>
  
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`docker run --privileged -p 8080:8080 -p 50000:50000 \
    -v /var/jenkins_home:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --group-add $(stat -c '%g' /var/run/docker.sock) \
    --net pokecrawler_network --net-alias jenkins \
    --name jenkins -d my_jenkins`}
        </pre>
  
        <h3 className="text-xl font-semibold mb-2">📄 Jenkinsfile e pipeline</h3>
        <p className="mb-4">
          O ficheiro <code>Jenkinsfile</code> define uma pipeline declarativa que realiza o build das imagens, push para o DockerHub, execução de Ansible e envio de notificações.
        </p>
  
        <h3 className="text-xl font-semibold mb-2">🔐 Variáveis e credenciais necessárias</h3>
        <p className="mb-4">
          O <code>Jenkinsfile</code> utiliza as seguintes variáveis de ambiente, que devem ser configuradas no Jenkins:
        </p>
  
        <ul className="list-disc pl-6 mb-4">
          <li><code>DOCKERHUB_USER</code> – Utilizador DockerHub (ambiente)</li>
          <li><code>GIT_REPO_URL</code> – URL do repositório Git</li>
          <li><code>EMAIL_TO</code> – Email para envio de notificações</li>
          <li><code>dockerhub</code> – Credencial Jenkins com username/password</li>
        </ul>
  
        <p className="mb-4">
          Estas variáveis podem ser definidas em "Gerir Jenkins → Configurar Sistema" ou em "Credenciais Globais".
        </p>
  
        <h3 className="text-xl font-semibold mb-2">🚀 Criar pipeline no Jenkins</h3>
        <ol className="list-decimal pl-6 mb-6">
          <li>Aceder ao Jenkins: <code>http://localhost:8080</code></li>
          <li>Criar novo item (New Item) → Pipeline</li>
          <li>Selecionar "Pipeline from SCM"</li>
          <li>Indicar o repositório Git e o caminho do <code>Jenkinsfile</code></li>
        </ol>
  
        <p className="mb-4">
          Esta integração contínua garante que qualquer alteração no código pode ser automaticamente testada, empacotada e lançada com fiabilidade, reduzindo erros humanos e acelerando o ciclo de desenvolvimento.
        </p>

        <h3 className="text-xl font-semibold mb-2">📬 Notificações por e-mail</h3>
        <p className="mb-4">
        A pipeline está configurada para enviar um e-mail automático sempre que ocorrer uma falha. 
        Esta notificação inclui o nome do pipeline, o commit, o autor e um link para os logs completos.
        </p>

        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
        {`post {
        failure {
            mail to: "\${EMAIL_TO}",
            subject: "🚨 Falha na Pipeline: \${env.JOB_NAME} #\${env.BUILD_NUMBER}",
            body: """Stage: \${env.STAGE_NAME}
        Logs: \${env.BUILD_URL}
        Commit: \${env.GIT_COMMIT}
        Autor: \${env.COMMIT_AUTHOR}"""
        }
        }`}
        </pre>

        <p>
        Para que o envio funcione corretamente, é necessário configurar o servidor SMTP em <strong>Gerir Jenkins → Configurar Sistema</strong>, bem como definir a variável <code>EMAIL_TO</code> no ambiente.
        </p>

      </div>
    );
  }