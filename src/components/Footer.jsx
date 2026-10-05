import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="eyebrow">ATELIÊ NOVA</span>
        <p>Arquitetura, interiores e espaços que atravessam o tempo.</p>
      </div>
      <div className="footer-links">
        <Link to="/projetos">Projetos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
      <span className="footer-copy">© 2026</span>
    </footer>
  )
}
