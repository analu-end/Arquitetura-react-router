import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projetos } from '../data/projetos'

export default function Projetos() {
  return (
    <div className="page">
      <section className="page-hero page-pad">
        <SectionTitle number="01" eyebrow="PORTFÓLIO" title="Projetos" />
        <p className="page-lead">Uma seleção de trabalhos desenvolvidos pelo Ateliê Nova, entre residências, espaços comerciais e lugares de permanência.</p>
      </section>
      <section className="projects-list page-pad">
        <div className="project-grid">
          {projetos.map((projeto) => <ProjectCard key={projeto.id} projeto={projeto} />)}
        </div>
      </section>
    </div>
  )
}
