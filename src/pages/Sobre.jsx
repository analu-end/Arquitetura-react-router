import SectionTitle from '../components/SectionTitle'

export default function Sobre() {
  return (
    <div className="page">
      <section className="page-hero page-pad">
        <SectionTitle number="02" eyebrow="O ESCRITÓRIO" title="Sobre" />
        <p className="page-lead">O Ateliê Nova nasceu do desejo de criar arquitetura essencial: espaços que respeitam o contexto, valorizam os materiais e envelhecem com dignidade.</p>
      </section>

      <section className="about-image page-pad">
        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85" alt="Edifício de arquitetura contemporânea" />
      </section>

      <section className="about-columns page-pad">
        <span className="eyebrow">PRINCÍPIOS</span>
        <div className="principles">
          <article><span>01</span><h2>Contexto</h2><p>Cada projeto começa pela leitura cuidadosa do lugar e das pessoas que irão ocupá-lo.</p></article>
          <article><span>02</span><h2>Matéria</h2><p>Escolhemos materiais pela sua presença, durabilidade e capacidade de transformar a luz.</p></article>
          <article><span>03</span><h2>Tempo</h2><p>Buscamos soluções que continuem fazendo sentido depois que a novidade passa.</p></article>
        </div>
      </section>
    </div>
  )
}
