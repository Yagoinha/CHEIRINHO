import React, { useEffect, useState } from 'react';
import { X, Sparkles, Droplets, Layers, Wind } from 'lucide-react';

export default function DetailModal({ fragrance, onClose }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [fragrance]);

  useEffect(() => {
    if (!fragrance) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [fragrance, onClose]);

  if (!fragrance) return null;

  const showFallback = !fragrance.image || imageError;
  const hasTop = fragrance.notes?.top && fragrance.notes.top.length > 0;
  const hasHeart = fragrance.notes?.heart && fragrance.notes.heart.length > 0;
  const hasBase = fragrance.notes?.base && fragrance.notes.base.length > 0;
  const hasAnyNotes = hasTop || hasHeart || hasBase;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-fragrance-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-zinc-200 shadow-2xl overflow-hidden my-auto"
      >
        <button
          onClick={onClose}
          aria-label="Fechar detalhes"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 bg-zinc-100/80 p-8 flex flex-col items-center justify-center min-h-[280px] border-b md:border-b-0 md:border-r border-zinc-200/80">
            {!showFallback ? (
              <img
                src={fragrance.image}
                alt={`${fragrance.name} - ${fragrance.brand}`}
                onError={() => setImageError(true)}
                className="max-h-72 w-auto object-contain mix-blend-multiply"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-3xl bg-zinc-200/80 border border-zinc-300 flex items-center justify-center mb-4 text-zinc-600">
                  <Sparkles className="w-9 h-9 stroke-[1.5]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  {fragrance.brand}
                </span>
                <span className="text-xs text-zinc-400 mt-1">
                  Imagem indisponível
                </span>
              </div>
            )}
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[82vh] overflow-y-auto">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {fragrance.brand}
                </span>
                {fragrance.concentration && (
                  <span className="text-[11px] bg-zinc-100 text-zinc-700 px-2.5 py-0.5 rounded-full border border-zinc-200">
                    {fragrance.concentration}
                  </span>
                )}
                {fragrance.year && (
                  <span className="text-[11px] text-zinc-400">
                    • {fragrance.year}
                  </span>
                )}
              </div>

              <h2
                id="modal-fragrance-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 mb-4"
              >
                {fragrance.name}
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {fragrance.description}
              </p>

              <div className="space-y-4 border-t border-zinc-200/80 pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-900">
                  Pirâmide Olfativa
                </h3>

                {hasAnyNotes ? (
                  <div className="space-y-3">
                    <div className="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200/60">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 mb-2">
                        <Wind className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Notas de Topo (Saída)</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hasTop ? (
                          fragrance.notes.top.map((note, idx) => (
                            <span
                              key={`top-${idx}`}
                              className="text-xs bg-white text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200 capitalize"
                            >
                              {note}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-zinc-400">
                            Não especificadas pelo fabricante
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200/60">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 mb-2">
                        <Droplets className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Notas de Coração (Corpo)</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hasHeart ? (
                          fragrance.notes.heart.map((note, idx) => (
                            <span
                              key={`heart-${idx}`}
                              className="text-xs bg-white text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200 capitalize"
                            >
                              {note}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-zinc-400">
                            Não especificadas pelo fabricante
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200/60">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 mb-2">
                        <Layers className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Notas de Base (Fundo)</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {hasBase ? (
                          fragrance.notes.base.map((note, idx) => (
                            <span
                              key={`base-${idx}`}
                              className="text-xs bg-white text-zinc-700 px-2.5 py-1 rounded-md border border-zinc-200 capitalize"
                            >
                              {note}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-zinc-400">
                            Não especificadas pelo fabricante
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-zinc-500 bg-zinc-50 p-4 rounded-xl border border-zinc-200/60">
                    As notas detalhadas desta fragrância não foram informadas no
                    registro da API.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Pressione ESC para fechar
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors"
              >
                Fechar detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
