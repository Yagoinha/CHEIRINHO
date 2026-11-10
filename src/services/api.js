const API_URL = 'https://fragrance-api.p.rapidapi.com/searchIndex';

export async function fetchSearch(termoDeBusca = 'Dior') {
  const apiKey =
    import.meta.env.VITE_RAPIDAPI_KEY ||
    '2dc9e34b51mshaee8d428b67c50cp11432bjsn12e7e764c2e9';
  const apiHost =
    import.meta.env.VITE_RAPIDAPI_HOST || 'fragrance-api.p.rapidapi.com';

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost,
    },
    body: JSON.stringify({ q: termoDeBusca }),
  });

  if (!response.ok) {
    throw new Error(`Erro na requisição da API (Status: ${response.status})`);
  }

  const data = await response.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.hits)) return data.hits;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.fragrances)) return data.fragrances;

  return [];
}
