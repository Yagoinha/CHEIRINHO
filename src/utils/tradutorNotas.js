const DICIONARIO_NOTAS = {
  vanilla: 'Baunilha',
  bergamot: 'Bergamota',
  leather: 'Couro',
  lavender: 'Lavanda',
  amber: 'Âmbar',
  cedar: 'Cedro',
  cedarwood: 'Cedro',
  sandalwood: 'Sândalo',
  pepper: 'Pimenta',
  'pink pepper': 'Pimenta Rosa',
  'black pepper': 'Pimenta Preta',
  rose: 'Rosa',
  iris: 'Íris',
  patchouli: 'Patchouli',
  'tonka bean': 'Fava Tonka',
  cinnamon: 'Canela',
  cardamom: 'Cardamomo',
  vetiver: 'Vetiver',
  musk: 'Almíscar',
  'white musk': 'Almíscar Branco',
  tobacco: 'Tabaco',
  'tobacco leaf': 'Folha de Tabaco',
  'tobacco blossom': 'Flor de Tabaco',
  mint: 'Hortelã',
  lemon: 'Limão',
  orange: 'Laranja',
  'mandarin orange': 'Mandarina',
  'orange blossom': 'Flor de Laranjeira',
  grapefruit: 'Toranja',
  citron: 'Cidra',
  lime: 'Lima',
  jasmine: 'Jasmim',
  ginger: 'Gengibre',
  nutmeg: 'Noz-moscada',
  incense: 'Incenso',
  labdanum: 'Ládano',
  oakmoss: 'Musgo de Carvalho',
  geranium: 'Gerânio',
  rosemary: 'Alecrim',
  pear: 'Pera',
  apple: 'Maçã',
  peach: 'Pêssego',
  pineapple: 'Abacaxi',
  'black currant': 'Groselha Preta',
  'dried fruits': 'Frutas Secas',
  cacao: 'Cacau',
  'cacao pod': 'Cacau',
  coffee: 'Café',
  caramel: 'Caramelo',
  honey: 'Mel',
  almond: 'Amêndoa',
  praline: 'Pralinê',
  oud: 'Oud (Agarwood)',
  agarwood: 'Oud (Agarwood)',
  ambroxan: 'Ambroxan',
  ambrette: 'Ambreta',
  'ambrette (musk mallow)': 'Ambreta',
  elemi: 'Elemi',
  saffron: 'Açafrão',
  cloves: 'Cravo',
  clove: 'Cravo',
  coriander: 'Coentro',
  violet: 'Violeta',
  'violet leaf': 'Folha de Violeta',
  'fig leaf': 'Folha de Figo',
  fig: 'Figo',
  coconut: 'Coco',
  tuberose: 'Tuberosa',
  neroli: 'Néroli',
  'ylang-ylang': 'Ylang-Ylang',
  peony: 'Peônia',
  freesia: 'Frésia',
  lily: 'Lírio',
  'lily-of-the-valley': 'Lírio-do-Vale',
  orchid: 'Orquídea',
  magnolia: 'Magnólia',
  heliotrope: 'Heliotrópio',
  mimosa: 'Mimosa',
  benzoin: 'Benjoim',
  myrrh: 'Mirra',
  opoponax: 'Opoponax',
  guaiac: 'Madeira Guaiac',
  'guaiac wood': 'Madeira Guaiac',
  'cashmere wood': 'Madeira de Cashmere',
  'woody notes': 'Notas Amadeiradas',
  'spicy notes': 'Notas Especiadas',
  water: 'Notas Aquáticas',
  'sea notes': 'Notas Marinhas',
  'green notes': 'Notas Verdes',
  woody: 'Amadeirado',
  aromatic: 'Aromático',
  citrus: 'Cítrico',
  sweet: 'Doce',
  powdery: 'Atalcado',
  musky: 'Almiscarado',
  earthy: 'Terroso',
  fruity: 'Frutado',
  floral: 'Floral',
  'white floral': 'Floral Branco',
  'warm spicy': 'Especiado Quente',
  'fresh spicy': 'Fresco Especiado',
  fresh: 'Fresco',
};

export function traduzirNota(termo) {
  if (!termo) return '';
  const valorOriginal =
    typeof termo === 'string' ? termo.trim() : termo?.name || termo?.note || '';

  if (!valorOriginal) return '';

  const chave = valorOriginal.toLowerCase().trim();
  return DICIONARIO_NOTAS[chave] || valorOriginal;
}

export function traduzirListaNotas(lista) {
  if (!lista) return [];
  if (Array.isArray(lista)) {
    return lista.map((item) => traduzirNota(item)).filter(Boolean);
  }
  if (typeof lista === 'string') {
    return lista
      .split(',')
      .map((item) => traduzirNota(item))
      .filter(Boolean);
  }
  return [];
}
