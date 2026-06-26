import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Chad Willardson | Scribe Media Author',
  description:
    'Chad Willardson is a published Scribe Media author, founder of Pacific Capital, and author of Stress-Free Money, Smart Not Spoiled, and Beyond the Money. Bestseller in Wealth Management and Financial Engineering.',
}

export default function ChadWillardsonAuthorPage() {
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
                src="/assets/Chad_Willardson_Headshot.jpg"
                alt="Chad Willardson"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Chad Willardson</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 3 Books
                </span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1544516738?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <span className="author-detail__star-icon">★</span> 4.7
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">339</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2</div>
              <div className="author-detail__stat-label">Bestsellers</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">3</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">
              🏆 Bestseller in Wealth Management
            </span>
            <span className="author-detail__bestseller-tag">
              🏆 Bestseller in Financial Engineering
            </span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Chad</h2>
            <div className="author-detail__bio">
              <p>
                CHAD WILLARDSON, CRPC®, AWMA® is the president and founder of Pacific Capital, a
                fiduciary wealth advisory firm he started in 2011 after nine years of climbing the
                ranks as an investment advisor at Merrill Lynch. Currently, Chad also manages a
                $350 million investment portfolio as the elected city treasurer in his community.
                He created and trademarked The Financial Life Inspection®, a unique process to
                remove the stress people feel about their money. He&apos;s been featured in the
                Wall Street Journal, Forbes, Inc., U.S. News &amp; World Report, Investment News,
                Entrepreneur, and Financial Advisor. Chad and his wife live in Southern California
                with their five beautiful children.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">

              <Link href="/published-books/stress-free-money" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/Stress-Free-Money-2.jpeg"
                    alt="Stress-Free Money"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Stress-Free Money</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(171)</span>
                  </div>
                </div>
              </Link>

              <Link href="/published-books/smart-not-spoiled" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/Smart-not-spoiled.jpg"
                    alt="Smart, Not Spoiled"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Smart, Not Spoiled</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(168)</span>
                  </div>
                </div>
              </Link>

              <Link href="/published-books/beyond-the-money" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/ChadWillardson_WebsiteCover.jpg"
                    alt="Beyond the Money"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Beyond the Money</p>
                </div>
              </Link>

            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Financial Planning</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div style={{
            margin: '3rem 0',
            padding: '2rem 2.25rem',
            background: 'linear-gradient(135deg, rgba(52,217,195,0.08) 0%, rgba(192,132,252,0.05) 100%)',
            border: '1px solid rgba(52,217,195,0.25)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d9c3' }}>
                ★ Scribe Case Study
              </p>
              <p style={{ margin: '0 0 0.65rem', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, color: '#ffffff', fontFamily: "'Playfair Display', Georgia, serif" }}>
                How Chad Willardson Used Scribe to Help People Achieve Financial Freedom—Without
                Ever Meeting Them
              </p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.5 }}>
                Chad Willardson used Scribe to share his financial expertise with people around the
                world. Read more on the Scribe blog.
              </p>
            </div>
            <Link
              href="/success-stories/chad-willardson-stress-free-money"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.5rem',
                background: '#34d9c3',
                color: '#0c0a1d',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '10px',
                whiteSpace: 'nowrap',
              }}
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/ep-535-chad-willardson-stress-free-money"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Chad Willardson: Stress Free Money</p>
                <p className="author-detail__ah-meta">September 14, 2020</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
              <Link
                href="/author-hour/episode/ep-750-chad-willardson-episode-750"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Chad Willardson: Episode 750</p>
                <p className="author-detail__ah-meta">August 26, 2021</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Chad and 2,000+ authors who have published with Scribe Media.
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
