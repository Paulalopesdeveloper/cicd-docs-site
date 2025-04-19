export default function Backend() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6 text-pokeYellow">Backend (FastAPI)</h2>
  
        <p className="mb-4">
          O backend foi desenvolvido em <strong>FastAPI</strong>, uma framework moderna e eficiente para a construção de APIs RESTful em Python. A sua estrutura modular permite um desenvolvimento organizado e escalável.
        </p>
  
        <p className="mb-4">
          A aplicação expõe endpoints REST para interagir com os dados dos Pokémons, permitindo operações como listar, criar, editar e eliminar registos.
        </p>
  
        <p className="mb-4 font-semibold">Organização interna do backend:</p>
  
        <ul className="list-disc pl-6 mb-6">
          <li><code>api/</code> – Rotas da API organizadas por recurso</li>
          <li><code>crud/</code> – Funções que fazem ligação directa à base de dados</li>
          <li><code>schemas/</code> – Modelos de dados com Pydantic (validação)</li>
          <li><code>db/</code> – Ligação e sessão com a base de dados (SQLAlchemy assíncrono)</li>
          <li><code>main.py</code> – Ponto de entrada da aplicação FastAPI</li>
        </ul>
  
        <p className="mb-4 font-semibold">Exemplo de endpoint:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
  {`@router.get("/v1/pokemons", response_model=List[PokemonOut])
  async def list_pokemons(db: AsyncSession = Depends(get_db)):
      return await get_all_pokemons(db)`}
        </pre>
  
        <p>
          A API pode ser explorada directamente no Swagger, acessível em <code>/docs</code>, onde todos os endpoints estão documentados automaticamente.
        </p>
      </div>
    );
  }
  