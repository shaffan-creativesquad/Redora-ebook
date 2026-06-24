import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Deb Gabor | Scribe Media Author',
  description:
    'Deb Gabor is a brand impresario and the author of Person-ality, Irrational Loyalty, and Branding is Sex.',
}

export default function DebGaborAuthorPage() {
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
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/Deb_Gabor_Headshot.jpg?width=600&height=600&name=Deb_Gabor_Headshot.jpg"
                alt="Deb Gabor"
                width={600}
                height={600}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">DG</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Deb Gabor</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> Austin, TX
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 3 Books
                </span>
                <span className="author-detail__tag">Marketing</span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B0BHKQTBTR?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/dgabor/"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a
                  href="https://debgabor.com/"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-globe"></i> Website
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
              <div className="author-detail__stat-value">217</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">3</div>
              <div className="author-detail__stat-label">Bestsellers</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">3</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Market Research Business</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Corporate Governance</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Consumer Behavior</span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Deb</h2>
            <div className="author-detail__bio">
              <p>In Person-ality, brand impresario Deb Gabor delivers the third installment in her series about cultivating dynamic brands. In Branding is Sex, brand dominatrix Deb Gabor explains how proper brand positioning gets your customers in the mood.</p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/person-ality" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/DebGabor_WebsiteCover.jpg?width=264&height=406&name=DebGabor_WebsiteCover.jpg"
                    alt="Person-ality"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Person-ality</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.2</span>
                    <span>(19)</span>
                  </div>
                </div>
              </Link>

              <Link href="/published-books/irrational-loyalty" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/irrational-loyalty.jpg?width=264&height=406&name=irrational-loyalty.jpg"
                    alt="Irrational Loyalty"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Irrational Loyalty</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.4</span>
                    <span>(68)</span>
                  </div>
                </div>
              </Link>

              <Link href="/published-books/branding-is-sex" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/branding-is-sex.jpg?width=264&height=406&name=branding-is-sex.jpg"
                    alt="Branding is Sex"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Branding is Sex</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.5</span>
                    <span>(130)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Marketing and Advertising</span>
              <span className="author-detail__tag">B2B Consulting</span>
            </div>
          </div>

          {/* ── Case Study ── */}
          <div style={{ margin: '3rem 0', padding: '2rem 2.25rem', background: 'linear-gradient(135deg, rgba(52,217,195,0.08) 0%, rgba(192,132,252,0.05) 100%)', border: '1px solid rgba(52,217,195,0.25)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d9c3' }}>★ Scribe Case Study</p>
              <p style={{ margin: '0 0 0.65rem', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, color: '#ffffff', fontFamily: "'Playfair Display', Georgia, serif" }}>How A Branding Expert Became Her Own Brand (Hint: She Used A Book)</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.5 }}>Deb Gabor had worked with brands like Microsoft, NBC, and Dell, but wanted to go after a bigger market. By writing a book, she became the media&apos;s go-to expert on branding, landing &hellip;</p>
            </div>
            <a
              href="/success-stories/deb-gabor-branding-is-sex"
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
                href="/author-hour/episode/ep-251-deb-gabor-episode-251"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Deb Gabor: Episode 251</p>
                <p className="author-detail__ah-meta">March 10, 2019</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Deb and 2,000+ authors who have published with Scribe Media.
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
