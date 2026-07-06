const authors = [
  {
    name: 'Dan Sullivan',
    nameHref: '/authors/dan-sullivan',
    book: 'Who Not How',
    bookHref: '/published-books/who-not-how',
    bookImg: '/assets/who-not-how.jpg',
    headshot: '/assets/Dan_Sullivan_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.6 (8,400+)',
    desc: "Who Not How became a business classic, accelerating Strategic Coach's global reach.",
    storyHref: null,
  },
  {
    name: 'Cameron Herold',
    nameHref: '/authors/cameron-herold',
    book: 'It Pays to PLAY',
    bookHref: '/published-books/it-pays-to-play',
    bookImg: '/assets/KristiHerold_WebsiteCover.jpg',
    headshot: '/assets/Cameron_Herold_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.5 (1,200+)',
    desc: 'Published 4 books with Scribe, building a global empire as the CEO Whisperer.',
    storyHref: null,
  },
  {
    name: 'Todd Herman',
    nameHref: '/authors/sean-herman',
    book: 'Screen Captured',
    bookHref: '/published-books/screen-captured',
    bookImg: '/assets/screen-captured.jpg',
    headshot: null,
    stars: '★★★★★',
    rating: '4.6 (3,800+)',
    desc: 'The Alter Ego Effect became a Wall Street Journal bestseller used by Olympic athletes and Fortune 500 CEOs.',
    storyHref: null,
  },
]

const benefits = [
  { title: 'Codify your method', desc: 'Transform your coaching framework into a tangible system that clients can reference and share.' },
  { title: 'Attract premium clients', desc: 'A published book positions you as the authority, letting you charge what you are worth.' },
  { title: 'Scale beyond sessions', desc: 'Your book coaches thousands of people simultaneously, creating passive income and brand awareness.' },
  { title: 'Build a movement', desc: 'Great coaching books become the foundation for courses, speaking tours, and certified programs.' },
]

const steps = [
  { num: 1, title: 'Strategy call', desc: 'We learn about your goals, audience, and expertise to map the right path for your book.' },
  { num: 2, title: 'We write, you talk', desc: 'Through structured interviews, our writers capture your ideas and craft them into a professional manuscript.' },
  { num: 3, title: 'Publish and launch', desc: 'Editing, cover design, and global distribution. Your book launches on Amazon and everywhere books are sold.' },
]

const browseLinks = [
  { label: 'Browse All Books', href: '/#published-books' },
  { label: 'Browse All Authors', href: '/all-books-by-authors' },

  { label: 'All Industries', href: '/industries' },
]

export default function ScribeBooksForCoaches() {
  return (
    <div className="ind">
      {/* Hero */}
      <div className="ind__hero">
        <h1>The Book That Makes You the Coach Everyone Wants to Hire</h1>
        <p>Executive coaches, business coaches, and life coaches use books to codify their methodology, attract premium clients, and scale their impact beyond one-on-one sessions.</p>
        <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
      </div>

      {/* Authors */}
      <div className="ind__section">
        <h2>Coaching Leaders Who Published with Scribe</h2>
        <p className="subtitle">These coaching professionals turned their expertise into bestselling books.</p>
        <div className="ind__authors-grid">
          {authors.map((a, i) => (
            <div key={i} className="ind__author-card">
              <div className="ind__author-img-wrap">
                {a.headshot && <img className="ind__author-headshot" src={a.headshot} alt={a.name} loading="lazy" />}
                <img className="ind__author-book" src={a.bookImg} alt={a.book} loading="lazy" />
              </div>
              <div className="ind__author-name">{a.name}</div>
              <div className="ind__author-title">{a.book}</div>
              <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                <span className="ind__author-stars">{a.stars}</span>
                <span className="ind__author-review-count"> {a.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="ind__section">
        <h2>Why Coaching Professionals Write Books</h2>
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
        <p>Schedule a free strategy call to explore how a book can grow your coaching practice.</p>
        <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
      </div>
    </div>
  )
}
