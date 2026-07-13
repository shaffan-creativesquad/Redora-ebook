const cases = [
  {
    tag: 'Book Built Confidence',
    text: 'Dr. Serena Park had two decades of healthcare expertise but no platform to share it. She partnered with Readora to turn her insights into a polished book — and within a year, she was keynoting industry conferences and fielding inbound media requests she never expected.',
    author: 'Dr. Serena Park',
    book: 'Healthcare Innovator & Published Author',
  },
  {
    tag: 'Book Built Businesses',
    text: 'Daniel Cruz had spent ten years trying to write his business book alone before he found Readora. With guided coaching and a clear structure, he finished his manuscript in eight months. It debuted as a Wall Street Journal bestseller and tripled his consulting revenue.',
    author: 'Daniel Cruz',
    book: 'Wall Street Journal Bestselling Author',
  },
  {
    tag: 'Book Built Brands',
    text: "Marcus Hale turned down a traditional publishing deal to retain full ownership of his story. He chose Readora to bring his memoir to market — and the book became a national bestseller, cementing his reputation as one of the most compelling voices in business.",
    author: 'Marcus Hale',
    book: 'National Bestselling Author',
  },
]

export default function CaseStudies() {
  return (
    <div className="case-studies">
      <h2 className="font-playfair">Why Authors Choose Readora</h2>
      <div className="case-grid">
        {cases.map((c, i) => (
          <div key={i} className="case-card">
            <span className="case-tag">{c.tag}</span>
            <p>{c.text}</p>
            <div className="case-author">{c.author}</div>
            <div className="case-book">{c.book}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
