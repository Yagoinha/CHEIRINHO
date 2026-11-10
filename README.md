# CHEIRINHO — Guia & Catálogo Olfativo

O **Cheirinho** é uma aplicação web criada como projeto acadêmico de faculdade para consultar e explorar perfumes do mundo todo. A ideia foi construir uma interface limpa, rápida e fácil de usar, que consome dados reais da **Fragrance API** (via RapidAPI) para mostrar marcas, fotos dos frascos e a pirâmide olfativa (notas de topo, coração e base) de cada fragrância.

---

## Tecnologias utilizadas

- **React 18** (componentização e controle de estado com Hooks)
- **Vite** (ambiente de desenvolvimento rápido e build leve)
- **Tailwind CSS** (estilização responsiva com visual limpo e editorial)
- **Lucide React** (ícones minimalistas)
- **Fetch API nativa** (comunicação direta com a Fragrance API na RapidAPI)

---

## Como rodar o projeto na sua máquina (3 passos)

### 1. Clone a pasta e instale as dependências
Abra o terminal na pasta do projeto e rode:

```bash
npm install
```

### 2. Configure sua chave da RapidAPI
Crie um arquivo chamado `.env` na raiz do projeto (você pode copiar o `.env.example`) e coloque a sua chave da Fragrance API:

```env
VITE_RAPIDAPI_KEY=sua_chave_aqui
VITE_RAPIDAPI_HOST=fragrance-api.p.rapidapi.com
```

### 3. Inicie o servidor local
Agora é só subir o projeto:

```bash
npm run dev
```

Depois disso, abra o link exibido no terminal (geralmente `http://localhost:5173`) no navegador.

---

## Como fazer o deploy na Vercel

1. Suba este projeto para um repositório no seu **GitHub**.
2. Entre na sua conta da [Vercel](https://vercel.com/), clique em **Add New Project** e importe o repositório.
3. Antes de clicar em **Deploy**, abra a aba **Environment Variables** e adicione as duas variáveis abaixo:
   - `VITE_RAPIDAPI_KEY` com o valor da sua chave da RapidAPI.
   - `VITE_RAPIDAPI_HOST` com o valor `fragrance-api.p.rapidapi.com`.
4. Clique em **Deploy** e pronto: o site estará no ar em poucos segundos.
