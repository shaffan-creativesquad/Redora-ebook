import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Empowerment Paradox | Scribe Media',
  description:
    'The Empowerment Paradox by Ben Woodward — how to turn life\'s roadblocks and stumbling blocks into robust building blocks through vital virtues that strengthen your emotional and mental center.',
}

export default function TheEmpowermentParadoxPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="book-detail-page">
          <div className="book-detail-page__inner">

            <Link href="/published-books" className="bd-back">
              <i className="ph ph-arrow-left"></i> Back to Published Books
            </Link>

            <div className="bd-layout">
              {/* ── Cover ── */}
              <div>
                <Image
                  src="./assets/The-Empowerment-Paradox.jpg"
                  alt="The Empowerment Paradox"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Empowerment Paradox</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/ben-woodward" className="bd-author-link">
                    Ben Woodward
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 74 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Business Motivation &amp; Self-Improvement
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Adversity comes to all of us in ways we may not expect or choose. Often, it is
                    unwanted and untimely. And still it boldly demands something of us. A response.
                    Perhaps it&apos;s the pain of sickness, death, or simply getting older. Maybe
                    it&apos;s the struggle of constant change, or the suffering of disillusionment
                    that comes with life and its many losses and limitations. However it comes, Ben
                    reveals how such experiences can be transformed into a catalyst for magnificent
                    joy and a profound sense of personal empowerment and strength.
                  </p>
                  <p>
                    <em>The Empowerment Paradox</em> shows you how to turn life&apos;s roadblocks
                    and stumbling blocks into robust building blocks. It reveals a powerful and
                    desperately needed series of vital virtues to strengthen your emotional and
                    mental center. These virtues, when developed, provide clarity and understanding
                    for dealing with the complexities of life.
                  </p>
                  <p>
                    They offer the power you need to rise up and become the best version of
                    yourself. Suffering, struggle, and adversity all offer us an
                    opportunity&mdash;this book shows you how to seize it.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Psychology and Counseling</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Empowerment-Paradox-Virtues-Struggle-Strength-ebook/dp/B089VWN4WF?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
                  <Link
                    href="/success-stories/ben-woodward-the-empowerment-paradox"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
                  </Link>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <Link
              href="/author-hour/episode/ep-481-ben-woodward-the-empowerment-paradox"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Ben Woodward: The Empowerment Paradox</p>
              <p className="book-ah__card-meta">June 25, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
