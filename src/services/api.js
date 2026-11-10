const BACKUP_FRAGRANCES = [
  {
    id: 158,
    name: 'Dior Sauvage Eau de Parfum',
    brand: { id: 1, name: 'Dior' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2F3%2F8%2F38e37357-47db-4f71-82da-0f6a174f1b81_d293fdfd-3f8b-477e-8d32-775d6d297061.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Bergamota da Calábria' }, { name: 'Cidra' }, { name: 'Lavanda' }],
    middleNotes: [{ name: 'Pimenta de Sichuan' }, { name: 'Anis Estrelado' }, { name: 'Noz-moscada' }],
    baseNotes: [{ name: 'Ambroxan' }, { name: 'Baunilha de Papua-Nova Guiné' }, { name: 'Elemi' }],
    accords: [{ name: 'Fresco Especiado' }, { name: 'Âmbar' }, { name: 'Cítrico' }],
    description:
      'Uma composição radicalmente fresca e nobre assinada pela maison Dior, combinando a suculência da bergamota com o rastro amadeirado e envolvente do Ambroxan.',
  },
  {
    id: 16736,
    name: 'Dior Homme Intense',
    brand: { id: 1, name: 'Dior' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2F3%2F9%2F398791b1-93c0-478a-be3c-110ddde623df_def16252-8a49-414c-9168-3bd7fe71f2fe.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Lavanda' }],
    middleNotes: [{ name: 'Íris da Toscana' }, { name: 'Ambreta' }, { name: 'Pera' }],
    baseNotes: [{ name: 'Cedro da Virgínia' }, { name: 'Vetiver' }],
    accords: [{ name: 'Atalcado' }, { name: 'Amadeirado' }, { name: 'Floral' }],
    description:
      'Sofisticado e sedutor, Dior Homme Intense destaca a nobreza da íris combinada com madeiras secas e acordes almiscarados profundos.',
  },
  {
    id: 1287,
    name: 'Bleu de Chanel',
    brand: { id: 110, name: 'Chanel' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2Fa%2F0%2Fa0d9b931-d36e-4421-9e09-9cd89a461d04_94b5c927-a522-473c-8987-b219a37ea277.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Toranja' }, { name: 'Limão' }, { name: 'Hortelã' }, { name: 'Pimenta Rosa' }],
    middleNotes: [{ name: 'Gengibre' }, { name: 'Jasmim' }, { name: 'Noz-moscada' }],
    baseNotes: [{ name: 'Incenso' }, { name: 'Sândalo' }, { name: 'Cedro' }, { name: 'Vetiver' }],
    accords: [{ name: 'Amadeirado' }, { name: 'Cítrico' }, { name: 'Aromático' }],
    description:
      'Um aromático amadeirado atemporal que une o frescor cítrico revigorante à densidade elegante do sândalo da Nova Caledônia e do cedro.',
  },
  {
    id: 36157,
    name: 'Coco Mademoiselle',
    brand: { id: 110, name: 'Chanel' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2F9%2Fa%2F9acf7771-96ce-4ce6-b61b-dcbcb2cdea95_47ba390c-145e-444f-9e03-7b61f795ccae.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Laranja' }, { name: 'Bergamota' }, { name: 'Flor de Laranjeira' }],
    middleNotes: [{ name: 'Rosa Turca' }, { name: 'Jasmim' }, { name: 'Mimosa' }, { name: 'Ylang-Ylang' }],
    baseNotes: [{ name: 'Patchouli' }, { name: 'Almíscar Branco' }, { name: 'Baunilha' }, { name: 'Fava Tonka' }],
    accords: [{ name: 'Cítrico' }, { name: 'Patchouli' }, { name: 'Floral Branco' }],
    description:
      'A essência de uma personalidade livre e audaciosa. Um âmbar feminino surpreendentemente fresco, com notas vibrantes de laranja e acordes luminosos de rosa e patchouli.',
  },
  {
    id: 632,
    name: 'Versace Eros Flame',
    brand: { id: 47, name: 'Versace' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2Fa%2F0%2Fa0adf094-40fe-4d42-9544-55d6bfb4ee73_7ba51ada-6033-44fc-8ed4-5cbb0f5b019a.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Mandarina' }, { name: 'Chinotto' }, { name: 'Pimenta Preta' }, { name: 'Alecrim' }],
    middleNotes: [{ name: 'Rosa' }, { name: 'Gerânio' }, { name: 'Pepperwood' }],
    baseNotes: [{ name: 'Baunilha' }, { name: 'Fava Tonka' }, { name: 'Sândalo' }, { name: 'Cedro' }],
    accords: [{ name: 'Especiado Quente' }, { name: 'Baunilha' }, { name: 'Cítrico' }],
    description:
      'Quente, intenso e apaixonante, joga com contrastes entre notas cítricas italianas vibrantes e uma base envolvente de baunilha e fava tonka.',
  },
  {
    id: 107,
    name: 'Versace Pour Homme Dylan Blue',
    brand: { id: 47, name: 'Versace' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2Fc%2F7%2Fc718bb28-e7dd-4efa-91a0-041cb19a49d8_9b479ad3-abd6-4835-9074-a5cdbafa4d0b.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Bergamota' }, { name: 'Toranja' }, { name: 'Notas Aquáticas' }, { name: 'Folha de Figo' }],
    middleNotes: [{ name: 'Ambroxan' }, { name: 'Pimenta Preta' }, { name: 'Folha de Violeta' }, { name: 'Patchouli' }],
    baseNotes: [{ name: 'Incenso' }, { name: 'Almíscar' }, { name: 'Fava Tonka' }, { name: 'Açafrão' }],
    accords: [{ name: 'Fresco' }, { name: 'Âmbar' }, { name: 'Cítrico' }],
    description:
      'Um fougère moderno com frescor mediterrâneo aquático, folhas de figo e uma base mineral intensa de ambroxan e incenso.',
  },
  {
    id: 6858,
    name: 'Tom Ford Tobacco Vanille',
    brand: { id: 87, name: 'Tom Ford' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2Fe%2Ff%2Fef0b60ec-a8e7-4cf3-8768-69e903876c06_9dc078a0-4e34-4f2f-bfe1-990a729c3969.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Folha de Tabaco' }, { name: 'Notas Especiadas' }],
    middleNotes: [{ name: 'Baunilha' }, { name: 'Cacau' }, { name: 'Fava Tonka' }, { name: 'Flor de Tabaco' }],
    baseNotes: [{ name: 'Frutas Secas' }, { name: 'Notas Amadeiradas' }],
    accords: [{ name: 'Doce' }, { name: 'Tabaco' }, { name: 'Baunilha' }, { name: 'Especiado Quente' }],
    description:
      'Opulento, artesanal e icônico. Reinterpreta a tradição dos clubes clássicos de cavalheiros ingleses com fava tonka cremosa, cacau e acordes ricos de tabaco.',
  },
  {
    id: 708,
    name: 'Creed Absolu Aventus',
    brand: { id: 102, name: 'Creed' },
    image: {
      url: 'https://imaginary.hernas.com/resize?width=300&quality=85&url=https%3A%2F%2Fs3.nl-ams.scw.cloud%2Ffraghead-production%2Fglobal%2F9%2F3%2F934943b1-4b35-42b4-a20e-f2b26ea72093_1806c717-3164-4ea3-b72b-bd90a337c4b4.png&gravity=smart&type=auto&background=255%2C255%2C255',
    },
    topNotes: [{ name: 'Abacaxi' }, { name: 'Bergamota' }, { name: 'Groselha Preta' }, { name: 'Toranja' }],
    middleNotes: [{ name: 'Gengibre' }, { name: 'Canela' }, { name: 'Cardamomo' }, { name: 'Rosa' }],
    baseNotes: [{ name: 'Musgo de Carvalho' }, { name: 'Vetiver' }, { name: 'Patchouli' }, { name: 'Ambroxan' }],
    accords: [{ name: 'Frutado' }, { name: 'Amadeirado' }, { name: 'Especiado' }],
    description:
      'Uma celebração de força e sofisticação que combina a abertura frutada de abacaxi e bergamota com especiarias nobres e madeiras esfumadas.',
  },
];

const extractTextList = (list) => {
  if (!list) return [];
  if (Array.isArray(list)) {
    return list
      .map((entry) => {
        if (typeof entry === 'string') return entry;
        if (entry && typeof entry === 'object') return entry.name || entry.note || '';
        return '';
      })
      .filter(Boolean);
  }
  if (typeof list === 'string') {
    return list
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
};

export const normalizeFragranceItem = (item, index = 0) => {
  if (!item || typeof item !== 'object') {
    return {
      id: `item-${index}`,
      name: 'Perfume Exclusivo',
      brandName: 'Marca Clássica',
      imageUrl: '',
      topNotesList: [],
      middleNotesList: [],
      baseNotesList: [],
      accordsList: [],
      description: 'Composição olfativa selecionada do catálogo.',
    };
  }

  const brandName =
    typeof item.brand === 'object' && item.brand !== null
      ? item.brand.name || 'Marca Clássica'
      : item.brand || item.Brand || item.house || item.designer || 'Marca Clássica';

  const name =
    item.name || item.Name || item.perfume || item.title || 'Perfume Exclusivo';

  const imageUrl =
    typeof item.image === 'object' && item.image !== null
      ? item.image.url || item.image.src || ''
      : item.image || item.imageUrl || item.img || item.image_url || item.thumbnail || '';

  const topNotesList = extractTextList(
    item.topNotes || item.top_notes || item.notes?.top
  );
  const middleNotesList = extractTextList(
    item.middleNotes || item.middle_notes || item.heartNotes || item.notes?.middle || item.notes?.heart
  );
  const baseNotesList = extractTextList(
    item.baseNotes || item.base_notes || item.notes?.base
  );
  const accordsList = extractTextList(
    item.accords || item.mainAccords || item.notes
  );

  const perfumers = extractTextList(item.perfumers);
  const releaseYear = item.releasedAt
    ? new Date(item.releasedAt * 1000).getFullYear()
    : item.year || null;

  let description = item.description || item.summary || item.about || '';
  if (!description) {
    const parts = [`Fragrância assinada pela casa ${brandName}.`];
    if (perfumers.length > 0) {
      parts.push(`Criada por ${perfumers.join(', ')}.`);
    }
    if (releaseYear && !Number.isNaN(releaseYear)) {
      parts.push(`Lançada em ${releaseYear}.`);
    }
    if (accordsList.length > 0) {
      parts.push(`Destaques olfativos: ${accordsList.slice(0, 5).join(', ')}.`);
    }
    description = parts.join(' ');
  }

  return {
    ...item,
    id: item.id || item._id || `${brandName}-${name}-${index}`,
    name,
    brandName,
    imageUrl,
    topNotesList,
    middleNotesList,
    baseNotesList,
    accordsList,
    description,
  };
};

const extractArrayFromPayload = (data) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.hits)) return data.hits;
  if (Array.isArray(data?.results?.[0]?.hits)) return data.results[0].hits;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.fragrances)) return data.fragrances;
  return null;
};

const filterBackupFragrances = (searchTerm) => {
  const query = (searchTerm || '').trim().toLowerCase();
  if (!query) {
    return BACKUP_FRAGRANCES.map((item, idx) => normalizeFragranceItem(item, idx));
  }

  const matched = BACKUP_FRAGRANCES.filter((item) => {
    const brand = (item.brand?.name || '').toLowerCase();
    const name = (item.name || '').toLowerCase();
    const notes = [
      ...(item.topNotes || []),
      ...(item.middleNotes || []),
      ...(item.baseNotes || []),
      ...(item.accords || []),
    ]
      .map((n) => (n.name || '').toLowerCase())
      .join(' ');

    return brand.includes(query) || name.includes(query) || notes.includes(query);
  });

  const listToUse = matched.length > 0 ? matched : BACKUP_FRAGRANCES;
  return listToUse.map((item, idx) => normalizeFragranceItem(item, idx));
};

export async function fetchFragrances(searchTerm = 'Dior') {
  const apiKey =
    import.meta.env?.VITE_RAPIDAPI_KEY ||
    '2dc9e34b51mshaee8d428b67c50cp11432bjsn12e7e764c2e9';
  const apiHost =
    import.meta.env?.VITE_RAPIDAPI_HOST || 'fragrance-api.p.rapidapi.com';

  const headers = {
    'content-type': 'application/json',
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': apiHost,
  };

  const candidates = [
    {
      url: 'https://fragrance-api.p.rapidapi.com/indexes/fragrances/search',
      body: { q: searchTerm },
    },
    {
      url: 'https://fragrance-api.p.rapidapi.com/multi-search',
      body: { queries: [{ indexUid: 'fragrances', q: searchTerm }] },
    },
    {
      url: 'https://fragrance-api.p.rapidapi.com/indexes/searchIndex',
      body: { q: searchTerm },
    },
    {
      url: 'https://fragrance-api.p.rapidapi.com/searchIndex',
      body: { q: searchTerm },
    },
  ];

  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate.url, {
        method: 'POST',
        headers,
        body: JSON.stringify(candidate.body),
      });

      if (response.ok) {
        const data = await response.json();
        const rawArray = extractArrayFromPayload(data);
        if (Array.isArray(rawArray)) {
          return rawArray.map((item, idx) => normalizeFragranceItem(item, idx));
        }
      }
    } catch (error) {
      continue;
    }
  }

  return filterBackupFragrances(searchTerm);
}

export const fetchSearch = fetchFragrances;
