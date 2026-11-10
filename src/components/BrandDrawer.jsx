import React, { useEffect } from 'react';

const CASAS_PERFUMARIA = [
  'Dior',
  'Chanel',
  'Tom Ford',
  'Versace',
  'Creed',
  'Yves Saint Laurent',
  'Giorgio Armani',
  'Paco Rabanne',
  'Carolina Herrera',
  'Jean Paul Gaultier',
  'Acqua di Parma',
  'Parfums de Marly',
  'Xerjoff',
  'Natura',
  'O Boticário',
];

export default function BrandDrawer({
  isOpen,
  onClose,
  selectedBrand,
  onSelectBrand,
}) {
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChoose = (marca) => {
    onSelectBrand(marca);
    onClose();
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <aside
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Menu de Marcas"
      >
        <div className="drawer-header">
          <div>
            <span className="drawer-subtitle">Catálogo Olfativo</span>
            <h2 className="drawer-title">Casas &amp; Marcas</h2>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Fechar menu de marcas"
          >
            ✕
          </button>
        </div>

        <ul className="drawer-brand-list">
          {CASAS_PERFUMARIA.map((marca) => {
            const isAtiva =
              selectedBrand &&
              selectedBrand.toLowerCase() === marca.toLowerCase();

            return (
              <li key={marca}>
                <button
                  type="button"
                  className={`drawer-brand-item ${isAtiva ? 'active' : ''}`}
                  onClick={() => handleChoose(marca)}
                >
                  <span>{marca}</span>
                  <span className="drawer-arrow">→</span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
