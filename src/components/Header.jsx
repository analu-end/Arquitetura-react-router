import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <header className="header">
      <NavLink to="/" className="brand" aria-label="Ateliê Nova - início">
        <span>ATELIÊ</span>
        <strong>NOVA</strong>
      </NavLink>

      <nav className="nav" aria-label="Navegação principal">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/projetos" className={linkClass}>Projetos</NavLink>
        <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
        <NavLink to="/contato" className={linkClass}>Contato</NavLink>
      </nav>

      <span className="header-index">01 — 05</span>
    </header>
  )
}
