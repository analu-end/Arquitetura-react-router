# Ateliê Nova — Site de Arquitetura

Projeto desenvolvido para a atividade de **React + Vite + React Router**, recriando a proposta visual de um site de arquitetura apresentado em um protótipo do Figma.

## Integrantes

Ana Luíza Machado de Andrade
Bárbara Gonçalves de Araújo


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
