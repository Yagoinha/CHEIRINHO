# CHEIRINHO — Catálogo de Perfumes

O **Cheirinho** é um projeto acadêmico desenvolvido para a faculdade com o objetivo de criar um catálogo de perfumes funcional, rápido e direto ao ponto. A aplicação consome dados em tempo real da **Fragrance API** (via RapidAPI) usando React com Vite e estilização em CSS puro.

---

## Tecnologias Utilizadas

- **React 18** (Hooks `useState` e `useEffect` para gerenciar busca, listagem e modal)
- **Vite** (ferramenta de build rápida e leve)
- **CSS Puro** (`App.css` e `index.css` com Flexbox, CSS Grid e responsividade sem depender de bibliotecas externas)
- **Fetch API** (requisições HTTP nativas do JavaScript)

---

## Como rodar o projeto localmente

### 1. Instale as dependências
No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

### 2. Configure as variáveis de ambiente (Opcional)
O projeto já conta com a chave configurada por padrão no serviço para facilitar os testes da apresentação, mas você também pode criar um arquivo `.env` na raiz copiando o `.env.example`:

```env
VITE_RAPIDAPI_KEY=2dc9e34b51mshaee8d428b67c50cp11432bjsn12e7e764c2e9
VITE_RAPIDAPI_HOST=fragrance-api.p.rapidapi.com
```

### 3. Inicie o servidor de desenvolvimento
Execute o comando abaixo e abra o endereço indicado no terminal (normalmente `http://localhost:5173`):

```bash
npm run dev
```

---

## Passo a passo para Deploy na Vercel

1. Suba o código do projeto para um repositório no seu **GitHub**.
2. Acesse a [Vercel](https://vercel.com/) e clique em **Add New Project**.
3. Importe o repositório do projeto.
4. Na seção **Environment Variables**, adicione:
   - `VITE_RAPIDAPI_KEY`: `2dc9e34b51mshaee8d428b67c50cp11432bjsn12e7e764c2e9`
   - `VITE_RAPIDAPI_HOST`: `fragrance-api.p.rapidapi.com`
5. Clique em **Deploy** e aguarde a geração do link final.
