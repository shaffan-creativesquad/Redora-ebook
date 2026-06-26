import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Navigate the Investment Jungle | Scribe Media',
  description:
    'Navigate the Investment Jungle by Douglas Stone — seven financial traps you might have fallen into without realizing it, and how to climb out and invest with more confidence.',
}

export default function NavigateTheInvestmentJunglePage() {
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
                  src="/assets/NavigateTheInvestmentJungle.jpg"
                  alt="Navigate the Investment Jungle"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Navigate the Investment Jungle</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/douglas-stone" className="bd-author-link">
                    Douglas Stone
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.9 · 21 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Investing Portfolio Management
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Are you confident you&apos;re getting the best possible financial advice? You
                    might have a few advisors, a CPA, and an estate attorney, all of whom you like,
                    but you don&apos;t talk that often or feel an emotional connection with any of
                    them. They&apos;ve never drilled down to ask about what matters to you: your
                    goals, values, relationships, or charitable interests.
                  </p>
                  <p>
                    Too many advisors today focus on products, not people, and are more concerned
                    with allocating capital than allocating risk. They build portfolios on faulty
                    assumptions that lead to bad decisions and unnecessary market exposure. To
                    protect what you&apos;ve built, you need a better approach to wealth management.
                  </p>
                  <p>
                    In <em>Navigate the Investment Jungle</em>, Douglas Stone points out seven
                    financial traps you might have fallen into without even realizing it. Douglas
                    shows how to climb out of any traps you find yourself in and equips you to
                    sidestep them in the future. Once you know the real risk, you&apos;ll invest
                    with more confidence knowing your assets are better protected.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Financial Planning</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B088WQ57Y5?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
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
              src="/assets/DouglasStone_Headshot.jpg"
              alt="Douglas Stone"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/douglas-stone">Douglas Stone</Link>
              </h2>
              <p className="bd-author-bio">
                In <em>Navigate the Investment Jungle</em>, Douglas Stone points out seven financial
                traps you might have fallen into without even realizing it.
              </p>
              <Link href="/authors/douglas-stone" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <Link
              href="/author-hour/episode/ep-462-douglas-stone-episode-462"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Douglas Stone: Episode 462</p>
              <p className="book-ah__card-meta">May 21, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

        {/* ── Related books ── */}
        <div className="bd-related">
          <div className="bd-divider"></div>
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Douglas Stone</h2>
          <div className="bd-related-grid">
            <Link href="/published-books/play-forever" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/play-forever.jpg"
                alt="Play Forever"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Play Forever</div>
            </Link>
            <Link href="/published-books/why-choose-home-birth" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/why-choose-home-birth.jpg"
                alt="Why Choose Home Birth"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Why Choose Home Birth</div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
