const BASE_URL = 'https://fragrance-api.p.rapidapi.com';

const parseNotesArray = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === 'string') return item.trim();
        if (item && typeof item === 'object') {
          return (item.name || item.note || item.title || '').trim();
        }
        return '';
      })
      .filter(Boolean);
  }
  if (typeof value === 'string') {
    return value
      .split(/[,;|]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
};

const normalizeFragrance = (item, index) => {
  const brand =
    item.brand ||
    item.Brand ||
    item.house ||
    item.designer ||
    item.maker ||
    item.company ||
    'Maison Olfativa';

  const name =
    item.name ||
    item.Name ||
    item.perfume ||
    item.title ||
    item.fragrance ||
    'Fragrância Exclusiva';

  const image =
    item.image ||
    item.img ||
    item.imageUrl ||
    item.image_url ||
    item.picture ||
    item.thumbnail ||
    item.photo ||
    '';

  const concentration =
    item.concentration ||
    item.type ||
    item.category ||
    item.gender ||
    item.for_gender ||
    'Eau de Parfum';

  const topNotes = parseNotesArray(
    item.topNotes ||
      item.top_notes ||
      item.notes?.top ||
      item.notes?.topNotes ||
      item.pyramid?.top
  );

  const middleNotes = parseNotesArray(
    item.middleNotes ||
      item.middle_notes ||
      item.heartNotes ||
      item.heart_notes ||
      item.notes?.middle ||
      item.notes?.heart ||
      item.pyramid?.middle
  );

  const baseNotes = parseNotesArray(
    item.baseNotes ||
      item.base_notes ||
      item.notes?.base ||
      item.notes?.baseNotes ||
      item.pyramid?.base
  );

  const generalNotes = parseNotesArray(
    item.notes && !item.notes.top && !item.notes.middle && !item.notes.base
      ? item.notes
      : item.accords || item.mainAccords || item.main_accords || item.tags
  );

  const allTags = [
    ...new Set([...generalNotes, ...topNotes, ...middleNotes, ...baseNotes]),
  ].slice(0, 4);

  const description =
    item.description ||
    item.summary ||
    item.about ||
    item.story ||
    `Uma composição olfativa assinada por ${brand}, combinando acordes selecionados que revelam personalidade, sofisticação e presença marcante na pele.`;

  const year = item.year || item.launch_year || item.releaseYear || null;

  return {
    id: item.id || item._id || `${brand}-${name}-${index}`,
    brand,
    name,
    image,
    concentration,
    tags: allTags,
    notes: {
      top: topNotes.length > 0 ? topNotes : generalNotes.slice(0, 3),
      heart: middleNotes.length > 0 ? middleNotes : generalNotes.slice(3, 6),
      base: baseNotes.length > 0 ? baseNotes : generalNotes.slice(6, 9),
    },
    description,
    year,
    raw: item,
  };
};

export async function searchFragrances(termoDeBusca = 'Dior') {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const apiHost =
    import.meta.env.VITE_RAPIDAPI_HOST || 'fragrance-api.p.rapidapi.com';

  if (!apiKey) {
    throw new Error(
      'Chave da API não configurada. Adicione VITE_RAPIDAPI_KEY no arquivo .env para consultar o catálogo.'
    );
  }

  const response = await fetch(`${BASE_URL}/searchIndex`, {
    method: 'POST',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ q: termoDeBusca }),
  });

  if (!response.ok) {
    throw new Error(
      `Falha ao comunicar com a Fragrance API (Status ${response.status}). Verifique sua chave RapidAPI ou limite de requisições.`
    );
  }

  const data = await response.json();

  const rawList = Array.isArray(data)
    ? data
    : Array.isArray(data?.hits)
    ? data.hits
    : Array.isArray(data?.results)
    ? data.results
    : Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data?.fragrances)
    ? data.fragrances
    : [];

  return rawList.map((item, idx) => normalizeFragrance(item, idx));
}
