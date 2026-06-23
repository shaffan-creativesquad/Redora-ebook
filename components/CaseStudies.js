const cases = [
  {
    tag: 'Book Built Confidence',
    text: 'Robin already had the knowledge to be a thought leader in her industry, but she realized she needed to broadcast that wisdom so that her ideas could precede her. Writing her book helped propel her brand and established her as a speaker and an authority.',
    author: 'Robin Farmanfarmaian',
    book: 'Author of The Thought Leader Formula',
  },
  {
    tag: 'Book Built Businesses',
    text: 'Joey Coleman struggled writing his book for ten years before partnering with Scribe. After launching his book, Coleman became a Wall Street Journal bestseller and doubled his speaking revenue.',
    author: 'Joey Coleman',
    book: 'Author of Never Lose a Customer Again, Wall Street Journal Bestseller',
  },
  {
    tag: 'Book Built Brands',
    text: "David Goggins wanted to keep full ownership of his life story, turning down traditional publishing deals. Goggins chose Scribe to publish his book, and Can't Hurt Me became one of the bestselling memoirs of all time.",
    author: 'David Goggins',
    book: 'New York Times, Wall Street Journal, and USA Today Bestseller',
  },
]

export default function CaseStudies() {
  return (
    <div className="case-studies">
      <h2 className="font-playfair">Why Authors Choose Scribe</h2>
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
