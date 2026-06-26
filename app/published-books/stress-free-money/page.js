import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Stress-Free Money | Scribe Media',
  description:
    'Stress-Free Money by Chad Willardson — overcome the seven obstacles standing between you and financial freedom. Bestseller in Wealth Management.',
}

export default function StressFreeMoneyPage() {
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
                  src="/assets/Stress-Free-Money-2.jpg"
                  alt="Stress-Free Money"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Stress-Free Money</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/chad-willardson">Chad Willardson</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.7 · 171 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Wealth Management
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Every day you&apos;re bombarded by ideas that could derail your financial
                    future. Bad advice, differing expert opinions, and sales pitches are everywhere.
                    You&apos;re faced with important money decisions that could either be very costly
                    or really pay off in the long run. Whether you personally have $100,000 or $100
                    million, you feel the burden and stress of making the best moves for your future
                    despite a lot of uncertainty.
                  </p>
                  <p>
                    How do you decide what to do with your money? Where do you turn for financial
                    advice? What if you&apos;ve been misled? In <em>Stress-Free Money</em>, Chad
                    shows you how to overcome the seven obstacles standing between you and financial
                    freedom. He exposes the risks, biases, and major mistakes that keep so many
                    people from reaching their goals.
                  </p>
                  <p>
                    Financial security and peace of mind are within reach, but most of us
                    don&apos;t know where to start. The insights and stories in{' '}
                    <em>Stress-Free Money</em> will give you confidence and guidance toward a life
                    where you spend less time worrying about money and more time doing everything
                    else.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Financial Planning</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/gp/product/1544516738?pf_rd_r=FR3XKCK6GFZPRC74XP1S&pf_rd_p=edaba0ee-c2fe-4124-9f5d-b31d6b1bfbee&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$24.99</span>
                  </a>
                  <Link
                    href="/success-stories/chad-willardson-stress-free-money"
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

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/Chad_Willardson_Headshot.jpg"
              alt="Chad Willardson"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/chad-willardson">Chad Willardson</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  CHAD WILLARDSON, CRPC®, AWMA® is the president and founder of Pacific Capital, a
                  fiduciary wealth advisory firm he started in 2011 after nine years of climbing the
                  ranks as an investment advisor at Merrill Lynch. Currently, Chad also manages a
                  $350 million investment portfolio as the elected city treasurer in his community.
                  He created and trademarked The Financial Life Inspection®, a unique process to
                  remove the stress people feel about their money. He&apos;s been featured in the
                  Wall Street Journal, Forbes, Inc., U.S. News &amp; World Report, Investment News,
                  Entrepreneur, and Financial Advisor. Chad and his wife live in Southern California
                  with their five beautiful children.
                </p>
              </div>
              <Link href="/authors/chad-willardson" className="bd-author-link">
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
            <Link
              href="/author-hour/episode/ep-535-chad-willardson-stress-free-money"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Chad Willardson: Stress Free Money</p>
              <p className="book-ah__card-meta">September 14, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/ep-750-chad-willardson-episode-750"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Chad Willardson: Episode 750</p>
              <p className="book-ah__card-meta">August 26, 2021</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
