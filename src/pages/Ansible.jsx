export default function Ansible() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Orquestração com Ansible</h2>
  
        <p className="mb-4">
          O <strong>Ansible</strong> é utilizado para orquestrar o deployment da aplicação de forma automatizada, garantindo que todos os serviços são executados com a configuração correcta e na ordem apropriada.
        </p>
  
        <p className="mb-4">A pasta <code>ansible/</code> inclui:</p>
  
        <ul className="list-disc pl-6 mb-6">
          <li><code>inventory</code> – Definição dos hosts (ex: <code>localhost</code>)</li>
          <li><code>playbook.yml</code> – Instruções passo-a-passo para criar containers, volumes e redes</li>
        </ul>
  
        <p className="mb-4 font-semibold">Exemplo de playbook:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`- name: Deploy PokéCrawler
    hosts: servidores
    tasks:
      - name: Criar rede Docker
        docker_network:
          name: pokecrawler_net
          state: present
  
      - name: Iniciar container do backend
        docker_container:
          name: backend
          image: user/backend:latest
          ports:
            - "8000:8000"
          networks:
            - name: pokecrawler_net`}
        </pre>
  
        <p>
          O comando para executar o deploy é simples:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mt-2">
  ansible-playbook -i inventory playbook.yml
        </pre>
      </div>
    );
  }
  