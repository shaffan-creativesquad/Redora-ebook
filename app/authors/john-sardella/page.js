import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'John Sardella | Scribe Media Author',
  description:
    'John Sardella is the author of A Journey Without a Map, a memoir about navigating grief after losing his wife, Margaret, to cancer. Bestseller in Cancer.',
}

export default function JohnSardellaAuthorPage() {
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
                src="/assets/A-Journey-without-a-map.jpg"
                alt="John Sardella"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">John Sardella</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Memoir</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1544507534?tag=scribemedia0a-20"
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
                <span className="author-detail__star-icon">★</span> 4.1
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">109</div>
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
              🏆 Bestseller in Cancer
            </span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About John</h2>
            <div className="author-detail__bio">
              <p>
                After twenty-seven years of marriage, John Sardella lost the love of his life when
                his wife, Margaret, passed away following a seven-year battle with cancer.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/a-journey-without-a-map"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/A-Journey-without-a-map.jpg"
                    alt="A Journey Without a Map"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">A Journey Without a Map</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.1</span>
                    <span>(109)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Psychology and Counseling</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div className="author-detail__case-study">
            <div className="author-detail__case-study-content">
              <p className="author-detail__case-study-eyebrow">★ Scribe Case Study</p>
              <p className="author-detail__case-study-title">
                By Sharing His Own Grief, John Sardella Helped Others Move Through Unspeakable Pain
              </p>
              <p className="author-detail__case-study-desc">
                After losing his wife to cancer, John Sardella struggled to find a book to help
                navigate his grief. So, he wrote one. Read more on the Scribe blog.
              </p>
            </div>
            <Link
              href="/success-stories/john-sardella-a-journey-without-a-map"
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
                href="/author-hour/episode/ep-420-john-sardella-episode-420"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">John Sardella: Episode 420</p>
                <p className="author-detail__ah-meta">February 13, 2020</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
              <Link
                href="/author-hour/episode/john-sardella-grief-purpose-and-what-a-book-does-over-decades"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  John Sardella: Grief, Purpose, and What a Book Does Over Decades
                </p>
                <p className="author-detail__ah-meta">April 13, 2026 · 00:34:00</p>
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
