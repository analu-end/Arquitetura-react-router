import SectionTitle from '../components/SectionTitle'

export default function Contato() {
  return (
    <div className="page contact-page">
      <section className="page-hero page-pad">
        <SectionTitle number="03" eyebrow="FALE CONOSCO" title="Contato" />
        <p className="page-lead">Tem um projeto em mente? Conte um pouco sobre ele. Vamos conversar.</p>
      </section>

      <section className="contact-grid page-pad">
        <div className="contact-details">
          <div><span className="eyebrow">E-MAIL</span><a href="mailto:contato@atelienova.com">contato@atelienova.com</a></div>
          <div><span className="eyebrow">TELEFONE</span><a href="tel:+5511000000000">+55 11 0000-0000</a></div>
          <div><span className="eyebrow">ESTÚDIO</span><p>Rua das Artes, 120<br />São Paulo — SP</p></div>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>Nome<input type="text" placeholder="Seu nome" /></label>
          <label>E-mail<input type="email" placeholder="seu@email.com" /></label>
          <label>Mensagem<textarea rows="5" placeholder="Conte brevemente sobre seu projeto" /></label>
          <button type="submit" className="outline-button">Enviar mensagem <span>↗</span></button>
        </form>
      </section>
    </div>
  )
}
