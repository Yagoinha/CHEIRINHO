import React from 'react';

const PLACEHOLDER_IMAGE =
  'https://placehold.co/320x400/f7f7f8/71717a?text=CHEIRINHO';

export default function FragranceCard({ item, onSelect }) {
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

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  return (
    <article className="product-card" onClick={() => onSelect(item)}>
      <div className="product-image-box">
        <img
          src={imagem}
          alt={nome}
          onError={handleImageError}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-meta">
        <span className="product-brand">{marca}</span>
        <h3 className="product-title">{nome}</h3>
      </div>
    </article>
  );
}
