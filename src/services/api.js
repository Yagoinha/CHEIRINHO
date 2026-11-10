export async function fetchFragrances(searchTerm = 'Dior') {
  const url = 'https://fragrance-api.p.rapidapi.com/indexes/searchIndex';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY || '2dc9e34b51mshaee8d428b67c50cp11432bjsn12e7e764c2e9',
      'x-rapidapi-host': 'fragrance-api.p.rapidapi.com'
    },
    body: JSON.stringify({
      q: searchTerm
    })
  };

  try {
    let response = await fetch(url, options);

    if (response.status === 404) {
      response = await fetch('https://fragrance-api.p.rapidapi.com/searchIndex', options);
    }

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    return data.hits || data.results || data || [];
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const fetchSearch = fetchFragrances;
