# Ateliê Nova — Site de Arquitetura

Projeto desenvolvido para a atividade de **React + Vite + React Router**, recriando a proposta visual de um site de arquitetura apresentado em um protótipo do Figma.

## Integrantes

- Integrante 1: **[COLOQUE O NOME]**
- Integrante 2: **[COLOQUE O NOME]**

> Antes da entrega, substitua os campos acima pelos nomes reais da dupla.

## Tecnologias

- React
- Vite
- React Router DOM
- CSS responsivo

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/projetos` | Projetos |
| `/projetos/:id` | Detalhes do projeto |
| `/sobre` | Sobre |
| `/contato` | Contato |

A rota `/projetos/:id` é dinâmica e utiliza `useParams()` para recuperar o identificador do projeto e mostrar os dados correspondentes.

## Como executar

```bash
npm install
npm run dev
```

Depois, abra o endereço exibido pelo Vite no navegador.

## Organização

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProjectCard.jsx
│   └── SectionTitle.jsx
├── data/
│   └── projetos.js
├── pages/
│   ├── Contato.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── ProjetoDetalhes.jsx
│   ├── Projetos.jsx
│   └── Sobre.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Estrutura do React Router

O `BrowserRouter` fica no `main.jsx`, envolvendo a aplicação. No `App.jsx`, o `Routes` reúne as rotas e cada `Route` define qual componente será renderizado em cada endereço. A navegação interna utiliza `Link` e `NavLink`, evitando o recarregamento completo da página.

## Rota dinâmica

Exemplo:

```jsx
<Route path="/projetos/:id" element={<ProjetoDetalhes />} />
```

Na página de detalhes:

```jsx
const { id } = useParams()
const projeto = getProjeto(id)
```

Assim, endereços como `/projetos/casa-lago` e `/projetos/casa-concreto` podem renderizar projetos diferentes usando o mesmo componente.
