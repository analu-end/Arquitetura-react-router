export default function SectionTitle({ number, eyebrow, title, children }) {
  return (
    <div className="section-title">
      <div className="section-title-meta">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}
