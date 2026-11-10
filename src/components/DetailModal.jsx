import React, { useEffect } from 'react';

const PLACEHOLDER_IMAGE =
  'https://placehold.co/480x600/f7f7f8/71717a?text=CHEIRINHO';

const formatNotes = (notesValue) => {
  if (!notesValue) return null;
  if (Array.isArray(notesValue)) {
    const cleaned = notesValue
      .map((n) => (typeof n === 'string' ? n : n?.name || n?.note || ''))
      .filter(Boolean);
    return cleaned.length > 0 ? cleaned.join(', ') : null;
  }
  if (typeof notesValue === 'string') return notesValue;
  return null;
};

export default function DetailModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

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
  }, [item, onClose]);

  if (!item) return null;

  const nome =
    item.name || item.Name || item.perfume || item.title || 'Perfume Exclusivo';

  const marca =
    item.brandName ||
    (typeof item.brand === 'object' && item.brand !== null
      ? item.brand.name
      : item.brand) ||
    item.Brand ||
    item.house ||
    'Marca Clássica';

  const imagem =
    item.imageUrl ||
    (typeof item.image === 'object' && item.image !== null
      ? item.image.url
      : item.image) ||
    item.img ||
    item.image_url ||
    item.thumbnail ||
    PLACEHOLDER_IMAGE;

  const descricao =
    item.description ||
    item.summary ||
    item.about ||
    `Fragrância assinada pela casa ${marca}, desenvolvida com matérias-primas selecionadas para proporcionar uma experiência olfativa marcante e elegante.`;

  const notasTopo = formatNotes(
    item.topNotesList || item.topNotes || item.top_notes || item.notes?.top
  );
  const notasCoracao = formatNotes(
    item.middleNotesList ||
      item.middleNotes ||
      item.middle_notes ||
      item.heartNotes ||
      item.notes?.middle ||
      item.notes?.heart
  );
  const notasBase = formatNotes(
    item.baseNotesList || item.baseNotes || item.base_notes || item.notes?.base
  );
  const notasGerais = formatNotes(
    item.accordsList || item.notes || item.accords || item.mainAccords
  );

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          ✕
        </button>

        <div className="modal-columns">
          <div className="modal-media">
            <img
              src={imagem}
              alt={nome}
              onError={handleImageError}
              className="modal-product-image"
            />
          </div>

          <div className="modal-details">
            <span className="modal-brand">{marca}</span>
            <h2 className="modal-title">{nome}</h2>
            <p className="modal-description">{descricao}</p>

            <div className="modal-pyramid">
              <h4 className="modal-section-title">Pirâmide Olfativa</h4>
              {notasTopo || notasCoracao || notasBase ? (
                <div className="modal-note-list">
                  {notasTopo && (
                    <div className="modal-note-row">
                      <span className="modal-note-label">Topo</span>
                      <span className="modal-note-value">{notasTopo}</span>
                    </div>
                  )}
                  {notasCoracao && (
                    <div className="modal-note-row">
                      <span className="modal-note-label">Coração</span>
                      <span className="modal-note-value">{notasCoracao}</span>
                    </div>
                  )}
                  {notasBase && (
                    <div className="modal-note-row">
                      <span className="modal-note-label">Base</span>
                      <span className="modal-note-value">{notasBase}</span>
                    </div>
                  )}
                </div>
              ) : notasGerais ? (
                <p className="modal-note-fallback">{notasGerais}</p>
              ) : (
                <p className="modal-note-fallback">
                  Notas olfativas não especificadas para esta edição.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
