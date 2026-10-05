import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projetos } from '../data/projetos'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">ARQUITETURA / INTERIORES / 2026</span>
          <h1>Espaços que<br /><em>permanecem.</em></h1>
          <p>Projetamos lugares contemporâneos com atenção à matéria, à luz e à forma de viver.</p>
          <Link to="/projetos" className="outline-button">Explorar projetos <span>↗</span></Link>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90" alt="Casa contemporânea do Ateliê Nova" />
          <div className="hero-caption"><span>CASA LAGO</span><span>ATIBAIA / SP</span></div>
        </div>
      </section>

      <section className="intro-grid page-pad">
        <span className="large-index">01</span>
        <div>
          <span className="eyebrow">O ATELIÊ</span>
          <h2>Arquitetura como encontro entre <em>pessoa, lugar e tempo.</em></h2>
        </div>
        <p>Somos um escritório independente dedicado a projetos residenciais, comerciais e de hospedagem. Trabalhamos com uma linguagem essencial, valorizando materiais honestos e soluções duradouras.</p>
      </section>

      <section className="featured page-pad">
        <div className="section-line">
          <span>02 — PROJETOS</span>
          <Link to="/projetos">Ver todos ↗</Link>
        </div>
        <div className="project-grid project-grid-home">
          {projetos.slice(0, 3).map((projeto) => <ProjectCard key={projeto.id} projeto={projeto} />)}
        </div>
      </section>

      <section className="statement">
        <div className="statement-image">
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" alt="Interior contemporâneo" />
        </div>
        <div className="statement-copy">
          <span className="eyebrow">NOSSA ABORDAGEM</span>
          <h2>Menos excesso.<br /><em>Mais intenção.</em></h2>
          <Link to="/sobre" className="text-link">Conheça o escritório <span>→</span></Link>
        </div>
      </section>
    </>
  )
}
