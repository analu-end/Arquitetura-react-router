import { Link } from 'react-router-dom'

export default function ProjectCard({ projeto }) {
  return (
    <Link to={`/projetos/${projeto.id}`} className="project-card">
      <div className="project-card-image-wrap">
        <img src={projeto.image} alt={`Projeto ${projeto.title}`} className="project-card-image" />
        <span className="project-card-number">{projeto.number}</span>
        <span className="project-card-arrow">↗</span>
      </div>
      <div className="project-card-info">
        <div>
          <h3>{projeto.title}</h3>
          <span>{projeto.category}</span>
        </div>
        <span>{projeto.year}</span>
      </div>
    </Link>
  )
}
