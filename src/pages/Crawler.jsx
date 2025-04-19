export default function Crawler() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Crawler (Python)</h2>

      <p className="mb-4">
        O serviço de <strong>crawler</strong> é responsável por obter dados da <a href="https://pokeapi.co/" target="_blank" className="text-blue-600 hover:underline">PokéAPI</a> e inseri-los na base de dados PostgreSQL da aplicação.
        Foi desenvolvido em Python, utilizando as bibliotecas <code>requests</code> para consumo da API e <code>psycopg2</code> para ligação à base de dados.
      </p>

      <p className="mb-4">
        O crawler recolhe os primeiros 151 Pokémons, extrai os seus detalhes principais (nome, ID, tipos, imagem e URL da API) e insere os dados na base de dados da aplicação.
      </p>

      <p className="font-semibold mb-2">⚙️ Fluxo de funcionamento:</p>
      <ol className="list-decimal pl-6 mb-6">
        <li>Recolha da lista de Pokémons</li>
        <li>Requisição individual de cada Pokémon para obter detalhes</li>
        <li>Processamento e estruturação dos dados</li>
        <li>Inserção em batch na base de dados PostgreSQL</li>
      </ol>

      <p className="mb-2 font-semibold">🧠 Funções principais:</p>

      <p className="mb-1"><code>get_pokemon_list()</code> — Obtém os primeiros 151 Pokémons da PokéAPI:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`def get_pokemon_list():
    next_url = f"{BASE_URL}/pokemon?limit=151"
    response = requests.get(next_url)
    data = response.json()
    return data["results"]`}
      </pre>

      <p className="mb-1"><code>get_pokemon_details(name, url)</code> — Vai buscar os dados detalhados de cada Pokémon:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`type_primary = pokemon["types"][0]["type"]["name"]
type_secondary = pokemon["types"][1]["type"]["name"] if len(pokemon["types"]) > 1 else None`}
      </pre>

      <p className="mb-1"><code>insert_pokemon_data(pokemons)</code> — Insere todos os registos na base de dados:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
{`INSERT INTO pokemons (id, name, type_primary, type_secondary, url, sprite)
VALUES (%s, %s, %s, %s, %s, %s)
ON CONFLICT (id) DO NOTHING`}
      </pre>

      <p className="mb-4">
        A execução do crawler é feita automaticamente através de um <strong>cron job</strong> configurado no sistema operativo. Este processo garante a actualização regular dos dados, sem necessidade de intervenção manual.
      </p>

      <p className="mb-4">
        O script é invocado com o comando:
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`python3 /home/ubuntu/pokecrawler/crawler/crawler.py`}
      </pre>

      <p className="mb-4">
        A linha correspondente no ficheiro <code>crontab</code> pode ser, por exemplo:
      </p>

      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
{`0 */6 * * * python3 /home/ubuntu/pokecrawler/crawler/crawler.py >> /var/log/pokecrawler.log 2>&1`}
      </pre>

      <p>
        Esta configuração executa o script de 6 em 6 horas e guarda os registos de execução num ficheiro local. Todas as mensagens são tratadas com a biblioteca <code>logging</code>, facilitando o diagnóstico em caso de falhas.
      </p>
    </div>
  );
}
