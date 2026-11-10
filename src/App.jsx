import React, { useState, useEffect, useCallback } from 'react';
import { Search, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { searchFragrances } from './services/api';
import FragranceCard from './components/FragranceCard';
import DetailModal from './components/DetailModal';
import SkeletonCard from './components/SkeletonCard';

const QUICK_FILTERS = ['Dior', 'Chanel', 'Versace', 'Tom Ford', 'Creed'];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('Dior');
  const [activeFilter, setActiveFilter] = useState('Dior');
  const [fragrances, setFragrances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFragrance, setSelectedFragrance] = useState(null);

  const executeSearch = useCallback(async (query) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);

    try {
      const results = await searchFragrances(trimmed);
      setFragrances(results);
    } catch (err) {
      setError(
        err.message ||
          'Não foi possível carregar as fragrâncias no momento. Tente novamente em instantes.'
      );
      setFragrances([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    executeSearch('Dior');
  }, [executeSearch]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;

    const matchedPill = QUICK_FILTERS.find(
      (pill) => pill.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setActiveFilter(matchedPill || '');
    executeSearch(searchTerm);
  };

  const handlePillClick = (brand) => {
    setSearchTerm(brand);
    setActiveFilter(brand);
    executeSearch(brand);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-30 bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-zinc-50 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 leading-none">
                CHEIRINHO
              </h1>
              <p className="text-xs text-zinc-500 mt-1">
                Guia &amp; Catálogo Olfativo
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-sm">
            <span
              className={`w-2 h-2 rounded-full ${
                error ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
              }`}
            />
            <span className="text-xs font-medium text-zinc-700">
              {error ? 'Verifique a Chave API' : 'API Conectada'}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 mb-2">
            Curadoria de Alta Perfumaria
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight mb-3">
            Descubra sua próxima assinatura olfativa
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mb-6">
            Explore casas clássicas, acordes e notas de topo, coração e fundo em
            tempo real.
          </p>

          <form
            onSubmit={handleFormSubmit}
            className="relative flex items-center max-w-2xl mx-auto mb-5"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquise por nome, marca ou nota..."
              aria-label="Pesquise por nome, marca ou nota"
              className="w-full pl-5 pr-14 py-4 rounded-2xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              aria-label="Pesquisar"
              className="absolute right-2.5 p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs text-zinc-400 mr-1">Mais buscados:</span>
            {QUICK_FILTERS.map((brand) => {
              const isActive = activeFilter === brand;
              return (
                <button
                  key={brand}
                  type="button"
                  onClick={() => handlePillClick(brand)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'
                  }`}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-200/80">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Resultados do Catálogo
              </h3>
              <p className="text-xs text-zinc-500">
                {loading
                  ? 'Consultando base de fragrâncias...'
                  : `${fragrances.length} ${
                      fragrances.length === 1
                        ? 'fragrância encontrada'
                        : 'fragrâncias encontradas'
                    }`}
              </p>
            </div>
          </div>

          {error && (
            <div className="bg-white border border-red-200 rounded-2xl p-6 sm:p-8 text-center max-w-xl mx-auto my-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-zinc-900 mb-2">
                Não foi possível carregar o catálogo
              </h4>
              <p className="text-sm text-zinc-600 mb-5">{error}</p>
              <button
                type="button"
                onClick={() => executeSearch(searchTerm || 'Dior')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Tentar novamente
              </button>
            </div>
          )}

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}

          {!loading && !error && fragrances.length === 0 && (
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-12 text-center max-w-lg mx-auto my-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-500 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-zinc-900 mb-1">
                Nenhum perfume encontrado para a sua busca
              </h4>
              <p className="text-sm text-zinc-500 mb-5">
                Tente buscar por outra marca clássica ou selecione um dos
                filtros rápidos acima.
              </p>
              <button
                type="button"
                onClick={() => handlePillClick('Dior')}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors"
              >
                Voltar para Dior
              </button>
            </div>
          )}

          {!loading && !error && fragrances.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fragrances.map((fragrance) => (
                <FragranceCard
                  key={fragrance.id}
                  fragrance={fragrance}
                  onSelect={setSelectedFragrance}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-zinc-200/80 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <span>
            <strong className="text-zinc-800 font-serif">CHEIRINHO</strong> —
            Guia &amp; Catálogo Olfativo
          </span>
          <span>Projeto Acadêmico • React, Vite &amp; Tailwind CSS</span>
        </div>
      </footer>

      <DetailModal
        fragrance={selectedFragrance}
        onClose={() => setSelectedFragrance(null)}
      />
    </div>
  );
}
