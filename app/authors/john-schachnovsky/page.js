import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'John Schachnovsky | Scribe Media Author',
  description:
    'John Schachnovsky is the author of Beyond the Badge, a memoir chronicling his career in international crime-fighting. Bestseller in Reference & Collections of Biographies.',
}

export default function JohnSchachnovskyAuthorPage() {
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
                src="/assets/JohnSchachnovsky_AuthorCentral_H.jpg"
                alt="John Schachnovsky"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">John Schachnovsky</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> Bangkok, Bangkok
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Memoir</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1544548478?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/john-schachnovsky-92a692113"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
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
              <div className="author-detail__stat-value">30</div>
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
            <span className="author-detail__bestseller-tag">
              🏆 Bestseller in Reference &amp; Collections of Biographies
            </span>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/john-beyond-the-badge"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/91Fzy3QOJ2L._SL1500_.jpg"
                    alt="Beyond the Badge"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Beyond the Badge</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.4</span>
                    <span>(30)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Memoir</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div className="author-detail__case-study">
            <div className="author-detail__case-study-content">
              <p className="author-detail__case-study-eyebrow">★ Scribe Case Study</p>
              <p className="author-detail__case-study-title">
                How John Schachnovsky Turned a Career of International Crime-Fighting into Beyond the Badge
              </p>
              <p className="author-detail__case-study-desc">
                Turning a Career of International Crime-Fighting into Beyond the Badge
              </p>
            </div>
            <Link
              href="/success-stories/fbi-international-crime-fighting-into-beyond-the-badge"
              className="author-detail__case-study-btn"
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/john-schachnovsky-72-hours-that-became-my-book"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  John Schachnovsky: 72 Hours That Became My Book
                </p>
                <p className="author-detail__ah-meta">December 03, 2025 · 00:35:11</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
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
