import React, { useState, useEffect } from 'react';
import { fetchSearch } from './services/api';
import FragranceCard from './components/FragranceCard';
import DetailModal from './components/DetailModal';
import './App.css';

const MARCAS_RAPIDAS = ['Dior', 'Chanel', 'Versace', 'Tom Ford'];

export default function App() {
  const [termoBusca, setTermoBusca] = useState('Dior');
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [perfumeSelecionado, setPerfumeSelecionado] = useState(null);

  const buscarPerfumes = async (termo) => {
    const consulta = termo.trim();
    if (!consulta) return;

    setLoading(true);
    setErro(null);

    try {
      const dados = await fetchSearch(consulta);
      setPerfumes(dados);
    } catch (err) {
      setErro(
        err.message || 'Não foi possível carregar os perfumes no momento.'
      );
      setPerfumes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarPerfumes('Dior');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarPerfumes(termoBusca);
  };

  const handleFiltroMarca = (marca) => {
    setTermoBusca(marca);
    buscarPerfumes(marca);
  };

  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="container header-content">
          <div>
            <h1 className="logo">CHEIRINHO</h1>
            <p className="subtitle">Catálogo de Perfumes</p>
          </div>
          <div className={`api-status ${erro ? 'status-error' : 'status-ok'}`}>
            <span className="status-dot" />
            <span>{erro ? 'Erro na API' : 'API Conectada'}</span>
          </div>
        </div>
      </header>

      <main className="container main-content">
        <section className="search-section">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Digite o nome de um perfume ou marca..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
            <button type="submit" className="search-button">
              Buscar
            </button>
          </form>

          <div className="quick-filters">
            <span className="filter-label">Marcas rápidas:</span>
            {MARCAS_RAPIDAS.map((marca) => (
              <button
                key={marca}
                type="button"
                className={`filter-pill ${
                  termoBusca.toLowerCase() === marca.toLowerCase()
                    ? 'active'
                    : ''
                }`}
                onClick={() => handleFiltroMarca(marca)}
              >
                {marca}
              </button>
            ))}
          </div>
        </section>

        {loading && (
          <div className="state-box">
            <p className="loading-text">Carregando perfumes...</p>
          </div>
        )}

        {!loading && erro && (
          <div className="state-box error-box">
            <p>{erro}</p>
            <button
              type="button"
              className="retry-button"
              onClick={() => buscarPerfumes(termoBusca || 'Dior')}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!loading && !erro && perfumes.length === 0 && (
          <div className="state-box">
            <p>Nenhum perfume encontrado para a sua busca.</p>
          </div>
        )}

        {!loading && !erro && perfumes.length > 0 && (
          <section className="catalog-grid">
            {perfumes.map((item, index) => (
              <FragranceCard
                key={item.id || item._id || `${item.name}-${index}`}
                item={item}
                onSelect={setPerfumeSelecionado}
              />
            ))}
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <p>CHEIRINHO — Projeto Acadêmico em React + Vite</p>
        </div>
      </footer>

      <DetailModal
        item={perfumeSelecionado}
        onClose={() => setPerfumeSelecionado(null)}
      />
    </div>
  );
}
