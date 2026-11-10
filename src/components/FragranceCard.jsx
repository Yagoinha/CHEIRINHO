import React, { useState } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function FragranceCard({ fragrance, onSelect }) {
  const [imageError, setImageError] = useState(false);
  const showFallback = !fragrance.image || imageError;

  return (
    <article
      onClick={() => onSelect(fragrance)}
      className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[4/5] w-full bg-zinc-100/70 overflow-hidden flex items-center justify-center p-6">
          {!showFallback ? (
            <img
              src={fragrance.image}
              alt={`${fragrance.name} - ${fragrance.brand}`}
              onError={() => setImageError(true)}
              loading="lazy"
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 select-none">
              <div className="w-16 h-16 rounded-2xl bg-zinc-200/70 border border-zinc-300/60 flex items-center justify-center mb-3 text-zinc-600 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-7 h-7 stroke-[1.5]" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {fragrance.brand}
              </span>
              <span className="text-xs text-zinc-400 mt-1">
                Frasco Ilustrativo
              </span>
            </div>
          )}

          {fragrance.concentration && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-zinc-700 text-[11px] font-medium px-2.5 py-1 rounded-full border border-zinc-200/80">
              {fragrance.concentration}
            </span>
          )}

          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-zinc-200/80 flex items-center justify-center text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-1 truncate">
            {fragrance.brand}
          </p>
          <h3 className="font-serif text-lg font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors line-clamp-1">
            {fragrance.name}
          </h3>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        {fragrance.tags && fragrance.tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {fragrance.tags.slice(0, 3).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="text-[11px] bg-zinc-100 text-zinc-600 px-2.5 py-0.5 rounded-md border border-zinc-200/60 capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs text-zinc-400 italic">
            Ver pirâmide olfativa completa
          </span>
        )}
      </div>
    </article>
  );
}
