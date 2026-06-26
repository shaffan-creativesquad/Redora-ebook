import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Call I Almost Missed | Scribe Media',
  description:
    'The Call I Almost Missed by Tommy Short — a former Division I basketball referee steps away from his phone for 365 days and confronts his deepest fears about identity, success, and faith.',
}

export default function TheCallIAlmostMissedShortPage() {
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
                  src="/assets/41V1iMQGo1L._SL500_.jpg"
                  alt="The Call I Almost Missed"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Call I Almost Missed</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/tommy-short" className="bd-author-link">
                    Tommy Short
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <p className="bd-description">
                  Explore this published Scribe Media title and discover the author&apos;s
                  perspective, insights, and story.
                </p>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B0GNX3WK9Q?tag=scribemedia0a-20&linkCode=ogi&th=1&psc=1"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.86</span>
                  </a>
                  <Link
                    href="/success-stories/tommy-short-the-call-i-almost-missed-launch"
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
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/tommy-short-headshot-opt.jpg"
              alt="Tommy Short"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/tommy-short">Tommy Short</Link>
              </h2>
              <p className="bd-author-bio">
                Tommy Short is a former Division I Men&apos;s College Basketball Referee turned
                speaker, coach, and writer focused on helping high-performing leaders reclaim
                clarity in a distracted world. For nearly two decades, he officiated elite-level
                games, including Olympic training camps and nationally televised matchups, where
                pressure, presence, and poise were non-negotiable. But stepping away from his phone
                for 365 days became his most courageous decision yet. During that year, Tommy
                confronted his deepest fears about identity, success, and faith. His story and
                speaking have resonated with executives, athletes, and parents alike, praised for
                their raw honesty and life-changing insights. He lives in Indiana with his wife and
                two young daughters, his greatest teachers in the art of presence.
              </p>
              <Link href="/authors/tommy-short" className="bd-author-link">
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
              href="/author-hour/episode/tommy-short-on-what-happens-when-you-go-365-days-without-a-cell-phone"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                Tommy Short on What Happens When You Go 365 Days Without a Cell Phone
              </p>
              <p className="book-ah__card-meta">April 24, 2026 · 00:37:08</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

        {/* ── Related books ── */}
        <div className="bd-related">
          <div className="bd-divider"></div>
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Tommy Short</h2>
          <div className="bd-related-grid">
            <Link href="/published-books/the-call-i-almost-missed" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/tommy-short-cover-opt.jpg"
                alt="The Call I Almost Missed"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Call I Almost Missed</div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
