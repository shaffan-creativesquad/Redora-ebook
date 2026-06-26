import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'John Ruhlin | Scribe Media Author',
  description:
    'John Ruhlin is the world\'s leading authority in maximizing customer loyalty through radical generosity and founder of Giftology.',
}

export default function JohnRuhlinAuthorPage() {
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
                src="/assets/John_Ruhlin_Headshot.png"
                alt="John Ruhlin"
                width={600}
                height={600}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">JR</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">John Ruhlin</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> North Canton, OH
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 2 Books
                </span>
                <span className="author-detail__tag">Marketing</span>
                <span className="author-detail__tag">Relationships</span>
                <span className="author-detail__tag">Business</span>
                <span className="author-detail__tag">Leadership</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1619614332?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/johnruhlin"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a
                  href="https://giftologygroup.com/"
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
                <span className="author-detail__star-icon">★</span> 4.7
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1,467</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2</div>
              <div className="author-detail__stat-label">Bestsellers</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Marketing</span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About John</h2>
            <div className="author-detail__bio">
              <p>
                John Ruhlin is the world&apos;s leading authority in maximizing customer loyalty
                through radical generosity. He is the founder and author of Giftology and has been
                featured in Fox News, Forbes, Fast Company, Inc and New York Times. While becoming
                the #1 performer out of 1.5 million sales reps for one of the world&apos;s most
                recognizable brands, John developed a system of using generosity to gain access to
                elite clients and generate thousands of referrals. He and his firm now help
                automate this process for individuals and organizations like UBS, Raymond James, DR
                Horton, Keller Williams, the Chicago Cubs, and Caesar&apos;s Palace. John and the
                Giftology team can help any individual turn their clients into their own personal
                sales force to drive exponential growth.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/giftology" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/giftology.jpg?width=264&height=406&name=giftology.jpg"
                    alt="Giftology"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Giftology</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.6</span>
                    <span>(1,402)</span>
                  </div>
                </div>
              </Link>

              <Link href="/published-books/beyond-giftology" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/711vuXOgjmL._SL1500_.jpg?width=264&height=406&name=711vuXOgjmL._SL1500_.jpg"
                    alt="Beyond Giftology"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Beyond Giftology</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.8</span>
                    <span>(65)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Logistics</span>
              <span className="author-detail__tag">Business Management</span>
            </div>
          </div>

          {/* ── Case Study ── */}
          <div style={{ margin: '3rem 0', padding: '2rem 2.25rem', background: 'linear-gradient(135deg, rgba(52,217,195,0.08) 0%, rgba(192,132,252,0.05) 100%)', border: '1px solid rgba(52,217,195,0.25)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d9c3' }}>★ Scribe Case Study</p>
              <p style={{ margin: '0 0 0.65rem', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, color: '#ffffff', fontFamily: "'Playfair Display', Georgia, serif" }}>How John Ruhlin Became Known As &ldquo;The Gifting Expert&rdquo;</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.5 }}>See how author John Ruhlin created a movement and became &ldquo;The Gifting Guy&rdquo; with his book Giftology. Read the case study on the Scribe blog.</p>
            </div>
            <a
              href="/success-stories/john-ruhlin-case-study"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.5rem', background: '#34d9c3', color: '#0c0a1d', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </a>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join John and 2,000+ authors who have published with Scribe Media.
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
