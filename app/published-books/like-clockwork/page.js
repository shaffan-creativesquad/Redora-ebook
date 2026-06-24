import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Like Clockwork | Scribe Media',
  description:
    'Like Clockwork by Sam Goodner — replace unpredictability with precision and run your business like clockwork. A masterclass in executing with clarity, discipline, and resilience.',
}

export default function LikeClockworkPage() {
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
                  src="./assets/61VQRvSXUqL._SL1360_.jpg"
                  alt="Like Clockwork"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Like Clockwork</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/sam-goodner" className="bd-author-link">
                    Sam Goodner
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">5.0 · 41 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Business &amp; Organizational Learning
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    <em>Replace unpredictability with precision and run your business like
                    clockwork.</em>
                  </p>
                  <p>
                    Every business leader dreams of building an organization that runs smoothly,
                    scales effectively, and thrives long after their involvement. Few actually
                    achieve it.
                  </p>
                  <p>
                    In <em>Like Clockwork</em>, serial entrepreneur and former Swiss Army officer{' '}
                    <strong>Sam Goodner</strong> reveals the strategies and systems behind his
                    decades of success in building and scaling multimillion-dollar companies.
                    Drawing on real-world business accomplishments and lessons learned from the
                    elite Swiss Mountain Grenadiers, Sam offers practical, actionable principles
                    to create systems-driven organizations that operate with the precision of a
                    Swiss timepiece. From leadership and team alignment to operational excellence,
                    this book delivers a masterclass in executing with clarity, discipline, and
                    resilience.
                  </p>
                  <p>
                    Whether you&apos;re a seasoned executive, aspiring entrepreneur, or business
                    unit leader, <em>Like Clockwork</em> provides the tools you need to engineer
                    a company that thrives&mdash;year after year, leader after leader.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/41Lc6mq?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$19.00</span>
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/SamGoodner_Headshot.jpg"
              alt="Sam Goodner"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/sam-goodner">Sam Goodner</Link>
              </h2>
              <p className="bd-author-bio">
                Few actually achieve it. In <em>Like Clockwork</em>, serial entrepreneur and
                former Swiss Army officer Sam Goodner reveals the strategies and systems behind
                his decades of success in building and scaling multimillion-dollar companies.
              </p>
              <Link href="/authors/sam-goodner" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
