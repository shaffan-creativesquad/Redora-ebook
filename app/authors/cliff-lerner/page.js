import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Cliff Lerner | Scribe Media Author',
  description:
    'Cliff Lerner is the founder of Snap Interactive and author of Explosive Growth — the ultimate startup playbook on growing to 100 million users.',
}

export default function CliffLernerAuthorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">

          <Link href="/authors" className="author-detail__back">
            <i className="ph ph-arrow-left"></i> All Authors
          </Link>

          {/* ── Header ── */}
          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <Image
                src="./assets/explosive-growth.png"
                alt="Cliff Lerner"
                width={400}
                height={400}
                className="author-detail__avatar-img author-detail__avatar-img--cover"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">CL</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Cliff Lerner</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Business</span>
                <span className="author-detail__tag">Marketing</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1619617692?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">
                <span className="author-detail__star-icon">★</span> 4.4
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">608</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Bestseller</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Book Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Web Marketing</span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Cliff</h2>
            <div className="author-detail__bio">
              <p>
                &ldquo;BEST STARTUP BOOKS OF ALL TIME&rdquo; - Benzinga&ldquo;TOP GROWTH-HACKING
                BUSINESS BOOK&rdquo; - Entrepreneur MagazineExplosive Growth is your ultimate
                startup playbook, offering a thrilling journey and a rare behind-the-scenes look at
                a fast-growing startup that created the world&apos;s first online dating app and
                grew to 100 million users. With lively and often hilarious storytelling, Explosive
                Growth reveals genius growth tactics, numerous case studies, and a step-by-step
                playbook to help your startup achieve massive growth in any industry. Discover the
                Wild Story:When Snap Interactive was on the brink of collapse, founder Cliff Lerner
                made a daring bet on an unknown platform called Facebook. In &lsquo;Explosive
                Growth,&rsquo; Cliff Lerner takes you along on the journey of one of the biggest
                early success stories in the Facebook App ecosystem.&rdquo; - Michael Lazerow,
                Founder of Buddy Media, Sold to Salesforce for $700m+.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/explosive-growth" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/explosive-growth.jpg?width=264&height=406&name=explosive-growth.jpg"
                    alt="Explosive Growth"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Explosive Growth</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.4</span>
                    <span>(608)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Business Management</span>
            </div>
          </div>

          {/* ── Case Study ── */}
          <div style={{ margin: '3rem 0', padding: '2rem 2.25rem', background: 'linear-gradient(135deg, rgba(52,217,195,0.08) 0%, rgba(192,132,252,0.05) 100%)', border: '1px solid rgba(52,217,195,0.25)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d9c3' }}>★ Scribe Case Study</p>
              <p style={{ margin: '0 0 0.65rem', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, color: '#ffffff', fontFamily: "'Playfair Display', Georgia, serif" }}>Cliff Lerner Turned His Business Failures into the Entrepreneurship Playbook</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.5 }}>Cliff Lerner, one of the fathers of online dating, used his $100 million mistakes with Snap Interactive to write the entrepreneur playbook.</p>
            </div>
            <a
              href="/success-stories/cliff-lerner-entrepreneurship-playbook"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.5rem', background: '#34d9c3', color: '#0c0a1d', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </a>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/cliff-lerner"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Cliff Lerner</p>
                <p className="author-detail__ah-meta">November 18, 2017 · 01:15:42</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/ep-67-cliff-lerner-explosive-growth"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Cliff Lerner: Explosive Growth</p>
                <p className="author-detail__ah-meta">November 06, 2017</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Cliff and 2,000+ authors who have published with Scribe Media.
            </p>
            <Link href="/consult" className="author-detail__cta-btn">
              Schedule a Consult
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
