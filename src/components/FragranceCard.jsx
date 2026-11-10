import React from 'react';

const PLACEHOLDER_IMAGE =
  'https://placehold.co/300x360/f1f5f9/475569?text=Perfume';

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
    <div className="card" onClick={() => onSelect(item)}>
      <div className="card-image-wrapper">
        <img
          src={imagem}
          alt={nome}
          onError={handleImageError}
          className="card-image"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <span className="card-brand">{marca}</span>
        <h3 className="card-title">{nome}</h3>
      </div>
    </div>
  );
}
