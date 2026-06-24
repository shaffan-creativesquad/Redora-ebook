import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'A Journey Without a Map | Scribe Media',
  description:
    'A Journey Without a Map by John Sardella — a powerful memoir about grief, connection, and moving forward after losing his wife Margaret to cancer.',
}

export default function AJourneyWithoutAMapPage() {
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
                  src="/assets/A-Journey-without-a-map.jpg"
                  alt="A Journey Without a Map"
                  width={300}
                  height={450}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">A Journey Without a Map</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/john-sardella" className="bd-author-link">
                    John Sardella
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="star-empty">☆</span></span>
                  <span className="bd-rating-text">4.1 · 109 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Cancer
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    After twenty-seven years of marriage, John Sardella lost the love of his life
                    when his wife, Margaret, passed away following a seven-year battle with cancer.
                    John looked for a book that would give him space for his pain and inspire him to
                    move forward, but all he found were clinical books written by psychologists. That
                    was John&apos;s motivation to write this book and share how he worked through the
                    grieving process in the hopes of reminding others not only that they are not
                    alone, but also that they will be okay.
                  </p>
                  <p>
                    <em>A Journey Without a Map</em> gives you permission to not only feel those
                    real and true feelings you have, but also permission to move forward. Sharing
                    stories that span from Margaret&apos;s battle with cancer to her funeral and
                    John&apos;s life since, John demonstrates the power of connection and shows that
                    with the proper perspective, you can still live life to its fullest extent. You
                    can get back to being the person you&apos;re capable of being&mdash;John wants
                    to help you get there.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Psychology and Counseling</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1544507534?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
                  </a>
                  <Link
                    href="/success-stories/john-sardella-a-journey-without-a-map"
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
              src="/assets/A-Journey-without-a-map.jpg"
              alt="John Sardella"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/john-sardella">John Sardella</Link>
              </h2>
              <p className="bd-author-bio">
                After twenty-seven years of marriage, John Sardella lost the love of his life when
                his wife, Margaret, passed away following a seven-year battle with cancer.
              </p>
              <Link href="/authors/john-sardella" className="bd-author-link">
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
              href="/author-hour/episode/ep-420-john-sardella-episode-420"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">John Sardella: Episode 420</p>
              <p className="book-ah__card-meta">February 13, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/john-sardella-grief-purpose-and-what-a-book-does-over-decades"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                John Sardella: Grief, Purpose, and What a Book Does Over Decades
              </p>
              <p className="book-ah__card-meta">April 13, 2026 · 00:34:00</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
