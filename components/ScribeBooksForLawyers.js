const authors = [
  {
    name: 'Michael Mogill',
    nameHref: '/authors/michael-mogill',
    book: 'The Game Changing Attorney',
    bookHref: '/published-books/the-game-changing-attorney/',
    bookImg: '/assets/the-game-changing-attorney.jpeg',
    headshot: null,
    stars: '★★★★★',
    rating: '4.7 (1,100+)',
    ratingHref: 'https://www.amazon.com/Game-Changing-Attorney-Competition-Obvious-ebook/dp/B07JWGX3YB/',
    desc: 'His book brought in $5M in new business for his law firm and established him as the top voice in legal marketing.',
    storyHref: '/success-stories/michael-mogill-game-changing-attorney/',
  },
  {
    name: 'Richard Brock',
    nameHref: '/authors/richard-brock',
    book: 'Pillar-Based Marketing',
    bookHref: '/published-books/pillar-based-marketing',
    bookImg: '/assets/Brock-and-Day_WebsiteCover.jpg',
    headshot: '/assets/Richard_Brock_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.6 (85+)',
    ratingHref: 'https://www.amazon.com/Pillar-Based-Marketing-Data-Driven-Methodology-Actually-ebook/dp/B0BXVKHM6B/',
    desc: 'Used his book to attract top lateral legal talent to his recruiting firm.',
    storyHref: null,
  },
  {
    name: 'James Cunningham',
    nameHref: '/published-books/savvy-estate-planning-2',
    book: 'Savvy Estate Planning',
    bookHref: '/published-books/savvy-estate-planning-2',
    bookImg: '/assets/savvy-estate-planning.jpg',
    headshot: null,
    stars: '★★★★★',
    rating: '4.7 (280+)',
    ratingHref: 'https://geni.us/SavvyEstatePlanning',
    desc: 'Empowered families to protect their assets with clear, practical estate planning guidance.',
    storyHref: null,
  },
]

const benefits = [
  { title: 'Win more clients', desc: 'A book is the ultimate credibility signal. Prospective clients choose the attorney who literally wrote the book.' },
  { title: 'Command higher fees', desc: 'Published authors are perceived as top-tier experts, justifying premium billing rates.' },
  { title: 'Land speaking gigs', desc: 'Bar associations, legal conferences, and CLEs actively seek published attorney speakers.' },
  { title: 'Build a legacy', desc: 'Document your legal philosophy and approach for future partners, associates, and clients.' },
]

const steps = [
  { num: 1, title: 'Strategy call', desc: 'We learn about your goals, audience, and expertise to map the right path for your book.' },
  { num: 2, title: 'We write, you talk', desc: 'Through structured interviews, our writers capture your ideas and craft them into a professional manuscript.' },
  { num: 3, title: 'Publish and launch', desc: 'Editing, cover design, and global distribution. Your book launches on Amazon and everywhere books are sold.' },
]

const browseLinks = [
  { label: 'Browse All Books', href: '/published-books' },
  { label: 'Browse All Authors', href: '/authors' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'All Industries', href: '/books-for-industries' },
]

export default function ScribeBooksForLawyers() {
  return (
    <div className="ind">
      {/* Hero */}
      <div className="ind__hero">
        <h1>The Book That Wins You Clients Before They Walk In</h1>
        <p>Top attorneys use books to establish authority, attract high-value clients, and differentiate their practice. Scribe has helped lawyers at every level turn their expertise into published books.</p>
        <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
      </div>

      {/* Legal Leaders */}
      <div className="ind__section">
        <h2>Legal Leaders Who Published with Scribe</h2>
        <p className="subtitle">These legal professionals turned their expertise into bestselling books.</p>
        <div className="ind__authors-grid">
          {authors.map((a, i) => (
            <div key={i} className="ind__author-card" style={{ textAlign: 'center' }}>
              <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                {a.headshot && <img className="ind__author-headshot" src={a.headshot} alt={a.name} loading="lazy" />}
                <a href={a.bookHref} style={!a.headshot ? { borderRadius: '4px', width: 'auto', border: 'none' } : undefined}>
                  <img className="ind__author-book" src={a.bookImg} alt={a.book} loading="lazy" style={!a.headshot ? { width: '70px', height: '105px' } : undefined} />
                </a>
              </div>
              <div className="ind__author-name"><a href={a.nameHref}>{a.name}</a></div>
              <div className="ind__author-title"><a href={a.bookHref}>{a.book}</a></div>
              <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                <span className="ind__author-stars">{a.stars}</span>
                <span className="ind__author-review-count">
                  <a href={a.ratingHref} target="_blank" rel="noopener noreferrer">{a.rating}</a>
                </span>
              </div>
              <div className="ind__author-desc">{a.desc}</div>
              {a.storyHref && <a href={a.storyHref} className="ind__author-link">Read their success story →</a>}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="ind__section">
        <h2>Why Legal Professionals Write Books</h2>
        <div className="ind__benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="ind__benefit">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="ind__section ind__section--alt">
        <h2>How It Works</h2>
        <p className="subtitle">From idea to published book, we handle everything so you can focus on your work.</p>
        <div className="ind__process-grid">
          {steps.map(s => (
            <div key={s.num} className="ind__process-card">
              <div className="ind__process-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Browse Links */}
      <div className="ind__browse">
        <div className="ind__browse-links">
          {browseLinks.map((l, i) => (
            <a key={i} href={l.href} className="ind__browse-link">{l.label}</a>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="ind__bottom-cta">
        <h2>Ready to Write Your Book?</h2>
        <p>Schedule a free strategy call to explore how a book can grow your legal practice.</p>
        <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
      </div>
    </div>
  )
}
