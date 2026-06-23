const stats = [
  { value: '2,000+', label: 'Authors Served' },
  { value: '3,000+', label: 'Books Published' },
  { value: '23', label: 'New York Times and Wall Street Journal Bestsellers' },
]

export default function WhyScribeHero() {
  return (
    <section className="ws-hero">
      <h1 className="font-playfair">
        Scribe Is the World&apos;s #1<br />Professional Publishing Company
      </h1>
      <p>
        We&apos;ve published over 3,000 books for more than 2,000 authors, including 23{' '}
        <em>New York Times</em> and <em>Wall Street Journal</em> Bestsellers.
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
