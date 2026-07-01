import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Speakers | Scribe Media',
  description:
    'Scribe Media helps speakers professionals write and publish books that build authority, attract clients, and grow their business. See our speakers authors.',
}

const authors = [
  {
    name: 'Shep Hyken',
    nameHref: '/authors/shep-hyken',
    book: 'Be Amazing or Go Home',
    bookHref: '/published-books/be-amazing-or-go-home',
    bookImg: 'https://scribemedia.com/hubfs/images/books/be-amazing-or-go-home.jpg',
    headshot: null,
    stars: '★★★★★',
    rating: '4.6 (210+)',
    ratingHref: 'https://www.amazon.com/Be-Amazing-Go-Home-Confidence/dp/096378207X/?_encoding=UTF8&tag=scribemedia0a-20',
    desc: 'NY Times bestselling author and customer experience expert trusted by Fortune 100 companies.',
    storyHref: null,
  },
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
    name: 'Jesse Cole',
    nameHref: '/authors/jesse-cole',
    book: 'Fans First',
    bookHref: '/published-books/fans-first',
    bookImg: 'https://scribemedia.com/hubfs/images/books/JesseCole_eBookCover_Final-1.jpg',
    headshot: 'https://scribemedia.com/hubfs/author-headshots/Jesse_Cole_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.7 (950+)',
    ratingHref: 'https://geni.us/FansFirst',
    desc: 'Built the Savannah Bananas into the most entertaining brand in sports, fueled by his book.',
    storyHref: null,
  },
]

const benefits = [
  { title: 'Land more keynotes', desc: 'Event organizers actively seek speakers with published books. A book is your best marketing asset.' },
  { title: 'Increase your fee', desc: 'Published speakers command significantly higher fees than those without a book.' },
  { title: 'Create back-of-room revenue', desc: 'Sell books at every event, turning each speaking gig into an additional revenue stream.' },
  { title: 'Extend your impact', desc: 'Your message reaches people who could not attend your talk, amplifying your influence.' },
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

export default function BooksForSpeakersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>The Book That Gets You Booked</h1>
            <p>
              Professional speakers use books to land keynotes, increase speaking fees, and create a
              lasting impression that keeps audiences coming back.
            </p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          {/* ── Featured Authors ── */}
          <div className="ind__section">
            <h2>Speakers Leaders Who Published with Scribe</h2>
            <p className="ind__section-sub">
              These speakers professionals turned their expertise into bestselling books.
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
                    {a.nameHref ? {a.name} : a.name}
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

          {/* ── Video ── */}
          <div className="ind__video-section">
            <h2>Hear From a Scribe Author</h2>
            <p className="ind__section-sub">Joey Coleman on never losing a customer again</p>
            <div className="ind__video-embed">
              <iframe
                src="https://www.youtube.com/embed/gHV_hTjy25w?rel=0"
                title="Joey Coleman on never losing a customer again"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Benefits ── */}
          <div className="ind__section">
            <h2>Why Speakers Professionals Write Books</h2>
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
              Schedule a free strategy call to explore how a book can grow your speakers practice.
            </p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
