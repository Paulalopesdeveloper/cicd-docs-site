export default function Database() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Base de Dados (PostgreSQL)</h2>
  
        <p className="mb-4">
          A aplicação utiliza <strong>PostgreSQL</strong> como sistema de base de dados relacional. Todos os dados processados pelo crawler e modificados pelo utilizador (via frontend/backend) são armazenados nesta base.
        </p>
  
        <p className="mb-4">A estrutura principal da tabela é a seguinte:</p>
  
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`Tabela: pokemons
  
  id               INTEGER (chave primária)
  name             TEXT
  type_primary     TEXT
  type_secondary   TEXT (opcional)
  url              TEXT
  sprite           TEXT`}
        </pre>
  
        <p className="mb-4">
          O acesso à base de dados é feito através do SQLAlchemy (modo assíncrono) no backend, e directamente pelo <code>psycopg2</code> no script do crawler.
        </p>
  
        <p>
          Um script de inicialização pode ser incluído em <code>/db/init.sql</code> e é carregado automaticamente via Docker quando a base de dados é criada.
        </p>
      </div>
    );
  }
  