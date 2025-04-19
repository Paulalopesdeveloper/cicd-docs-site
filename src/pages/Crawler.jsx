export default function Crawler() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Crawler (Python)</h2>
  
        <p className="mb-4">
          O <strong>crawler</strong> é um serviço Python autónomo que recolhe e processa os dados da <a href="https://pokeapi.co/" target="_blank" className="text-blue-600 hover:underline">PokéAPI</a>. Inicialmente, são obtidos os primeiros 151 Pokémons da lista.
        </p>
  
        <p className="mb-4">
          Para cada Pokémon, são extraídos os seguintes dados:
        </p>
  
        <ul className="list-disc pl-6 mb-6">
          <li>Nome</li>
          <li>ID</li>
          <li>Tipo primário e secundário</li>
          <li>Sprite (imagem)</li>
          <li>URL na PokéAPI</li>
        </ul>
  
        <p className="mb-4">
          O script usa <code>requests</code> para obter os dados e <code>psycopg2</code> para inserir directamente na base de dados PostgreSQL.
        </p>
  
        <p className="mb-4 font-semibold">Exemplo de função:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`def get_pokemon_details(name, url):
      response = requests.get(url)
      data = response.json()
      return {
          "id": data["id"],
          "name": name,
          "type_primary": ...,
          "sprite": ...
      }`}
        </pre>
  
        <p>
          O crawler pode ser executado manualmente, agendado por cron job ou chamado automaticamente via pipeline Jenkins.
        </p>
      </div>
    );
  }
  