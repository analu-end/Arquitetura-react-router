import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import ProjetoDetalhes from './pages/ProjetoDetalhes'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        {/* O BrowserRouter fica no main.jsx.
            Aqui ficam as rotas da aplicação, como foi trabalhado em aula. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />

          {/* :id torna esta rota dinâmica. */}
          <Route path="/projetos/:id" element={<ProjetoDetalhes />} />

          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
