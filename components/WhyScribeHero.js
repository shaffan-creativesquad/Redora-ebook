const stats = [
  { value: '1,500+', label: 'Authors Published' },
  { value: '2,400+', label: 'Books in Print' },
  { value: '18', label: 'New York Times and Wall Street Journal Bestsellers' },
]

export default function WhyScribeHero() {
  return (
    <section className="ws-hero">
      <h1 className="font-playfair">
        Readora Is Built for Authors<br />Who Refuse to Compromise
      </h1>
      <p>
        We&apos;ve helped over 1,500 authors write, publish, and market their books — including 18{' '}
        <em>New York Times</em> and <em>Wall Street Journal</em> Bestsellers — and we&apos;re just getting started.
      </p>
      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-number">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
