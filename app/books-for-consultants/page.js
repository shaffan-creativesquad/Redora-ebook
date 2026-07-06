import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Consulting | Scribe Media',
  description:
    'Scribe Media helps consulting professionals write and publish books that build authority, attract clients, and grow their business. See our consulting authors.',
}

const authors = [
  {
    name: 'Joey Coleman',
    nameHref: null,
    book: 'Never Lose a Customer Again',
    bookHref: '/published-books/never-lose-a-customer-again-joey-coleman',
    bookImg: 'https://scribemedia.com/hubfs/lioncrest/covers/NLaCA.jpg',
    headshot: null,
    stars: '★★★★★',
    rating: '4.7 (3,200+)',
    ratingHref: 'https://www.amazon.com/gp/product/0735220034/ref=dbs_a_def_rwt_bibl_vppi_i0?tag=scribemedia0a-20',
    desc: 'Became a Wall Street Journal bestseller and doubled his speaking revenue with Never Lose a Customer Again.',
    storyHref: null,
  },
  {
    name: 'Mona Patel',
    nameHref: '/authors/mona-patel',
    book: 'Reframe',
    bookHref: '/published-books/reframe',
    bookImg: 'https://scribemedia.com/hubfs/images/books/reframe.jpg',
    headshot: 'https://scribemedia.com/hubfs/author-headshots/Shaan_Patel_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.5 (95+)',
    ratingHref: 'https://www.amazon.com/Reframe-Shift-Work-Innovate-Think-ebook/dp/B00VTZX9XK/?&_encoding=UTF8&tag=scribemedia0a-20',
    desc: 'Her innovation framework Reframe is used by teams at Google, Nike, and the United Nations.',
    storyHref: null,
  },
  {
    name: 'Jeff Kavanaugh',
    nameHref: '/authors/jeff-kavanaugh',
    book: 'Practical Sustainability',
    bookHref: '/published-books/practical-sustainability',
    bookImg: 'https://scribemedia.com/hubfs/images/books/practical-sustainability.jpg',
    headshot: 'https://scribemedia.com/hubfs/author-headshots/_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.5 (150+)',
    ratingHref: 'https://geni.us/Sustainability',
    desc: 'The definitive guide to consulting essentials, used in MBA programs worldwide.',
    storyHref: null,
  },
]

const benefits = [
  { title: 'Generate inbound leads', desc: 'A book works around the clock, attracting prospects who already believe in your approach.' },
  { title: 'Close bigger engagements', desc: 'Published consultants command larger contracts because clients see them as the definitive expert.' },
  { title: 'Differentiate your firm', desc: 'When every consultant has the same pitch deck, a book makes your methodology tangible and shareable.' },
  { title: 'Leave a legacy', desc: 'Document your frameworks so they outlast any single engagement or client relationship.' },
]

const steps = [
  { num: 1, title: 'Strategy call', desc: 'We learn about your goals, audience, and expertise to map the right path for your book.' },
  { num: 2, title: 'We write, you talk', desc: 'Through structured interviews, our writers capture your ideas and craft them into a professional manuscript.' },
  { num: 3, title: 'Publish and launch', desc: 'Editing, cover design, and global distribution. Your book launches on Amazon and everywhere books are sold.' },
]

const browseLinks = [
  { label: 'Browse All Books', href: '/#published-books' },
  { label: 'All Industries', href: '/books-for-industries' },
]

export default function BooksForConsultantsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>The Book That Turns You Into the Consultant Clients Seek Out</h1>
            <p>
              Management consultants, strategy advisors, and independent consultants use books to
              demonstrate expertise, generate inbound leads, and close bigger engagements.
            </p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          {/* ── Featured Authors ── */}
          <div className="ind__section">
            <h2>Consulting Leaders Who Published with Scribe</h2>
            <p className="ind__section-sub">
              These consulting professionals turned their expertise into bestselling books.
            </p>
            <div className="ind__authors-grid">
              {authors.map((a, i) => (
                <div key={i} className="ind__author-card" style={{ textAlign: 'center' }}>
                  <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                    {a.headshot ? (
                      <img className="ind__author-headshot" src={a.headshot} alt={a.name} loading="lazy" />
                    ) : (
                      <span className="ind__author-initials">{a.name.charAt(0)}</span>
                    )}
                    <img className="ind__author-book" src={a.bookImg} alt={a.book} loading="lazy" />
                  </div>
                  <div className="ind__author-name">
                    {a.name}
                  </div>
                  <div className="ind__author-title">{a.book}</div>
                  <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                    <span className="ind__author-stars">{a.stars}</span>
                    <span className="ind__author-review-count"> {a.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* ── Benefits ── */}
          <div className="ind__section">
            <h2>Why Consulting Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className="ind__benefit">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Process ── */}
          <div className="ind__section ind__section--alt">
            <h2>How It Works</h2>
            <p className="ind__section-sub">
              From idea to published book, we handle everything so you can focus on your work.
            </p>
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

          {/* ── Browse links ── */}
          <div className="ind__browse">
            <div className="ind__browse-links">
              {browseLinks.map((l, i) => (
                <a key={i} href={l.href} className="ind__browse-link">{l.label}</a>
              ))}
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>
              Schedule a free strategy call to explore how a book can grow your consulting practice.
            </p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
