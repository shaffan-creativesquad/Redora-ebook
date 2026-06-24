import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Tracy Thomas | Scribe Media Author',
  description:
    'Tracy Thomas is a published Scribe Media author. Dr. Tracy Thomas is the Mogul Maker, Reality Creator, and Dynastic Empire Builder. An award-winning psychologist and Wall Street Journal bestselling author.',
}

export default function TracyThomasAuthorPage() {
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
                src="./assets/Tracy_Thomas_Headshot.jpg"
                alt="Tracy Thomas"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Tracy Thomas</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 3 Books
                </span>
                <span className="author-detail__tag">Personal Development</span>
                <span className="author-detail__tag">Psychology</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B09LKJPFBZ?tag=scribemedia0a-20"
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
                <span className="author-detail__star-icon">★</span> 4.6
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">44</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Bestseller</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">3</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">
              🏆 Bestseller in Holistic Medicine
            </span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Tracy</h2>
            <div className="author-detail__bio">
              <p>
                Dr. Tracy Thomas is the Mogul Maker, Reality Creator, and Dynastic Empire Builder.
                An award-winning psychologist and Wall Street Journal bestselling author of The
                Commitments© and The Method©, she oversees The Empire Company as the world&apos;s
                preeminent intentional conditioning expert.
              </p>
              <p>
                Dr. Tracy and her team equip the greatest experts, performers, innovators and
                leaders on the planet with precise action steps that transform them as individuals,
                while also imbuing their families, teams, and boards with new purpose. At its core,
                The Empire Company builds new worlds, ushering the global elite into their highest
                calling and elevating the entirety of the human experience.
              </p>
              <p>
                Nothing is impossible with The Empire Company: millions, billions, trillions, a
                multi-generational family dynasty… any reality can be chosen and achieved with Dr.
                Tracy&apos;s methodology.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">

              <Link href="/published-books/the-commitments" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/TracyThomas_WebsiteCover_2.webp"
                    alt="The Commitments"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Commitments</p>
                </div>
              </Link>

              <Link href="/published-books/the-patternshiftefb88f" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/TracyThomas3_WebsiteCover.jpg"
                    alt="The PatternShift™️"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The PatternShift™️</p>
                </div>
              </Link>

              <Link href="/published-books/the-method" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/the-method.jpg"
                    alt="The Method"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Method</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.6</span>
                    <span>(44)</span>
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

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/ep-809-dr-tracy-thomas-the-commitments-a-step-by-step-guide-to-personal-transfor"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  Dr. Tracy Thomas: The Commitments: A Step-by-Step Guide to Personal Transformation
                </p>
                <p className="author-detail__ah-meta">November 01, 2021</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
              <Link
                href="/author-hour/episode/ep-77-dr-tracy-thomas-the-method"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Dr Tracy Thomas: The Method</p>
                <p className="author-detail__ah-meta">January 04, 2018</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Tracy and 2,000+ authors who have published with Scribe Media.
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
