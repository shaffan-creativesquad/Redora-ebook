import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Sarma Melngailis | Scribe Media Author',
  description:
    'Sarma Melngailis is a restaurateur who founded Pure Food and Wine and One Lucky Duck. Her dramatic story was chronicled in the Netflix documentary Bad Vegan.',
}

export default function SarmaMelngailisAuthorPage() {
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
                src="/assets/sarma-mengailis.png"
                alt="Sarma Melngailis"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Sarma Melngailis</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> New York, NY
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Memoir</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1544548982?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/sarmamelngailis/"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.sarmaraw.com/"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sarmaraw.com
                </a>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">
                <span className="author-detail__star-icon">★</span> 4.3
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">97</div>
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
              🏆 Bestseller in Abuse Self-Help
            </span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Sarma</h2>
            <div className="author-detail__bio">
              <p>
                Sarma Melngailis is a restaurateur who founded Pure Food and Wine and One Lucky Duck,
                two landmark raw vegan restaurants in New York City that attracted celebrity clientele
                and critical acclaim. A graduate of the French Culinary Institute and the Wharton
                School at the University of Pennsylvania, her dramatic story was chronicled in the
                Netflix documentary <em>Bad Vegan</em>.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/the-girl-with-the-duck-tattoo"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/61DQ2qIRLzL._SL1360_.jpg"
                    alt="The Girl with the Duck Tattoo"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Girl with the Duck Tattoo</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.3</span>
                    <span>(97)</span>
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
                Why Sarma Melngailis Turned Down Traditional Publishing to Control Her Own Story
              </p>
              <p className="author-detail__case-study-desc">
                Sarma shares the rise and fall of her business, the psychological manipulation that led
                to her arrest, and her desire to reclaim her story after the release of{' '}
                <em>Bad Vegan</em>.
              </p>
            </div>
            <Link
              href="/success-stories/why-sarma-melngailis-turned-down-traditional-publishing-to-control-her-own-story"
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
                href="/author-hour/episode/sarma-melngailis-writing-her-truth-beyond-bad-vegan"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  Sarma Melngailis: Writing Her Truth Beyond &ldquo;Bad Vegan&rdquo;
                </p>
                <p className="author-detail__ah-meta">September 24, 2025 · 01:03:56</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Sarma and 2,000+ authors who have published with Scribe Media.
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
