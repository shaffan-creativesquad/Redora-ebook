import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Jesse Cole | Scribe Media Author',
  description:
    'Jesse Cole is a published Scribe Media author. He is the owner of the Savannah Bananas and the founder of Fans First Entertainment.',
}

export default function JesseColeAuthorPage() {
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
                src="/assets/Jesse_Cole_Headshot.png"
                alt="Jesse Cole"
                width={600}
                height={600}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">JC</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Jesse Cole</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 2 Books
                </span>
                <span className="author-detail__tag">Sports and Fitness</span>
                <span className="author-detail__tag">Leadership</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://geni.us/FansFirst?tag=scribemedia0a-20"
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
                <span className="author-detail__star-icon">★</span> 4.8
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">432</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Bestseller</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">
              🏆 Bestseller in Baseball Essays &amp; Writings
            </span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Jesse</h2>
            <div className="author-detail__bio">
              <p>
                Jesse Cole is a fanatic about fandom. In 2016, he founded Fans First Entertainment
                and launched the Savannah Bananas with one mission: to spark a fan-focused movement.
                Whether at the ballpark, on social media, onstage delivering keynotes, in features
                for ESPN and Entrepreneur, or in his first book, Find Your Yellow Tux, Jesse
                continues to create fans all over the world.
              </p>
              <p>
                Jesse is the proud inventor of Banana Ball and Dolce &amp; Banana underwear and
                not-so-proud promoter of the Human Horse Race and Flatulence Fun Night. He&apos;s a
                raving fan of his wife, Emily, his kids, and peerless promoters like Walt Disney, PT
                Barnum, and Bill Veeck. Jesse owns seven yellow tuxedos.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/fans-first" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/JesseCole_eBookCover_Final-1.jpg?width=264&height=406&name=JesseCole_eBookCover_Final-1.jpg"
                    alt="Fans First"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Fans First</p>
                </div>
              </Link>

              <Link
                href="/published-books/find-your-yellow-tux-how-to-be-successful-by-standing-out"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/find-your-yellow-tux.jpg?width=264&height=406&name=find-your-yellow-tux.jpg"
                    alt="Find Your Yellow Tux"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Find Your Yellow Tux</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.8</span>
                    <span>(432)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Sports and Fitness</span>
            </div>
          </div>

          {/* ── Case Study ── */}
          <div style={{ margin: '3rem 0', padding: '2rem 2.25rem', background: 'linear-gradient(135deg, rgba(52,217,195,0.08) 0%, rgba(192,132,252,0.05) 100%)', border: '1px solid rgba(52,217,195,0.25)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d9c3' }}>★ Scribe Case Study</p>
              <p style={{ margin: '0 0 0.65rem', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, color: '#ffffff', fontFamily: "'Playfair Display', Georgia, serif" }}>How Jesse Cole Used a Book to Build His Brand and Become an In-Demand Speaker</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.5 }}>Jesse Cole built his business by engaging his community. He shared his secrets in his book to help others and became an in-demand speaker.</p>
            </div>
            <a
              href="/success-stories/jesse-cole-in-demand-speaker"
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
                href="/author-hour/episode/ep-941-jesse-cole-episode-941"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Jesse Cole: Episode 941</p>
                <p className="author-detail__ah-meta">May 13, 2022</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/ep-60-jesse-cole-find-your-yellow-tux"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Jesse Cole: Find Your Yellow Tux</p>
                <p className="author-detail__ah-meta">December 04, 2017</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Jesse and 2,000+ authors who have published with Scribe Media.
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
