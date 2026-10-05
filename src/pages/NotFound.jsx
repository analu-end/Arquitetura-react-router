import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found page-pad">
      <span className="eyebrow">404</span>
      <h1>Página não encontrada.</h1>
      <Link to="/" className="outline-button">Voltar para Home</Link>
    </section>
  )
}
