import { Link, useParams } from 'react-router-dom'
import { getProjeto } from '../data/projetos'

export default function ProjetoDetalhes() {
  const { id } = useParams()
  const projeto = getProjeto(id)

  if (!projeto) {
    return (
      <section className="not-found page-pad">
        <span className="eyebrow">404 — PROJETO</span>
        <h1>Projeto não encontrado.</h1>
        <Link to="/projetos" className="outline-button">Voltar aos projetos</Link>
      </section>
    )
  }

  return (
    <div className="project-detail">
      <section className="project-detail-head page-pad">
        <div>
          <span className="eyebrow">PROJETO {projeto.number}</span>
          <h1>{projeto.title}</h1>
        </div>
        <p>{projeto.description}</p>
      </section>

      <div className="detail-hero">
        <img src={projeto.image} alt={`Vista do projeto ${projeto.title}`} />
      </div>

      <section className="detail-info page-pad">
        <div><span>TIPO</span><strong>{projeto.category}</strong></div>
        <div><span>LOCAL</span><strong>{projeto.location}</strong></div>
        <div><span>ANO</span><strong>{projeto.year}</strong></div>
        <div><span>STATUS</span><strong>Concluído</strong></div>
      </section>

      <section className="detail-copy page-pad">
        <span className="large-index">02</span>
        <div>
          <h2>Uma arquitetura pensada para <em>ser vivida.</em></h2>
          <p>O projeto parte de uma implantação simples e de uma materialidade reduzida. A relação entre cheios e vazios cria diferentes enquadramentos da paisagem, enquanto a luz natural conduz a experiência dos ambientes ao longo do dia.</p>
          <Link to="/projetos" className="text-link">← Voltar aos projetos</Link>
        </div>
      </section>
    </div>
  )
}
