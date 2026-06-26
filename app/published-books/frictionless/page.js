import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Frictionless by Tim Kintz',
  description:
    'Frictionless by Tim Kintz — the proven path to negotiate and close deals more effectively in car sales, shifting from transactional to relational selling.',
}

export default function FrictionlessPage() {
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
                  src="/assets/Frictionless.jpg"
                  alt="Frictionless"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Frictionless</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/tim-kintz">Tim Kintz</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.7</span>
                  <span className="bd-rating-count">59 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Books</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    No matter how you entered the car business, you know the frustrations that come
                    with the job. Customers are savvier than ever, so without knowing how to
                    negotiate and close deals, you&apos;ll find yourself selling out of desperation
                    instead of inspiration. You know selling is a zero-sum game--either you sell
                    them or someone else does. You want to improve your selling skills;
                    unfortunately, available training is outdated or irrelevant. You just need
                    someone to show you the proven path to negotiate and close deals more
                    effectively so you can maximize your earning potential.
                  </p>
                  <p>Industry veteran and top sales trainer Tim Kintz is here to help.</p>
                  <p>
                    In <em>Frictionless</em>, Tim shares strategies and techniques you can use to
                    create a win-win negotiation, deliver an exceptional experience while holding
                    gross, and set up future deals. By shifting your mindset toward becoming a
                    relational salesperson--rather than a transactional one--you&apos;ll go from
                    simply surviving to succeeding in car sales. You&apos;ll make more money, enjoy
                    a higher quality of life, have happier customers, and go from having a job to a
                    full-blown career.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Training and Development</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1544506864?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon $86.00
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
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/Tim_Kintz_Headshot.jpg"
              alt="Tim Kintz"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/tim-kintz">Tim Kintz</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Tim Kintz is the author of the Amazon bestseller, Frictionless, and president of
                  The Kintz Group, the automotive industry&apos;s premier sales and management
                  training company.<br />
                  A graduate of the NADA Dealer Academy, Tim has worked in almost every position
                  in the dealership. He delivers hands-on coaching, workshops, and presentations
                  throughout the world, teaching universal sales and management strategies that
                  have proven effective in every business sector. As a strong believer in the power
                  of a great leader, Tim helps managers anticipate change, adapt to challenges, and
                  focus on the individual.
                </p>
              </div>
              <Link href="/authors/tim-kintz" className="bd-author-link">
                View full profile <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider" />
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-605-tim-kintz-fearless-leading-and-managing-unbreakable-teams"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Tim Kintz: Fearless: Leading and Managing Unbreakable Teams</p>
              <p className="book-ah__card-meta">January 11, 2021</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-426-tim-kintz-episode-426"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Tim Kintz: Episode 426</p>
              <p className="book-ah__card-meta">February 26, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
