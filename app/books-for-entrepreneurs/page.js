import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Books for Entrepreneurs | Scribe Media',
  description:
    'Founders, CEOs, and business owners use books to attract investors, recruit talent, land press coverage, and establish their company as a category leader.',
}

const authors = [
  {
    name: 'Brian Scudamore',
    nameHref: '/authors/brian-scudamore',
    book: 'BYOB',
    bookHref: '/published-books/byob',
    bookImg: 'https://scribemedia.com/hubfs/images/books/BrianScudamore_WebsiteCover.jpg',
    headshot: 'https://scribemedia.com/hubfs/author-headshots/_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.6 (380+)',
    ratingHref: 'https://geni.us/byob',
    desc: 'Founded 1-800-GOT-JUNK and shared the mindset that turned failure into a billion-dollar brand.',
    storyHref: null,
  },
  {
    name: 'Cliff Lerner',
    nameHref: '/authors/cliff-lerner',
    book: 'Explosive Growth',
    bookHref: '/published-books/explosive-growth',
    bookImg: 'https://scribemedia.com/hubfs/images/books/explosive-growth.jpg',
    headshot: null,
    stars: '★★★★★',
    rating: '4.5 (1,400+)',
    ratingHref: 'https://amzn.to/3xzv6I9?tag=scribemedia0a-20',
    desc: 'Grew a dating app from zero to 100 million users with the playbook he documented in his book.',
    storyHref: null,
  },
  {
    name: 'Chris Heivly',
    nameHref: '/authors/chris-heivly',
    book: 'Build the Fort',
    bookHref: '/published-books/build-the-fort',
    bookImg: 'https://scribemedia.com/hubfs/images/books/ChrisHeivly_WebsiteCover.jpg',
    headshot: 'https://scribemedia.com/hubfs/author-headshots/Chris_Heivly_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.5 (75+)',
    ratingHref: 'https://geni.us/buildthefort',
    desc: 'Built startup communities from the ground up, earning recognition as a leading entrepreneurial voice.',
    storyHref: null,
  },
]

const benefits = [
  {
    title: 'Attract investors and partners',
    desc: 'A book proves you have deep domain expertise and a clear vision for your industry.',
  },
  {
    title: 'Recruit top talent',
    desc: 'The best people want to work for thought leaders. A book makes your company magnetic.',
  },
  {
    title: 'Land press coverage',
    desc: 'Journalists and podcasters actively seek published entrepreneurs for interviews and features.',
  },
  {
    title: 'Build your personal brand',
    desc: 'Your book becomes the foundation of a personal brand that outlasts any single company.',
  },
]

const steps = [
  {
    num: '1',
    title: 'Strategy call',
    desc: 'We learn about your goals, audience, and expertise to map the right path for your book.',
  },
  {
    num: '2',
    title: 'We write, you talk',
    desc: 'Through structured interviews, our writers capture your ideas and craft them into a professional manuscript.',
  },
  {
    num: '3',
    title: 'Publish and launch',
    desc: 'Editing, cover design, and global distribution. Your book launches on Amazon and everywhere books are sold.',
  },
]

const browseLinks = [
  { label: 'Browse All Books', href: '/#published-books' },
  { label: 'All Industries', href: '/books-for-industries' },
]

export default function BooksForEntrepreneursPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>The Book That Opens Doors Your Business Card Never Could</h1>
            <p>
              Founders, CEOs, and business owners use books to attract investors, recruit talent,
              land press coverage, and establish their company as a category leader.
            </p>
            <Link href="/consult" className="ind__cta-btn">Schedule a Free Consult</Link>
          </div>

          {/* ── Authors ── */}
          <div className="ind__section">
            <h2>Entrepreneurs Leaders Who Published with Scribe</h2>
            <p className="subtitle">
              These entrepreneurs professionals turned their expertise into bestselling books.
            </p>
            <div className="ind__authors-grid">
              {authors.map((a) => (
                <div className="ind__author-card" key={a.name} style={{ textAlign: 'center' }}>
                  <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                    {a.headshot ? (
                      <img
                        className="ind__author-headshot"
                        src={a.headshot}
                        alt={a.name}
                        loading="lazy"
                      />
                    ) : (
                      <span className="ind__author-initials">{a.name.charAt(0)}</span>
                    )}
                    <img
                        className="ind__author-book"
                        src={a.bookImg}
                        alt={a.book}
                        loading="lazy"
                      />
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

          {/* ── Benefits ── */}
          <div className="ind__section">
            <h2>Why Entrepreneurs Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              {benefits.map((b) => (
                <div className="ind__benefit" key={b.title}>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── How It Works ── */}
          <div className="ind__section ind__section--alt">
            <h2>How It Works</h2>
            <p className="subtitle">
              From idea to published book, we handle everything so you can focus on your work.
            </p>
            <div className="ind__process-grid">
              {steps.map((s) => (
                <div className="ind__process-card" key={s.num}>
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
              {browseLinks.map((l) => (
                <Link href={l.href} className="ind__browse-link" key={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>Schedule a free strategy call to explore how a book can grow your entrepreneurs practice.</p>
            <Link href="/consult" className="ind__cta-btn">Schedule a Free Consult</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
