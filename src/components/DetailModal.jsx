import React from 'react';

const PLACEHOLDER_IMAGE =
  'https://placehold.co/400x480/f1f5f9/475569?text=Perfume';

const formatNotes = (notesValue) => {
  if (!notesValue) return null;
  if (Array.isArray(notesValue)) {
    return notesValue
      .map((n) => (typeof n === 'string' ? n : n?.name || n?.note || ''))
      .filter(Boolean)
      .join(', ');
  }
  if (typeof notesValue === 'object') {
    const parts = [
      ...(Array.isArray(notesValue.top) ? notesValue.top : []),
      ...(Array.isArray(notesValue.middle) ? notesValue.middle : []),
      ...(Array.isArray(notesValue.heart) ? notesValue.heart : []),
      ...(Array.isArray(notesValue.base) ? notesValue.base : []),
    ];
    return parts.length > 0 ? parts.join(', ') : null;
  }
  if (typeof notesValue === 'string') return notesValue;
  return null;
};

export default function DetailModal({ item, onClose }) {
  if (!item) return null;

  const nome =
    item.name || item.Name || item.perfume || item.title || 'Perfume Exclusivo';
  const marca =
    item.brand || item.Brand || item.house || item.designer || 'Marca Clássica';
  const imagem =
    item.image ||
    item.imageUrl ||
    item.img ||
    item.image_url ||
    item.thumbnail ||
    PLACEHOLDER_IMAGE;

  const descricao =
    item.description ||
    item.summary ||
    item.about ||
    `Fragrância assinada pela casa ${marca}, desenvolvida com matérias-primas selecionadas para proporcionar uma experiência olfativa marcante e elegante.`;

  const notasTopo = formatNotes(item.topNotes || item.top_notes || item.notes?.top);
  const notasCoracao = formatNotes(
    item.middleNotes || item.middle_notes || item.heartNotes || item.notes?.middle || item.notes?.heart
  );
  const notasBase = formatNotes(item.baseNotes || item.base_notes || item.notes?.base);
  const notasGerais = formatNotes(item.notes || item.accords || item.mainAccords);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="modal-grid">
          <div className="modal-image-container">
            <img
              src={imagem}
              alt={nome}
              onError={handleImageError}
              className="modal-image"
            />
          </div>

          <div className="modal-info">
            <span className="modal-brand">{marca}</span>
            <h2 className="modal-title">{nome}</h2>
            <p className="modal-description">{descricao}</p>

            <div className="modal-notes">
              <h4>Notas e Acordes</h4>
              {notasTopo || notasCoracao || notasBase ? (
                <ul>
                  {notasTopo && (
                    <li>
                      <strong>Topo:</strong> {notasTopo}
                    </li>
                  )}
                  {notasCoracao && (
                    <li>
                      <strong>Coração:</strong> {notasCoracao}
                    </li>
                  )}
                  {notasBase && (
                    <li>
                      <strong>Base:</strong> {notasBase}
                    </li>
                  )}
                </ul>
              ) : notasGerais ? (
                <p>{notasGerais}</p>
              ) : (
                <p>Notas olfativas não detalhadas no catálogo para este item.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
