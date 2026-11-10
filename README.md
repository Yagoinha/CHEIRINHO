# CHEIRINHO — Catálogo Olfativo

Interface web minimalista para consulta e exploração de fragrâncias, notas olfativas e casas de perfumaria em tempo real. Projeto desenvolvido para a disciplina de desenvolvimento web com consumo de API externa.

**Link em Produção:** [cheirinho.vercel.app](https://cheirinho.vercel.app)

---

## Proposta

A proposta foi construir uma aplicação rápida e limpa no estilo editorial, focada no produto e sem poluição visual. O app consome uma base remota de perfumaria, trata o retorno dos dados em tempo real e entrega uma navegação fluida por marcas e notas olfativas.

### Principais Funcionalidades

- **Busca Dinâmica:** Pesquisa textual por termos, nomes de perfumes ou acordes específicos.
- **Navegação por Marcas (Drawer):** Menu lateral com seleção direta de casas de perfumaria (Dior, Tom Ford, Chanel, Creed, etc.).
- **Tradução de Notas (PT-BR):** Dicionário utilitário interno para converter os termos olfativos em inglês da API para o português de forma nativa.
- **Detalhamento em Modal:** Exibição da pirâmide olfativa com notas de topo, coração e base ao selecionar um frasco.
- **Tratamento de Imagens e Falhas:** Fallback automático com `onError` para links externos quebrados e contingência caso a rota da API fique indisponível.

---

## Tecnologias

- **React JS** (Vite)
- **CSS3 Nativo** (sem frameworks utilitários externos)
- **Fragrance API** (RapidAPI) via requisições assíncronas `fetch`
- **Vercel** (Deploy contínuo integrado ao GitHub)

---

## Como rodar localmente

1. Clone o repositório:
```bash
git clone [https://github.com/Yagoinha/CHEIRINHO.git](https://github.com/Yagoinha/CHEIRINHO.git)
cd CHEIRINHO
