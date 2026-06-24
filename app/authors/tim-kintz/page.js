import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Tim Kintz | Scribe Media Author',
  description:
    'Tim Kintz is the author of the Amazon bestseller Frictionless and president of The Kintz Group, the automotive industry\'s premier sales and management training company.',
}

export default function TimKintzAuthorPage() {
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
                src="./assets/Tim_Kintz_Headshot.png"
                alt="Tim Kintz"
                width={600}
                height={600}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">TK</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Tim Kintz</h1>
              <p className="author-detail__title-company">Author</p>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> Flower Mound, Texas
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 2 Books
                </span>
                <span className="author-detail__tag">Marketing</span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1544506864?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/tim-kintz-89383712"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener"
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
                <span className="author-detail__star-icon">★</span> 4.7
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">78</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Books</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Business Operations Research</span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Tim</h2>
            <div className="author-detail__bio">
              <p>
                Tim Kintz is the author of the Amazon bestseller, Frictionless, and president of
                The Kintz Group, the automotive industry&apos;s premier sales and management
                training company.<br />
                A graduate of the NADA Dealer Academy, Tim has worked in almost every position in
                the dealership. He delivers hands-on coaching, workshops, and presentations
                throughout the world, teaching universal sales and management strategies that have
                proven effective in every business sector. As a strong believer in the power of a
                great leader, Tim helps managers anticipate change, adapt to challenges, and focus
                on the individual.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/frictionless" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/Frictionless.jpg?width=264&height=406&name=Frictionless.jpg"
                    alt="Frictionless"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Frictionless</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(59)</span>
                  </div>
                </div>
              </Link>

              <Link href="/published-books/fearless" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/Fearless.jpg?width=264&height=406&name=Fearless.jpg"
                    alt="Fearless"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Fearless</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(19)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Training and Development</span>
              <span className="author-detail__tag">Business Management</span>
            </div>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/ep-605-tim-kintz-fearless-leading-and-managing-unbreakable-teams"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Tim Kintz: Fearless: Leading and Managing Unbreakable Teams</p>
                <p className="author-detail__ah-meta">January 11, 2021</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/ep-426-tim-kintz-episode-426"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Tim Kintz: Episode 426</p>
                <p className="author-detail__ah-meta">February 26, 2020</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Tim and 2,000+ authors who have published with Scribe Media.
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
