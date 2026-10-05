export const projetos = [
  {
    id: 'casa-lago',
    number: '01',
    title: 'Casa Lago',
    category: 'Residencial',
    year: '2024',
    location: 'Atibaia, SP',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    description: 'Uma residência de linhas puras que aproxima os espaços internos da paisagem.',
  },
  {
    id: 'casa-concreto',
    number: '02',
    title: 'Casa Concreto',
    category: 'Residencial',
    year: '2023',
    location: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    description: 'Volumes de concreto, madeira e vidro organizados ao redor de um pátio central.',
  },
  {
    id: 'atelier-urbano',
    number: '03',
    title: 'Ateliê Urbano',
    category: 'Comercial',
    year: '2022',
    location: 'Campinas, SP',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85',
    description: 'Um espaço de trabalho aberto, iluminado e conectado ao cotidiano da cidade.',
  },
  {
    id: 'refugio-serra',
    number: '04',
    title: 'Refúgio Serra',
    category: 'Hospedagem',
    year: '2021',
    location: 'Serra da Mantiqueira, MG',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1600&q=85',
    description: 'Arquitetura silenciosa criada para valorizar a natureza e a experiência de permanência.',
  },
]

export function getProjeto(id) {
  return projetos.find((projeto) => projeto.id === id)
}
