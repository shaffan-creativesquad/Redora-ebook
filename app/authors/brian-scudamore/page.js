import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Brian Scudamore | Scribe Media Author',
  description:
    'Brian Scudamore is the founder of 1-800-GOT-JUNK?, WOW 1 DAY PAINTING, and Shack Shine. He published BYOB and WTF?! (Willing to Fail) with Scribe Media.',
}

export default function BrianScudamoreAuthorPage() {
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
                src="./assets/brian-scudamore.png"
                alt="Brian Scudamore"
                width={600}
                height={600}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">BS</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Brian Scudamore</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> Vancouver, BC
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 2 Books
                </span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://geni.us/byob?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/scudamore"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a
                  href="https://www.o2ebrands.com/"
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
                <span className="author-detail__star-icon">★</span> 4.5
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">461</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Books</span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Brian</h2>
            <div className="author-detail__bio">
              <p>MEET BRIAN</p>
              <p>
                Brian Scudamore has created three hugely successful brands and an exceptional
                corporate culture by embracing failure and curating advice from the world&apos;s
                most respected business leaders. He&apos;s always taken the road less traveled,
                spurred on by his insatiable curiosity and drive to do things bigger and
                better&mdash;and always together&mdash;with the passionate people at
                1-800-GOT-JUNK?, WOW 1 DAY PAINTING, and Shack Shine, all under O2E Brands. Brian
                is on a mission to share wisdom from thirty years in entrepreneurship to help others
                realize their biggest dreams, take risks, and start today.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/byob" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/BrianScudamore_WebsiteCover.jpg?width=264&height=406&name=BrianScudamore_WebsiteCover.jpg"
                    alt="BYOB"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">BYOB</p>
                </div>
              </Link>

              <Link href="/published-books/wtf-willing-to-fail" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/wtf-willing-to-fail.jpeg?width=264&height=406&name=wtf-willing-to-fail.jpeg"
                    alt="WTF?! (Willing to Fail)"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">WTF?! (Willing to Fail)</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.5</span>
                    <span>(461)</span>
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

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/ep-205-brian-scudamore-wtf-willing-to-fail"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Brian Scudamore: WTF: Willing to Fail</p>
                <p className="author-detail__ah-meta">November 02, 2018</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/ep-893-brian-scudamore-episode-893"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Brian Scudamore: Episode 893</p>
                <p className="author-detail__ah-meta">March 15, 2022</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Brian and 2,000+ authors who have published with Scribe Media.
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
