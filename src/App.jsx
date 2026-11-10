import React, { useState, useEffect } from 'react';
import { fetchFragrances } from './services/api';
import FragranceCard from './components/FragranceCard';
import DetailModal from './components/DetailModal';
import BrandDrawer from './components/BrandDrawer';
import './App.css';

const MARCAS_RAPIDAS = ['Dior', 'Chanel', 'Versace', 'Tom Ford', 'Creed'];

export default function App() {
  const [termoBusca, setTermoBusca] = useState('Dior');
  const [marcaAtiva, setMarcaAtiva] = useState('Dior');
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [perfumeSelecionado, setPerfumeSelecionado] = useState(null);
  const [menuAberto, setMenuAberto] = useState(false);

  const buscarPerfumes = async (termo) => {
    const consulta = termo.trim();
    if (!consulta) return;

    setLoading(true);
    setErro(null);

    try {
      const dados = await fetchFragrances(consulta);
      setPerfumes(Array.isArray(dados) ? dados : []);
    } catch (err) {
      setErro('Não foi possível carregar o catálogo no momento.');
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
    const limpo = termoBusca.trim();
    if (!limpo) return;

    setMarcaAtiva(limpo);
    buscarPerfumes(limpo);
  };

  const handleSelecionarMarca = (marca) => {
    setTermoBusca(marca);
    setMarcaAtiva(marca);
    buscarPerfumes(marca);
  };

  return (
    <div className="storefront">
      <header className="site-header">
        <div className="container header-top">
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMenuAberto(true)}
            aria-label="Abrir menu de marcas"
          >
            <span className="hamburger-icon">☰</span>
            <span className="hamburger-label">Marcas</span>
          </button>

          <a
            href="#topo"
            className="brand-wordmark"
            onClick={(e) => {
              e.preventDefault();
              handleSelecionarMarca('Dior');
            }}
          >
            CHEIRINHO
          </a>

          <div className="header-spacer" />
        </div>

        <div className="container header-Controls">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-field"
              placeholder="Pesquisar por fragrância, marca ou nota..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              aria-label="Pesquisar fragrância"
            />
            <button type="submit" className="search-submit">
              Buscar
            </button>
          </form>

          <nav className="filter-nav" aria-label="Marcas em destaque">
            <div className="filter-pills">
              {MARCAS_RAPIDAS.map((marca) => {
                const isAtiva =
                  marcaAtiva.toLowerCase() === marca.toLowerCase();
                return (
                  <button
                    key={marca}
                    type="button"
                    className={`filter-pill ${isAtiva ? 'active' : ''}`}
                    onClick={() => handleSelecionarMarca(marca)}
                  >
                    {marca}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      <main className="container catalog-main">
        {loading && (
          <div className="status-message">
            <p>Carregando perfumes...</p>
          </div>
        )}

        {!loading && erro && (
          <div className="status-message">
            <p>{erro}</p>
            <button
              type="button"
              className="minimal-retry-btn"
              onClick={() => buscarPerfumes(termoBusca || 'Dior')}
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!loading && !erro && perfumes.length === 0 && (
          <div className="status-message">
            <p>Nenhum perfume encontrado para a sua busca.</p>
          </div>
        )}

        {!loading && !erro && perfumes.length > 0 && (
          <section className="product-grid">
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

      <BrandDrawer
        isOpen={menuAberto}
        onClose={() => setMenuAberto(false)}
        selectedBrand={marcaAtiva}
        onSelectBrand={handleSelecionarMarca}
      />

      <DetailModal
        item={perfumeSelecionado}
        onClose={() => setPerfumeSelecionado(null)}
      />
    </div>
  );
}
