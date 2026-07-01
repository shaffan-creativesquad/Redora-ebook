import './books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Books for Doctors & Healthcare Professionals | Scribe Media',
  description:
    'Scribe Media has helped doctors and healthcare professionals write and publish books that educate patients at scale and establish thought leadership in their specialty.',
}

const authors = [
  {
    name: 'Thom King',
    nameHref: '/authors/andrew-thorp-king',
    book: 'Guy Gone Keto',
    bookHref: '/published-books/guy-gone-keto-how-to-lose-weight-feel-great-and-achieve-lifelong-fitness',
    bookImg: '/assets/guy-gone-keto.jpg',
    headshot: '/assets/Andrew_Thorp_King_Headshot.jpg',
    stars: '★★★★★',
    
    rating: '4.4 (190+)',
    ratingHref: 'https://www.amazon.com/dp/B07BZVQHBD?tag=scribemedia0a-20',
    desc: 'Turned his personal health transformation into a bestselling guide that built his food brand.',
    storyHref: null,
  },
  {
    name: 'Tracy Thomas',
    nameHref: '/authors/tracy-thomas',
    book: 'The Commitments',
    bookHref: '/published-books/the-commitments',
    bookImg: '/assets/TracyThomas_WebsiteCover_2.png',
    headshot: '/assets/Tracy_Thomas_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.6 (45+)',
    ratingHref: 'https://geni.us/the-commitments',
    desc: 'Shared groundbreaking emotional health research that attracted a global coaching practice.',
    storyHref: null,
  },
  {
    name: 'Michael D. Lewis',
    nameHref: '/authors/emily-lewis-bowers',
    book: 'Mother Trauma',
    bookHref: '/published-books/mother-trauma',
    bookImg: '/assets/EmilyBowers_WebsiteCover_Final.jpg',
    headshot: '/assets/Emily_Lewis_Bowers_Headshot.jpg',
    stars: '★★★★★',
    rating: '4.5 (120+)',
    ratingHref: 'https://geni.us/mother-trauma',
    desc: 'Pioneered nutritional approaches to brain health, reaching thousands of patients and families.',
    storyHref: null,
  },
]

const benefits = [
  { title: 'Educate patients at scale', desc: 'Reach thousands of patients with your knowledge — beyond the limits of a single practice or consultation.' },
  { title: 'Build referral authority', desc: 'Become the go-to expert colleagues refer to. A published book signals credibility no CV can replicate.' },
  { title: 'Attract speaking invitations', desc: 'Conference organizers look for published authors. A book opens the door to keynotes, panels, and media.' },
  { title: 'Create lasting impact', desc: 'Your book outlives your active career — continuing to educate and inspire long after you write it.' },
]

const steps = [
  { num: 1, title: 'Strategy call', desc: 'We learn your goals, your audience, and the core idea behind your book so we can build the right plan.' },
  { num: 2, title: 'We write, you talk', desc: 'Your book is written from your words via structured interviews — no writing required on your end.' },
  { num: 3, title: 'Publish and launch', desc: 'We handle editing, design, and publishing — delivering a professional book ready to grow your practice.' },
]

const browseLinks = [
  { label: 'Browse All Books', href: '/#published-books' },
  { label: 'All Industries', href: '/books-for-industries' },
]

export default function BooksForDoctorsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>Books for Doctors &amp; Healthcare Professionals</h1>
            <p>
              Educate patients at scale and establish thought leadership in your specialty.
              Join the healthcare professionals who have used a book to grow their practice
              and reach thousands of patients.
            </p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          {/* ── Featured Authors ── */}
          <div className="ind__section">
            <h2>Healthcare Authors Published by Scribe</h2>
            <p className="ind__section-sub">
              Real doctors and healthcare professionals who turned their expertise into bestselling books.
            </p>
            <div className="ind__authors-grid">
              {authors.map((a, i) => (
                <div key={i} className="ind__author-card" style={{ textAlign: 'center' }}>
                  <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                    {a.headshot && (
                      <img className="ind__author-headshot" src={a.headshot} alt={a.name} loading="lazy" />
                    )}
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

          {/* ── Benefits ── */}
          <div className="ind__section ind__section--alt">
            <div>
              <h2>Why Healthcare Professionals Write Books</h2>
              <p className="ind__section-sub">
                A book gives you a permanent platform to share your expertise at scale.
              </p>
              <div className="ind__benefits-grid">
                {benefits.map((b, i) => (
                  <div key={i} className="ind__benefit">
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Process ── */}
          <div className="ind__section">
            <h2>How It Works</h2>
            <p className="ind__section-sub">
              Scribe handles everything so you can focus on your practice.
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
              Schedule a free strategy call to explore how a book can grow your healthcare practice.
            </p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
